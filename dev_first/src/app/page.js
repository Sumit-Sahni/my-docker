"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const callHello = async () => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setMessage(alert(data.message));
    } catch (err) {
      setMessage("Error calling hello API");
    }
  };
  const callGoodbye = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/goodbye`
      );
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Error calling goodbye API");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Microservice Test</h1>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          onClick={callHello}
        >
          Call Hello API
        </button>

        <button
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
          onClick={callGoodbye}
        >
          Call Goodbye API
        </button>
      </div>

      {message && (
        <p className="mt-4 p-2 bg-gray-100 rounded-xl shadow-md">{message}</p>
      )}
    </div>
  );
}

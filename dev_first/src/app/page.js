"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const callHello = async () => {
    const url = "/api/hello"; // exact URL path
    try {
      const res = await fetch(url);
      const data = await res.json();
      alert(data.message);
      setMessage(`${url} : ${data.message}`);
    } catch (err) {
      setMessage(`${url} : Error calling hello API`);
    }
  };

  const callGoodbye = async () => {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5001";
    const url = `${apiBase}/api/goodbye`; // exact URL path
    try {
      const res = await fetch(url);
      const data = await res.json();
      alert(data.message);

      setMessage(`${url} : ${data.message}`);
    } catch (err) {
      setMessage(`${url} : Error calling goodbye API`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Microservice Test</h1>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 cursor-pointer"
          onClick={callHello}
        >
          Call Hello API
        </button>

        <button
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 cursor-pointer"
          onClick={callGoodbye}
        >
          Call Goodbye API
        </button>
      </div>

      {/* Display the API URL and response in the H1 */}
      <h1 className="mt-6 text-xl font-semibold break-all">{message}</h1>
    </div>
  );
}

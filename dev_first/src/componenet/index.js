"use client";

export default function Index() {
  async function fetchData() {
    const res = await fetch('/api/hello');
    const data = await res.json();
    alert(`Message from API: ${data.message}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from Next.js 🚀</h1>
      <h1>This line i am updating because I've successfully implemented Devops/Ci/Cd pipeline</h1>
      <button className=" cursor-pointer" onClick={fetchData}>Call API</button>
    </div>
  );
}

// src/app/api/hello/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const message = "Hello from the Hello API!";
    return NextResponse.json({ message });
  } catch (err) {
    return NextResponse.json({ message: "Error fetching hello message" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ metodo: "GET" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ metodo: "POST", dados: body });
}

export async function PUT(request:Request) {
    const body = await request.json()
    return NextResponse.json({metodo:"PUT",dados:body})
}


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return NextResponse.json({
    message: "/v1/blog/id is working fine",
    id,
  });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const article = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
  });
  if (!article) {
    return NextResponse.json({
      message: "could not found post",
    });
  }
  return NextResponse.json({
    article,
  });
}

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { getToken } from "next-auth/jwt";
import { prisma } from "../../../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  const post = await prisma.post.findMany({});
  return NextResponse.json({
    post,
  });
}

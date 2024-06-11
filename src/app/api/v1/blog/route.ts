import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function POST(req: NextRequest) {
  const request = await req.json();

  console.log("body", request);
  // const prisma = new PrismaClient({
  //   datasourceUrl: process.env.DATABASE_URL,
  // }).$extends(withAccelerate());

  const post = await prisma.post.create({
    data: {
      title: request.title,
      content: request.content,
      autherId: "dcdsadsadsa",
    },
  });
  return NextResponse.json({
    message: "POST request working fine",
    id: post.id,
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  // const prisma = new PrismaClient({
  //   datasourceUrl: process.env.DATABASE_URL,
  // }).$extends(withAccelerate());
  await prisma.post.update({
    where: {
      id: body.id,
      autherId: userid,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json({
    message: "PUT request working fine",
  });
}

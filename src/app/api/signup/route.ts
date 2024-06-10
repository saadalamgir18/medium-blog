import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("pass: ", body);
  const saltRounds = 10;

  const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const isExist = await prisma.user.findFirst({
    where: {
      email: body.data.email,
    },
  });
  console.log("isExist", isExist);

  if (isExist) {
    return NextResponse.json({
      message: "User already exist",
    });
  }
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(body.data.password, salt);
  const user = await prisma.user.create({
    data: {
      name: body.data.name,
      email: body.data.email,
      password: hashedPassword,
    },
  });
  console.log(user);
  if (user) {
    return NextResponse.json({
      id: user.id,
    });
  }
}

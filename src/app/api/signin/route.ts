import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

const jwtSecret = process.env.NEXTAUTH_SECRET;

export async function POST(request: NextRequest) {
  const body: User = await request.json();
  const cookie = cookies();

  console.log(body.email);
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (!user) {
    return NextResponse.json({
      status: 403,
      message: "user not found",
    });
  }
  const isPasswordCorrect = await bcrypt.compare(
    body?.password || "",
    user?.password as string
  );
  if (isPasswordCorrect) {
    const token = jwt.sign({ id: user?.id }, jwtSecret as string);
    cookie.set("token", token);

    return NextResponse.json({
      token,
    });
  } else {
    return NextResponse.json({
      status: 403,
      message: "password is incorrect",
    });
  }
}

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "../../../../prisma/prisma";
import { SignUpType } from "@/types/zodtypes";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.NEXTAUTH_SECRET;

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { success } = SignUpType.safeParse(body);
  if (!success) {
    return NextResponse.json({
      message: "input is not correct",
    });
  }
  const saltRounds = 10;

  const isExist = await prisma.user.findUnique({
    where: {
      email: body.data.email,
    },
  });
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
  if (user) {
    const token = await jwt.sign({ id: user.id }, jwtSecret as string);
    return NextResponse.json({
      token,
    });
  } else {
    return NextResponse.json({
      message: "There is some error please try again latter ",
    });
  }
}

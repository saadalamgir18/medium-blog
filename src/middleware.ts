import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.NEXTAUTH_SECRET;

export default async function middleware(request: NextRequest) {
  console.log("in middle ware");
  const cookie = cookies();
  let token = cookie.get("token")?.value;
  console.log("token in cookies", token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/"],
};

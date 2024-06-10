import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
// export { default } from "next-auth/middleware";
export default withAuth(async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log("token: ", token);
  const url = request.nextUrl;

  if (
    token
    // && (url.pathname.startsWith("/sign-in") || url.pathname.startsWith("/sign-up"))
  ) {
    console.log(url);
    // return NextResponse.redirect(new URL("/sign-in", request.url));
  }
});
export const config = {
  matcher: ["/"],
};

import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {

    if (req.nextUrl.pathname.startsWith("/admin") && (req.nextauth.token as any)?.userInfo.userRole.name !== "Admin")
      return NextResponse.rewrite(
        new URL("/404", req.url) //Not admin redirect to 404
      );
  },
  {
    secret: process.env.JWT_SECRET, // Thêm secret vào đây
    callbacks: {
      authorized: ({ token }) => !!token, //Redirect to login if user session is unavailable
    },
  }
);

//Access /admin/** and /account/** path required login
export const config = {
  matcher: [
    // "/admin/:path*",
    // "/account/:path*",
  ],
};
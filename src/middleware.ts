import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const NEXTAUTH_SECRET = `${process.env.NEXTAUTH_SECRET}`;

export async function middleware(req: NextRequest) {
  console.log("==== NEXTAUTH_SECRET ====");
  console.log(NEXTAUTH_SECRET);
  const token = await getToken({ req, secret: NEXTAUTH_SECRET });
  console.log("==== TOKEN ====");
  console.log(token);
  if (!token) {
    return NextResponse.redirect(
      new URL("http://localhost:3000/i/flow/login", req.url),
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// 로그인을 해야 접근할 수 있는 페이지들
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};

import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
// 로그인을 해야 접근할 수 있는 페이지들
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};

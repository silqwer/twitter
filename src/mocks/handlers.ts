import { HttpResponse, http } from "msw";

export const handlers = [
  http.post("/post/login", () => {
    console.log("로그인");
    return HttpResponse.json({
      data: { id: "zerohch0", nickname: "제로초", image: "/5Udwvqim.jpg" },
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  http.get("/post/logout", () => {
    console.log("로그아웃");
    return HttpResponse.json({
      data: null,
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
];
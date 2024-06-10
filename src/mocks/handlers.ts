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

  http.post("/api/users", async ({ request }) => {
    console.log("회원가입");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
];

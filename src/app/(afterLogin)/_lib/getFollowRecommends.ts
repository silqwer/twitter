export async function getFollowRecommends() {
  const res = await fetch(`http://localhost:9090/api/followRecommends`, {
    next: {
      tags: ["users", "followRecommends"],
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("서버 에러");
  }

  return res.json();
}

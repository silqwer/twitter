export async function getTrends() {
  const res = await fetch(`http://localhost:9090/api/trends`, {
    next: {
      tags: ["trends"],
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("서버 에러");
  }

  return res.json();
}

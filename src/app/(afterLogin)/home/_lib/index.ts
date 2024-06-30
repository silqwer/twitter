type Props = {
  pageParam?: number;
};

export async function getPostRecommends({ pageParam }: Props) {
  const res = await fetch(
    `http://localhost:9090/api/postRecommends?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error("서버 에러");
  }

  return res.json();
}

export async function getFollowingPosts() {
  const res = await fetch("http://localhost:9090/api/followingPosts", {
    next: {
      tags: ["posts", "recommends"],
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("서버 에러");
  }

  return res.json();
}

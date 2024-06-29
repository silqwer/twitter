"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib";
import type { Post as PostType } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  return data?.map((post: PostType) => <Post key={post.postId} post={post} />);
}

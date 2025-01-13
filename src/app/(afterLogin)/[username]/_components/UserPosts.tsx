import React from "react";
import { Post as PostItem } from "@/types/Post";
type Props = {
  username: string;
};
import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/Post";

export default function UserPosts({ username }: Props) {
  const { data: posts } = useQuery<
    PostItem[],
    object,
    PostItem[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "user", username],
    queryFn: getUserPosts,
    staleTime: 1000 * 60,
    gcTime: 1000 * 300,
  });
  return posts?.map((post) => <Post key={post.postId} post={post} />);
}

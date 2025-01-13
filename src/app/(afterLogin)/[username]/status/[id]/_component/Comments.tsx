"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  id: string;
};
export default function Comments({ id }: Props) {
  const { data } = useQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });

  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);
  if (post) {
    return data?.map((post) => <Post post={post} key={post.postId} />);
  }

  return null;
}

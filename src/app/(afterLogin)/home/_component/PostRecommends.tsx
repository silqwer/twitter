"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib";
import type { Post as PostItem } from "@/types/Post";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { Fragment } from "react";

export default function PostRecommends() {
  const { data } = useInfiniteQuery<
    PostItem[],
    object,
    InfiniteData<PostItem[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
    </>
  );
}

"use client";

import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import style from "./photoModal.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { Post as PostItem } from "@/types/Post";

type Props = {
  id: string;
};

export default function ImageZone({ id }: Props) {
  const { data: post, error } = useQuery<
    PostItem,
    object,
    PostItem,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 1000 * 60,
    gcTime: 1000 * 300,
  });

  if (error) {
    return null;
  }

  if (!post?.images[0]) {
    return null;
  }

  return (
    <div className={style.imageZone}>
      <img src={post.images[0].link} alt={post.images[0].Post?.content} />
      <div
        className={style.image}
        style={{ backgroundImage: `url(${post.images[0].link})` }}
      />
      <div className={style.buttonZone}>
        <div className={style.buttonInner}>
          <ActionButtons white />
        </div>
      </div>
    </div>
  );
}

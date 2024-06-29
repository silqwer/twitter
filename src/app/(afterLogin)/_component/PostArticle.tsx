"use client";

import { Post } from "@/types/Post";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from "./post.module.css";

type Props = {
  children: ReactNode;
  post: Post;
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.user.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}

"use client";

import style from "@/app/(afterLogin)/_component/post.module.css";
import { Post } from "@/types/Post";
import cx from "classnames";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostImages({ post }: Props) {
  if (!post.images) return null;
  if (!post.images.length) return null;
  if (post.images.length === 1) {
    return (
      <Link
        href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
        className={cx(style.postImageSection, style.oneImage)}
        style={{
          backgroundImage: `url(${post.images[0]?.link})`,
          backgroundSize: "contain",
        }}
      >
        <img src={post.images[0]?.link} alt="" />
      </Link>
    );
  }
  if (post.images.length === 2) {
    return (
      <div className={cx(style.postImageSection, style.twoImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  if (post.images.length === 3) {
    return (
      <div className={cx(style.postImageSection, style.threeImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <div>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.images[1]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.images[2]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
        </div>
      </div>
    );
  }
  if (post.images.length === 4) {
    return (
      <div className={cx(style.postImageSection, style.fourImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.images[2]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.images[3]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  return null;
}

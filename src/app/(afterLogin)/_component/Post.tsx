import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import type { Post } from "@/types/Post";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import style from "./post.module.css";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: Post;
};
export default function Post({ noImage, post }: Props) {
  const { user, content, createdAt, images } = post;

  if (Math.random() > 0.5 && !noImage) {
    images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() },
    );
  }

  return (
    <PostArticle post={post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${user.id}`} className={style.postUserImage}>
            <img src={user.image} alt={user.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${user.id}`}>
              <span className={style.postUserName}>{user.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{user.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(createdAt).fromNow(true)}
            </span>
          </div>
          <div>{content}</div>
          <div>
            <PostImages post={post} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}

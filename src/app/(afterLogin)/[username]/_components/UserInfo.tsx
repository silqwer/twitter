"use client";

import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/User";
import { getUser } from "../_lib/getUser";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const { data: user, error } = useQuery<
    User,
    object,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ["user", username],
    queryFn: getUser,
    staleTime: 1000 * 60,
    gcTime: 1000 * 300,
  });

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>프로필</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}></div>
          <div className={style.userName}>
            <div>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 31,
            fontWeight: "bold",
            display: "flex",
          }}
        >
          계정이 존재하지 않음
        </div>
      </>
    );
  }

  if (!user) return null;
  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}

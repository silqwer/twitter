/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import style from "./logoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  // useSession()은 세션 정보를 가져오는 클라이언트 hook이다.
  const { data } = useSession();

  const router = useRouter();
  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!data) {
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img
          src={data.user?.image as string}
          alt={data.user?.name || "프로필 이미지"}
        />
      </div>
      <div className={style.logOutUserName}>
        <div>{data.user?.name}</div>
        {/* <div>@{data.user?.id}</div> */}
      </div>
    </button>
  );
}

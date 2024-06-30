"use client";

import { TabContext } from "@/app/(afterLogin)/home/_component/TabProvider";
import { useContext } from "react";
import style from "./tab.module.css";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <button onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </button>
        <button onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </button>
      </div>
    </div>
  );
}

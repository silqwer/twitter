"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import { Hashtag } from "@/types/Hashtag";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import style from "./trendSection.module.css";

export default function TrendSection() {
  const session = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.data?.user,
  });

  const pathname = usePathname();

  if (pathname === "/explore") {
    return null;
  }

  if (session.data?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트랜드를 가져올 수 없습니다.</div>
    </div>
  );
}

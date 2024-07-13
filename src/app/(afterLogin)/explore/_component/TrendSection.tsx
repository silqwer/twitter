"use client";

import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/types/Hashtag";

export default function Trend() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}

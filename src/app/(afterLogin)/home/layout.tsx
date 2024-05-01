import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <div>홈레이아웃 {children}</div>;
}

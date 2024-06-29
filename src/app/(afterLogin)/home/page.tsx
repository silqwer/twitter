import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import { QueryClient } from "@tanstack/react-query";
import Post from "../_component/Post";
import style from "./home.module.css";

async function getPostRecommends() {
  const res = await fetch("http://localhost:9090/api/postRecommends", {
    next: {
      tags: ["posts", "recommends"],
    },
  });

  if (!res.ok) {
    throw new Error("서버 에러");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}

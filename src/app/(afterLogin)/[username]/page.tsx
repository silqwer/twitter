import style from "./profile.module.css";
import { getUserPosts } from "./_lib/getUserPosts";
import { getUser } from "./_lib/getUser";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import UserPosts from "./_components/UserPosts";
import UserInfo from "./_components/UserInfo";
type Props = {
  params: {
    username: string;
  };
};

export default async function Profile({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "user", username],
    queryFn: getUserPosts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}

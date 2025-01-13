import { Post as PostItem } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  username: string;
};

export default function UserPosts({ username }: Props) {
  const { data: posts } = useQuery<
    PostItem[],
    object,
    PostItem[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "user", username],
    queryFn: getUserPosts,
    staleTime: 1000 * 60,
    gcTime: 1000 * 300,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user", username]);

  if (user) {
    return posts?.map((post) => <Post key={post.postId} post={post} />);
  }

  return null;
}

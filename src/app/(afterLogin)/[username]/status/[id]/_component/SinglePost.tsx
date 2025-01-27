import { Post as PostItem } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
type Props = {
  id: string;
  noImage?: boolean;
};

export default function SingPosts({ id, noImage }: Props) {
  const { data: post, error } = useQuery<
    PostItem,
    Error,
    PostItem,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 1000 * 60,
    gcTime: 1000 * 300,
  });

  if (error) {
    return (
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
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return <Post post={post} noImage={noImage} />;
}

import { PostImage } from "@/types/PostImage";
import { User } from "./User";

export type Post = {
  postId: number;
  user: User;
  content: string;
  createdAt: Date;
  images: PostImage[];
};

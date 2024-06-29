import { Post } from "./Post";

export type PostImage = {
  link: string;
  imageId: number;
  post?: Post;
};

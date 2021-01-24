import { atom } from "recoil";

export const PostsAtom = atom({
  key: "POSTS",
  default: []
});

export const PostAtom = atom({
  key: "POST",
  default: {}
});

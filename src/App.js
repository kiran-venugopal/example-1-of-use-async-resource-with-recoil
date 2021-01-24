import React, { Suspense } from "react";
import "./style.css";
import Posts from "./components/Posts";
import useAsyncResourceWithRecoil from "use-async-resource-with-recoil";
import { PostsAtom } from "./recoilAtoms.js";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = res.json();
  return posts;
};

export default function App() {
  const { dataReader: postsReader } = useAsyncResourceWithRecoil(
    fetchPosts,
    [],
    PostsAtom
  );

  return (
    <>
      <h3>Posts</h3>
      <Suspense fallback="Loading posts..">
        <Posts postsReader={postsReader} />
      </Suspense>
    </>
  );
}

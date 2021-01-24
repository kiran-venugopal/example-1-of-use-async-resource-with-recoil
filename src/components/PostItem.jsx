import React from "react";
//https://jsonplaceholder.typicode.com/comments?postId
import { PostAtom } from "../recoilAtoms.js";
import useAsyncResourceWithRecoil from "use-async-resource-with-recoil";
import Comment from "./Comments";

const fetchComment = async postId => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const post = res.json();
  return post;
};

export default function Posts({ post }) {
  const { dataReader, fetchAgain } = useAsyncResourceWithRecoil(
    fetchComment,
    [],
    PostAtom,
    true
  );
  const [isCommentOpen, setCommentOpen] = React.useState(false);

  return (
    <div
      className="post-item"
      onClick={() => {
        setCommentOpen(prev => !prev);
        fetchAgain(post.id);
      }}
    >
      {post.title}
      {isCommentOpen && (
        <div className="comments">
          <React.Suspense fallback="Loading comments..">
            <Comment commentsReader={dataReader} />
          </React.Suspense>
        </div>
      )}
    </div>
  );
}

import React from "react";
//https://jsonplaceholder.typicode.com/comments?postId

import PostItem from "./PostItem";

export default function Posts({ postsReader }) {
  const posts = postsReader();
  return (
    <div className="posts">
      {posts.slice(0, 10).map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

import React from "react";

export default function Comments({ commentsReader }) {
  const comments = commentsReader();

  return (
    <>
      <h4>Comments ({comments.length})</h4>
      {comments.map(comment => (
        <div key={comment.id} className="comment-item">
          {comment.body}
        </div>
      ))}
    </>
  );
}

import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="col-flex post-card">
      <p className="post-time">2 days ago</p>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostCard;

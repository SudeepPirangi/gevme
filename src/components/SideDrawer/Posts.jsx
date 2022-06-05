import React, { useEffect, useState } from "react";
// import Placeholder from "rsuite/Placeholder";

import Loading from "../CommonUI/Loading";
import PostCard from "./PostCard";

const Posts = ({ user }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
      .then((data) => data.json())
      .then((posts) => {
        // console.log("User Posts", posts);
        setUserPosts([...posts]);
      })
      .catch((error) => console.log("Failed to fetch User Posts from server", error));
  }, [user]);

  return (
    <div className="post-section">
      <h2>Posts</h2>
      <div className="row-flex" style={{ alignItems: "center" }}>
        <div className="dummy-dp">{user && user.name.split(" ").map((name) => name.charAt(0).toUpperCase())}</div>
        <div className="name">{user.name}</div>
      </div>
      <div className="all-posts" style={{ marginTop: "10px" }}>
        {userPosts.length ? userPosts.map((post) => <PostCard key={post.id} post={post} />) : <Loading />}
      </div>
    </div>
  );
};

export default Posts;

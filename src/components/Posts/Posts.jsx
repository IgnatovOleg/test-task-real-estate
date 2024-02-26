import React from "react";
import "../Posts/Posts.scss"
import { useSelector } from "react-redux";

function Posts() {
  const postsInView = useSelector((state) => state.postsInView.postsInView);

  return (
    <div className="post-block">
      {postsInView.map((post) => (
        <div className="post-card" key={post.id}>
          <img src={post.img} />
          <h3>{post.price} грн</h3>
          <p>{post.disc}</p>
          <input type="button" value="Зв'язатися" />
        </div>
      ))}
    </div>
  );
}

export default Posts;

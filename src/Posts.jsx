import React from "react";
import { useParams } from "react-router-dom";

function Posts() {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { p } = useParams();

  const post = posts.find((post) => post === Number(p));
  console.log(p);
  if (!post) {
    return <p>Error Page</p>;
  }
  return (
    <div>
      <h1>Post{p}</h1>
    </div>
  );
}

export default Posts;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  // const [showPosts, setShwoPosts] = useState([]);

  const apiEndPoint = "https://63ad0cd534c46cd7ae8f44d5.mockapi.io/blog";

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPoint);
      setPosts(response.data);
      // console.log(response.data);
    };
    getPosts();
  });

  const { id } = useParams();

  // Error handling
  /*   const post = posts.find((post) => post === Number(id));
  console.log(id);
  if (!post) {
    return <p>Error Page</p>;
  } */

  return (
    <div>
      {posts.map((post) => {
        return post.id === id ? (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <h6>By {post.writerName}</h6>
            <h6>{post.createdAt}</h6>
          </div>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
}

export default Posts;

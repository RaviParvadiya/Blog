import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* import moment from 'moment';

function FormattedDate({ dateString }) {
  const date = moment(dateString);
  return <p>{date.format("MMM Do YY")}</p>;
} */

function Posts() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  // const [showPosts, setShwoPosts] = useState([]);

  const apiEndPoint = "https://63ad0cd534c46cd7ae8f44d5.mockapi.io/blog";

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPoint);
      setPosts(response.data.filter((post) => post.id === id));
      // console.log(response.data);
    };
    getPosts();
  });

  // Error handling
  /*   const p = posts.filter((post) => {return post.id !== id});
  if (!p) {
    return <p>Error Page</p>;
  } */

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <h6>By {post.writerName}</h6>
            <h6>{post.createdAt}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;

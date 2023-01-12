import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  const apiEndPoint = "https://63ad0cd534c46cd7ae8f44d5.mockapi.io/blog";

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPoint);
      setPosts(response.data);
      // console.log(response.data);
    };
    getPosts();
  })

  const Navigate = useNavigate();

  const handleView = (id) => {
    Navigate(`/blog/${id}`);
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map((p) => {
          return (
            <div key={p.id}>
              <h3>{p.title}</h3>
              <h6>By {p.writerName}</h6>
              <button onClick={() => handleView(p.id)}>View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import "./blog.css";

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
  });

  const Navigate = useNavigate();

  const handleView = (id) => {
    Navigate(`/blog/${id}`);
  };

  return (
    <div>
      <Typography variant="h4">Blog</Typography>
      <div className="post-grid-container">
        {posts.map((p) => {
          return (
            <Grid container spacing={2} minHeight={160}>
              <Grid item xs={12} sm={9} key={p.id}>
                <div>
                  <Typography variant="h4">{p.title}</Typography>
                  <Typography variant="subtitle2">By {p.writerName}</Typography>
                  <Button
                    type="view"
                    variant="contained"
                    onClick={() => handleView(p.id)}
                  >
                    View
                  </Button>
                </div>
              </Grid>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;

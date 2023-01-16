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
  }, []);

  const Navigate = useNavigate();

  const handleView = (id) => {
    Navigate(`/blog/${id}`);
  };

  return (
    <div>
      <Typography variant="h4">Blog</Typography>
      <div className="post-grid-container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "minmax(100px, auto)"
          }}
        >
          {posts.map((p) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={p.id}>
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
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Blog;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";
// import "./blog.css";

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
        <Grid container spacing={3}>
          {posts.map((p) => {
            return (
              <Grid item lg={4} xs={12} sm={8} md={8} key={p.id} container>
                <Container fixed>
                  <Paper elevation={10}>
                    <Box p={2}>
                      <CardContent>
                        <Typography variant="h4">{p.title}</Typography>
                        <Typography variant="subtitle2">
                          By {p.writerName}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          type="view"
                          variant="contained"
                          onClick={() => handleView(p.id)}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Box>
                  </Paper>
                </Container>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Blog;

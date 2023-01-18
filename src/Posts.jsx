import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { Card, Box, Stack, Grid, Paper, CardContent } from "@mui/material";

/* import moment from 'moment';

function FormattedDate({ dateString }) {
  const date = moment(dateString);
  return <p>{date.format("MMM Do YY")}</p>;
} */

function FormattedDate({ dateString }) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString();
  return <p>Date: {formattedDate}</p>;
}

function Posts() {
  const [post, setPost] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const apiEndPoint = "https://63ad0cd534c46cd7ae8f44d5.mockapi.io/blog/";

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const response = await axios.get(apiEndPoint + id);
      setPost(response.data);
      setLoading(false);
    };
    getPosts();
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <CardContent>
      <Grid container>
        <Grid item lg={12} xs={12} sm={8} md={8}>
          <Paper elevation={8}>
            <Box p={2}>
              <Stack spacing={0.5}>
                <div>
                  <div>
                    <h1>{post.title}</h1>
                    <h2>{post.description}</h2>
                    <h5>By {post.writerName}</h5>
                    <FormattedDate dateString={post.createdAt} />
                    {/* <h6>{post.createdAt}</h6> */}
                  </div>
                </div>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </CardContent>
  );
}

export default Posts;

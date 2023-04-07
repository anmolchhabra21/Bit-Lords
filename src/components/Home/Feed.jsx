
import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from '../StudentDashBoard'

const Feed = () => {
  return (
    <>
    <Profile/>
    <Box flex={4} p={2}>
      <Post/>
      <Post/>
      <Post/>
    </Box>
    </>
  );
};

export default Feed;

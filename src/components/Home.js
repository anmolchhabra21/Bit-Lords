import React from "react";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
  <Box>
    <Grid container >
        <Grid sx={3}>
            <h1>Rightbar</h1>
        </Grid>
        <Grid sx={9}>
            <Grid container >
                <h1>Navbar</h1>
            </Grid>
        </Grid>
    </Grid>
  </Box>
  )
};

export default Home;

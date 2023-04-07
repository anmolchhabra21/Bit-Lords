import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Button, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e7ebf0",
  padding: "4rem",
  margin: "2rem",
  textAlign: "center",
  justifyContent: "center"
}));

const StudentProfile = () => {
  return (
    <Box height="100vh" width="100%" p={2}>
      <Typography variant="h3"> Hi Bhai!! </Typography>
      <Grid container justifyContent>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} alignItems="center">
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
      <div style={{width:"90%", margin:"auto",backgroundColor : "#e7ebf0", padding:"1rem", borderRadius:"10px"}}>
      <AppBar sx={{borderRadius:"10px", margin:"1.5rem 0", color:"black", backgroundColor:"white"}} position="static">
        <Toolbar >
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
          <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            <Typography>small news</Typography>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <AppBar sx={{borderRadius:"10px", margin:"1.5rem 0", color:"black", backgroundColor:"white"}} position="static">
        <Toolbar >
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
          <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            <Typography>small news</Typography>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
    {/* </Box> */}
      </div>
    </Box>
  );
};

export default StudentProfile;

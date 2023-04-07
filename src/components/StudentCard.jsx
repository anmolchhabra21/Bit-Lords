import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const StudentCard = (props) => {
  return (
    <AppBar sx={{borderRadius:"10px", margin:"1.5rem 0", color:"black", backgroundColor:"white"}} position="static">
        <Toolbar >
        <Avatar alt="Remy Sharp" src={props.imageURL} />
          <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.companyName}
            <Typography>Domain : {props.domain} | CTC : {props.salary}</Typography>
          </Typography>
          <Button color="inherit">Apply</Button>
        </Toolbar>
      </AppBar>
  )
}

export default StudentCard
import React, {useEffect, useState} from "react";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import {
  AccountBox,
  Dashboard,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Shop,
  Notifications,
  Logout,
  AddCircle,
  Download

} from "@mui/icons-material";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(!user.email.includes("@iitism.ac.in")){
          setIsStudent(false);
        }
      }
    });
  
    
  }, [])
  
  return (
    // <Box color="white" bgcolor="#2e323b" p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box color="white" bgcolor="#2e323b" p={3} sx={{ minWidth:"190px" , display: { xs: "none", sm: "block" } }}> 
      {/* <Box sx={{ position: "fixed" }}> */}
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h5" sx={{ color:"#4ba2b6"}}>Placement Cell</Typography>
        <List>
          {isStudent ? 
          <>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/student")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/student/profile")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/student/notification")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/student")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem> */}
          </>
          :
          <>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/company")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/company/newjob")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <AddCircle />
              </ListItemIcon>
              <ListItemText primary="Add new Job" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/company/table")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Download />
              </ListItemIcon>
              <ListItemText primary="Download Excel" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={()=>{navigate("/company/notification")}}>
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Send Notification" />
            </ListItemButton>
          </ListItem>
          </>
          }
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

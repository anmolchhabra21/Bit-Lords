import React from "react";
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
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Shop,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    // <Box color="white" bgcolor="#2e323b" p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box color="white" bgcolor="#2e323b" p={3} sx={{ minWidth:"200px" , display: { xs: "none", sm: "block" } }}> 
      {/* <Box sx={{ position: "fixed" }}> */}
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h4" sx={{textAlign:"center", color:"#4ba2b6"}}>Recutes</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon style={{color: "#4ba2b6"}}>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

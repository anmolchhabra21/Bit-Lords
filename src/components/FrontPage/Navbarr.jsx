import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Button,
  Drawer,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "17px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  // const NavbarLinksBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   gap: theme.spacing(5),
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    // marhin: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
      hight: "2px",
      width: "2px"
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} alt="logo" />
          <h3>IIT(ISM) DHANBAD</h3>
        </Box>
       
        {/* <NavbarLinksBox>
          <NavLink variant="body2">Student</NavLink>
          <NavLink variant="body2">Recruter</NavLink>
          <NavLink variant="body2">SCPT</NavLink>
        </NavbarLinksBox> */}
          {/* <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Student"
        />
          <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Recruter"
        />
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="SCPT"
        /> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">Log In</NavLink>
        {/* <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        /> */}
        <Button onClick={()=>{console.log("running1")}} backgroundColor="#0F1B4C"
           variant="contained">Students</Button>
        <Button onClick={()=>{console.log("running2")}} backgroundColor="#0F1B4C"
           variant="contained">Recruter</Button>
        <Button onClick={()=>{console.log("running3")}} backgroundColor="#0F1B4C"
           variant="contained">SCPT</Button>
                {/* <CustomButton
          onClick={()=>console.log("Hello")}
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Students"
        />
                <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Recruter"
        />
                <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="SCPT"
        /> */}

      </Box>
    </NavbarContainer>
  );
};

export default Navbar;

import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import { Mail, Notifications } from "@mui/icons-material";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

// const styledToolbar = styled(Toolbar)({
//   display:"flex",
//   justifyContent: "space-between",
// });
const user = auth.currentUser;
let isStudent = false;

// Check Whether the logged in person is Student or Not

const sOut = () => {
  signOut(auth)
    .then(() => {
      // Signed Out
    })
    .catch((error) => {
      // An error happened.
    });
};

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "7px",
  width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Name, setName] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setName(user.displayName);
        if (user.email.includes(`@iitism.ac.in`)) {
          setIsStudent(true);
        } else {
          setIsStudent(false);
        }
        // ...
      } else {
        // User is signed out
        navigate("/");
      }
    });
  }, []);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties

  //     const uid = user.uid;
  //     setName(user.displayName);
  //     // ...
  //   } else {
  //     navigate('/signin')
  //   }
  // });

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CDC IIT(ISM) Portal
        </Typography>
        <SnippetFolderIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          {/* <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge> */}
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {Name}
          </Typography>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://picsum.photos/200/300"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/200/300"
          />
          <Typography variant="span">Anmol</Typography>
        </UserBox>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {isStudent ? (
          <Link to={"/student/profile"}>
            {" "}
            <MenuItem> Profile</MenuItem>{" "}
          </Link>
        ) : null}
        {/* <MenuItem>My account</MenuItem> */}
        <MenuItem onClick={sOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

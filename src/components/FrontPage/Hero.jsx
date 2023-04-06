import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbarr";
import ReactTypical from "./ReactTypical";

import heroImg from "../media/hero_illustration.png";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to IIT(ISM)Dhanbad
            </Typography>
            
            <Title variant="h1">
            <ReactTypical />
            </Title>

            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Welcome to the recruitment website For IIT (ISM) Dhanbad. IIT is
              India's foremost industrial leadership development institution.
              Our Graduates are a combination of rigorous thinking, hardwork and
              fundamental stronghold. They are nurtured by the institute to
              strive for excellence and deliver impact in their field of work.
              Let us begin...
            </Typography>
            {/* <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            /> */}
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;

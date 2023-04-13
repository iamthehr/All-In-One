import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const About = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#000336",
    marginTop: "30px",
    height: "30vh",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",

      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 1),

    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "95%",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
          >
            About us
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Allisone is a healthcare Idea coined by Aditya, Mohit, Harsh, and
            Arvindh. As a team, we are passionate about making it easy for
            people to find reliable and experienced doctors in their area. With
            our user-friendly platform, we aim to help patients make informed
            decisions about their healthcare and get the care they need, when
            they need it.
          </Typography>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default About;

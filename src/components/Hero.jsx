import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import CustomButton from "./CustomButton";
import heroImg2 from "../media/heroImg.png";
import Image from "next/image";
import Aos from "aos";
import "Aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

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
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
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
              Welcome to Allisone
            </Typography>
            <Title variant="h1">
              Discover a place where you'll find everthing.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              many web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
            <Box data-aos="fade-right">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Get started"
                heroBtn={true}
              />
            </Box>
          </Box>

          <Box sx={{ flex: "1.25" }} data-aos="fade-left">
            <Image
              src={heroImg2}
              alt="heroImg"
              style={{
                maxWidth: "100%",

                height: "100%",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;

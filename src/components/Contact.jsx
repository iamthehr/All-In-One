import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Contact = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#000336",
    marginTop: "30px",
    height: "30vh",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    WebkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",

      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box
          sx={{
            lg: {
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 3px )",
              WebkitFbackdropFilter: " blur( 3px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              padding: "10px",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
          >
            Contact us
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            we are a team of programmers from nit jamshedpur. we are here to
            build a new platform for the the users to get their Appointments and
            test done without worrying about the crowd and waiting time.
          </Typography>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default Contact;

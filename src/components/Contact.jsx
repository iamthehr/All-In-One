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
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
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

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomButton from "@/components/CustomButton";
import { Box, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

function Hospital() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"500px"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"2rem"}
          marginBottom={"3rem"}
        >
          <Typography variant="h3">Welcome!</Typography>
          <Typography variant="h5">What do you want to do?</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"1.5rem"}
        >
          <Link href="/Schedule" style={{ textDecoration: "none" }}>
            {" "}
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Schedule Doctors"
            />
          </Link>
          <Link href="/AddDoctor" style={{ textDecoration: "none" }}>
            {" "}
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Add Doctors"
            />
          </Link>
          <Link href="/AddTest" style={{ textDecoration: "none" }}>
            {" "}
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Add Test"
            />
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Hospital;

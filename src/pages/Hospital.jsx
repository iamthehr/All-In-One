import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";
import Nav3 from "@/components/Nav3";

import AdminSec1 from "@/components/AdminSec1";
import AdminSec2 from "@/components/AdminSec2";
import AdminSec3 from "@/components/AdminSec3";
import { Nav3 } from "@/components/Nav3";
import AdminSec4 from "@/components/AdminSec4";

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

function Hospital() {
  return (
    <ThemeProvider theme={theme}>
      <Nav3 />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h1">{`Welcome ${i}`}</Typography>
      </Box>
      <AdminSec1 />
      <AdminSec2 />
      <AdminSec4 />
      <AdminSec3 />
      {/* <Box
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
      </Box> */}
    </ThemeProvider>
  );
}

export default Hospital;

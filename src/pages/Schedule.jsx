import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import DoctorCard from "@/components/DoctorCard";

const Schedule = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Doctor"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box width={"30%"}>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </Box>
    </Box>
  );
};

export default Schedule;

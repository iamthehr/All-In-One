import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const DoctorCard = ({ name, qual, spec, handleOpen }) => {
  return (
    <Box
      //   onClick={handleFunction}
      cursor="pointer"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      style={{
        backgroundColor: "#E8E8E8",
      }}
      width="100%"
      display={"flex"}
      alignItems={"center"}
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius={"2px"}
      onClick={handleOpen}
    >
      <Avatar
        // marginRight
        style={{
          marginRight: "0.6rem",
        }}
        size="sm"
        cursor={"pointer"}
        name="Dr.Batra"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
      />
      <Box>
        <Typography>{name}</Typography>
        <Typography fontSize="xs">
          <b>{spec}</b>
        </Typography>
        <Typography fontSize="xs">{qual}</Typography>
      </Box>
    </Box>
  );
};

export default DoctorCard;

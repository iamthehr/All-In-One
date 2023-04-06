import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import BadgeIcon from "@mui/icons-material/Badge";

const DocardsNew = ({
  name,
  qual,
  spec,
  handleOpen,
  distance,
  Hospital_Name,
  Adress,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#eeeeee",
        }}
      >
        <Box
          //   onClick={handleFunction}

          style={{
            backgroundColor: "#eeeeee",
            borderRadius: "10px",
          }}
          display={"flex"}
          alignItems={"center"}
          color="black"
          px={3}
          py={2}
          mb={6}
          mr={2}
          borderRadius={"0.5px"}
          onClick={handleOpen}
        >
          <Avatar
            style={{
              marginRight: "1rem",
            }}
            size="md"
            cursor={"pointer"}
            name="Dr.Batra"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />

          <Box sx={{ overflowWrap: "break-word", wordBreak: "break-all" }}>
            <Typography sx={{ display: "flex" }}>Name:{name}</Typography>
            <Typography fontSize="xs">
              <b>{spec}</b>
            </Typography>
            <Typography fontSize="xs">{qual}</Typography>
            <Typography fontSize="xs">{Hospital_Name}</Typography>
            <Typography fontSize="md">{Adress}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <SafetyDividerIcon />
            <typography>{distance}</typography>
          </Box>
        </Box>
        <Button variant="contained" fullWidth sx={{ bgcolor: "#000336" }}>
          Consult
        </Button>
      </Box>
    </>
  );
};

export default DocardsNew;

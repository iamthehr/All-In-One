import { Avatar, Box, Modal, Typography } from "@mui/material";
import React from "react";

import Cmodal from "./Cmodal";

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
          marginTop: "1rem",
          borderRadius: "20px",
          maxWidth: "540px",
          maxHeight: "285px",
        }}
      >
        <Box
          //   onClick={handleFunction}

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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "0.5rem",
            }}
          >
            <Typography>Name:{name}</Typography>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="xs">Qualification:{qual}</Typography>
            </Box>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="xs">Hospital:{Hospital_Name}</Typography>
            </Box>

            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="md" sx={{ wordBreak: "break-all" }}>
                Address:{Adress}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              alignItems: "start",
              gap: "0.5rem",
            }}
          >
            <Typography fontSize="xs">
              <b>{spec}</b>
            </Typography>

            <typography>Distance:{distance}</typography>
          </Box>
        </Box>

        <Cmodal />
      </Box>
    </>
  );
};

export default DocardsNew;

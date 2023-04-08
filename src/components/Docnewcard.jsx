import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Docnewcard = ({
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
          backgroundColor: "#0A1235",
          marginTop: "1rem",
          borderRadius: "20px",
          maxWidth: "540px",
          maxHeight: "285px",
          color: "white",
        }}
      >
        <Box
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
            <Typography sx={{ color: "white" }}>Name:{name}</Typography>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="xs" sx={{ color: "white" }}>
                Qualification:{qual}
              </Typography>
            </Box>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="xs" sx={{ color: "white" }}>
                Hospital:{Hospital_Name}
              </Typography>
            </Box>

            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography
                fontSize="md"
                sx={{ wordBreak: "break-all", color: "white" }}
              >
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
            <Typography fontSize="xs" sx={{ color: "white" }}>
              <b>{spec}</b>
            </Typography>

            <Typography sx={{ color: "white" }}>Distance:{distance}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Docnewcard;

import React from "react";
import { styled } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar, Box, Typography } from "@mui/material";

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
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#8092d5",
    marginTop: "29px",

    borderRadius: "15px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 1, 1),
      width: "70%",
      gap: "0.5rem",
      fontSize: "2rem",
    },
  }));
  const CustomnewContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#8092d5",
    marginTop: "29px",

    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "45%",
    padding: theme.spacing(0, 0, 0, 0),
    gap: "0.5rem",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 0, 0, 0),
      width: "70%",
    },
  }));
  return (
    <>
      <CustomnewContainer>
        <CustomContainer>
          <Box
            //   onClick={handleFunction}

            onClick={handleOpen}
          >
            <Avatar
              style={{
                marginRight: "1rem",
              }}
              cursor={"pointer"}
              name="Dr.Batra"
              sx={{ height: "5rem", width: "5rem" }}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
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
        </CustomContainer>
        <Box>
          <Cmodal />
        </Box>
      </CustomnewContainer>
    </>
  );
};

export default DocardsNew;

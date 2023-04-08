import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import doc from "../media/doc.png";
import notepad from "../media/notepad.png";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Image from "next/image";

const AdminSec3 = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "29px",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 10, 0),
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
          >
            Show Appointments
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Display all Appointments
          </Typography>
          <Link href="/ShowAppointment" style={{ textDecoration: "none" }}>
            <CustomButton
              backgroundColor="#fff"
              color="#17275F"
              buttonText="Show->"
              getStartedBtn={true}
            />
          </Link>
        </Box>

        {/* <Box>
          <Image width={250} src={notepad} />
        </Box> */}
      </CustomContainer>
    </CustomBox>
  );
};

export default AdminSec3;

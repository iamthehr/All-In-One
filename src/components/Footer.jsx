import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";
import Image from "next/image";

import Link from "next/link";
const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#E6F0FF",
        // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 3px )",
        webkitFbackdropFilter: " blur( 3px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <div
        style={{
          width: "6%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
          marginBottom: "43px",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 3px )",
          webkitFbackdropFilter: " blur( 3px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      ></div>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Book lab tests at home
            </Typography>
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>RT PCR Test At Home</FooterLink>
            </Link>

            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink></FooterLink>
            </Link>
            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Renal Profile (KFT, RFT Test)</FooterLink>
            </Link>
            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Hemogram Test</FooterLink>
            </Link>
            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Lipid Profile Test</FooterLink>
            </Link>
            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Urine Culture Test</FooterLink>
            </Link>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Services
            </Typography>

            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Diabetologists</FooterLink>
            </Link>
            <br />

            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Geriatricians</FooterLink>
            </Link>
            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult ENT Specialists</FooterLink>
            </Link>

            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Dietitians</FooterLink>
            </Link>

            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Cardiologists</FooterLink>
            </Link>

            <br />
            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Gastroenterologists</FooterLink>
            </Link>

            <br />

            <Link
              href="/coming-soon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <FooterLink>Consult Dermatologists</FooterLink>
            </Link>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              find us
            </Typography>

            <IconBox>
              <Image src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <Image
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <Image
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;

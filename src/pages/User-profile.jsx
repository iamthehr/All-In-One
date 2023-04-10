import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logoImg from "../media/logo.png";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from "next/link";

const UserProfile = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "0px",
    height: "85vh",
    borderRadius: "15px",
    display: "flex",
    margin: "1.5rem",
    justifyContent: "space-around",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      height: "80vh",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));
  const ProfileBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#17275F",

    height: "auto",
    borderRadius: "15px",
    display: "flex",
    margin: "1rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",

    gap: "1rem",

    [theme.breakpoints.down("md")]: {
      height: "50vh",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "90%",
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar
            sx={{
              backgroundColor: "#E6F0FF",
              color: "#4F5361",
              boxShadow: "none",
            }}
          >
            <Link href="/User-homepage">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Image src={logoImg} style={{ height: "70px", width: "80px" }} />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box>
        {/* code starts here.Above is just mui toolbar*/}
        <ProfileBox>
          <Box>
            <Avatar
              style={{
                marginRight: "1rem",
              }}
              cursor={"pointer"}
              name="Dr.Batra"
              sx={{ height: "10rem", width: "10rem" }}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
          </Box>
          <Box>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              Name:Aditya sinha
            </Typography>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              Email:asjdbasjbdjasbdbsaj
            </Typography>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              Address:jkbdfdsgiufgiudsfiudsui
            </Typography>
          </Box>
        </ProfileBox>
        <CustomBox>
          <Box
            sx={{
              display: { md: "flex" },
              flexDirection: { md: "column", lg: "column" },
              justifyContent: { md: "center", lg: "space-between" },
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              Your current appointments
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              1
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              3
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              4
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              5
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              6
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              7
            </Typography>
          </Box>
          <Box
            sx={{
              display: { md: "flex" },
              flexDirection: { md: "column", lg: "column" },
              justifyContent: { md: "center", lg: "space-between" },
            }}
          >
            {" "}
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              Your previous appointments
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              1
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              3
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              4
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              5
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              6
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              7
            </Typography>
          </Box>
        </CustomBox>
      </Box>
    </>
  );
};
export default UserProfile;

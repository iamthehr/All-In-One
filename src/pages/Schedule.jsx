import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/delete";
import React, { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import CustomButton from "@/components/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Navbar2 from "@/components/Navbar2";

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [day, setDay] = useState();
  const [appoitArray, setAppoitArray] = useState([]);

  async function searchDoctor() {
    const token = localStorage.getItem("token");
    console.log(token);
    let l = await fetch(
      "http://localhost:5000/mainpage/hospital/searchDoctor",
      {
        method: "post",
        body: JSON.stringify({ name: searchTerm }),
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      }
    );
    l = await l.json();
    //console.log(l)
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    if (!startTime || !endTime) {
      return;
    }

    setAppoitArray((prevVal) => [
      ...prevVal,
      {
        stTime: startTime.$d
          .toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(/(:\d{2}| [AP]M)$/, ""),
        endTime: endTime.$d
          .toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(/(:\d{2}| [AP]M)$/, ""),
      },
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar2 />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"2rem"}
          // margin={"auto"}
          marginTop={"1.2rem"}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Doctor"
              onChange={(e) => setSearchTerm(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={searchDoctor}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box width={{ base: "100%", md: "50%", lg: "40%", xs: "100%" }}>
            <DoctorCard
              name="Dr.Batra"
              qual="MBBS,MD"
              spec="Generel Physician"
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <DoctorCard
              name="Dr.Batra"
              qual="MBBS,MD"
              spec="Generel Physician"
            />
            <DoctorCard
              name="Dr.Batra"
              qual="MBBS,MD"
              spec="Generel Physician"
            />
            <DoctorCard
              name="Dr.Batra"
              qual="MBBS,MD"
              spec="Generel Physician"
            />
            <DoctorCard
              name="Dr.Batra"
              qual="MBBS,MD"
              spec="Generel Physician"
            />
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography>
                <b>Weekdays</b>
              </Typography>
              <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
                <a
                  style={{ color: "blue", textDecoration: "underline" }}
                  onClick={() => setDay("Sunday")}
                >
                  Sun
                </a>

                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setDay("Monday")}
                >
                  Mon
                </a>
                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setDay("Tuesday")}
                >
                  Tue
                </a>
                <a
                  onClick={() => setDay("Wednesday")}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Wed
                </a>
                <a
                  onClick={() => setDay("Thrusday")}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Thru
                </a>
                <a
                  onClick={() => setDay("Friday")}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Fri
                </a>
                <a
                  onClick={() => setDay("Saturday")}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Sat
                </a>
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <ul>
                  {appoitArray.map((item) => {
                    return (
                      <li>
                        <Box
                          width={{
                            base: "100%",
                            md: "50%",
                            lg: "40%",
                            xs: "100%",
                          }}
                          paddingLeft={{
                            base: 0,
                            md: "2rem",
                            xs: "0.4rem",
                            sm: "1.2rem",
                          }}
                          borderRadius={{
                            base: 0,
                            md: "30px",
                            sm: "30px",
                            xs: "10px",
                          }}
                          style={{
                            display: "flex",
                            gap: "1.2rem",
                            backgroundColor: "#e6f0ff",

                            // maxWidth: "400px",

                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "1.2rem",
                          }}
                        >
                          <Typography>{item.stTime}</Typography>
                          <Typography>
                            <b>To</b>
                          </Typography>
                          <Typography>{item.endTime}</Typography>
                          <IconButton aria-label="delete" xs>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </li>
                    );
                  })}
                </ul>
                <Box display={"flex"} gap={"1rem"}>
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    xs
                  />
                  <Typography marginTop={"1rem"}>To</Typography>
                  <TimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    xs
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {/* <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Add Appointment"
              /> */}
                <Button onClick={handleClick}>Add Appointment</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Schedule;

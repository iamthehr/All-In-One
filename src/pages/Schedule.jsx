import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import CustomButton from "@/components/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

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
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [appoitArray, setAppoitArray] = useState([]);
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
        stTime: startTime.$d.toLocaleTimeString(),
        endTime: endTime.$d.toLocaleTimeString(),
      },
    ]);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"1rem"}
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
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
          <DoctorCard name="Dr.Batra" qual="MBBS,MD" spec="Generel Physician" />
          <DoctorCard name="Dr.Batra" qual="MBBS,MD" spec="Generel Physician" />
          <DoctorCard name="Dr.Batra" qual="MBBS,MD" spec="Generel Physician" />
          <DoctorCard name="Dr.Batra" qual="MBBS,MD" spec="Generel Physician" />
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
            <Box display={"flex"} gap={"1rem"}>
              <a>Sun</a>
              <a>Mon</a>
              <a>Tue</a>
              <a>Wed</a>
              <a>Thru</a>
              <a>Fri</a>
              <a>Sat</a>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              {appoitArray.map((item) => {
                return (
                  <div>
                    <Typography>{item.stTime}</Typography>
                    <Typography>to</Typography>
                    <Typography>{item.endTime}</Typography>
                  </div>
                );
              })}
              <Box display={"flex"} gap={"1rem"}>
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => setStartTime(newValue)}
                />
                <Typography marginTop={"1rem"}>To</Typography>
                <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => setEndTime(newValue)}
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
  );
};

export default Schedule;

import {
  Box,
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
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
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <TimePicker
                label="Controlled picker"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
              />
              <Typography>To</Typography>
              <TimePicker
                label="Controlled picker"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
              />
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Add Appointment"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Schedule;

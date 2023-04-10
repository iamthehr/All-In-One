import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Docnewcard from "./Docnewcard";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: "auto",
  backgroundColor: "background.paper",
  border: "5px solid #EEEEEE",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
};

const Cmodal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [day, setDay] = useState();

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        fullWidth
        sx={{ bgcolor: "#c5c5d3" }}
      >
        Consult
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ overflow: "scroll" }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Docnewcard
              name="Aditya"
              qual="MBBS"
              spec="Physician"
              distance="4km"
              Hospital_Name="TMH NAYSARAY"
              Adress="SAHFGHASFVJHdsdfsd"
            />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              This doctor is available
            </Typography>

            <Box>
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
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                borderRadius: "4px solid blue",
                color: "blue",
                width: "30%",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    borderRadius: "4px solid blue",
                    color: "blue",
                    width: "100%",
                  }}
                >
                  <MobileTimePicker
                    label={"Start time"}
                    views={["hours", "minutes"]}
                  />
                  <MobileTimePicker
                    label={"  End time"}
                    views={["hours", "minutes"]}
                  />
                </Box>
              </LocalizationProvider>
            </Box>

            <Button variant="contained">Book Appointment</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default Cmodal;

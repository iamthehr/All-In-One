import React from "react";
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
import { useEffect } from "react";
import { ButtonGroup } from "@mui/material";

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
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 3px )",
  webkitFbackdropFilter: " blur( 3px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const Cmodal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [day, setDay] = useState();
  const [timeslots, setTimeslots] = useState([]);
  const [id, setId] = useState("");
  const [toggle, setToggle] = useState(true);

  async function addAppointment() {
    const token = localStorage.getItem("token");
    console.log(id);
    if (!id) {
      alert("please select a timeslot");
      return;
    }
    if (id.no_of_bookings === id.total_bookings) {
      alert("the slot is filled");
      return;
    }
    let confirm = await fetch(
      "http://localhost:5000/mainpage/user/selectTimeSlot",
      {
        method: "post",
        body: JSON.stringify({ timeslot_id: id.id }),
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      }
    );
    confirm = await confirm.json();
    //console.log(confirm)
    if (confirm.status == "user exists") {
      alert("you have already booked this timeslot");
    } else alert("your appointment has been confirmed");
    setId("");
    setToggle(!toggle);
  }

  useEffect(() => {
    (async () => {
      console.log(day);
      const token = localStorage.getItem("token");
      let available = await fetch(
        "http://localhost:5000/mainpage/user/displayDoctorTimeslots",
        {
          method: "post",
          body: JSON.stringify({ id: props.id, day }),
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      available = await available.json();
      console.log(available);
      setTimeslots(available);
    })();
  }, [day, toggle]);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        fullWidth
        sx={{
          bgcolor: "#c5c5d3",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 3px )",
          webkitFbackdropFilter: " blur( 3px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          marginBottom: "2px",
        }}
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
        sx={{
          overflow: "scroll",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 3px )",
          webkitFbackdropFilter: " blur( 3px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Docnewcard
              name={props.name}
              qual={props.qual}
              spec={props.spec}
              distance={props.distance}
              Hospital_Name={props.Hospital_Name}
              Adress={props.Adress}
              image={props.image}
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
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
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

              <ButtonGroup>
                {timeslots.map((item) => (
                  <Button
                    key={item.id}
                    value={item.id}
                    onClick={() => setId(item)}
                  >{`${item.start_time} to ${item.end_time} available=${
                    item.total_bookings - item.no_of_bookings
                  }`}</Button>
                ))}
              </ButtonGroup>
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

            <Button variant="contained" onClick={addAppointment}>
              Book Appointment
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default Cmodal;

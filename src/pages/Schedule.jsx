/*import {
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
import React, { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import CustomButton from "@/components/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Navbar2 from "@/components/Navbar2";
import { useRouter } from "next/router";

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
  const [doctors,setDoctors]=useState([])
  const [selectedDoctor,setSelectedDoctor]=useState("")

  const router=useRouter()

  useEffect(()=>{
    (async()=>{
      const token=localStorage.getItem('token')
      let l=await fetch('http://localhost:5000/mainpage/hospital/displayName',{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          'auth':token
        }
      })
      l=await l.json()
      //console.log(l)
      if(l[0].name==undefined){
        alert('you are not authorized to access this page')
        router.push('./Tabs-Hospital')
        return
      }

    })()
  },[doctors,appoitArray])
  const router=useRouter()

  useEffect(()=>{
    (async()=>{
      const token=localStorage.getItem('token')
      let l=await fetch('http://localhost:5000/mainpage/hospital/displayName',{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          'auth':token
        }
      })
      l=await l.json()
      //console.log(l)
      if(l[0].name==undefined){
        alert('you are not authorized to access this page')
        router.push('./Tabs-Hospital')
        return
      }

    })()
  },[doctors,appoitArray])

  /*async function displayTimeSlots(){
  /*async function displayTimeSlots(){
    const token=localStorage.getItem('token')
    let slots=await fetch('http://localhost:5000/mainpage/hospital/displayTimeSlot',{
      method:'post',
      body:JSON.stringify({doctor_id:selectedDoctor,day:day}),
      headers:{
        'Content-Type':'application/json',
        "auth":token
      }
    })
    slots=await slots.json()
    console.log(slots)
    setAppoitArray(slots)
  }

  async function searchDoctor(){
    const token=localStorage.getItem('token')
    //console.log(token)
    let l=await fetch('http://localhost:5000/mainpage/hospital/searchDoctor',{
      method:'post',
      body:JSON.stringify({name:searchTerm}),
      headers:{
        'Content-Type':'application/json',
        "auth":token
      }
    })
    l=await l.json()
    for(let i in l){
      console.log(l[i])
      let img=await fetch('http://localhost:5000/mainpage/hospital/doctorImages',{
        method:'post',
        body:JSON.stringify({doctor_id:l[i].id}),
        headers:{
          'Content-Type':'application/json',
          "auth":token
        }

      })
      img=await img.blob()
      let newObj={...l[i],image:URL.createObjectURL(img)}
      l[i]=newObj
    }
    console.log(l)
    setDoctors(l)
  }

  const handleOpen = (item) => {
    setSelectedDoctor(item.id)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    if (!startTime || !endTime) {
      return;
    }
    console.log(startTime+" "+endTime)
    /*const st_time= startTime.$d
    /*const st_time= startTime.$d
    .toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/(:\d{2}| [AP]M)$/, "")

    const end_time=endTime.$d
    .toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/(:\d{2}| [AP]M)$/, "")
    console.log(st_time+" "+end_time)



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
            {/*<DoctorCard
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
          spec="Generel Physician"/>}
          spec="Generel Physician"/>}
          {doctors.map(item=>{
            return(
              
              <DoctorCard key={item} name={item.name} qual={item.qualifications} spec={item.speciality} handleOpen={item=>handleOpen(item)} handleClose={handleClose}></DoctorCard>
              
              
            )
          })}
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
                  onClick={() => {
                    setDay("Sunday")
                    displayTimeSlots()
                  }}
                >
                  Sun
                </a>

                <a
                  style={{ color: "blue", textDecoration: "underline" }}
                  onClick={() =>{
                    setDay("Monday")
                    displayTimeSlots()
                  }}
                >
                  Mon
                </a>
                <a
                  style={{ color: "blue", textDecoration: "underline" }}
                  onClick={() =>{
                    setDay("Tuesday")
                    displayTimeSlots()
                  }}
                >
                  Tue
                </a>
                <a
                  onClick={() =>{
                    setDay("Wednesday")
                    displayTimeSlots()
                  }}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Wed
                </a>
                <a
                  onClick={() =>{
                    setDay("Thursday")
                    displayTimeSlots()
                  }}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Thru
                </a>
                <a
                  onClick={() =>{
                    setDay("Friday")
                    displayTimeSlots()
                  }}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Fri
                </a>
                <a
                  onClick={() =>{
                    setDay("Saturday")
                    displayTimeSlots()
                  }}
                  style={{ color: "blue", textDecoration: "underline" }}
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
              /> }
                <Button onClick={handleClick}>Add Appointment</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Schedule;*/

import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/delete";
import React, { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import CustomButton from "@/components/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Navbar2 from "@/components/Navbar2";
import { type } from "@testing-library/user-event/dist/type";
import Nav3 from "@/components/Nav3";

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
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [numOfAppo, setNumOfAppo] = useState(0);
  const [reRender, setReRender] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      let l = await fetch(
        "http://localhost:5000/mainpage/hospital/displayName",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      l = await l.json();
      //console.log(l[0].name)
      if (l[0] == undefined) {
        alert("you are not authorized to access this page");
        router.push("./Tabs-Hospital");
        return;
      }
      console.log(selectedDoctor + "is s" + day);
      let slots = await fetch(
        "http://localhost:5000/mainpage/hospital/displayTimeSlot",
        {
          method: "post",
          body: JSON.stringify({ doctor_id: selectedDoctor, day: day }),
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      slots = await slots.json();
      console.log(slots);
      setAppoitArray(slots);
    })();
  }, [day, doctors, reRender]);

  //useEffect(() => {}, [doctors, appoitArray]);

  async function deleteTs(item) {
    const token = localStorage.getItem("token");
    const id = item.id;
    console.log(id);
    let l = await fetch(
      "http://localhost:5000/mainpage/hospital/deleteTimeSlot",
      {
        method: "post",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      }
    );
    l = await l.json();
    setReRender(!reRender);
  }

  async function displayTimeSlots() {
    const token = localStorage.getItem("token");
    console.log(selectedDoctor + "is s" + day);
    let slots = await fetch(
      "http://localhost:5000/mainpage/hospital/displayTimeSlot",
      {
        method: "post",
        body: JSON.stringify({ doctor_id: selectedDoctor, day: day }),
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      }
    );
    slots = await slots.json();
    console.log(slots);
    setAppoitArray(slots);
  }

  async function searchDoctor() {
    const token = localStorage.getItem("token");
    //console.log(token)
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
    for (let i in l) {
      console.log(l[i]);
      let img = await fetch(
        "http://localhost:5000/mainpage/hospital/doctorImages",
        {
          method: "post",
          body: JSON.stringify({ doctor_id: l[i].id }),
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      img = await img.blob();
      let newObj = { ...l[i], image: URL.createObjectURL(img) };
      l[i] = newObj;
    }
    console.log(l);
    setDoctors(l);
  }

  const handleOpen = (item) => {
    //console.log(item);
    // console.log(event);
    setSelectedDoctor(item.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = async () => {
    if (!startTime || !endTime) {
      return;
    }
    //console.log(startTime + " " + endTime);
    const st_time = startTime.$d.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    const end_time = endTime.$d.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    //console.log(selectedDoctor)
    //console.log(st_time + " " + end_time);
    const token = localStorage.getItem("token");
    let l = await fetch("http://localhost:5000/mainpage/hospital/addTimeSlot", {
      method: "post",
      body: JSON.stringify({
        doctor_id: selectedDoctor,
        day: day,
        start_time: st_time,
        end_time: end_time,
        total_bookings: numOfAppo,
      }),
      headers: {
        "Content-Type": "application/json",
        auth: token,
      },
    });
    console.log(l);
    setReRender(!reRender);

    /*setAppoitArray((prevVal) => [
      ...prevVal,
      {
        stTime: startTime.$d
          .toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          
        endTime: endTime.$d
          .toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })
          
      },
    ]);*/
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Nav3 />
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
            {doctors.map((item) => {
              return (
                <div>
                  <DoctorCard
                    key={item.id}
                    name={item.name}
                    qual={item.qualifications}
                    spec={item.speciality}
                    // handleDoctor={()=> setSelectedDoctor(item.id)}
                    handleOpen={() =>
                      handleOpen(doctors.find((i) => i == item))
                    }
                    handleClose={handleClose}
                    image={item.image}
                  ></DoctorCard>
                </div>
              );
            })}
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
                {days.map((d) => (
                  <IconButton
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      border: d === day ? "2px solid black" : "",
                      fontWeight: "bold",
                      fontSize: "1.1em",
                    }}
                    key={d}
                    onClick={() => setDay(d)}
                  >
                    {d.slice(0, 1)}
                  </IconButton>
                ))}
                {/* <a
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
                </a> */}
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
                          <Typography>{item.start_time}</Typography>
                          <Typography>
                            <b>To</b>
                          </Typography>
                          <Typography>{item.end_time}</Typography>
                          <IconButton
                            aria-label="delete"
                            xs
                            onClick={() =>
                              deleteTs(appoitArray.find((i) => i == item))
                            }
                          >
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
                  <TextField
                    id="outlined-number"
                    label="Number Of Appointments"
                    type="number"
                    InputProps={{
                      inputProps: { min: 0 },
                    }}
                    onChange={(event) =>
                      setNumOfAppo(Number(event.target.value))
                    }
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

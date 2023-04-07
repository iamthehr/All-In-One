import React from 'react'
import Navbar from '@/components/Nav3'
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DocardsNew from '@/components/DocardsNew';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

import Aos from "aos";
import "Aos/dist/aos.css";
import { useEffect } from "react";



const theme = createTheme({
    palette: {
        primary: { main: "#0F1B4C" },
        secondary: { main: "#1da7e2" },
    },
});


const Specialization = [
    {
        value: 'USD',
        label: 'Physician',
    },
    {
        value: 'EUR',
        label: 'gand ka doctor',
    },
    {
        value: 'BTC',
        label: 'gand ka doctor number 2',
    },
    {
        value: 'JPY',
        label: ' gand ka doctor number 3',
    },
];
const Test = [
    {
        value: '1',
        label: 'bloodtest',
    },
    {
        value: '2',
        label: 'sugar',
    },
    {
        value: '3',
        label: 'lamp',
    },
    {
        value: '4',
        label: 'new blood test',
    },
];


function User_homepage() {



    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "40px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    const CustomnewBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(1, 0, 1, 0),
        margin: theme.spacing(0, 1, 0, 0),
        [theme.breakpoints.down("md")]: {
            padding: "0",
        },
    }));
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#CBD7FF",
        marginTop: "29px",
        height: "auto",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",



        [theme.breakpoints.down("md")]: {
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(1, 1, 0, 1),
            width: "100%",
        },
    }));


    return (


        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh", scrollBehavior: "smooth" }}>
                    <Container>
                        <Navbar />

                        <Box >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: "18px",
                                    color: "#687690",
                                    fontWeight: "500",
                                    mt: 10,
                                    mb: 4,
                                }}
                            >
                                Welcome User,
                            </Typography>
                            <Title variant="h1">
                                Always caring about your health, we are here to help you!
                            </Title>
                            <Typography
                                variant="body2"
                                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                            >
                                many web sites still in their infancy. Various versions have
                                evolved over the years, sometimes by accident, sometimes on
                                purpose (injected humour and the like).
                            </Typography>

                        </Box>

                        <div id="Consultdoc">

                            <CustomContainer>


                                <Box sx={{ width: "100%", bgcolor: "#E6F0FF", paddingLeft: "3px", marginTop: "5px", borderRadius: "7px" }}>

                                    <Typography
                                        sx={{ fontSize: "30px", color: "black", fontWeight: "700", textAlign: "center" }}
                                    >
                                        CONSULT WITH A DOCTOR
                                    </Typography>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "5px",
                                            backgroundColor: "#000339",
                                            margin: "0 auto",
                                            marginBottom: "43px",
                                        }}
                                    ></div>

                                    <TextField

                                        select
                                        fullWidth
                                        label="select specialization"
                                        defaultValue="Specialization"
                                        SelectProps={{
                                            native: true

                                        }}

                                        helperText="  select the speciation of the doctor  "
                                        variant="standard"
                                    >
                                        {Specialization.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>




                                    <Button variant="contained" fullWidth endIcon={<SearchIcon />}>
                                        Search
                                    </Button>

                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "5px solid black" }} mt={3} >
                                    <Box >
                                        <Typography
                                            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
                                        >
                                            DOCTORS NEAR YOU
                                        </Typography>
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "5px",
                                                backgroundColor: "#000339",
                                                margin: "0 auto",
                                                marginBottom: "43px",
                                            }}
                                        ></div>

                                    </Box >
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3px", justifyContent: "center", alignItems: "center" }} marginLeft="15px" mt={8} mb={8} >


                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJH" />
                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJH" />
                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJH" />
                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJH" />
                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJH" />
                                        <DocardsNew name="Aditya" qual="MBBS" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVEFG" />


                                    </Box>

                                </Box>

                            </CustomContainer>
                        </div>
                        {/* <div id="Booklabtest">
                            <CustomContainer>


                                <Box sx={{ width: "100%", bgcolor: "#E6F0FF", paddingLeft: "3px", marginTop: "5px", borderRadius: "7px" }}>

                                    <Typography
                                        sx={{ fontSize: "30px", color: "black", fontWeight: "700", textAlign: "center" }}
                                    >
                                        BOOK A LAB TEST
                                    </Typography>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "5px",
                                            backgroundColor: "#000339",
                                            margin: "0 auto",
                                            marginBottom: "43px",
                                        }}
                                    ></div>

                                    <TextField

                                        select
                                        fullWidth
                                        label="select test"
                                        defaultValue="blood test"
                                        SelectProps={{
                                            native: true

                                        }}

                                        variant="standard"
                                    >
                                        {Test.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>




                                    <Button variant="contained" fullWidth endIcon={<SearchIcon />}>
                                        Search
                                    </Button>

                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "5px solid black" }} mt={3} >
                                    <Box >
                                        <Typography
                                            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
                                        >
                                            LABS NEAR YOU
                                        </Typography>
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "5px",
                                                backgroundColor: "#000339",
                                                margin: "0 auto",
                                                marginBottom: "43px",
                                            }}
                                        ></div>

                                    </Box >
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3px", justifyContent: "center", alignItems: "center" }} marginLeft="15px" mt={8} mb={8} >


                                        <DocardsNew name="Aditya" qual="Phd in mathematics" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJHASVGHDFJVGSAHDVASJHVDJASHV" />
                                        <DocardsNew name="Aditya" qual="Phd in mathematics" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJHASVGHDFJVGSAHDVASJHVDJASHV" />


                                    </Box>

                                </Box>

                            </CustomContainer>
                        </div> */}
                    </Container>
                </Box >
                <div id="contact">
                    <Contact />
                </div>
                <Footer />

            </ThemeProvider >
        </>
    );

}
export default User_homepage
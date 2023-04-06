import React from 'react'
import Navbar from '@/components/Nav3'
import { Box, Button, Link, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";



import CustomButton from "@/components/CustomButton";

import Image from "next/image";
import Aos from "aos";
import "Aos/dist/aos.css";
import { useEffect } from "react";

function User_homepage() {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

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
        backgroundColor: "#16495F",
        marginTop: "29px",
        height: "400px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

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
            <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
                <Container>
                    <Navbar />
                    <CustomBox>
                        <Box sx={{ flex: "1" }}>
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


                    </CustomBox>
                    <CustomContainer>

                        <Box>
                            <Typography
                                sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
                            >
                                Consult with a doctor
                            </Typography>

                        </Box>
                        <Box >
                            <Typography sx={{
                                fontSize: "40px",
                                color: "white",
                                fontWeight: "500",
                            }}>
                                Address
                            </Typography>
                            <Typography sx={{
                                fontSize: "25px",
                                color: "white",
                                fontWeight: "500",
                            }}>
                                Filter out doctors
                            </Typography>

                        </Box>



                    </CustomContainer>
                    <CustomContainer>

                        <Box>
                            <Typography
                                sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
                            >
                                Consult with a doctor
                            </Typography>
                            {/* <Typography
        sx={{
            fontSize: "16px",
            color: "#ccc",
            fontWeight: "500",
            my: 3,
        }}
    >
        Checkout for nearby doctors.
    </Typography> */}
                            {/* <Link href="/#" style={{ textDecoration: "none" }}>
        <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Checkout"
            getStartedBtn={true}
        />
    </Link> */}
                        </Box>
                        <Box >
                            <Typography sx={{
                                fontSize: "40px",
                                color: "white",
                                fontWeight: "500",
                            }}>
                                Address
                            </Typography>
                            <Typography sx={{
                                fontSize: "25px",
                                color: "white",
                                fontWeight: "500",
                            }}>
                                Filter out doctors
                            </Typography>







                        </Box>



                    </CustomContainer>
                </Container>
            </Box>
        </>
    );

}
export default User_homepage
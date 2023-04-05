import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomButton from "@/components/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        AllinONE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

const AddDoctor = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0F1B4C" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Doctor
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="qualifications"
                  label="Qualifications"
                  name="qualifications"
                  autoComplete="qualifications"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="qualifications"
                  label="Qualifications"
                  name="qualifications"
                  autoComplete="qualifications"
                /> */}
                <TextField
                  required
                  fullWidth
                  id="yoe"
                  label="Years of Experiance"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                  autoComplete="yoe"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Specialization
                  </InputLabel>
                  <Select
                    labelId="Specialization"
                    id="Specialization"
                    // value={age}
                    label="Specialization"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Orthopedics</MenuItem>
                    <MenuItem value={20}>General Surgery</MenuItem>
                    <MenuItem value={20}>Pathology</MenuItem>
                    <MenuItem value={20}>General Physician</MenuItem>
                    {/* <MenuItem value={20}>General Surgery</MenuItem> */}
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Add
            </Button>
            {/* <CustomButton></CustomButton> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default AddDoctor;

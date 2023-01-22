import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  ButtonBase,
  Button,
  Paper,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import EmployerNavBar from "../components/EmployerNavBar";

const Item = styled(Paper)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '5vh',
  }
}));

const Text = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  }
}));

const Image = styled("img")(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '10vw',
    height: '5vh',
  }
}));

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1fe47a",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#1fe47a",
          },
        },
      },
    },
  },
});

function Employer() {
  const jobs = [
    {
      company: "Netflix",
      role: "Senior Web Developer",
      experience: "3 yrs experience",
      logo: "netflix-512.png",
    },
    {
      company: "Tata",
      role: "Senior Software Engineer",
      experience: "5 yrs experience",
      logo: "tata-logo-blue.png",
    },
    {
      company: "Wipro",
      role: "Senior Software Engineer",
      experience: "2 yrs experience",
      logo: "wipro-logo.png",
    },
  ];
  return (
    <>
      <EmployerNavBar />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid container spacing={2}>
            {jobs.map((job) => (
              <>
                <Grid item md={1} lg={1} xl={1} hidden={{ xs: true, sm: true }}/>
                <Grid item xs={8} sm={8} md={7} lg={7} xl={7}>
                  <ButtonBase variant="contained">
                    <Item
                      elevation={3}
                      sx={{
                        p: 2,
                        width: "40vw",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={require(`../img/${job.logo}`)}
                        alt={job.logo}
                        height={100}
                        width={100}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          m: 2,
                        }}
                      >
                        <Text
                          variant="h6"
                          component="p"
                          sx={{ color: "black", }}
                        >
                          {job.role}
                        </Text>
                        <Text
                          variant="subtitle2"
                          component="p"
                          sx={{ color: "black", }}
                        >
                          {job.experience}
                        </Text>
                      </Box>
                    </Item>
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" sx={{ width: "80%", p: 2 }}>
                    Select
                  </Button>
                </Grid>
                <Grid item md={1} lg={1} xl={1} hidden={{ xs: true, sm: true }}/>
              </>
            ))}
            ;
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Employer;

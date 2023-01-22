import * as React from "react";

import { Box, Button, Paper, Typography, Grid, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import JobPostNavBar from "../components/JobPostNavBar";

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

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const UText = styled(Text)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textDecoration: "underline black solid 2px",
  },
}));

const Text2 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

const JobPost = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const applicants = ["Ram Sharma", "Shyam Sharma", "Karan Sharma"];
  return (
    <>
      <JobPostNavBar />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12}>
              <Text variant="h3" component="p" sx={{ mt: 2 }}>
                Job Title:
                <UText
                  variant="h3"
                  component="span"
                  sx={{ textDecoration: "underline black solid 5px" }}
                >
                  {location.state.role}, {location.state.experience}
                </UText>
              </Text>
            </Grid>
            <Grid
              item
              md={2}
              lg={2}
              xl={2}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            />
            <Grid item xs={7} sm={7} md={5} lg={5} xl={5}>
              <UText
                variant="h4"
                component="p"
                sx={{
                  textAlign: "left",
                  mt: 3,
                  textDecoration: "underline black solid 4px",
                }}
              >
                Applicants
              </UText>
            </Grid>
            <Grid item xs={5} sm={5} md={3} lg={3} xl={3} />
            <Grid
              item
              md={2}
              lg={2}
              xl={2}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            />
            {applicants.map((applicant, index) => (
              <>
                <Grid
                  item
                  md={2}
                  lg={2}
                  xl={2}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                />
                <Grid item xs={7} sm={7} md={5} lg={5} xl={5}>
                  <Paper elevation={3} sx={{ p: 2, textAlign: "left" }}>
                    <Text2 variant="h6" component="p">
                      {index + 1}. {applicant} (CV Attached)
                    </Text2>
                  </Paper>
                </Grid>
                <Grid item xs={5} sm={5} md={3} lg={3} xl={3} sx={{ mt: isSmallScreen ? 2 : 0 }}>
                  <Button variant="contained" sx={{ width: "80%", p: 2 }}>
                    Select
                  </Button>
                </Grid>
                <Grid
                  item
                  md={2}
                  lg={2}
                  xl={2}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                />
              </>
            ))}
            ;
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default JobPost;

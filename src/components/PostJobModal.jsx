import * as React from "react";

import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

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

const HText = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  }
}));

const MyBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '75vw',
  }
}));

const JobPostModal = (props) => {
  const {
    input,
    onRoleChange,
    onExperienceChange,
    onSubmit,
    handleModalClose,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <MyBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
          height: "auto",
          bgcolor: "background.paper",
          border: "2px solid aliceblue",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <HText variant="h6" component="h2">
              Tell Us About The Project
            </HText>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Name of your project"
              variant="outlined"
              value={input.role}
              onChange={(e) => {
                onRoleChange(e);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Experience"
              variant="outlined"
              value={input.experience}
              onChange={(e) => {
                onExperienceChange(e);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Project Description"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Salary"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => {
                onSubmit();
                handleModalClose();
              }}
            >
              Post Job
            </Button>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </MyBox>
    </ThemeProvider>
  );
};

export default JobPostModal;

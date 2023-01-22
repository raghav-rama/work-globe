import * as React from "react";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { AppBar, Button, Typography, Box, Toolbar } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#474747",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1fe47a",
          height: "50px",
          width: "200px",
          fontSize: "20px",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#1fe47a",
          },
        },
      },
    },
  },
});

const Text = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    fontWeight: 'bold',
  }
}));

const RButton = styled(Button)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '35vw',
    height: '5vh',
    fontSize: '13px',
  }
}));

const FreelanceNavBar = (props) => {
  const { handleModalOpen } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box component="nav" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Text
              variant="h5"
              component="p"
              sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}
            >
              My Posted Jobs
            </Text>
            <RButton variant="contained" onClick={handleModalOpen}>
              Post Job
            </RButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default FreelanceNavBar;

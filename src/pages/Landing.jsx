/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "../components/NavBar";

import * as React from "react";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

const backgroundStyles = css`
  background-color: #d9d9d9;
  background-image: url(${require("../img/macbook.png")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vmin;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0 32%;
  justify-content: flex-start;
  @media (max-width: 600px) {
    padding: 0 25%;
  }
`;

const textStylesH1 = css`
  color: white;
  font-size: 2.5vw;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  text-shadow: 1px 1px black;
  // width: 350px;
  margin-top: 20%;
  @media (max-width: 600px) {
    margin-top: 40%;
  }
`;

const textStylesP = css`
  color: white;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  font-size: 1.5vw;
  text-shadow: 1px 1px black;
`;

const buttonStyles = css`
  margin-top: 1rem;
  margin-right: 1rem;
  justify-content: center;
  border-radius: 25px;
  font-size: 1vw;
  width: 200px;
  height: 50px;
  background-color: white;
  color: black;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: aliceblue;
  }
  @media (max-width: 600px) {
    width: 10px;
    height: 25px;
  }
`;

const buttonContainerStyles = css`
  display: block;
  margin-bottom: 200px;
  @media (max-width: 600px) {
    margin-bottom: 100px;
  }
`;

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div css={backgroundStyles}>
        <div css={buttonContainerStyles}>
          <h1 css={textStylesH1}>ONE BILLION PEOPLE USE ONLINE JOB PORTALS</h1>
          <p css={textStylesP}>
            Stay protected by the power of smart contract embeddedin the realm
            of Blockchain
          </p>
          <Link to="/employer">
            <Button css={buttonStyles} variant="contained" color="primary">
              I AM A FREELANCER
            </Button>
          </Link>
          <Link to="/freelancer">
            <Button css={buttonStyles} variant="contained" color="primary">
              HIRE A FREELANCER
            </Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
export { backgroundStyles, textStylesH1, textStylesP, buttonStyles}; 
export default Landing;

import * as React from "react";

import { Box, IconButton, Paper, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#595959",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Text = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
  }
}));

const Footer = () => {
  return (
    <React.Fragment>
      {/* <h1>tmkc</h1> */}
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{ alignText: "left", color: "white", backgroundColor: "#595959" }}
        >
          <Box sx={{ display: "flex", gap: "2" }}>
            <Text
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "left", ml: 1 }}
            >
              Follow us on:
              <IconButton>
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <YouTubeIcon sx={{ color: "white" }} />
              </IconButton>
            </Text>
          </Box>
        </Box>
        <Grid container spacing={0} sx={{ backgroundColor: "#595959" }}>
          <Grid item xs={6}>
            <Item variant="outline" square>
              <Text
                variant="h6"
                component="p"
                sx={{ textAlign: "left", ml: 1, color: "white" }}
              >
                Product by:
              </Text>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item variant="outline" square>
              <Box
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Text
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", ml: 1, color: "white" }}
                >
                  Resources:
                </Text>
                <Text
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", ml: 1, color: "white" }}
                >
                  Help and Support
                </Text>
                <Text
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", ml: 1, color: "white" }}
                >
                  Blog
                </Text>
                <Text
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", ml: 1, color: "white" }}
                >
                  Community
                </Text>
                <Text
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", ml: 1, color: "white" }}
                >
                  Affiliate Program
                </Text>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item variant="outline" square>
              <Text
                variant="h6"
                component="p"
                sx={{ textAlign: "left", ml: 1, color: "white" }}
              >
                For Talent
              </Text>
              <Text
                variant="h6"
                component="p"
                sx={{ textAlign: "left", ml: 1, color: "white" }}
              >
                Find Work
              </Text>
              <Text
                variant="h6"
                component="p"
                sx={{ textAlign: "left", ml: 1, color: "white" }}
              >
                Find Freelance work WorldWide
              </Text>
              <Text
                variant="h6"
                component="p"
                sx={{ textAlign: "left", ml: 1, color: "white" }}
              >
                Work in USA
              </Text>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Footer;

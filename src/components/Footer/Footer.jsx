import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../../assets/images/logo.png';
import {Button, TextField, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Link from '@mui/material/Link';


const products = ["Annotation Service", "Platform"];
const useCase = ["Autonomous driving", "Retail", "Security",];
const contact = ["sales@quantigo.ai", "info@quantigo.ai"];
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://quantigo.ai/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ position: "relative", bottom: "2px", paddingTop: "40px" }}
      >
        <Grid xs={3}>
          <img src={logo} alt="img" height={50} width={320} />
          <>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              High Quality Training Data at Scale
            </Typography>
            <FacebookIcon />
            <LinkedInIcon />
          </>
        </Grid>

        <Grid xs={2}>
          <>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Products
            </Typography>
            {products.map((product) => (
              <Typography
                key={product}
                sx={{ cursor: "pointer" }}
                variant="body2"
                align="center"
                color="text.secondary"
                paragraph
              >
                {product}
              </Typography>
            ))}
          </>
        </Grid>

        <Grid xs={2}>
          <>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Use-Cases
            </Typography>
            {useCase.map((usecase) => (
              <Typography
                key={usecase}
                sx={{ cursor: "pointer" }}
                variant="body2"
                align="center"
                color="text.secondary"
                paragraph
              >
                {usecase}
              </Typography>
            ))}
          </>
        </Grid>

        <Grid xs={2}>
          <>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Contact
            </Typography>
            {contact.map((contact) => (
              <Typography
                key={contact}
                sx={{ cursor: "pointer" }}
                variant="body2"
                align="center"
                color="text.secondary"
                paragraph
              >
                {contact}
              </Typography>
            ))}
          </>
        </Grid>

        <Grid xs={3}>
          <>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Subscribe to our Newsletter
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField name="email" label="Email"></TextField>

              {/*<TextField type="text" placeholder="Enter your email" style={{width: "80%", height: "40px", borderRadius: "5px", border: "1px solid #000"}}/>*/}
              <Button>
                <DoubleArrowIcon />
              </Button>
            </Box>
          </>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{ position: "relative", bottom: "2px", paddingTop: "40px" }}
      >
        <Grid xs={12}>
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

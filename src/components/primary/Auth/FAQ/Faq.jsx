import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, Link, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../../../assets/images/LoginBG.png";
import arrow from "../../../../assets/images/u_arrow-left.png";
import HeaderNav from "../../HomePage/HeaderNav";
import "../../HomePage/bd.css";
import logo from "../../../../assets/images/logo.png";
import CommonDesign from "../../HomePage/CommonDesign";

const BgBox = styled(Box)({
  backgroundImage: `url(${bgimg})`,
  width: "100vw",
  height: "120vh",
  backgroundRepeat: "no-repeat",
});
const ForgetPasswordBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "520px",
  height: "581px",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});
const TypographyBody = styled(Typography)({
  display: "flex",
  color: "#FFFFFF",
  justifyContent: "initial",
  fontSize: "body1",
  fontFamily: "Roboto",
});

const Keyframes = styled("div")({
  height: "100vh",
  width: "100%",
});

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box className="container">
        <HeaderNav />

        <>
          <Grid
            container
            item
            xs={12}
            style={{
              paddingLeft: "19%",
              paddingTop: "7%",
              paddingBottom: "1%",
            }}>
            <Link
              onClick={() => navigate("/login")}
              underline="hover"
              sx={{
                borderRadius: 1,
                marginTop: 3,
                cursor: "pointer",
                color: "#FFFFFF",
              }}>
              <Box sx={{ display: "flex" }}>
                <img src={arrow} />
                Go Back
              </Box>
            </Link>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              paddingLeft: "19%",
              paddingTop: "0%",
              paddingBottom: "1%",
            }}>
            <Typography style={{ color: "#FFFFFF" }} variant="h4">
              FAQ
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: "19%" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{
                borderTop: "1px solid #FFFFFF",
                width: "70%",
                backgroundColor: "rgba(0, 0, 0, 0)",
                // backdropFilter: "blur(8px)",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography style={{ color: "#FFFFFF" }}>
                  Quis interdum in aliquam elit morbi eget risus nulla.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{ color: "#FFFFFF", textAlign: "left" }}
                  variant="body2">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis
                  maecenas a felis tempus mattis vehicula id. Nullam mus
                  volutpat morbi at at quam feugiat neque ornare. Dolor
                  ullamcorper praesent ut viverra praesent cum tristique eu.
                  Mauris vestibulum ut in ac gravida. Et vestibulum fringilla
                  ipsum eget viverra nunc massa. Pellentesque vel ut ut turpis.
                  Sit ac at viverra vel cursus odio felis libero.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{
                width: "70%",
                borderTop: "1px solid #FFFFFF",
                backgroundColor: "rgba(0, 0, 0, 0)",
                backdropFilter: "blur(8px)",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header">
                <Typography style={{ color: "#FFFFFF", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur. Eu fringilla in
                  imperdiet non mattis in.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{ color: "#FFFFFF", textAlign: "left" }}
                  variant="body2">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis
                  maecenas a felis tempus mattis vehicula id. Nullam mus
                  volutpat morbi at at quam feugiat neque ornare. Dolor
                  ullamcorper praesent ut viverra praesent cum tristique eu.
                  Mauris vestibulum ut in ac gravida. Et vestibulum fringilla
                  ipsum eget viverra nunc massa. Pellentesque vel ut ut turpis.
                  Sit ac at viverra vel cursus odio felis libero.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{
                width: "70%",
                borderTop: "1px solid #FFFFFF",
                backgroundColor: "rgba(0, 0, 0, 0)",
                backdropFilter: "blur(8px)",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header">
                <Typography style={{ color: "#FFFFFF", textAlign: "left" }}>
                  Quis interdum in aliquam elit morbi eget risus nulla.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{ color: "#FFFFFF", textAlign: "left" }}
                  variant="body2">
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              style={{
                width: "70%",
                borderTop: "1px solid #FFFFFF",
                backgroundColor: "rgba(0, 0, 0, 0)",
                backdropFilter: "blur(8px)",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header">
                <Typography style={{ color: "#FFFFFF", textAlign: "left" }}>
                  Personal data
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{ color: "#FFFFFF", textAlign: "left" }}
                  variant="body2">
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </>
        {/* <Login /> */}
      </Box>
    </>
  );
};

export default Faq;

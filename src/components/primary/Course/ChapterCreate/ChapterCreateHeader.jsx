import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ChapterCreateHeader = ({disabledButton}) => {
  const { course } = useSelector((state) => state.course);

  const navigate = useNavigate();
  const handleQuizCreate = () => {
    navigate(`/quiz-create/${course._id}`);
  };
   const handleChapterCreate = () => {
    navigate(`/create-chapter/${course._id}`);
  };
  return (
    <>
      <Box
        // className="headerBox"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          //   align-items: center;
          backgroundColor: "neutral.N000",
        }}>
        <Box sx={{ width: "60%" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "start",
              alignItems: "start",
              //   paddingX: "10px",
            }}>
            <CommonHeader title="Interaction Design for Usability" customButton="Create User" />
            <Typography sx={{ mt: 1 }} variant="wpf_p3_regular">
              Course Duration: <span style={{ fontWeight: "bold" }}>4 hrs 32 mins</span>{" "}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                sx={{
                  backgroundColor: "#36B37E",
                  color: "#fff",
                  textTransform: "none",
                  height: "36px",
                  width: "96px",
                  borderRadius: "8px",
                }} 
                onClick={() => handleChapterCreate()}  
              >
                Chapter
              </Button>
              <Button
                sx={{
                  backgroundColor: "#DFF2EA",
                  color: "#36B37E",
                  textTransform: "none",
                  height: "36px",
                  borderRadius: "8px",
                  ml: 2,
                  width: "96px",
                  "&:hover": {
                    color: "#000",
                  },
                }}
                onClick={() => handleQuizCreate()}>
                Quiz
              </Button>
            </Box>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: "12px 20px",
          }}>
          <Button
            type="submit"
            disabled={disabledButton}
            // disabled={true}
            sx={{
              backgroundColor: "#2E58FF",
              color: "#fff",
              textTransform: "none",
              height: "40px",
              borderRadius: "8px",
              ml: 2,
              width: "128px",
              "&:hover": {
                color: "#000",
              },
            }}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChapterCreateHeader;

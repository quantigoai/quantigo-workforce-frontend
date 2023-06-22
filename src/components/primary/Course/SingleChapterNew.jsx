import {Chip, Grid, Typography} from "@mui/material";
import React from "react";
import iconButton from "../../../assets/images/Vector (1).png";
import iconBlue from "../../../assets/images/blueIcon.png";
import iconChapter from "../../../assets/images/chapterIcon.svg";
import chapterBlueIcon from "../../../assets/images/blueChaptericon.svg";
import {useSelector} from "react-redux";

const SingleChapterNew = ({ courseChapter, index }) => {
  console.log(
    "🚀 ~ file: SingleChapterNew.jsx:8 ~ SingleChapterNew ~ index:",
    index
  );
  const { activeChapterIndex } = useSelector((state) => state.activePath);

  const Style80 = {
    background: "#82BD40",
    color: "#FFFFFF",
    FontSize: "12px",
    width: "100%",
  };
  const Style75 = {
    background: "#4A2D8B ",
    color: "#FFFFFF",
    FontSize: "12px",
    width: "100%",
  };
  const Style70 = {
    background: "#EB6651 ",
    color: "#FFFFFF",
    FontSize: "12px",
    width: "100%",
  };

  const scoreStyle = (score) => {
    let style = {};
    if (score >= 80) {
      style = Style80;
    } else if (score >= 75) {
      style = Style75;
    } else if (score >= 70) {
      style = Style70;
    } else {
      style = Style70;
    }
    return style;
  };

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <img
            src={activeChapterIndex === index ? chapterBlueIcon : iconChapter}
            // sx={{ color: activeChapterIndex === index ? "#2D58FF" : "#1D1D1D" }}
          />
        </Grid>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: activeChapterIndex === index ? "#2D58FF" : "#1D1D1D",
            }}>
            {courseChapter.title}
          </Typography>
        </Grid>
        {courseChapter.score !== undefined && (
          <Grid item xs={4}>
            {/* <Chip
              label={`score : ${courseChapter.score}`}
              sx={scoreStyle(courseChapter.score)}
            ></Chip> */}
            <Chip
              label={`Avg: ${courseChapter.scoreAverage}`}
              sx={scoreStyle(courseChapter.scoreAverage)}></Chip>
          </Grid>
        )}
      </Grid>

      <Grid item xs={2} sx={{ justifyContent: "right" }}>
        <img src={activeChapterIndex === index ? iconBlue : iconButton} />
      </Grid>
    </>
  );
};

export default SingleChapterNew;

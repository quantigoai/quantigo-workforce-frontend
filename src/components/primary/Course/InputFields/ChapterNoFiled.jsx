import {Grid, TextField} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";

const ChapterNoFiled = ({ courseChapter = {}, chapterNo, setChapterNo }) => {
  const { courseChapters } = useSelector((state) => state.course);

  React.useEffect(() => {
    if (courseChapters?.length) {
      setChapterNo(courseChapters?.length + 1);
    } else {
      setChapterNo(1);
    }
  }, [courseChapter.chapterNo]);

  return (
    <>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          sx={{ backgroundColor: "#FFFFFF" }}
          name="chapterNo"
          label="Chapter No"
          value={chapterNo}
          disabled
          defaultValue={courseChapter && courseChapter.chapterNo}
        ></TextField>
      </Grid>
    </>
  );
};

export default ChapterNoFiled;

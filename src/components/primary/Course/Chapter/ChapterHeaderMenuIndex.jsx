import { FormControl, InputLabel, ListItemText, MenuItem, Select, styled } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export const MySelect = styled(Select)(() => ({
  height: "40px",
  //   borderRadius: "px",
  border: "0px solid red",
  color: "#2E58FF",
  "& .MuiOutlinedInput-root": {
    // color: "red",
    // border: "1px solid red",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
    fontSize: "14px",
    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-notchedOutline ": {
    //   border: "1px solid #E6ECF5 !important",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const ChapterHeaderMenuIndex = () => {
  const { courseChapters, courseChapter, course } = useSelector((state) => state.course);
  console.log("🚀 ~ ChapterHeaderMenuIndex ~ courseChapters:", courseChapters);
  const { user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* <FormControl variant='filled' sx={{ m: 1 }}> */}
      {/* <InputLabel id='demo-simple-select-filled-label'>Chapters</InputLabel> */}
      <MySelect
        value={courseChapter._id}
        sx={{
          width: "15%",
        }}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        renderValue={(selected) => (
          <div>
            {isMenuOpen ? (
              <ListItemText
                primary={`CHAPTER ${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`}
              />
            ) : (
              `CHAPTER ${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`
            )}
          </div>
        )}
      >
        {courseChapters.map((chapter, index) => (
          <MenuItem key={chapter._id} value={chapter._id}>
            {/* <ListItemText primary={`CHAPTER ${index + 1}`} secondary={isMenuOpen ? chapter.title : null} /> */}
            <ListItemText
              primary={isMenuOpen ? chapter.title : null}
              secondary={isMenuOpen ? `Chapter ${index + 1}` : null}
            />
          </MenuItem>
        ))}
      </MySelect>
      {/* </FormControl> */}
    </>
  );
};

export default ChapterHeaderMenuIndex;
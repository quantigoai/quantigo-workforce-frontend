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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;

const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left", // Set the horizontal origin to left
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left", // Set the horizontal origin to left
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
      //   backgroundColor: "red", // Add your desired background color here
      borderRadius: "8px",
      overflow: "auto",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  },
};
const ChapterHeaderMenuIndex = () => {
  const { courseChapters, courseChapter, course } = useSelector((state) => state.course);
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
          width: "13%",
        }}
        MenuProps={MenuProps}
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
          <MenuItem
            sx={{
              borderBottom: "2px solid #F8FAFC",
              "& .MuiListItemText-primary": {
                fontWeight: 550,
              },
              "&:hover": {
                "& .MuiListItemText-primary": {
                  // Change the color when hovering
                  color: "blue",
                },
              },
            }}
            key={chapter._id}
            value={chapter._id}
          >
            {/* <ListItemText primary={`CHAPTER ${index + 1}`} secondary={isMenuOpen ? chapter.title : null} /> */}
            <ListItemText
              primary={isMenuOpen ? chapter.title : null}
              secondary={isMenuOpen ? `Chapter ${index + 1}` : null}
              // sx={{borderBottom:"1px solid red"}}
            />
          </MenuItem>
        ))}
      </MySelect>
      {/* </FormControl> */}
    </>
  );
};

export default ChapterHeaderMenuIndex;

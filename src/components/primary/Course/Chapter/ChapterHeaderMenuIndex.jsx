import { FormControl, InputLabel, ListItemText, MenuItem, Select, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAChapterById } from '../../../../features/slice/courseSlice';
import { setActiveChapterIndex } from '../../../../features/slice/activePathSlice';
export const MySelect = styled(Select)(() => ({
  height: '40px',
  //   borderRadius: "px",
  border: '0px solid red',
  color: '#2E58FF',
  '& .MuiOutlinedInput-root': {
    // color: "red",
    // border: "1px solid red",
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
    fontSize: '14px',
    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline ': {
    //   border: "1px solid #E6ECF5 !important",
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
  ' & .MuiSelect-icon': {
    color: '#2E58FF' /* Change the color to your desired color */,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;

const MenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left', // Set the horizontal origin to left
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left', // Set the horizontal origin to left
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
      //   backgroundColor: "red", // Add your desired background color here
      borderRadius: '8px',
      overflow: 'auto',
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': {
        width: '0.4em',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
  },
};
const ChapterHeaderMenuIndex = () => {
  const { courseChapters, courseChapter, course } = useSelector((state) => state.course);

  const { user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chapterID, setChapterID] = useState(courseChapter._id);
  const dispatch = useDispatch();
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  useEffect(() => {
    setChapterID(courseChapter._id);
  }, [courseChapter]);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleChange = (e) => {
    setChapterID(e.target.value.id);
    dispatch(setActiveChapterIndex(e.target.value.index));

    dispatch(getAChapterById(e.target.value.id));
  };
  return (
    <>
      {/* <FormControl variant='filled' sx={{ m: 1 }}> */}
      {/* <InputLabel id='demo-simple-select-filled-label'>Chapters</InputLabel> */}
      <MySelect
        sx={{
          // backgroundColor: "red",
          width: { xl: '15%', xxl: '13%', lg: '20%' },
        }}
        MenuProps={MenuProps}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        value={chapterID}
        onChange={(e) => handleChange(e)}
        renderValue={(selected) => (
          <div style={{ textAlign: 'left' }}>
            <Typography variant="wpf_p4_semiBold" sx={{ color: '#2E58FF' }}>
              {/* {`CHAPTER 0${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`} */}
              {`CHAPTER ${
                courseChapters.findIndex((chapter) => chapter._id === selected) + 1 < 10
                  ? `0${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`
                  : courseChapters.findIndex((chapter) => chapter._id === selected) + 1
              }`}
            </Typography>{' '}
            {/* {isMenuOpen ? (
              <ListItemText
                primary={`CHAPTER ${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`}
              />
            ) : (
              `CHAPTER ${courseChapters.findIndex((chapter) => chapter._id === selected) + 1}`
            )} */}
          </div>
        )}
      >
        {courseChapters.map((chapter, index) => (
          <MenuItem
            sx={{
              borderBottom: '2px solid #F8FAFC',
              '& .MuiListItemText-primary': {
                fontWeight: 550,
              },
              '&:hover': {
                '& .MuiListItemText-primary': {
                  // Change the color when hovering
                  color: 'blue',
                },
              },
            }}
            key={chapter._id}
            // value={chapter._id}
            value={{ id: chapter._id, index }}
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

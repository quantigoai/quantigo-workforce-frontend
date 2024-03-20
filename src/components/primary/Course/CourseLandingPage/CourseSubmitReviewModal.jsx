import { Box, Button, Fade, Modal, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectModalHeader from '../../ProjectLIstNew2/ProjectModalHeader';
import Backdrop from '@mui/material/Backdrop';
import Rating from '@mui/material/Rating';
import { LoadingButton } from '@mui/lab';
import { createCourseReview } from '../../../../features/slice/courseSlice';
import useToaster from '../../../../customHooks/useToaster';

const btnStyle = {
  textTransform: 'none',
  borderRadius: '8px',
  backgroundColor: '#2E58FF',
  padding: '10px 24px',
  color: '#fff',
  height: '40px',
  '&:hover': { backgroundColor: '#244EF5' },
  '&:disabled': { backgroundColor: '#B6C9F0', color: '#FFFFFF' },
};
const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  p: 0,
  input: {
    color: 'black',
    height: '20px',
    borderRadius: '8px',
  },
  select: {
    height: '20px',
  },
};
export const CRTextField = styled(TextField)(() => ({
  borderRadius: '5px',

  '& .MuiOutlinedInput-root': {
    // height: "35px",
    fontSize: '14px',
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',

    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 0px',
  },
  '& .MuiOutlinedInput-notchedOutline ': {},
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
}));
const CourseSubmitReviewModal = ({ user, isEnrollAble }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { course } = useSelector((state) => state.course);
  const toast = useToaster();
  const [open, setOpen] = React.useState(false);
  const [courseRating, setCourseRating] = React.useState(0);
  const [courseReview, setCourseReview] = React.useState('');
  const [courseReviewButtonShow, setCourseReviewButtonShow] = React.useState(true);

  const dispatch = useDispatch();
  const handleCourseReview = (e) => {
    setCourseReview(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setCourseRating(0);
    setOpen(false);
    setCourseReview('');
  };
  // useEffect(() => {
  //   console.log("hirittt");
  // }, [course]);
  const handleCourseReviewSubmit = () => {
    const data = {
      rating: courseRating,
      review: courseReview,
    };
    const FinalData = {
      data,
      id: course._id,
    };
    dispatch(createCourseReview(FinalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        setCourseReviewButtonShow(false);
        setOpen(false);
        setCourseRating(0);
        setCourseReview('');
        // dispatch(getACourseByID(course._id));
      }
    });
  };
  return (
    <>
      {user.completedCourses.includes(course._id) && !course?.isUserReviewed && courseReviewButtonShow && (
        <Button disabled={!isEnrollAble} sx={{ ...btnStyle, ml: 1 }} onClick={handleOpen}>
          Submit Review
        </Button>
      )}
      <>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                ...style,
                height: { xl: '60%', lg: '60%', xxl: '50%' },
                width: { xl: '40%', lg: '50%' },
              }}
            >
              <Box sx={{ flex: '0 0 5%' }}>
                <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={'Course Review'} />
              </Box>
              <Box
                sx={{
                  padding: '3%',
                  flex: '1',
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': {
                    width: '0', // Hide the scrollbar
                  },
                }}
              >
                <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="wpf_h7_medium"
                    sx={{
                      mb: 0,
                      color: 'neutral.N300',
                    }}
                  >
                    Course Rating
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={courseRating}
                    onChange={(event, newValue) => {
                      setCourseRating(newValue);
                    }}
                    precision={0.5}
                  />
                </Stack>
                <Stack spacing={1} sx={{ paddingTop: '4%' }}>
                  <Typography
                    variant="wpf_h7_medium"
                    sx={{
                      mb: 0,
                      color: 'neutral.N300',
                    }}
                  >
                    Course Review
                  </Typography>
                  <CRTextField
                    multiline
                    rows={7}
                    onChange={(e) => handleCourseReview(e)}
                    fullWidth
                    variant="outlined"
                  />
                </Stack>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingY: { lg: '10px', xl: '12px', xxl: '12px' },
                  paddingX: { lg: '14px', xl: '16px', xxl: '16px' },
                  mt: 1,
                  borderTop: '2px solid #F2F6FC',
                }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    textTransform: 'none',
                    paddingX: { lg: '20px', xl: '30px', xxl: '30px' },
                    paddingY: { lg: '3px', xl: '5px', xxl: '5px' },
                    fontSize: {
                      lg: '12px',
                      xl: '14px',
                      xxl: '14px',
                    },
                    height: { lg: '40px', xl: '40px', xxl: '40px' },
                    width: '120px',
                    borderRadius: '8px',
                    border: '1px solid #F4F7FE',
                    backgroundColor: '#F4F7FE',
                    color: '#62728F',
                    '&:hover': {
                      backgroundColor: '#F4F7FE',
                    },
                  }}
                  variant="filled"
                >
                  Cancel
                </Button>
                <LoadingButton
                  // type='submit'
                  // loading={isLoading}
                  disabled={!courseRating || !courseReview}
                  onClick={() => handleCourseReviewSubmit()}
                  sx={{
                    textTransform: 'none',
                    paddingX: { lg: '20px', xl: '30px', xxl: '30px' },
                    paddingY: { lg: '3px', xl: '5px', xxl: '5px' },
                    fontSize: {
                      lg: '12px',
                      xl: '14px',
                      xxl: '14px',
                    },
                    height: { lg: '40px', xl: '40px', xxl: '40px' },
                    width: '120px',
                    borderRadius: '8px',
                    backgroundColor: '#2E58FF',
                    '&:hover': {
                      background: '#244EF5',
                    },
                    '&:disabled': {
                      backgroundColor: '#B6C9F0',
                      color: '#FFFFFF',
                    },
                  }}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </>
    </>
  );
};

export default CourseSubmitReviewModal;

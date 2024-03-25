import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizResultShowPage = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { result } = useSelector((state) => state.quiz);
  const { course } = useSelector((state) => state.course);

  const { activeChapterIndex } = useSelector((state) => state.activePath);

  const navigate = useNavigate();
  const ShowResultField = [
    {
      label: 'Correct Answer',
      value: result?.submissionResult?.correctAnswer,
    },
    {
      label: 'Wrong Answer',
      value: result?.submissionResult?.wrongAnswer,
    },
    {
      label: 'Pending Answer',
      value: result?.submissionResult?.pendingAnswer,
    },
    {
      label: 'Score',
      value:
        result?.submissionResult?.score === 0
          ? '0'
          : result?.submissionResult?.score > 0
          ? Math.floor(result.submissionResult.score)
          : 'N/A',
    },
  ];
  const handleChangePage = (id) => {
    navigate(`/course-new/course-home-page/${id}`);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'neutral.N000',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: isLightTheme ? '#F1F5F9' : '',
            height: { xl: '23%', xxl: '18%', lg: '25%' },
            // paddingLeft: "10%",
            // paddingRight: "10%",
            // paddingTop: "1%",
            // paddingBottom: "3%",
            borderBottom: '2px solid ##F8FAFC',
            display: 'flex',
            paddingLeft: '10%',
            paddingRight: '10%',
            // justifyContent: "space-between",
            alignItems: 'center',
          }}
        >
          <Grid container sx={{}}>
            <Grid item xs={9}>
              <Grid container>
                <Grid xs={12} sx={{}}>
                  <Typography variant="wpf_h4_Bold">Chapter {activeChapterIndex}: Quiz Result</Typography>
                </Grid>
                <Grid xs={12} sx={{}}>
                  <Typography variant="wpf_p3_regular">{result?.submissionResult?.courseChapter?.name} </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button
                onClick={() => handleChangePage(course._id)}
                sx={{
                  backgroundColor: '#2E58FF',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#2E58FF',
                    color: '#fff',
                  },
                  borderRadius: '32px',
                  height: '40px',
                  padding: '5%',
                }}
              >
                Go Back Course
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // height: "82%",
            height: { xl: '77%', xxl: '82%', lg: '75%' },
            paddingLeft: '10%',
            paddingRight: '8%',
            // overflow: "auto",
            // scrollbarWidth: "thin",
            // "&::-webkit-scrollbar": {
            //   width: "0.4em",
            // },
            // "&::-webkit-scrollbar-track": {
            //   background: "#f1f1f1",
            // },
            // "&::-webkit-scrollbar-thumb": {
            //   backgroundColor: "#888",
            // },
            // "&::-webkit-scrollbar-thumb:hover": {
            //   background: "#555",
            // },
          }}
        >
          <Grid container gap={2} sx={{ paddingTop: '3%' }}>
            {ShowResultField.map((item) => (
              <>
                <Grid
                  item
                  xs={2.8}
                  sx={{
                    backgroundColor: isLightTheme ? '#F8FAFC' : '',
                    borderRadius: '12px',
                    height: '130px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // alignContent: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      xs={12}
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4%' }}
                    >
                      <Typography variant="wpf_h6_regular">{item.label}</Typography>
                    </Grid>
                    <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="wpf_h4_Bold">{item.value}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default QuizResultShowPage;

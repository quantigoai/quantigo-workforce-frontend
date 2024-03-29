import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBarForDashboard = () => {
  const [progress, setProgress] = React.useState(80);
  const { user, isLoading } = useSelector((state) => state.user);
  const { profileCompletePercentage } = user;

  // useEffect(() => {
  //   if (user.user.isNDASigned && user.user.isDocumentsSubmitted === 'submitted') {
  //     setProgress(100);
  //   } else if (!user.user.isNDASigned && user.user.isDocumentsSubmitted === 'submitted') {
  //     setProgress(90);
  //   } else if (user.user.isNDASigned && user.user.isDocumentsSubmitted === 'pending') {
  //     setProgress(90);
  //   }
  // }, [user]);
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            // backgroundColor: "red",
          }}
          size="55px"
          thickness={5}
          // {...props}
          value={100}
        />
        <CircularProgress
          // style={styles.progress}
          variant="determinate"
          disableShrink
          sx={{
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            color: (theme) =>
              theme.palette.mode === 'light' ? '#2D58FF' : '#2D58FF',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
          }}
          size="55px"
          value={profileCompletePercentage}
          thickness={5}
          // {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 4,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: "blue",
          }}
        >
          <Typography variant="wpf_h7_semiBold">
            {Math.round(profileCompletePercentage)}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProgressBarForDashboard;

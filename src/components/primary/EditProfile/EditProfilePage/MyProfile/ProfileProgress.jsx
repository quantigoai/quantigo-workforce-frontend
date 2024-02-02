import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: { xxl: '170px', xl: '150px', lg: '120px' }, mr: 1 }}>
        <LinearProgress
          sx={{ height: '8px', borderRadius: '4px' }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="wpf_h7_medium" color="grey.500">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const ProfileProgress = ({ percentage }) => {
  const [progress, setProgress] = React.useState(90);
  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={percentage} />
    </Box>
  );
};

export default ProfileProgress;

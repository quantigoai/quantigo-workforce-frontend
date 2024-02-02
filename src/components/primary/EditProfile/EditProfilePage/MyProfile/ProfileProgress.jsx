import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

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

const ProfileProgress = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const { profileCompletePercentage } = user;

  return (
    <Box sx={{ width: '100%' }}>
      {!isLoading && (
        <LinearProgressWithLabel value={profileCompletePercentage} />
      )}
    </Box>
  );
};

export default ProfileProgress;

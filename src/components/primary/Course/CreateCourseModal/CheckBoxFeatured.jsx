import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Typography } from '@mui/material';
import React from 'react';

const CheckBoxFeatured = ({ checkedFeatured, handleChangeFeatured, label }) => {
  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={checkedFeatured} onChange={handleChangeFeatured} />}
        label={
          <Typography
            variant="wpf_h7_medium"
            sx={{
              mb: 0,
              color: 'neutral.N300',
            }}
          >
            {label}
          </Typography>
        }
      />
    </Box>
  );
};

export default CheckBoxFeatured;

import { Box, Checkbox, FormControlLabel, FormLabel, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CheckBoxFeatured = ({ isFeatured, handleChangeFeatured, label }) => {
  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={isFeatured} onChange={handleChangeFeatured} />}
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

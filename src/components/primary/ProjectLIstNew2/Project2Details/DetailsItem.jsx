import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const DetailsItem = ({ Item1Title, Item1, Item2Title, Item2, isLightTheme }) => {
  return (
    <>
      <Stack sx={{ borderBottom: '1px solid #E6ECF5' }}>
        <Grid container>
          <Grid item xs={6} sx={{ borderRight: '1px solid #E6ECF5', padding: '15px' }}>
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? '#091E42' : '#fff', opacity: isLightTheme && '0.7' }}
            >
              {Item1Title}
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium_2" sx={{ color: isLightTheme ? '#091E42' : '#fff', fontWeight: '500' }}>
              {Item1}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ padding: '15px' }}>
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? '#091E42' : '#fff', opacity: isLightTheme && '0.7', fontWeight: '500' }}
            >
              {Item2Title}
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium_2" sx={{ color: isLightTheme ? '#091E42' : '#fff', fontWeight: '500' }}>
              {Item2}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItem;

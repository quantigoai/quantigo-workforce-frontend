import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailsItemThree = ({
  Item1Title,
  Item1,
  Item2Title,
  Item2,
  Item3Title,
  Item3,
  isBlocked,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack sx={{ borderBottom: '1px solid #E6ECF5' }}>
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{ borderRight: '1px solid #E6ECF5', padding: '2%' }}
          >
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? '#7B98BA' : '#fff' }}
            >
              {Item1Title}
            </Typography>
            <br />
            <Typography
              variant="wpf_p3_medium"
              sx={{
                color: isLightTheme ? '#091E42' : '#fff',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {Item1}
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{ borderRight: '1px solid #E6ECF5', padding: '2%' }}
          >
            <Typography
              sx={{ color: isLightTheme ? '#7B98BA' : '#fff' }}
              variant="wpf_h8_regular"
            >
              {Item2Title}
            </Typography>
            <br />
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Typography
                variant="wpf_p3_medium"
                sx={{ color: isLightTheme ? '#091E42' : '#fff' }}
              >
                {Item2}
              </Typography>
              {isBlocked && (
                <LockPersonIcon
                  sx={{
                    color: 'red',
                    px: '0px',
                    height: {
                      lg: '10px',
                      xl: '12px',
                      xxl: '14px',
                    },
                    width: {
                      lg: '10px',
                      xl: '12px',
                      xxl: '14px',
                    },
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ padding: '2%' }}>
            <Typography
              sx={{ color: isLightTheme ? '#7B98BA' : '#fff' }}
              variant="wpf_h8_regular"
            >
              {Item3Title}
            </Typography>
            <br />
            <Typography
              variant="wpf_p3_medium"
              sx={{ color: isLightTheme ? '#091E42' : '#fff' }}
            >
              {Item3}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItemThree;

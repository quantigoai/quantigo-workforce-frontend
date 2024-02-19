import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FIlterField from './FIlterField';
import { courseCategoryFields, courseLevelFields } from '../../AllUsers/userFilterOptions';

const MIniModalCourseFilter = ({ handleResetFilter, handleFilterCourse, handleCloseFilter, handleChange, filter }) => {
  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: 'background.paper',
          width: { xxl: '350px', xl: '320px', lg: '300px' },
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            paddingY: '10px',
            paddingX: '15px',
          }}
        >
          <Typography variant="wpf_p1_semiBold">Filter By</Typography>
          <CloseIcon sx={{ color: '#2D58FF', cursor: 'pointer', fontweight: '600 ' }} onClick={handleCloseFilter} />
        </Box>
        {/* <br /> */}
        <Box sx={{ px: '15px' }}>
          <Grid item xs={12}>
            <FIlterField
              label={'Level'}
              filterValue="level"
              levelOptions={courseLevelFields}
              handleChange={handleChange}
              filter={filter}
            />
          </Grid>
          <Grid sx={{ mt: '8px' }} item xs={12}>
            <FIlterField
              label={'Category'}
              filterValue="category"
              levelOptions={courseCategoryFields}
              handleChange={handleChange}
              filter={filter}
            />
          </Grid>
        </Box>
        <br />

        <br />
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: '15px',
              paddingY: '10px',
            }}
          >
            <Box>
              <Button
                onClick={handleResetFilter}
                fullWidth
                sx={{
                  backgroundColor: '#FF4757',
                  color: '#FFF',
                  textTransform: 'none',
                  borderRadius: '8px',
                  lineHeight: '20px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  fontSize: { xxl: '14px', xl: '12px', lg: '10px' },
                  height: { xxl: '40px', xl: '40px', lg: '35px' },
                  '&:hover': {
                    backgroundColor: '#FF4757',
                    color: '#FFF',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#F5C4C8',
                    color: '#FFFFFF',
                  },
                }}
              >
                Reset
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  textTransform: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#2E58FF',
                  lineHeight: '20px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  fontSize: { xxl: '14px', xl: '12px', lg: '10px' },
                  height: { xxl: '40px', xl: '40px', lg: '35px' },
                  color: 'white',
                  '&:hover': {
                    background: '#244EF5',
                  },
                  padding: '16px 10px',
                }}
                onClick={handleFilterCourse}
                fullWidth
                variant="contained"
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MIniModalCourseFilter;

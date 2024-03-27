/*
 * File           : FilterModal.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 27 Mar 2024 11:52:55
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed Mar 27 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { courseCategoryFields, courseLevelFields } from '../../../AllUsers/userFilterOptions';
import FIlterFIeld2 from './FIlterFIeld2';
import FIlterField from './FIlterField';

const FilterModal = ({ handleCloseFilter }) => {
  const [myContext] = useOutletContext();
  const { courseFilterDispatch } = myContext;
  const { level } = useParams();
  const { filter, handleFilterCourse, handleResetFilter, handleChangeFilter } = courseFilterDispatch;

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
            paddingY: '20px',
            paddingX: '20px',
          }}
        >
          <Typography variant='wpf_p1_semiBold'>Filter By</Typography>
          <CloseIcon
            sx={{ color: '#2D58FF', cursor: 'pointer', fontweight: '600 ', filter: 'grayscale(80%)' }}
            onClick={handleCloseFilter}
          />
        </Box>
        {/* <br /> */}
        <Box sx={{ px: '20px' }}>
          {!level && (
            <Grid item xs={12}>
              <FIlterField
                label={'Level'}
                filterValue='level'
                levelOptions={courseLevelFields}
                handleChange={handleChangeFilter}
                filter={filter}
              />
            </Grid>
          )}
          <Grid sx={{ mt: '8px' }} item xs={12}>
            <FIlterFIeld2
              label={'Category'}
              filterValue='category'
              levelOptions={courseCategoryFields}
              handleChange={handleChangeFilter}
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
              paddingX: '20px',
              // paddingY: '20px',
              paddingBottom: '10px',
            }}
          >
            <Box>
              <Button
                onClick={handleResetFilter}
                fullWidth
                sx={{
                  backgroundColor: '#F4F7FE',
                  color: '#62728F',
                  textTransform: 'none',
                  borderRadius: '8px',
                  lineHeight: '20px',
                  paddingX: '16px',
                  paddingY: '10px',
                  border: ' 1px solid  #F4F7FE',
                  width: { xxl: '130px', xl: '128px', lg: '110px' },
                  fontSize: { xxl: '14px', xl: '12px', lg: '10px' },
                  height: { xxl: '40px', xl: '40px', lg: '35px' },
                  '&:hover': {
                    backgroundColor: '#F4F7FE',
                    color: '#62728F',
                    border: ' 1px solid  #2E58FF',
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
                  paddingX: '16px',
                  paddingY: '10px',
                  width: { xxl: '130px', xl: '128px', lg: '110px' },
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
                variant='contained'
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

export default FilterModal;

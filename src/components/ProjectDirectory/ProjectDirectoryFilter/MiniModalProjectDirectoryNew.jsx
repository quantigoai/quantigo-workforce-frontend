import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SelectFilterProjectDirectory from './SelectFilterProjectDirectory';

import { useSelector } from 'react-redux';
import ItemsField from './ItemsField';

const MiniModalProjectDirectoryNew = ({
  setProjectDirectoryRemove,
  handleCloseFilter,
  handleFilterProjectDirectory,
  handleResetProjectDirectory,
  handleMenuItemClick,
  setAnchorEl,
  anchorEl,
  menuFilter,
  handleValue,
}) => {
  // console.table(menuFilter);
  const [showingField, setShowingField] = useState([]);

  useEffect(() => {
    const filteredShow = menuFilter.filter((item) => {
      if (item.isFieldShow) {
        return item;
      }
    });
    setShowingField(filteredShow);
  }, [menuFilter]);

  // const [anchorEl, setAnchorEl] = useState(null);
  const { isLightTheme } = useSelector((state) => state.theme);


  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: 'background.paper',
          width: { xxl: '400px', xl: '300px', lg: '300px' },
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
            <SelectFilterProjectDirectory
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
              menuFilter={menuFilter}
            />
          </Grid>
        </Box>
        <br />

        {showingField.map((item) => (
          <Grid key={item.value} container sx={{ padding: '1%' }}>
            <ItemsField
              item={item}
              handleValue={handleValue}
              title={item.title}
              type={item.value}
              isLightTheme={isLightTheme}
            />
          </Grid>
        ))}



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
                onClick={handleResetProjectDirectory}
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
                onClick={handleFilterProjectDirectory}
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

export default MiniModalProjectDirectoryNew;

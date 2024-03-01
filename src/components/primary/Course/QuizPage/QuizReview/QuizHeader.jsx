import { Box, Button, Grid, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterListOff';
import CommonHeader from '../../../../shared/CustomComponenet/CommonHeader/CommonHeader';
import ClearIcon from '@mui/icons-material/Clear';
const QuizHeader = ({ setSearch, search, searchRef, handleSearch, clearSearch }) => {
  return (
    <>
      <Box
        className="contentHeader"
        sx={{
          backgroundColor: 'neutral.N000',
        }}
      >
        <Box sx={{ width: '30%', padding: '12px 16px' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* TODO Need to remove the unnecessary custom button */}
            <CommonHeader title="Quiz Submissions" customButton="Create User" />
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 20px',
          }}
        >
          <Paper
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { lg: '160px', xl: '240px', xxl: '240px' },
              height: {
                lg: '30px',
                xl: '40px',
                xxl: '40px',
              },
              backgroundColor: 'primary.B008',
              border: '1px solid #EFF3FE',
              borderRadius: '8px',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <IconButton disabled type="button" sx={{ p: '5px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              inputRef={searchRef}
              sx={{
                ml: 0,
                flex: 1,
                fontFamily: 'Inter',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              }}
              placeholder="Search"
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  handleSearch(ev);
                  ev.preventDefault();
                }
              }}
            />
            {search && (
              <Button
                sx={{
                  height: '30px',
                  minWidth: '40px',
                }}
              >
                <ClearIcon
                  sx={{
                    height: {
                      lg: '20px',
                      xl: '40px',
                      xxl: '40px',
                    },
                    color: 'neutral.N300',
                    '&:hover': {
                      color: '#F04438',
                    },
                  }}
                  onClick={clearSearch}
                />
              </Button>
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default QuizHeader;

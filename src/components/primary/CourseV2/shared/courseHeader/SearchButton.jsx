/*
 * File           : SearchButton.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 11:18:12
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import useCourseFilterDispatch from '../../hooks/useCourseFilterDispatch';

const SearchButton = ({x}) => {
  const { search, searchRef, handleSearch, clearSearch } = x;
  return (
    <>
      <Box sx={{ pl: '10px' }}>
        <Paper
          sx={{
            // p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: { xxl: '240px', xl: '240px', lg: '140px' },
            backgroundColor: 'neutral.N000',
            border: '1px solid #EFF3FE',
            borderRadius: '8px',
            outline: 'none',
            boxShadow: 'none',
          }}
        >
          <IconButton disabled type='button' sx={{ p: '5px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
          <InputBase
            inputRef={searchRef}
            sx={{
              ml: 0,
              flex: 1,
              fontFamily: 'Inter',
              fontSize: { xl: '14px', xxl: '16px', lg: '10px' },
            }}
            placeholder='Search'
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
    </>
  );
};

export default SearchButton;

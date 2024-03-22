/*
 * File           : IconButton.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 11:19:54
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
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@mui/material';

import React from 'react';

const FilterIconButton = () => {
  return (
    <>
      <IconButton
        //   onClick={handleClickFilter}
        sx={{
          // backgroundColor: openModal ? '#344054' : '#fff',
          //   backgroundColor: "primary.B008",
          mx: '5px',
          borderRadius: '8px',
        }}
        aria-label='menu'
      >
        {/* {openModal ? (
            <FilterListOffIcon sx={{ color: 'primary.main' }} />
          ) : (
            <FilterListIcon sx={{ color: 'primary.main' }} />
          )} */}
        <FilterListIcon sx={{ color: 'primary.main' }} />
      </IconButton>
    </>
  );
};

export default FilterIconButton;

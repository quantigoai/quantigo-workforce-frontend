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
import { IconButton, Popover } from '@mui/material';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

import React, { useState } from 'react';
import MIniModalCourseFilter from '../../../Course/CourseHeader/MIniModalCourseFilter';

const FilterIconButton = () => {
  const [anchorE2, setAnchorE2] = useState(null);
  const openModal = Boolean(anchorE2);
  const id = openModal ? 'simple-popover' : undefined;
  const handleCloseFilter = () => {
    setAnchorE2(null);
  };
  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  return (
    <>
      <IconButton
        onClick={handleClickFilter}
        sx={{
          // backgroundColor: openModal ? '#344054' : '#fff',
          //   backgroundColor: "primary.B008",
          mx: '5px',
          borderRadius: '8px',
        }}
        aria-label="menu"
      >
        {openModal ? (
          <FilterListOffIcon sx={{ color: 'primary.main' }} />
        ) : (
          <FilterListIcon sx={{ color: 'primary.main' }} />
        )}
        {/* <FilterListIcon sx={{ color: 'primary.main' }} /> */}
      </IconButton>

      <Popover
        id={id}
        open={openModal}
        anchorEl={anchorE2}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MIniModalCourseFilter
          // handleResetFilter={handleResetFilter}
          // handleFilterCourse={handleFilterCourse}
          handleCloseFilter={handleCloseFilter}
          // handleChange={handleChange}
          filter={{}}
          // level={level}
        />
      </Popover>
    </>
  );
};

export default FilterIconButton;

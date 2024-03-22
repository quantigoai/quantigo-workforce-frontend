/*
 * File           : CreateCourseButton.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 11:30:31
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
import { Button } from '@mui/material';
import React from 'react';

const CreateCourseButton = () => {
  return (
    <>
      <Button
        sx={{
          textTransform: 'none',
          borderRadius: '8px',

          backgroundColor: '#2E58FF',
          color: 'white',

          '&:hover': {
            background: '#244EF5',
          },
        }}
        variant='contained'
        // onClick={handleOpen}
      >
        <i style={{ fontSize: '17px', marginRight: '6px' }} className='ri-add-fill'></i> Create Course
      </Button>
    </>
  );
};

export default CreateCourseButton;

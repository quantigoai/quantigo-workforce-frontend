import React from 'react'
import Iconify from './Iconify';
import {Badge, IconButton,} from '@mui/material';

const NotificationProvider = () => {
  return (
    <div><IconButton
    // ref={anchorRef}
    // color={open ? 'primary' : 'default'}
    // onClick={handleOpen}
    sx={{ width: 40, height: 40 }}
  >
    <Badge  color="error">
      <Iconify icon="eva:bell-fill" width={20} height={20} />
    </Badge>
  </IconButton></div>
  )
}
export default NotificationProvider;
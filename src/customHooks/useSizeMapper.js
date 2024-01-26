/*
 * File           : useSizeMapper.js
 * Project        : wmpfrontv2
 * Created Date   : Th 25 Jan 2024 03:02:55
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Jan 25 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const useSizeMapper = (val) => {
  const sizeMapper = ({ lg, xl, xxl }) => {
    const theme = useTheme();
    const in_XXL = useMediaQuery(theme.breakpoints.up('xxl'));
    const in_XL = useMediaQuery(theme.breakpoints.between('xl', 'xxl'));
    const in_LG = useMediaQuery(theme.breakpoints.down('xl'));
    if (in_XXL) {
      return xxl;
    } else if (in_XL) {
      return xl;
    } else if (in_LG) {
      return lg;
    }
  };
  return { sizeMapper };
};

export default useSizeMapper;

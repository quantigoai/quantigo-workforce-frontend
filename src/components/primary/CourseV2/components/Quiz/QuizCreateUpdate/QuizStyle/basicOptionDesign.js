/*
 * File           : basicOptionDesign.js
 * Project        : wmpfrontv2
 * Created Date   : Th 07 Mar 2024 01:15:09
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Mar 07 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { Radio, TextField, styled } from '@mui/material';

export const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

export const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#2E58FF',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#2E58FF',
  },
});

export const TextFieldOption = styled(TextField)(() => ({
  borderRadius: '8px',
  height: '40px',
  backgroundColor: '#F9FAFB',
  padding: '9px 8px 8px 0px',
  fontSize: '12px',

    '& .MuiInputBase-root': {
    // height: '40px',
    fontSize: '12px',
    fontFamily: 'Inter',
    '@media(max-width:1439px)': {
      // height: '30px',
      fontSize: '10px',
    },
    '@media(min-width: 1920px)': {
      fontSize: '14px',
    },
  },
  // '& .MuiOutlinedInput-root': {
  //   height: '40px',
  //   // width:"100%",
  //   width:"350px",
  //   fontSize: '14px',
  //   // maxHeight:"64px",
  //   // border: "px solid #E6ECF5 !important",
  //   borderRadius: '8px',

  //   '@media (max-width: 1439px)': {
  //     fontSize: '12px',
  //   },
  //   '@media (mix-width: 1920px)': {
  //     fontSize: '14px',
  //   },
  // },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiOutlinedInput-notchedOutline ': {},
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
}));
export const RadioOption = styled(Radio)(() => ({
  // ... your existing styles
}));


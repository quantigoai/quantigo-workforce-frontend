/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/LanguageChip.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, February 16th 2023, 2:35:14 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Chip } from '@mui/material';
import React from 'react';
import { capitalizeFirstLetter } from '../../../helper/capitalizeFirstWord';

const bnStyle = {
  width: '100%',
  height: '33px',
  backgroundColor: '#FFF8EB',
  borderRadius: '10px',
  border: '1px solid rgba(255, 171, 0, 0.24)',
  color: '#FFAB00',
};
const enStyle = {
  width: '100%',
  height: '33px',
  backgroundColor: '#FFF8EB',
  borderRadius: '10px',
  border: '1px solid rgba(255, 171, 0, 0.24)',
  color: '#FFAB00',
};
const LanguageChip = ({ language }) => {
  let style = {};

  switch (language) {
    case 'bengali':
      style = bnStyle;
      break;
    case 'english':
      style = enStyle;
      break;
    default:
      style = bnStyle;
      break;
  }
  return (
    <>
      <Chip sx={style} label={capitalizeFirstLetter(language)} />
    </>
  );
};

export default LanguageChip;

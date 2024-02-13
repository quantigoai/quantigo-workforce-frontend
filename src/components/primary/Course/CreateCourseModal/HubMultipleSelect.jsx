import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Chip, MenuItem, Select, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CustomFormControl } from '../../../shared/CustomField/CustomSelectField';

export const MySelect = styled(Select)(() => ({
  height: '35px',
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
    color: '#000',
    border: '1px solid #E6ECF5 !important',
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiOutlinedInput-notchedOutline ': {
    border: '1px solid #E6ECF5 !important',
  },
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
const iconStyle = {
  color: 'rgba(45, 88, 255, 1)',
  marginRight: '5px',
  cursor: 'pointer',
};
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};

const HubMultipleSelect = ({ options, hubSet, handleChange, isUpdate }) => {
  const location = useLocation();
  const { course } = useSelector((state) => state.course);

  // const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { isLightTheme } = useSelector((state) => state.theme);

  //   useEffect(() => {
  //     if (location.pathname === "/create-course" || location.pathname === "/jobs/create-job") {
  //       setIsUpdate(false);
  //     } else {
  //       setIsUpdate(true);
  //     }
  //     setIsLoading(false);
  //   }, [location.pathname]);

  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <CustomFormControl fullWidth>
        <Typography
          variant={'wpf_h7_medium'}
          sx={{
            mb: 0,
            color: 'neutral.N300',
          }}
        >
          Hub
        </Typography>
        <MySelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          sx={{
            background: isLightTheme && '#FFFFFF',
          }}
          multiple
          fullWidth
          variant="outlined"
          onOpen={handleOpenClose}
          onClose={handleOpenClose}
          IconComponent={KeyboardArrowDownIcon}
          defaultValue={isUpdate ? course?.hubs?.map((s) => s) : hubSet}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: 0.5,
                fontSize: '12px',
                height: '20px',
              }}
            >
              {selected?.map(
                (value, i) => [0].includes(i) && <Chip key={i} sx={{ fontSize: '12px', height: '95%' }} label={value} />
              )}
              {selected.length > 1 && (
                <Typography variant="p" sx={{ ml: 2, mt: 0 }}>
                  {' '}
                  + {selected.length - 1} more
                </Typography>
              )}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((skill) => (
            <MenuItem sx={{ fontSize: '12px' }} key={skill.name} value={skill.name}>
              {skill.name}
            </MenuItem>
          ))}
        </MySelect>
      </CustomFormControl>
    </>
  );
};

export default HubMultipleSelect;

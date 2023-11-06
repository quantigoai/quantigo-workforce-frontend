import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Chip, MenuItem, Select, styled, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CustomFormControl } from './CustomSelectField';

// export const MySelect = styled(Select)(() => ({
//   border: "2px solid #E6ECF5",
//   // padding: "5px 0px 0px 0px",
//   // background: "white",
//   height: "50%",
//   borderRadius: "8px",
// }));
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
const PDskillFIeldEdit = ({
  name,
  addSkills,
  label,
  handleChangeSkill,
  selectedSkills,
  skills,
  isEdit,
  count,
  ...other
}) => {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomFormControl fullWidth>
            <Box>
              <Typography
                variant="wpf_h7_medium"
                sx={{
                  mb: 0,
                  color: 'neutral.N300',
                }}
              >
                {label}
              </Typography>
              <Box sx={{ width: '100%' }}>
                <MySelect
                  sx={{
                    width: '100%',
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  {...field}
                  variant="outlined"
                  multiple
                  defaultValue={
                    // isEdit
                    selectedSkills.length
                      ? selectedSkills?.map((skill) => skill.name)
                      : []
                    // : addSkills?.map((skill) => skill.name)
                  }
                  // defaultValue={isEdit ? selectedSkills?.map((skill) => skill.name) : addSkills}
                  onChange={handleChangeSkill}
                  IconComponent={KeyboardArrowDownIcon}
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
                        (value, i) =>
                          [0].includes(i) && (
                            <Chip
                              sx={{
                                fontSize: '11px',
                                height: '90%',
                                border: '1px solid #E6ECF5',
                                backgroundColor: 'neutral.N400',
                              }}
                              key={value}
                              label={value}
                            />
                          ),
                      )}
                      {isEdit ? (
                        selectedSkills?.length > 1 && selected?.length > 1 ? (
                          <Typography
                            variant="wpf_p5_regular"
                            sx={{ ml: 2, mt: 0 }}
                          >
                            {' '}
                            + {count} more
                          </Typography>
                        ) : (
                          selected?.length > 1 && (
                            <Typography
                              variant="wpf_p5_regular"
                              sx={{ ml: 2, mt: 0 }}
                            >
                              {' '}
                              + {count} more
                            </Typography>
                          )
                        )
                      ) : (
                        selected?.length > 1 && (
                          <Typography
                            variant="h7"
                            sx={{ ml: 2, mt: 0 }}
                            // ref={inputRef}
                          >
                            {' '}
                            + {count} more
                          </Typography>
                        )
                      )}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {skills?.map((skill) => (
                    <MenuItem
                      sx={{ fontSize: '14px' }}
                      key={skill._id}
                      value={skill.name}
                    >
                      {skill.name}
                    </MenuItem>
                  ))}
                </MySelect>
              </Box>
            </Box>
          </CustomFormControl>
        </>
      )}
    />
  );
};

export default PDskillFIeldEdit;

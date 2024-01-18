import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Box, Chip, MenuItem, Select, styled, Typography} from '@mui/material';
import React from 'react';
import {MyFormControl} from '../../shared/CustomField/CustomDatePicker';

export const MySelect = styled(Select)(() => ({
  border: '1px solid #E6ECF5',
  borderRadius: '8px',
}));
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      fontFamily: 'Inter',
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};
const UserSkillFieldSelect = ({
  name,
  addSkills,
  handleChangeSkill,
  skills,
  count,
  handleClickAway,
  label,
}) => {

  return (
    <>
      <MyFormControl fullWidth>
        <MySelect
          sx={{
            backgroundColor: 'neutral.N000',
            height: {
              lg: '30px',
              xl: '36px',
              xxl: '36px',
            },

            fontSize: { lg: '12px', xl: '14px', xxl: '14px' },
            fontFamily: 'Inter',
          }}
          displayEmpty
          multiple
          value={addSkills?.map((skill) => skill?.name) || ''}
          onChange={handleChangeSkill}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography variant="h7" color="neutral.N300">
                  {label}
                </Typography>
              );
            }
            return (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)',
                  alignItems: 'center',
                  gap: 0.5,
                  fontFamily: 'Inter',
                }}
              >
                {selected?.map(
                  (value, i) =>
                    [0].includes(i) && (
                      <Chip
                        sx={{
                          height: {
                            lg: '20px',
                            xl: '24px',
                            xxl: '28px',
                          },
                          borderRadius: '32px',
                          border: '1px solid #E6ECF5',
                          fontFamily: 'Inter',
                          fontSize: { xl: '14px', xxl: '14px', lg: '12px' },
                          color: 'neutral.700',
                        }}
                        key={value}
                        label={value}
                      />
                    ),
                )}
                {selected?.length > 1 && (
                  <Typography
                    variant="h7"
                    sx={{
                      fontFamily: 'Inter',
                      pl: '4px',
                      mt: 0,
                      color: 'neutral.700',
                    }}
                  >
                    + {count} more
                  </Typography>
                )}
              </Box>
            );
          }}
          name={name}
          MenuProps={MenuProps}
          onClose={handleClickAway}
        >
          {skills?.map((skill) => (
            <MenuItem
              sx={{
                fontFamily: 'Inter',
                color: 'neutral.700',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              }}
              key={skill._id}
              value={skill.name || ''}
            >
              {skill.name}
            </MenuItem>
          ))}
        </MySelect>
      </MyFormControl>
    </>
  );
};

export default UserSkillFieldSelect;

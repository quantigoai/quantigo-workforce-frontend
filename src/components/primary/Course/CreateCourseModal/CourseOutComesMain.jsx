import { Box, FormControl, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldForTest from '../../../shared/CustomField/TextFieldForTest';
import { useSelector } from 'react-redux';

const MyTextField = styled(TextField)(() => ({
  borderRadius: '5px',
  //   backgroundColor: isLightTheme && '#FFF',
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',
    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 0px',
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
const CourseOutComesMain = ({ outcomes, setOutcomes, defaultValue }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    if (defaultValue && defaultValue.length > 0) {
      setHasChanged(true);
    }
  }, [defaultValue]);
  const handleFieldChange = (index, value) => {
    const newOutcomes = [...outcomes];
    newOutcomes[index] = value;
    setOutcomes(newOutcomes);
    if (value) {
      setHasChanged(true);
    }
  };

  const handleAddOtherDocument = () => {
    setOutcomes([...outcomes, '']);
  };

  const handleRemove = (index) => {
    const newOutcomes = [...outcomes];
    newOutcomes.splice(index, 1);
    setOutcomes(newOutcomes);
  };

  return (
    <>
      {outcomes.map((outcome, index) => (
        <Box key={index}>
          <Stack direction="row" spacing={2} xs={12}>
            <FormControl fullWidth>
              <Typography variant="wpf_h7_medium" sx={{ fontSize: '12px', fontWeight: '500', mb: 1, mt: 1 }}>
                Outcomes
              </Typography>
              <MyTextField
                multiline
                rows={2}
                fullWidth
                type="text"
                defaultValue={outcome}
                // value={outcome}
                onChange={(e) => handleFieldChange(index, e.target.value)}
              />
              {outcomes.length !== 1 && (
                <Box
                  sx={{
                    color: 'red',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: { xxl: 780, xl: 690, lg: 580 },
                    top: 58,
                    height: '30px',
                    width: '30px',
                    fontSize: '20px',
                  }}
                >
                  <i onClick={() => handleRemove(index)} className="ri-delete-bin-line"></i>
                </Box>
              )}
            </FormControl>
          </Stack>
        </Box>
      ))}
      <Typography
        sx={{
          fontWeight: '600',
          mt: '15px',
          fontSize: '14px',
          mb: '0px',
          color: hasChanged ? '#2E58FF' : '#7D89A3',
          cursor: 'pointer',
          pointerEvents: hasChanged ? 'auto' : 'none',
        }}
        variant="p"
        type="button"
        onClick={handleAddOtherDocument}
      >
        <i className="ri-add-line"></i> Add another outcome
      </Typography>
    </>
  );
};

export default CourseOutComesMain;

import { Box, FormControl, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const CourseOutcomes = ({ name, defaultValueItems }) => {
  const MyTextField = styled(TextField)(() => ({
    borderRadius: '5px',
    backgroundColor: isLightTheme && '#FFF',
    '& .MuiOutlinedInput-root': {
      // height: "35px",
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
  const { watch, control, setValue, getValues } = useFormContext();

  const { isLightTheme } = useSelector((state) => state.theme);
  const [hasChanged, setHasChanged] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  React.useEffect(() => {
    if (defaultValueItems && defaultValueItems.length > 0 && fields.length === 0) {
      setValue(name, defaultValueItems);
      setHasChanged(true);
    } else if (fields.length === 0) {
      append({ outComes: '' });
    }
  }, [defaultValueItems]);
  const handleFieldChange = (index, fieldName, value) => {
    const fieldNameKey = `outComes[${index}].${fieldName}`;
    setValue(fieldNameKey, value);
    const { outComes } = getValues().outComes[index];
    if (outComes) {
      setHasChanged(true);
    }
  };
  const handleAddOtherDocument = () => {
    append({ outComes: '' });
  };

  const handleRemove = (index) => {
    remove(index);
  };
  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Stack direction="row" spacing={2} xs={12}>
            <FormControl fullWidth>
              <Typography variant="wpf_h7_medium" sx={{ fontSize: '12px', fontWeight: '500', mb: 1, mt: 1 }}>
                Outcomes
              </Typography>
              <Controller
                name={`outComes[${index}].outComes`}
                control={control}
                render={({ field }) => (
                  <MyTextField
                    multiline
                    rows={2}
                    fullWidth
                    type="text"
                    {...field}
                    onChange={(e) => {
                      handleFieldChange(index, 'outComes', e.target.value);
                    }}
                  />
                )}
              />
              {fields.length !== 1 && (
                <i
                  onClick={() => handleRemove(index)}
                  style={{
                    color: 'red',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: 585,
                    top: 55,
                    height: '30px',
                    width: '30px',
                    fontSize: '20px',
                  }}
                  className="ri-delete-bin-line"
                ></i>
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

export default CourseOutcomes;

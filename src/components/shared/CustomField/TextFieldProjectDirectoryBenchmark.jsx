import { Box, IconButton, styled, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the DeleteIcon

TextFieldProjectDirectoryBenchmark.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const PdTextField = styled(TextField)(() => ({
  borderRadius: '5px',

  '& .MuiOutlinedInput-root': {
    height: '35px',
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
export default function TextFieldProjectDirectoryBenchmark({
  name,
  helperText,
  isNumber,
  isNumberPdr,
  InputProps,
  label,
  defaultValue,
  isRequired,
  handleRemove,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Typography
            variant="wpf_h7_medium"
            sx={{
              mb: 0,
              color: 'neutral.N300',
            }}
          >
            {label} {<span style={{ color: '#F04438' }}>{isRequired && '*'}</span>}
          </Typography>
          <Box sx={{ width: '100%' }}>
            <PdTextField
              size="small"
              type={isNumber || isNumberPdr ? 'number' : 'text'}
              id="outlined-basic"
              {...field}
              fullWidth
              variant="outlined"
              // required={label === "Benchmark" ? false : true}
              sx={{
                backgroundColor: 'neutral.N000',
              }}
              defaultValue={defaultValue}
              // value={defaultValue ? defaultValue : ''}
              // value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              error={!!error}
              helperText={error ? error?.message : helperText}
              autoComplete="off"
              {...other}
              InputProps={{
                ...InputProps,
                endAdornment: (
                  <IconButton onClick={() => handleRemove(name, label)} edge="end">
                    <DeleteIcon
                      style={{
                        color: 'red',
                        cursor: 'pointer',
                        // position: "absolute",
                        left: 275,
                        top: 35,
                        height: '20px',
                        width: '20px',
                      }}
                    />
                  </IconButton>
                ),
                inputProps: isNumberPdr
                  ? {
                      min: 1,
                      max: 5,
                    }
                  : {
                      min: 1,
                    },
              }}
              //   InputProps={{
              //     inputProps: isNumberPdr
              //       ? {
              //           min: 1,
              //           max: 5,
              //         }
              //       : {
              //           min: 1,
              //         },
              //   }}
            />
          </Box>

          {/* <i
            //   onClick={() => handleRemove(index)}
            style={{
              color: "red",
              cursor: "pointer",
              position: "absolute",
              left: 275,
              top: 35,
              height: "20px",
              width: "20px",
            }}
            className="ri-delete-bin-line"
          ></i> */}
        </Box>
      )}
    />
  );
}

import { Box, IconButton, TextField, Typography, styled } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the DeleteIcon

export const PdTextField = styled(TextField)(() => ({
  borderRadius: "5px",

  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const TextFieldForTest = ({
  name,

  label,
  defaultValue,
  handleRemove,
  handleChange,
}) => {
  return (
    <>
      <Box>
        <Typography
          variant='wpf_h7_medium'
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}
        >
          {label}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <PdTextField
            size='small'
            type={"text"}
            id='outlined-basic'
            // {...field}
            fullWidth
            variant='outlined'
            // required={label === "Benchmark" ? false : true}
            sx={{
              backgroundColor: "neutral.N000",
            }}
            // defaultValue={defaultValue}
            value={defaultValue}
            // onChange={handleChange}
            onChange={(event) => handleChange(name, event.target.value)}
            // value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
            // error={!!error}
            // helperText={error ? error?.message : helperText}
            // autoComplete='off'
            // {...other}
            InputProps={{
              // ...InputProps,

              endAdornment: (
                <IconButton onClick={() => handleRemove(name, label)} edge='end'>
                  <DeleteIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      // position: "absolute",
                      left: 275,
                      top: 35,
                      height: "20px",
                      width: "20px",
                    }}
                  />
                </IconButton>
              ),
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
    </>
  );
};

export default TextFieldForTest;

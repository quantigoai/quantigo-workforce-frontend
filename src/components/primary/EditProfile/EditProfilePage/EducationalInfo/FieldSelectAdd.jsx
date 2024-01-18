import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import {Box, styled, Typography} from "@mui/material";

const filter = createFilterOptions();

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "40px", fontSize: "14px", padding: "0px 5px" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));

const FieldSelectAdd = ({ label, disableItem, editAble, field, setField, isChecked }) => {
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: "",
      year: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
    year: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setField({
      title: dialogValue.title,
    });
    handleClose();
  };
  const fieldStudies = [{ title: "Engineering" }, { title: "Business studies" }, { title: "others" }];
  return (
    <Box sx={{ p: 0 }}>
      <Typography
        sx={{
          color: "neutral.N300",
        }}
        variant="wpf_p4_medium"
      >
        {label}
      </Typography>
      <Autocomplete
        value={field}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            setField(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            // filtered.push({
            //   inputValue: params.inputValue,
            //   // title: `Add "${params.inputValue}"`,
            // });
          }

          return filtered;
        }}
        options={fieldStudies}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        disabled={disableItem ? true : isChecked ? true : !editAble}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ border: "1px solid #E6ECF5 !important", borderRadius: "8px", height: "40px", mt: 0.6 }}
        freeSolo
        renderInput={(params) => {
          return (
            <MyTextField
              {...params}
              placeholder="select your Field of Study"
              sx={{
                backgroundColor: editAble ? "" : "neutral.N400",
                fontSize: "14px",
                borderRadius: "8px",
                height: "40px",
                padding: "0px",
              }}
              disabled={disableItem ? true : isChecked ? true : !editAble}
              // value={defaultValue && defaultValue}
              variant="outlined"
            />
          );
        }}
      />
    </Box>
  );
};

export default FieldSelectAdd;

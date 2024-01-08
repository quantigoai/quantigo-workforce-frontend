import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  styled,
} from "@mui/material";
const filter = createFilterOptions();
const MyTextField = styled(TextField)(() => ({
  //   "& .MuiOutlinedInput-notchedOutline": {
  //     border: "1px solid #E6ECF5 !important",
  //     borderRadius: "8px",
  //   },
  //   "& .MuiInputBase-root": { fontSize: "14px", color: "#3C4D6B", p: 0, height: "20px" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));

const DegreeSelect = ({ label, disableItem, defaultValue, editAble, isChecked }) => {
  const [open, toggleOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
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
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });
    handleClose();
  };
  const higerStudies = [
    { title: "SSC", year: 1994 },
    { title: "HSC", year: 1972 },
    { title: "B.Sc", year: 1974 },
    { title: "M.Sc", year: 2008 },

    { title: "BBA", year: 1993 },
    { title: "MBA", year: 1994 },
  ];
  return (
    <React.Fragment>
      <Typography
        sx={{
          color: "neutral.N300",

          mb: 1,
        }}
        variant="wpf_p4_medium"
      >
        {label}
      </Typography>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
                year: "",
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
              year: "",
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        options={higerStudies}
        getOptionLabel={(option) => {
          // e.g. value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ border: "1px solid #E6ECF5 !important", borderRadius: "8px", height: 42 }}
        freeSolo
        renderInput={(params) => <TextField sx={{ mt: 0.5 }} {...params} />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new Degree</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  title: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default DegreeSelect;

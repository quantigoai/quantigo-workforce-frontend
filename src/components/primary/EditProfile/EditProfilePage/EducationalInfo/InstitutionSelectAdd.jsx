import React, { useEffect, useState } from "react";
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
import axios from "axios";
const filter = createFilterOptions();
const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "40px", fontSize: "14px", color: "#3C4D6B", padding: "0px 5px" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));
const url = import.meta.env.VITE_APP_SERVER_URL;

const InstitutionSelectAdd = ({ label, disableItem, editAble, institution, isChecked, setInstitution }) => {
  const [open, toggleOpen] = React.useState(false);
  const [allInstitute, setAllInstitute] = useState([]);
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
    setInstitution({
      title: dialogValue.title,
    });
    handleClose();
  };
  useEffect(() => {
    axios.get(`${url}/educational-institute`).then((data) => setAllInstitute(data.data.educationalInstitute));
  }, [editAble]);

  return (
    <React.Fragment>
      <Typography
        sx={{
          color: "neutral.N300",

          // mb: 1.5,
        }}
        variant="wpf_p4_medium"
      >
        {label}
      </Typography>
      <Autocomplete
        style={{ padding: 0 }}
        value={institution}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
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
            setInstitution(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const data = { name: params.inputValue };
          let addInstitute;
          console.log(addInstitute);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
            addInstitute = axios.post(`${url}/educational-institute/add-educational-institute`, data);
          }

          return addInstitute;
        }}
        options={allInstitute}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option.name;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        disabled={disableItem ? true : isChecked ? true : !editAble}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{
          border: "1px solid #E6ECF5 !important",
          height: "40px",
          mt: 0.6,
        }}
        freeSolo
        renderInput={(params) => (
          <MyTextField
            {...params}
            sx={{
              backgroundColor: editAble ? "" : "neutral.N400",
              fontSize: "14px",
              borderRadius: "8px",
              height: "40px",
            }}
            disabled={disableItem ? true : isChecked ? true : !editAble}
            // value={defaultValue && defaultValue}
            variant="outlined"
            // onChange={(e) => handleChange(e)}
          />
        )}
      />
    </React.Fragment>
  );
};

export default InstitutionSelectAdd;

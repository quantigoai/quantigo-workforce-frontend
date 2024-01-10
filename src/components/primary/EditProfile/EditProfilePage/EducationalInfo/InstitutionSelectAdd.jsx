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
  console.log("🚀 ~ InstitutionSelectAdd ~ allInstitute:", allInstitute);
  const [newInput, setNewInput] = useState("");
  console.log("🚀 ~ InstitutionSelectAdd ~ newInput:", newInput);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name: newInput.name };
    const finalData = axios
      .post(`${url}/educational-institute/add-educational-institute`, data)
      .then((data) =>
        setInstitution({
          name: data?.educationalInstitute?.name,
          _id: data?.educationalInstitute?._id,
        })
      )
      .finally(() => {
        axios.get(`${url}/educational-institute`).then((data) => setAllInstitute(data.data.educationalInstitute));
      });
    // handleClose();
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
        // onChange={(event, newValue) => {
        //   if (typeof newValue === "string") {
        //     setTimeout(() => {
        //       toggleOpen(true);
        //       setDialogValue({
        //         title: newValue,
        //       });
        //     });
        //   } else if (newValue && newValue.inputValue) {
        //     toggleOpen(true);
        //     setDialogValue({
        //       title: newValue.inputValue,
        //     });
        //   } else {
        //     setInstitution(newValue);
        //   }
        // }}
        // filterOptions={(options, params) => {
        //   const filtered = filter(options, params);

        //   if (params.inputValue !== "") {
        //     filtered.push({
        //       inputValue: params.inputValue,
        //       name: `Add "${params.inputValue}"`,
        //     });
        //   }

        //   return filtered;
        // }}

        onChange={(event, newValue) => {
          console.log("🚀 ~ InstitutionSelectAdd ~ newValue:", newValue);
          if (typeof newValue === "string") {
            setInstitution({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            console.log("hit");
            setInstitution({
              name: newValue.inputValue,
            });
            setNewInput({
              name: newValue.inputValue,
            });
          } else {
            setInstitution(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        options={allInstitute}
        // getOptionLabel={(option) => {
        //   if (typeof option === "string") {
        //     return option.name;
        //   }
        //   if (option.inputValue) {
        //     return option.inputValue;
        //   }
        //   return option.name;
        // }}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.name) {
            return option.name;
          }
          // Regular option
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
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSubmit(ev);
                ev.preventDefault();
              }
            }}
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

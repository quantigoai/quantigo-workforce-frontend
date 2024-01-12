import { Typography, styled } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const filter = createFilterOptions();
const MyTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E6ECF5 !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '40px',
    fontSize: '14px',
    color: '#3C4D6B',
    padding: '0px 5px',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `1px solid #2E58FF !important`,
  },
  '& .MuiInputBase-input.Mui-focused': {
    color: 'blue',
  },
}));
const url = import.meta.env.VITE_APP_SERVER_URL;

const InstitutionSelectAdd = ({
  label,
  disableItem,
  editAble,
  institution,
  isChecked,
  setInstitution,
}) => {
  const [open, toggleOpen] = React.useState(false);
  const [allInstitute, setAllInstitute] = useState([]);

  const [newInput, setNewInput] = useState('');
  const [tempName, setTempName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    let inputValue = event.target.value;

    const data = { name: inputValue };
    const finalData = axios
      .post(`${url}/educational-institute/add-educational-institute`, data)
      .then((data) => {
        setInstitution({
          name: data?.educationalInstitute?.name,
          _id: data?.educationalInstitute?._id,
        });
      })
      .finally(() => {
        axios
          .get(`${url}/educational-institute`)
          .then((data) => setAllInstitute(data.data.educationalInstitute));
      });
    // handleClose();
  };
  useEffect(() => {
    axios
      .get(`${url}/educational-institute`)
      .then((data) => setAllInstitute(data.data.educationalInstitute));
  }, [editAble]);

  const addNewValue = (value) => {
    setTempName(value);
    const data = { name: value };
    const finalData = axios
      .post(`${url}/educational-institute/add-educational-institute`, data)
      .then((data) => {
        setInstitution({
          name: data?.educationalInstitute?.name,
          _id: data?.educationalInstitute?._id,
        });
      })
      .finally(() => {
        axios
          .get(`${url}/educational-institute`)
          .then((data) => setAllInstitute(data.data.educationalInstitute));
      });
  };
  return (
    <React.Fragment>
      <Typography
        sx={{
          color: 'neutral.N300',

          // mb: 1.5,
        }}
        variant="wpf_p4_medium"
      >
        {label}
      </Typography>
      <Autocomplete
        style={{ padding: 0 }}
        value={institution}
        onChange={(newValue) => {
          if (newValue && newValue.inputValue) {
            setInstitution({
              name: newValue.inputValue,
            });
            setNewInput({
              name: newValue.inputValue,
            });
            addNewValue(newValue.inputValue);
          } else if (newValue && newValue.name) {
            setInstitution(newValue);
          }
        }}
        onKeyDown={(ev) => {
          const institutes = allInstitute.map((item) => item.name);
          if (!institutes.includes(ev.target.value)) {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              handleSubmit(ev);
            }
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.name,
          );
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        options={allInstitute}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option && option.inputValue) {
            return option.inputValue;
          }
          if (option && option.name) {
            return option.name;
          }

          return tempName || '';
        }}
        getOptionSelected={(option, value) =>
          option.inputValue
            ? value.inputValue === option.inputValue
            : value.name === option.name
        }
        disabled={disableItem ? true : isChecked ? true : !editAble}
        selectOnFocus={true}
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name} </li>;
        }
        sx={{
          border: '1px solid #E6ECF5 !important',
          height: '40px',
          mt: 0.6,
        }}
        freeSolo
        renderInput={(params) => (
          <MyTextField
            {...params}
            placeholder="select your institution or add a new one"
            sx={{
              backgroundColor: editAble ? '' : 'neutral.N400',
              fontSize: '14px',
              borderRadius: '8px',
              height: '40px',
            }}
            disabled={disableItem ? true : isChecked ? true : !editAble}
            variant="outlined"
          />
        )}
      />
    </React.Fragment>
  );
};

export default InstitutionSelectAdd;

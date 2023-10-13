/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/SharedComponents/ReAssignPopper.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, February 28th 2023, 10:35:57 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputAdornment,
    Popper,
    Radio,
    RadioGroup,
    SvgIcon,
    TextField,
} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import {assignedJobToAUser} from "../../../../features/slice/jobSlice";

const ReAssignPopper = ({ id, popperOpen, popperAnchorEl, job, handleClickAway }) => {
  const { users } = useSelector((state) => state.user);
  const [value, setValue] = useState(""); // initialize value as an empty string

  const handleChange = (event) => {
    setValue(event.target.value); // update the value state with the selected value
  };
  const [searchAnchorEl, setSearchAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setSearchAnchorEl(searchAnchorEl ? null : event.currentTarget);
  };

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = users.filter((entry) =>
    Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase()))
  );

  const dispatch = useDispatch();
   

  const toast = useToaster();

  const { isLoading, jobs } = useSelector((state) => state.job);

  const handleReassignedJob = (e, jobId) => {
    const data = {
      userid: e,
      jobid: jobId,
    };

    dispatch(assignedJobToAUser(data)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger("Job Reassigned Successfully", "success"
      } else {
        toast.trigger("Job Can not Reassigned", "error");
      }
    });
  };

  const handleCancelClick = () => {
    handleClickAway();
    setValue("");
  };
  return (
    <>
      <Popper
        placement="left"
        id={id}
        open={popperOpen}
        anchorEl={popperAnchorEl}
        sx={{
          width: 400,
          top: "35%",
          left: "80%",
          border: "0.5px solid #FFFFF4 ",
          borderRadius: "12px",
          p: 1,
          bgcolor: "#f5f5f5",
          zIndex: 1301,
        }}
      >
        <Box gap={1} sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            onChange={handleChangeSearch}
            handleClick={handleClick}
            placeholder="Search by name"
            variant="outlined"
          />
          <Box>
            <FormControl fullWidth>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue=""
                style={{ color: "green" }}
                onChange={handleChange}
              >
                {filtered.map(
                  (user) =>
                    (user.role === "level_1_annotator" ||
                      user.role === "level_2_annotator" ||
                      user.role === "level_3_annotator") && (
                      <FormControlLabel
                        fullWidth
                        sx={{
                          width: "100%",
                          paddingLeft: "7px",
                          borderRight: value === user._id ? " 3px solid #2D58FF" : "0px solid #2D58FF",
                          color: value === user._id ? "#2D58FF" : "#969CAF",
                        }}
                        key={user._id}
                        value={user._id}
                        control={<Radio />}
                        label={user.qaiUserName}
                      />
                    )
                )}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: 1, my: "3%" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#2D58FF",
                width: "100%",
                height: "40px",
                mt: "10px",
                border: "1px solid #2D58FF",
                "&:hover": {
                  backgroundColor: "rgba(255, 154, 69, 0.1)",
                  color: "#2D58FF",
                  border: "1px solid rgba(255, 154, 69, 1)",
                },
              }}
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D58FF",
                color: "#FFFFFF",
                width: "100%",
                height: "40px",
                mt: "10px",
                "&:hover": {
                  backgroundColor: "rgba(255, 154, 69, 1)",
                  color: "#2D58FF",
                  border: "1px solid #2D58FF",
                },
              }}
              disabled={isLoading}
              onClick={() => handleReassignedJob(value, job._id)}
            >
              Re-Assign
            </Button>
          </Box>
        </Box>
      </Popper>
    </>
  );
};

export default ReAssignPopper;

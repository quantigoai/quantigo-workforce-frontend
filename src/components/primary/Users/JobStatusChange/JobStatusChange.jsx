import { Button, FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { UnblockJobsForUser } from "../../../../features/slice/userSlice";
import useToaster from "../../../../customHooks/useToaster";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // borderRadius: "2px",
  cursor: "pointer",
  width: "100%",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const JobStatusChange = ({ user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();
  const [actionStatus, setActionStatus] = useState("");
  const [jobLimit, setJobLimit] = useState();
  const { isLoading } = useSelector((state) => state.user);
  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
  };
  const handleChangeJobLimit = (e) => {
    setJobLimit(e.target.value);
  };
  const handleChange = () => {
    const data = {
      id: user._id,
      updatedJobLimit: {
        updatedJobLimit: jobLimit,
      },
    };

    dispatch(UnblockJobsForUser(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show(
          "Unblock Job Successfully",

          { type: "success" }
        );
      } else {
        alert.show("Status can not Change", { type: "error" });
      }
    });
  };

  return (
    <>
      <Grid container gap={3}>
        <Grid container>
          <Grid item xs={6}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-label"> job Statue Change</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleSetStatus}
                defaultValue={""}
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                }}
              >
                {/* <MenuItem value={"block"}>Block</MenuItem> */}
                <MenuItem value={"unblock"}>Unblock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: "1%" }}>
            <TextField
              fullWidth
              label="Job Limit"
              variant="filled"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              defaultValue={user.jobLimit}
              onChange={(e) => handleChangeJobLimit(e)}
              sx={{ backgroundColor: "#FFFFFF" }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          {actionStatus === "" ? (
            <ButtonStyle variant="outlined" disabled onClick={handleChange}>
              Action Status
            </ButtonStyle>
          ) : (
            <ButtonStyle variant="outlined" disabled={isLoading} onClick={handleChange}>
              Action Status
            </ButtonStyle>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default JobStatusChange;

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useAlert, positions } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { UnblockJobsForUser, deleteOrActivateUser } from "../../../../features/slice/userSlice";

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
  const [actionStatus, setActionStatus] = useState("");
  const { isLoading } = useSelector((state) => state.user);
  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
  };
  const handleChange = () => {
  

    dispatch(UnblockJobsForUser(user._id)).then((action) => {
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
        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">
              {" "}
              job Statue Change
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSetStatus}
              // defaultValue={user.role}
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}>
              {/* <MenuItem value={"block"}>Block</MenuItem> */}
              <MenuItem value={"unblock"}>Unblock</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          {actionStatus === "" ? (
            <ButtonStyle variant="outlined" disabled onClick={handleChange}>
              Action Status
            </ButtonStyle>
          ) : (
            <ButtonStyle
              variant="outlined"
              disabled={isLoading}
              onClick={handleChange}>
              Action Status
            </ButtonStyle>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default JobStatusChange;

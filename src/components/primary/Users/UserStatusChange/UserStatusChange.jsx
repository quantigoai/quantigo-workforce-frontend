import { Button, FormControl, Grid, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrActivateUser } from "../../../../features/slice/userSlice";
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

const UserStatusChange = ({ user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();
  const [actionStatus, setActionStatus] = useState("");
  const { isLoading } = useSelector((state) => state.user);
  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
  };
  const handleChange = () => {
    const finalData = {
      id: user._id,
      action: actionStatus,
    };

    dispatch(deleteOrActivateUser(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        if (actionStatus === "delete") {
          window.location.reload(false);
          alert.show(
            "User Delete Successfully",

            { type: "success" }
          );
        } else {
          alert.show(
            "Status change Successfully",

            { type: "success" }
          );
        }
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
            <InputLabel id="demo-simple-select-label">Statue Change</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSetStatus}
              defaultValue={user.isBlocked ? "block" : ""}
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}
            >
              <MenuItem value={"delete"}>Delete</MenuItem>
              <MenuItem value={"block"}>Block</MenuItem>
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
            <ButtonStyle variant="outlined" disabled={isLoading} onClick={handleChange}>
              Action Status
            </ButtonStyle>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UserStatusChange;

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { positions, useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { changeRole } from "../../../../features/slice/userSlice";

const ButtonStyle = styled(Button)({
  width: "100%",
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const RoleChange = ({ user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [roleValue, setRole] = useState("");
  const { isLoading } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.user.user);
  const handleSetRole = (e) => {
    setRole(e.target.value);
  };
  const handleChange = () => {
    const data = {
      role: roleValue,
    };
    const finalData = {
      id: user._id,
      data,
    };
    dispatch(changeRole(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Role Change Successfully", { type: "success" });
      } else {
        alert.show("Role can not Change", { type: "error" });
      }
    });
  };

  return (
    <>
      <Grid container gap={3}>
        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Role Change</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSetRole}
              defaultValue={user.role}
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}>
              <MenuItem value={"level_0_annotator"}>Level 0 Annotator</MenuItem>
              <MenuItem value={"level_1_annotator"}>Level 1 Annotator</MenuItem>
              <MenuItem value={"level_2_annotator"}>Level 2 Annotator</MenuItem>
              <MenuItem value={"level_3_annotator"}>Level 3 Annotator</MenuItem>
              <MenuItem value={"reviewer"}>Reviewer</MenuItem>
              <MenuItem value={"trainer"}>Trainer</MenuItem>
              <MenuItem value={"project_lead"}>Project Lead</MenuItem>
              <MenuItem value={"project_coordinator"}>
                Project Coordinator
              </MenuItem>
              {(role === "admin" || role === "recruitment_manager") && (
                <MenuItem value={"delivery_manager"}>Delivery Manager</MenuItem>
              )}
              {(role === "admin" || role === "recruitment_manager") && (
                <MenuItem value={"project_manager"}>Project Manager</MenuItem>
              )}
              {role === "admin" && (
                <MenuItem value={"recruitment_manager"}>
                  Recruitment Manager
                </MenuItem>
              )}
              {role === "admin" && (
                <MenuItem value={"engineering_lead"}>Engineering Lead</MenuItem>
              )}
              {role === "admin" && <MenuItem value={"admin"}>Admin</MenuItem>}
              {/* <MenuItem value={"recruitment_manager"}>Recruitment Manager</MenuItem> */}
              {/* <MenuItem value={"admin"}>Video</MenuItem>
              <MenuItem value={"engineering_lead"}>Video</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          {roleValue === "" ? (
            <ButtonStyle variant="outlined" disabled onClick={handleChange}>
              Change
            </ButtonStyle>
          ) : (
            <ButtonStyle
              variant="outlined"
              disabled={isLoading}
              onClick={handleChange}>
              Change
            </ButtonStyle>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default RoleChange;

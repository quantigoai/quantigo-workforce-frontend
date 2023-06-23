import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import React from "react";
import {useAlert} from "react-alert";
import {activateDeactivateUser} from "../../../features/slice/userSlice";
import {useDispatch} from "react-redux";

const ActivateDeactivateStatus = ({ user }) => {
  const [checked, setChecked] = React.useState(user.active);
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const finalData = {
      id: user._id,
      action: checked ? "deactivate" : "activate",
    };

    dispatch(activateDeactivateUser(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        if (checked) {
          alert.show("Deactivate Your Account", { type: "success" });
        } else {
          alert.show("Activate Your Account", { type: "success" });
        }
      } else {
        alert.show("Status can not Change", { type: "error" });
      }
    });
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              // defaultChecked={user.active}
            />
          }
          label="Active"
        />
      </FormGroup>
    </>
  );
};

export default ActivateDeactivateStatus;

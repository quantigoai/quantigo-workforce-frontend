import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { activateDeactivateUser } from "../../../features/slice/userSlice";

const ActivateDeactivateStatus = ({ user }) => {
  const [checked, setChecked] = React.useState(user.active);
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const finalData = {
      id: user._id,
      action: checked ? "deactivate" : "activate",
    };

    dispatch(activateDeactivateUser(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        if (checked) {
          toast.trigger("Deactivate Your Account", "success");
        } else {
          toast.trigger("Activate Your Account", "success");
        }
      } else {
        toast.trigger("Status can not Change", "error");
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

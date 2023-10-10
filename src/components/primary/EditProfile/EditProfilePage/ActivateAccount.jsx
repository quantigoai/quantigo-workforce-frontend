import { Button } from "@mui/material";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import { activateDeactivateUser } from "../../../../features/slice/userSlice";
import ModalActivateAccount from "./ModalActivateAccount";

const ActivateAccount = () => {
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleChange = () => {
    // setChecked(event.target.checked);
    const finalData = {
      id: user._id,
      action: user.active ? "deactivate" : "activate",
    };

    dispatch(activateDeactivateUser(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        if (user.active) {
          toast.trigger("Deactivate Your Account", "success");
          setOpen(false);
        } else {
          toast.trigger("Activate Your Account", "success");
          setOpen(false);
        }
      } else {
        toast.trigger("Status can not Change", "error");
      }
    });
  };
  return (
    <>
      <Button
        onClick={() => handleOpen()}
        sx={{
          width: "90%",
          textTransform: "none",
          backgroundColor: user.active ? "#FFF0F2" : "#EFF9F5",
          color: user.active ? "#F04438" : "#36B37E",
          "&:hover": {
            backgroundColor: user.active ? "#FFF0F2" : "#EFF9F5",
            color: user.active ? "#F04438" : "#36B37E",
            border: user.active ? "1px solid #F04438" : "1px solid #36B37E",
          },
        }}
      >
        {user.active ? "Deactivate Accounts" : "Activate Account"}
      </Button>
      <ModalActivateAccount open={open} handleOpen={handleOpen} handleClose={handleClose} handleChange={handleChange} />
    </>
  );
};

export default ActivateAccount;

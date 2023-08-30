import { Button } from "@mui/material";
import React from "react";
import ModalActivateAccount from "./ModalActivateAccount";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { activateDeactivateUser } from "../../../../features/slice/userSlice";

const ActivateAccount = () => {
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();
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

    console.log(
      "🚀 ~ file: ActivateAccount.jsx:26 ~ handleChange ~ finalData:",
      finalData
    );
    dispatch(activateDeactivateUser(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        if (user.active) {
          alert.show("Deactivate Your Account", { type: "success" });
          setOpen(false);
        } else {
          alert.show("Activate Your Account", { type: "success" });
          setOpen(false);
        }
      } else {
        alert.show("Status can not Change", { type: "error" });
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
        }}>
        {user.active ? "Deactivate Accounts" : "Activate Account"}
      </Button>
      <ModalActivateAccount
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleChange={handleChange}
      />
    </>
  );
};

export default ActivateAccount;

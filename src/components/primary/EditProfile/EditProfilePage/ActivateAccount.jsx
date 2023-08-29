import { Button } from "@mui/material";
import React from "react";
import ModalActivateAccount from "./ModalActivateAccount";

const ActivateAccount = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("hit");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={() => handleOpen()}
        sx={{ backgroundColor: "#FFF0F2", color: "#F04438" }}>
        Deactivate Accounts
      </Button>
      <ModalActivateAccount
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default ActivateAccount;

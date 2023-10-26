import { Button, Typography } from "@mui/material";
import React from "react";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import { useDispatch, useSelector } from "react-redux";
import { approveProjectPayment } from "../../../../features/slice/projectDrawerSlice";

import PaymentApproveModal from "./PaymentApproveModal";
import useToaster from "../../../../customHooks/useToaster";

const ApproveProjectPaymentButton = ({ role }) => {
  const [open, setOpen] = React.useState(false);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const toast = useToaster();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleApprovePayment = () => {
    console.log(projectDrawer._id);
    dispatch(approveProjectPayment(projectDrawer._id)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(action.payload.data.message, "success");
      } else {
        toast.trigger(action.error.message, "error");
      }
    })
  };

  return (
    <>
      <Button
        variant="contained"
        // onClick={() => handleApprovePayment()}
        onClick={handleOpen}
        sx={{
          backgroundColor: "#2E58FF",
          color: "#FFF",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "6px",
          "&:hover": {},
          mr: 2,
        }}>
        {/* <i style={{}} className="ri-checkbox-circle-fill"></i> */}
        <Typography variant="body" sx={{ ml: 0, textTransform: "none" }}>
          Payment Approve
        </Typography>
      </Button>
      <PaymentApproveModal open={open} handleClose={handleClose} handleApprovePayment={handleApprovePayment} />
    </>
  );
};

export default ApproveProjectPaymentButton;

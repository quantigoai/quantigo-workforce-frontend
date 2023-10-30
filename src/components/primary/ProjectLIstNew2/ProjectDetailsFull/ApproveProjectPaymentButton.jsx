import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import { useDispatch, useSelector } from "react-redux";
import {
  approveProjectPayment,
  approveProjectPaymentAPLRequest,
  updateProjectDrawerManually,
} from "../../../../features/slice/projectDrawerSlice";

import PaymentApproveModal from "./PaymentApproveModal";
import useToaster from "../../../../customHooks/useToaster";
import { LoadingButton } from "@mui/lab";

const ApproveProjectPaymentButton = ({ role }) => {
  const [open, setOpen] = React.useState(false);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const toast = useToaster();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataLoading, setDataLoading] = useState(false);
  const handleApprovePayment = async () => {
    await toast.responsePromise(approveProjectPaymentAPLRequest(projectDrawer._id), setDataLoading, {
      initialMessage: "Payment is Accepting...",
      inPending: () => {
        setOpen(false);
      },
      afterSuccess: (data) => {
        setOpen(false);
        dispatch(updateProjectDrawerManually(data.data.projectDrawer));
      },
      afterError: () => {
        setOpen(false);
      },
    });

    // dispatch(approveProjectPayment(projectDrawer._id)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     setOpen(false);
    //     toast.trigger(action.payload.data.message, "success");
    //   } else {
    //     toast.trigger(action.error.message, "error");
    //   }
    // });
  };

  return (
    <>
      <LoadingButton
        loading={dataLoading}
        onClick={handleOpen}
        sx={{
          backgroundColor: "#2E58FF",
          color: "#FFF",

          fontSize: "12px",
          fontWeight: "500",
          borderRadius: "6px",
          height: "30px",
          width: "142px",
          "&:hover": { backgroundColor: "#244EF5", color: "#FFF" },
          "&.Mui-disabled": {
            backgroundColor: "#B6C9F0",
            color: "#FFFFFF",
          },
          mr: 2,
        }}>
        {/* <i style={{}} className="ri-checkbox-circle-fill"></i> */}
        <Typography variant="body" sx={{ ml: 0, textTransform: "none" }}>
          Payment Approve
        </Typography>
      </LoadingButton>
      <PaymentApproveModal open={open} handleClose={handleClose} handleApprovePayment={handleApprovePayment} />
    </>
  );
};

export default ApproveProjectPaymentButton;

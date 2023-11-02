import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveProjectPaymentAPLRequest,
  updateProjectDrawerManually,
} from "../../../../features/slice/projectDrawerSlice";

import { LoadingButton } from "@mui/lab";
import useToaster from "../../../../customHooks/useToaster";
import PaymentApproveModal from "./PaymentApproveModal";

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
          backgroundColor: "#25c77c",
          color: "#FFF",
          fontSize: {
            lg: "10px",
            xl: "12px",
            xxl: "14px",
          },
          borderRadius: "6px",
          height: "30px",
          width: { lg: "130px", xl: "150px", xxl: "175px" },
          "&:hover": { backgroundColor: "green.800", color: "#FFF" },
          "&.Mui-disabled": {
            backgroundColor: "#B6C9F0",
            color: "#FFFFFF",
          },
          mr: 2,
        }}
      >
        <i style={{}} className="ri-checkbox-circle-fill"></i>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            pl: 1,
            textTransform: "none",
            color: "#FFF",
          }}
        >
          Payment Approve
        </Typography>
      </LoadingButton>
      <PaymentApproveModal open={open} handleClose={handleClose} handleApprovePayment={handleApprovePayment} />
    </>
  );
};

export default ApproveProjectPaymentButton;

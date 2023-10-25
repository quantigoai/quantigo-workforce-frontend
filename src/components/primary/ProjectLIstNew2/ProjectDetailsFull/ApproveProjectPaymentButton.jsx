import { Button, Typography } from "@mui/material";
import React from "react";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import { useDispatch, useSelector } from "react-redux";
import { approveProjectPayment } from "../../../../features/slice/projectDrawerSlice";

const ApproveProjectPaymentButton = ({ role }) => {
  const [open, setOpen] = React.useState(false);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleApprovePayment = () => {
    console.log(projectDrawer._id);
    dispatch(approveProjectPayment(projectDrawer._id));
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => handleApprovePayment()}
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
    </>
  );
};

export default ApproveProjectPaymentButton;

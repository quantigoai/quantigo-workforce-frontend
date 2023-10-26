import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveProjectHistory, rejectProjectHistory } from "../../../../features/slice/projectDrawerSlice";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import ModalAcceptReject from "./ModalAcceptReject";
import HoursRejectModal from "./HoursRejectModal";
import dataBuilder from "../../../shared/CustomTable/dataBuilder";
import useToaster from "../../../../customHooks/useToaster";

const DetailsUploadHourBUtton = ({ role, value }) => {
  const [open, setOpen] = React.useState(false);
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [rejectionCause, setRejectionCause] = useState("");
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const toast = useToaster();
  const handleOpen = () => setOpen(true);
  const handleOpenAccept = () => setOpenAccept(true);
  const handleClose = () => {
    setOpenAccept(false);
    setOpenReject(false);
    setOpen(false);
  };
  const handleRejectCause = (e) => {
    setRejectionCause(e.target.value);
  };
  const handleOpenReject = () => {
    setOpenReject(true);
  };
  const handleAcceptHours = () => {

    dispatch(approveProjectHistory(projectDrawer._id)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(action.payload.data.message, "success");
      } else {
        toast.trigger(action.error.message, "error");
      }
    });
  };
  const handleRejectHours = () => {
    const data = {
      id: projectDrawer._id,
      rejectionCause: rejectionCause,
    };

    dispatch(rejectProjectHistory(data)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(action.payload.data.message, "success");
      } else {
        toast.trigger(action.error.message, "error");
      }
    });
  };

  return (
    <>
      {value === "completed" ? (
        <>
          <Button
            sx={{
              backgroundColor: "#FFAB00",
              color: "#FFF",
             
              fontSize: "12px",
              fontWeight: "500",
              borderRadius: "6px",
              height: "30px",
              width: "172px",
              border: "1px solid #FFAB00",
              "&:hover": {
                backgroundColor: "#F2A200",
              },
              mr: 2,
            }}
            // variant="contained"
            onClick={handleOpen}>
            <i className="ri-upload-2-line"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
              Upload Effective Hour
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            // variant="contained"
            // onClick={() => handleAcceptHours()}
            onClick={handleOpenAccept}
            sx={{
              backgroundColor: "#2E58FF",
              color: "#FFF",
          
              fontSize: "12px",
              fontWeight: "500",
              borderRadius: "6px",
              height: "30px",
              width: "132px",
              "&:hover": { backgroundColor: "#244EF5", color: "#FFF" },
              mr: 2,
            }}>
            <i style={{}} className="ri-checkbox-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Accept
            </Typography>
          </Button>
          <Button
            // disabled={params.isVerified}
            // variant="contained"
            // onClick={() => handleRejectHours()}
            onClick={handleOpenReject}
            sx={{
              backgroundColor: "#FF4757",
              color: "#FFF",
              fontSize: "12px",
              fontWeight: "500",
              borderRadius: "6px",
              height: "30px",
              width: "132px",
              "&:hover": {
                backgroundColor: "#FF4757",
                color: "#FFF",
              },
              mr: 2,
            }}>
            <i style={{}} className="ri-close-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Reject
            </Typography>
          </Button>
        </>
      )}
      <HoursRejectModal
        openModal={openReject}
        handleClose={handleClose}
        handleRejectHours={handleRejectHours}
        handleRejectCause={handleRejectCause}
      />
      <ModalAcceptReject open={openAccept} handleClose={handleClose} handleAcceptHours={handleAcceptHours} />
      <DetailsUploadHourModal openModal={open} setOpen={setOpen} />
    </>
  );
};

export default DetailsUploadHourBUtton;

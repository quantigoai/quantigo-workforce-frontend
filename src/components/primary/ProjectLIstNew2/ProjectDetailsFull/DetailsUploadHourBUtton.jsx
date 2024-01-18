import {LoadingButton} from "@mui/lab";
import {Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import {
    approveProjectHistoryAPIRequest,
    rejectHistoryAPIRequest,
    updateProjectDrawerManually,
} from "../../../../features/slice/projectDrawerSlice";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import HoursRejectModal from "./HoursRejectModal";
import ModalAcceptReject from "./ModalAcceptReject";

const DetailsUploadHourBUtton = ({ role, value }) => {
  const [open, setOpen] = React.useState(false);
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [rejectionCause, setRejectionCause] = useState("");
  const { projectDrawer, isLoading } = useSelector((state) => state.projectDrawer);
  const [dataLoading, setDataLoading] = useState(false);
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
  const handleAcceptHours = async () => {
    await toast.responsePromise(approveProjectHistoryAPIRequest(projectDrawer._id), setDataLoading, {
      initialMessage: "Effective hours is Accepting...",
      inPending: () => {
        setOpenAccept(false);
      },
      afterSuccess: (data) => {
        setOpenAccept(false);
        dispatch(updateProjectDrawerManually(data.data.projectDrawer));
      },
      afterError: () => {
        setOpenAccept(false);
      },
    });
    // dispatch(approveProjectHistory(projectDrawer._id)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     setOpenAccept(false);
    //     toast.trigger(action.payload.data.message, "success");
    //   } else {
    //     setOpenAccept(false);
    //     toast.trigger(action.error.message, "error");
    //   }
    // });
  };
  const handleRejectHours = async () => {
    const data = {
      id: projectDrawer._id,
      rejectionCause: rejectionCause,
    };
    await toast.responsePromise(rejectHistoryAPIRequest(data), setDataLoading, {
      initialMessage: "Effective hours is Rejecting...",
      inPending: () => {
        setOpenReject(false);
      },
      afterSuccess: (data) => {
        setOpenReject(false);
        dispatch(updateProjectDrawerManually(data.data.projectDrawer));
      },
      afterError: () => {
        setOpenReject(false);
      },
    });
    // dispatch(rejectProjectHistory(data)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     setOpenReject(false);
    //     toast.trigger(action.payload.data.message, "success");
    //   } else {
    //     setOpenReject(false);
    //     toast.trigger(action.error.message, "error");
    //   }
    // });
  };

  return (
    <>
      {value === "completed" ? (
        <>
          {(role === "admin" ||
            role === "project_manager" ||
            role === "project_delivery_lead" ||
            role === "delivery_lead") && (
            <LoadingButton
              loading={dataLoading}
              sx={{
                backgroundColor: "#FFAB00",
                color: "#FFF",
                fontSize: {
                  lg: "10px",
                  xl: "12px",
                  xxl: "14px",
                },
                borderRadius: "6px",
                height: "30px",
                width: { lg: "150px", xl: "190px", xxl: "202px" },
                border: "1px solid #FFAB00",
                "&:hover": {
                  backgroundColor: "#F2A200",
                  color: "#FFF",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#F0D8A8",
                  color: "#FFFFFF",

                  border: "1px solid #F0D8A8",
                },
                mr: 1,
              }}
              onClick={handleOpen}
            >
              <i className="ri-upload-2-line"></i>
              <Typography
                variant="wpf_h7_medium"
                sx={{
                  pl: 1,
                  textTransform: "none",
                  color: "#FFF",
                }}
              >
                Upload Effective Hour
              </Typography>
            </LoadingButton>
          )}
        </>
      ) : (
        <>
          {(role === "admin" || role === "account_manager") && (
            <>
              <LoadingButton
                loading={dataLoading}
                onClick={handleOpenAccept}
                sx={{
                  backgroundColor: "#2E58FF",
                  color: "#FFF",
                  fontSize: {
                    lg: "10px",
                    xl: "12px",
                    xxl: "14px",
                  },
                  borderRadius: "6px",
                  height: "30px",
                  width: { lg: "120px", xl: "142px", xxl: "162px" },
                  "&:hover": { backgroundColor: "#244EF5", color: "#FFF" },
                  "&.Mui-disabled": {
                    backgroundColor: "#B6C9F0",
                    color: "#FFFFFF",
                  },
                  mr: 1,
                }}
              >
                <i style={{}} className="ri-checkbox-circle-fill"></i>

                <Typography variant="wpf_h7_medium" sx={{ color: "#FFF", pl: 1, textTransform: "none" }}>
                  Hours Approved
                </Typography>
              </LoadingButton>
              <LoadingButton
                loading={dataLoading}
                onClick={handleOpenReject}
                sx={{
                  backgroundColor: "#FF4757",
                  color: "#FFF",
                  fontSize: {
                    lg: "10px",
                    xl: "12px",
                    xxl: "14px",
                  },
                  borderRadius: "6px",
                  height: "30px",
                  width: { lg: "110px", xl: "112px", xxl: "132px" },
                  "&:hover": {
                    backgroundColor: "#FF4757",
                    color: "#FFF",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#F5C4C8",
                    color: "#FFFFFF",
                  },
                  mr: 1,
                }}
              >
                <i className="ri-close-circle-fill"></i>
                <Typography variant="wpf_h7_medium" sx={{ color: "#FFF", pl: 1, textTransform: "none" }}>
                  Hours Reject
                </Typography>
              </LoadingButton>
            </>
          )}
        </>
      )}
      <HoursRejectModal
        openModal={openReject}
        handleClose={handleClose}
        handleRejectHours={handleRejectHours}
        handleRejectCause={handleRejectCause}
        rejectionCause={rejectionCause}
        isLoading={isLoading}
      />
      <ModalAcceptReject open={openAccept} handleClose={handleClose} handleAcceptHours={handleAcceptHours} />
      <DetailsUploadHourModal setDataLoading={setDataLoading} openModal={open} setOpen={setOpen} />
    </>
  );
};

export default DetailsUploadHourBUtton;

import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveProjectHistory, rejectProjectHistory } from "../../../../features/slice/projectDrawerSlice";
import DetailsUploadHourModal from "./DetailsUploadHourModal";
import ModalAcceptReject from "./ModalAcceptReject";

const DetailsUploadHourBUtton = ({ role, value }) => {
  const [open, setOpen] = React.useState(false);
  const [openAccept, setOpenAccept] = React.useState(false);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleOpenAccept = () => setOpenAccept(true);
  const handleClose = () => {
    setOpenAccept(false);
    setOpen(false);
  };
  const handleOpenReject = () => {
    setOpenAccept(true);
  };
  const handleAcceptHours = () => {
    console.log(projectDrawer._id);
    dispatch(approveProjectHistory(projectDrawer._id));
  };
  const handleRejectHours = () => {
    console.log(projectDrawer._id);
    dispatch(rejectProjectHistory(projectDrawer._id));
  };

  return (
    <>
      {value === "completed" ? (
        <>
          <Button
            sx={{
              backgroundColor: "#FFAB00",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "6px",
              border: "1px solid #FFAB00",
              "&:hover": {
                backgroundColor: "#F2A200",
              },
              mr: 2,
            }}
            variant="contained"
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
            variant="contained"
            // onClick={() => handleAcceptHours()}
            onClick={handleOpenAccept}
            sx={{
              backgroundColor: "#2E58FF",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "6px",
              "&:hover": {},
              mr: 2,
            }}>
            <i style={{}} className="ri-checkbox-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Accept
            </Typography>
          </Button>
          <Button
            // disabled={params.isVerified}
            variant="contained"
            // onClick={() => handleRejectHours()}
            onClick={handleOpenReject}
            sx={{
              backgroundColor: "#FF4757",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "6px",
              "&:hover": {},
              mr: 2,
            }}>
            <i style={{}} className="ri-close-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Reject
            </Typography>
          </Button>
        </>
      )}
      <ModalAcceptReject open={openAccept} handleClose={handleClose} />
      <DetailsUploadHourModal openModal={open} setOpen={setOpen} />
    </>
  );
};

export default DetailsUploadHourBUtton;

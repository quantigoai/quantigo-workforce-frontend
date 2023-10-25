import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveProjectHistory, rejectProjectHistory } from "../../../../features/slice/projectDrawerSlice";
import DetailsUploadHourModal from "./DetailsUploadHourModal";

const DetailsUploadHourBUtton = ({ role, value }) => {
  const [open, setOpen] = React.useState(false);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleOpen}
          >
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
            onClick={() => handleAcceptHours()}
            sx={{
              backgroundColor: "#2E58FF",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "6px",
              "&:hover": {},
              mr: 2,
            }}
          >
            <i style={{}} className="ri-checkbox-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Accept
            </Typography>
          </Button>
          <Button
            // disabled={params.isVerified}
            variant="contained"
            onClick={() => handleRejectHours()}
            sx={{
              backgroundColor: "#FF4757",
              color: "#FFF",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "6px",
              "&:hover": {},
              mr: 2,
            }}
          >
            <i style={{}} className="ri-close-circle-fill"></i>
            <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
              Hours Reject
            </Typography>
          </Button>
        </>
      )}

      <DetailsUploadHourModal openModal={open} setOpen={setOpen} />
    </>
  );
};

export default DetailsUploadHourBUtton;

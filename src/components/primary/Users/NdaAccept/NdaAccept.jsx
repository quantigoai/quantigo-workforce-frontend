import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAUserById } from "../../../../features/slice/userSlice";
import NdaRejectModal from "./NdaRejectModal";

const NdaAccept = ({ signNda, userId, isNDASigned, signImage }) => {
  const alert = useAlert();
  const serverLink = "https://wmpserver.onrender.com/api/v1/";
  const pdfLink = serverLink.concat(signNda);
  const [isVerified, setIsVerified] = useState();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const { isLoading } = useSelector((state) => state.user);

  const handleClick = (pdfLink) => {
    window.open(pdfLink);
  };
  const handleAccept = (userId) => {
    const data = {
      id: userId,
      varifiedData: {
        isVerified: true,
      },
    };
    dispatch(updateAUserById(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("User Verified successfully", { type: "success" });
      } else {
        alert.show("User not Verified ", { type: "error" });
      }
    });
  };
  const handleReject = (userId) => {
    setOpenModal(true);
  };

  const onSubmit = (data) => {
    const finalData = {
      id: userId,
      varifiedData: {
        isVerified: false,
        rejectionCause: data.rejectionCause,
      },
    };
    dispatch(updateAUserById(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Reject  NDA", { type: "success" });
      } else {
        alert.show("No Reject  NDA", { type: "error" });
      }
    });
    handleClose();
    setOpen(false);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <>
      <spam>
        <Button disabled={isLoading}>
          <AssignmentTurnedInIcon onClick={() => handleAccept(userId)} />
        </Button>

        <Button disabled={isLoading}>
          <CancelIcon onClick={() => handleReject(userId)} />
        </Button>
      </spam>
      <NdaRejectModal
        openModal={openModal}
        handleClose={handleClose}
        register={register}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default NdaAccept;

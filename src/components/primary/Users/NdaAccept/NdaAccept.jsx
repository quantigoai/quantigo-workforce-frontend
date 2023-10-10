import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAUserById } from "../../../../features/slice/userSlice";
import AcceptModal from "./AcceptModal";
import NdaRejectModal from "./NdaRejectModal";
import useToaster from "../../../../customHooks/useToaster";

const NdaAccept = ({ signNda, user, isNDASigned, signImage }) => {
  const alert = useAlert();

  const toast = useToaster();
  const serverLink = "https://wmpserver.onrender.com/api/v1/";
  const pdfLink = serverLink.concat(signNda);
  const [isVerified, setIsVerified] = useState();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [openAccepet, setOpenAccepet] = React.useState(false);
  const handleOpen = () => setOpenAccepet(true);
  const handleCloseModal = () => setOpenAccepet(false);
  const { isLoading } = useSelector((state) => state.user);

  const handleClick = (pdfLink) => {
    window.open(pdfLink);
  };
  const handleAccept = () => {
    const data = {
      id: user._id,
      varifiedData: {
        isVerified: true,
      },
    };
    // dispatch(updateAUserById(data)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     alert.show("User Verified successfully", { type: "success" });
    //   } else {
    //     alert.show("User not Verified ", { type: "error" });
    //   }
    // });
  };
  const handleReject = () => {
    setOpenModal(true);
  };

  const onSubmit = (data) => {
    const finalData = {
      id: user._id,
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
          <AssignmentTurnedInIcon onClick={() => handleOpen()} />
        </Button>

        <Button disabled={isLoading}>
          <CancelIcon onClick={() => handleReject()} />
        </Button>
      </spam>
      <NdaRejectModal openModal={openModal} handleClose={handleClose} register={register} onSubmit={onSubmit} />
      <AcceptModal open={openAccepet} handleClose={handleCloseModal} handleAccept={handleAccept} user={user} />
    </>
  );
};

export default NdaAccept;

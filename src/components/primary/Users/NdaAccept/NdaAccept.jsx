import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import {Button} from "@mui/material";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import {updateAUserById} from "../../../../features/slice/userSlice";
import AcceptModal from "./AcceptModal";
import NdaRejectModal from "./NdaRejectModal";

const NdaAccept = ({ signNda, user, isNDASigned, signImage }) => {
  const toast = useToaster();
  const serverLink = "https://wmpserver.onrender.com/api/v1/";
  const pdfLink = serverLink.concat(signNda);
  const [isVerified, setIsVerified] = useState();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [rejectionCause, setRejectionCause] = useState("");
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
    //     toast.trigger("User Verified successfully", "success");
    //   } else {
    //     toast.trigger("User not Verified ", "error");
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
        rejectionCause: rejectionCause,
      },
    };
    dispatch(updateAUserById(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger("Reject  NDA", "success");
      } else {
        toast.trigger("No Reject  NDA", "error");
      }
    });
    handleClose();
    setOpen(false);
  };
  const handleRejectCause = (e) => {
    setRejectionCause(e.target.value);
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
      <NdaRejectModal
        openModal={openModal}
        handleClose={handleClose}
        register={register}
        onSubmit={onSubmit}
        handleRejectCause={handleRejectCause}
      />
      <AcceptModal open={openAccepet} handleClose={handleCloseModal} handleAccept={handleAccept} user={user} />
    </>
  );
};

export default NdaAccept;

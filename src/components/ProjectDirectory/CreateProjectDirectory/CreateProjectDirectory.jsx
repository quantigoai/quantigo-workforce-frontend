import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { createProjectDirectory } from "../../../features/slice/ProjectDirectorySlice";
import CreateProjectDirectoryModal from "./CreateProjectDirectoryModal";

const CreateProjectDirectory = () => {
  const [open, setOpen] = useState(false);

  const toast = useToaster();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handleCreateModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  const onSubmit = (data) => {
    dispatch(createProjectDirectory(data)).then((action) => {
      if (action.payload.status === 200) {
        setOpenModal(false);
        toast.trigger("Successfully created Project Directory", "success");
      } else {
        toast.trigger("Project Directory do not create", "error");
      }
    });
  };

  return (
    <>
      <Box>
        <Button
          variant="contained"
          type="submit"
          sx={{
            // width: "40%",
            height: "45px",
            backgroundColor: "#2D58FF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#FF9A45",
              color: "#1D1D1D",
            },
            borderRadius: "2px",
          }}
          onClick={() => handleCreateModal()}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <AddIcon />
            Add Project
          </Box>
        </Button>
      </Box>
      <CreateProjectDirectoryModal openModal={openModal} handleClose={handleClose} onSubmit={onSubmit} />
    </>
  );
};

export default CreateProjectDirectory;

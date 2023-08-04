import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { createProjectDirectory } from "../../../features/slice/ProjectDirectorySlice";
import CreateProjectDirectoryModal from "./CreateProjectDirectoryModal";

const CreateProjectDirectory = () => {
  const [open, setOpen] = useState(false);
  const alert = useAlert();
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
        alert.show("Successfully created Project Directory", {
          type: "success",
        });
      } else {
        alert.show("Project Directory do not create", { type: "error" });
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
      <CreateProjectDirectoryModal
        openModal={openModal}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CreateProjectDirectory;

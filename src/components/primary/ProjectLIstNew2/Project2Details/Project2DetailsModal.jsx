import { Box, Fade, Modal, Stack, Grid, Typography } from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import ProjectModalHeader from "../ProjectModalHeader";
import DetailsItem from "./DetailsItem";
import SingleItem from "./SingleItem";
import BoxItem from "./BoxItem";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const Project2DetailsModal = ({
  detailsProjectOpen,
  handleProjectDetailsOpen,
  handleDetailsProjectClose,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={detailsProjectOpen}
        onClose={handleDetailsProjectClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={detailsProjectOpen}>
          <Box sx={style}>
            <ProjectModalHeader
              handleCreateProjectClose={handleDetailsProjectClose}
              modalTitle={"Project Details"}
            />
            <Box sx={{ padding: "3%" }}>
              <Stack
                sx={{
                  border: "1px solid #E6ECF5",
                  //   padding: "16px",
                  borderRadius: "8px",
                  //   background: "#FAFCFF",
                }}>
                <DetailsItem
                  Item1Title={"Project Name"}
                  Item1={"Car Annotation"}
                  Item2Title={"Batch"}
                  Item2={3}
                />
                <DetailsItem
                  Item1Title={"Alias"}
                  Item1={"Qai_Bone"}
                  Item2Title={"Project Type"}
                  Item2={"Video"}
                />

                <DetailsItem
                  Item1Title={"PDR"}
                  Item1={2}
                  Item2Title={"Completed Course"}
                  Item2={"No Course"}
                />
                <DetailsItem
                  Item1Title={"Benchmark"}
                  Item1={"10 sec/object, 5 sec/tag"}
                  Item2Title={"Estimated end Time"}
                  Item2={"No Course"}
                />
                <SingleItem ItemTitle={"Status"} Item={"Pending"} />
                <SingleItem ItemTitle={"Skills"} Item={"bsjkdfsaf"} />
                {/* document Item List */}
                <BoxItem />
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Project2DetailsModal;

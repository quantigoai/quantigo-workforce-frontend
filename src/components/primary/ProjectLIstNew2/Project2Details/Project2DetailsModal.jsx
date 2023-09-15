import { Box, Fade, Modal, Stack, Grid, Typography } from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import ProjectModalHeader from "../ProjectModalHeader";
import DetailsItem from "./DetailsItem";
import SingleItem from "./SingleItem";
import BoxItem from "./BoxItem";
import { useSelector } from "react-redux";
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
const Project2DetailsModal = ({ detailsProjectOpen, handleProjectDetailsOpen, handleDetailsProjectClose }) => {
  const { isLoading, projectDrawer } = useSelector((state) => state.projectDrawer);
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
        }}
      >
        <Fade in={detailsProjectOpen}>
          <Box sx={style}>
            <ProjectModalHeader handleCreateProjectClose={handleDetailsProjectClose} modalTitle={"Project Details"} />
            <Box sx={{ padding: "3%" }}>
              <Stack
                sx={{
                  border: "1px solid #E6ECF5",
                  //   padding: "16px",
                  borderRadius: "8px",
                  //   background: "#FAFCFF",
                }}
              >
                <DetailsItem
                  Item1Title={"Project Name"}
                  Item1={projectDrawer.project_drawer_name}
                  Item2Title={"Batch"}
                  Item2={projectDrawer.project_batch}
                />
                <DetailsItem
                  Item1Title={"Alias"}
                  Item1={projectDrawer.project_alias}
                  Item2Title={"Project Type"}
                  Item2={projectDrawer.project_type}
                />

                <DetailsItem
                  Item1Title={"PDR"}
                  Item1={projectDrawer.pdr}
                  Item2Title={"Completed Course"}
                  Item2={"No Course"}
                />
                <DetailsItem
                  Item1Title={"Benchmark"}
                  Item1={projectDrawer.benchMark ? projectDrawer.benchMark : "10 sec/object, 5 sec/tag"}
                  Item2Title={"Estimated end Time"}
                  Item2={"No Course"}
                />
                <SingleItem ItemTitle={"Status"} Item={projectDrawer.project_status} />
                <SingleItem ItemTitle={"Skills"} Item={projectDrawer.project_skills} />
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

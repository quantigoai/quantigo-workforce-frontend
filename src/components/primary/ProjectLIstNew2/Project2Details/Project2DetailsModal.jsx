import {Box, Fade, Modal, Stack} from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import ProjectModalHeader from "../ProjectModalHeader";
import DetailsItem from "./DetailsItem";
import SingleItem from "./SingleItem";
import BoxItem from "./BoxItem";

import {formatDate} from "../../../../helper/dateConverter";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";
import {useSelector} from "react-redux";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
  projectDrawer,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
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
          <Box
            sx={{
              ...style,
              height: { xl: "80%", lg: "90%" },
              width: { xl: "40%", lg: "50%" },
            }}
          >
            <Box sx={{ flex: "0 0 5%" }}>
              <ProjectModalHeader handleCreateProjectClose={handleDetailsProjectClose} modalTitle={"Project Details"} />
            </Box>
            <Box
              sx={{
                padding: "3%",
                flex: "1",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "0", // Hide the scrollbar
                },
              }}
            >
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
                  isLightTheme={isLightTheme}
                  Item1={projectDrawer?.project_drawer_name}
                  Item2Title={"Batch"}
                  Item2={projectDrawer?.project_batch}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Alias"}
                  Item1={projectDrawer?.project_alias}
                  Item2Title={"Project Type"}
                  Item2={capitalizeFirstLetter(projectDrawer?.project_type)}
                />

                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"PDR"}
                  Item1={projectDrawer?.pdr}
                  Item2Title={"Completed Course"}
                  Item2={"No Course"}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Benchmark"}
                  Item1={projectDrawer?.benchMark ? projectDrawer.benchMark : "10 sec/object, 5 sec/tag"}
                  Item2Title={"Estimated end Time"}
                  Item2={formatDate(projectDrawer?.estimated_end_date)}
                />
                <SingleItem
                  isLightTheme={isLightTheme}
                  ItemTitle={"Status"}
                  Item={capitalizeFirstLetter(projectDrawer?.project_status)}
                />
                <SingleItem ItemTitle={"Skills"} Item={projectDrawer?.project_skills} />
                {/* document Item List */}
                <BoxItem isLightTheme={isLightTheme} Item={projectDrawer?.relevantDocuments} />
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Project2DetailsModal;

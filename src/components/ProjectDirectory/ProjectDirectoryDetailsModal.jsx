import {Box, Fade, Modal, Stack} from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";

import {useSelector} from "react-redux";
import ProjectModalHeader from "../primary/ProjectLIstNew2/ProjectModalHeader";
import DetailsItem from "../primary/ProjectLIstNew2/Project2Details/DetailsItem";

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

const ProjectDirectoryDetailsModal = ({ openProjectModalDetails, item, handleDetailsProjectDirectoryClose }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openProjectModalDetails}
        onClose={handleDetailsProjectDirectoryClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openProjectModalDetails}>
          <Box
            sx={{
              ...style,
              height: { xl: "80%", lg: "90%" },
              width: { xl: "40%", lg: "50%" },
            }}
          >
            <Box sx={{ flex: "0 0 5%" }}>
              <ProjectModalHeader
                handleCreateProjectClose={handleDetailsProjectDirectoryClose}
                modalTitle={"Project Directory details"}
              />
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
                  Item1={item?.project_Name}
                  Item2Title={"Platform"}
                  Item2={item?.platform}
                />

                <DetailsItem
                  Item1Title={"Client alias"}
                  isLightTheme={isLightTheme}
                  Item1={item?.client_Alias}
                  Item2Title={"Industry"}
                  Item2={item?.industry}
                />

                <DetailsItem
                  Item1Title={"Tool type"}
                  isLightTheme={isLightTheme}
                  Item1={item?.tool_Type}
                  Item2Title={"Project Type"}
                  Item2={item?.project_Type}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Action Items"}
                  Item1={item?.action_Items}
                  Item2Title={"QA"}
                  Item2={item?.QA}
                />

                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"QA Check Points"}
                  Item1={item?.QA_Check_Points}
                  Item2Title={"Objective Benchmark"}
                  Item2={item?.obj_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Image Benchmark"}
                  Item1={item?.img_Benchmark}
                  Item2Title={"Tagging Benchmark"}
                  Item2={item?.tagging_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Skip Image"}
                  Item1={item?.skip_Image}
                  Item2Title={"Update"}
                  Item2={item?.update}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Image Loading"}
                  Item1={item?.image_Loading}
                  Item2Title={"PDR"}
                  Item2={item?.PDR}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Object Saving Time"}
                  Item1={item?.object_Saving_Time}
                  Item2Title={"Tagging Benchmark"}
                  Item2={item?.tagging_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Video Watch Time"}
                  Item1={item?.video_Watch_Time}
                  Item2Title={"Judgement Time"}
                  Item2={item?.judgement_Time}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"QA Benchmark"}
                  Item1={item?.QA_Benchmark}
                  Item2Title={"Annotation "}
                  Item2={item?.annotation}
                />
                <DetailsItem isLightTheme={isLightTheme} Item1Title={"Remarks"} Item1={item?.remarks} />
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectDirectoryDetailsModal;

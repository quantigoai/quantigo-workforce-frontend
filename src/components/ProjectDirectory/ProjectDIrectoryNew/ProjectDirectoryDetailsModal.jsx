import { Box, Fade, Modal, Stack } from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";

import { useSelector } from "react-redux";
import ProjectModalHeader from "../../primary/ProjectLIstNew2/ProjectModalHeader";
import DetailsItem from "../../primary/ProjectLIstNew2/Project2Details/DetailsItem";
import SingleItem from "../../primary/ProjectLIstNew2/Project2Details/SingleItem";
import BoxItem from "../../primary/ProjectLIstNew2/Project2Details/BoxItem";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import { formatDate } from "../../../helper/dateConverter";
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
                  Item1={item?.Project_Name}
                  Item2Title={"Platform"}
                  Item2={item?.Platform}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Action Items"}
                  Item1={item?.Action_Items}
                  Item2Title={"Guideline"}
                  Item2={capitalizeFirstLetter(item?.Guideline)}
                />

                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"QA Check Points"}
                  Item1={item?.QA_Check_Points}
                  Item2Title={"Objective Benchmark"}
                  Item2={item?.Obj_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Image Benchmark"}
                  Item1={item?.Img_Benchmark ? item.Img_Benchmark : "10 sec/object, 5 sec/tag"}
                  Item2Title={"Tagging Benchmark"}
                  Item2={item?.Tagging_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Skip Image"}
                  Item1={item?.Skip_Image}
                  Item2Title={"Update"}
                  Item2={item?.Update}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Image Loading"}
                  Item1={item?.Image_Loading}
                  Item2Title={"PDR"}
                  Item2={item?.PDR}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Object Saving Time"}
                  Item1={item?.Object_Saving_Time}
                  Item2Title={"Tagging Benchmark"}
                  Item2={item?.Tagging_Benchmark}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"Video Watch Time"}
                  Item1={item?.Video_Watch_Time}
                  Item2Title={"Judgement Time"}
                  Item2={item?.Judgement_Time}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"QA Benchmark"}
                  Item1={item?.QA_Benchmark}
                  Item2Title={"Annotation "}
                  Item2={item?.Annotation}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={"QA"}
                  Item1={item?.QA}
                  Item2Title={"Remarks"}
                  Item2={item?.Remarks}
                />
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectDirectoryDetailsModal;

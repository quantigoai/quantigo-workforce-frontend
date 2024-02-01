import { Box, Fade, Modal, Stack } from '@mui/material';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';

import { useSelector } from 'react-redux';
import ProjectModalHeader from '../primary/ProjectLIstNew2/ProjectModalHeader';
import DetailsItem from '../primary/ProjectLIstNew2/Project2Details/DetailsItem';
import BoxDetailsItem from './BoxDetailsItem';
import { formatDate } from '../../helper/dateConverter';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  p: 0,
  input: {
    color: 'black',
    height: '20px',
    borderRadius: '8px',
  },
  select: {
    height: '20px',
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
              height: { xl: '80%', lg: '90%' },
              width: { xl: '40%', lg: '50%' },
            }}
          >
            <Box sx={{ flex: '0 0 5%' }}>
              <ProjectModalHeader
                handleCreateProjectClose={handleDetailsProjectDirectoryClose}
                modalTitle={'Project Directory details'}
              />
            </Box>
            <Box
              sx={{
                padding: '3%',
                flex: '1',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '0', // Hide the scrollbar
                },
              }}
            >
              <Stack
                sx={{
                  border: '1px solid #E6ECF5',
                  //   padding: "16px",
                  borderRadius: '8px',
                  //   background: "#FAFCFF",
                }}
              >
                <DetailsItem
                  Item1Title={'Project Name'}
                  isLightTheme={isLightTheme}
                  Item1={item?.project_Name ? item?.project_Name : 'N/A'}
                  Item2Title={'Data Type'}
                  Item2={item?.data_Type ? item?.data_Type : 'N/A'}
                />

                <DetailsItem
                  Item1Title={'Client alias'}
                  isLightTheme={isLightTheme}
                  Item1={item?.client_Alias ? item?.client_Alias : 'N/A'}
                  Item2Title={'Industry'}
                  Item2={item?.industry ? item?.industry : 'N/A'}
                />

                <DetailsItem
                  Item1Title={'Labeling Tool'}
                  isLightTheme={isLightTheme}
                  Item1={item?.labeling_Tool ? item?.labeling_Tool : 'N/A'}
                  Item2Title={'Project Type'}
                  Item2={item?.project_Type ? item?.project_Type : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Guideline'}
                  Item1={item?.guideline ? item?.guideline : 'N/A'}
                  Item2Title={'PDL'}
                  Item2={item?.PDL ? item?.PDL : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'DL'}
                  Item1={item?.DL ? item?.DL : 'N/A'}
                  Item2Title={'DCR'}
                  Item2={item?.DCR ? item?.DCR : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'PCR'}
                  Item1={item?.PCR ? item?.PCR : 'N/A'}
                  Item2Title={'Completion Date'}
                  Item2={item?.completion_Date ? formatDate(item?.completion_Date) : 'N/A'}
                />
                <BoxDetailsItem Item={[]} />

                {/* //benchmarks  */}
                {/* <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Action Items'}
                  Item1={item?.action_Items ? item?.action_Items : 'N/A'}
                  Item2Title={'QA'}
                  Item2={item?.QA ? item?.QA : 'N/A'}
                />

                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'QA Check Points'}
                  Item1={item?.QA_Check_Points ? item?.QA_Check_Points : 'N/A'}
                  Item2Title={'Objective Benchmark'}
                  Item2={item?.obj_Benchmark ? item?.obj_Benchmark : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Image Benchmark'}
                  Item1={item?.img_Benchmark ? item?.img_Benchmark : 'N/A'}
                  Item2Title={'Tagging Benchmark'}
                  Item2={item?.tagging_Benchmark ? item?.tagging_Benchmark : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Skip Image'}
                  Item1={item?.skip_Image ? item?.skip_Image : 'N/A'}
                  Item2Title={'Update'}
                  Item2={item?.update ? item?.update : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Image Loading'}
                  Item1={item?.image_Loading ? item?.image_Loading : 'N/A'}
                  Item2Title={'PDR'}
                  Item2={item?.PDR ? item?.PDR : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Object Saving Time'}
                  Item1={item?.object_Saving_Time ? item?.object_Saving_Time : 'N/A'}
                  Item2Title={'Tagging Benchmark'}
                  Item2={item?.tagging_Benchmark ? item?.tagging_Benchmark : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Video Watch Time'}
                  Item1={item?.video_Watch_Time ? item?.video_Watch_Time : 'N/A'}
                  Item2Title={'Judgement Time'}
                  Item2={item?.judgement_Time ? item?.judgement_Time : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'QA Benchmark'}
                  Item1={item?.QA_Benchmark ? item?.QA_Benchmark : 'N/A'}
                  Item2Title={'Annotation '}
                  Item2={item?.annotation ? item?.annotation : 'N/A'}
                />
                <DetailsItem
                  isLightTheme={isLightTheme}
                  Item1Title={'Remarks'}
                  Item1={item?.remarks ? item?.remarks : 'N/A'}
                /> */}
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectDirectoryDetailsModal;

import { Box, Button, Fade, Modal, Stack } from '@mui/material';
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
  height: '50%',
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
              width: { xxl: '50%', xl: '60%', lg: '70%' },
              height: { lg: '80%', xl: '90%', xxl: '90%' },
              top: {
                lg: '50%',
                xl: '50%',
                xxl: '50%',
              },
              left: {
                lg: '55%',
                xl: '50%',
                xxl: '53%',
              },
            }}
          >
            <Box
              sx={{
                flex: '0 0 5%',
                height: {
                  lg: '10%',
                  xl: '10%',
                  xxl: '8%',
                },
              }}
            >
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

                {/* //benchmarks  */}
              </Stack>
              <Box sx={{ mb: 2 }}>
                <BoxDetailsItem item={item} />
              </Box>
            </Box>
            <Box
              sx={{
                paddingY: { lg: '10px', xl: '12px', xxl: '12px' },
                paddingX: '12px',
                mt: 1,
              }}
            ></Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectDirectoryDetailsModal;

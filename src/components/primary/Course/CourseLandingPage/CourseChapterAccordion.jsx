import { Accordion, AccordionSummary, Box, Typography } from '@mui/material';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
};
const accordionBoxNumberStyle = {
  backgroundColor: '#E2E8F0',
  padding: '2px',
  borderRadius: '99px',
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
};
const CourseChapterAccordion = ({ arr, isLightTheme, course }) => {
  return (
    <Box>
      {arr.map((arr) => (
        <Accordion
          disableGutters={true}
          sx={{
            backgroundColor: isLightTheme ? '#F8FAFC' : '',
          }}
          key={arr}
        >
          <AccordionSummary
            sx={{ padding: '11px 16px' }}
            expanded={false}
            square={true}
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '24px', color: '#98A2B3' }} />}
          >
            <Box sx={boxStyle}>
              <Box sx={accordionBoxNumberStyle}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>{arr + 1}</Typography>
              </Box>
              <Box>
                <Typography variant="wpf_p3_semiBold" color={'grey.600'}>
                  Foundations of Project Management
                </Typography>
                <br />
                <Typography variant="wpf_p4_regular" color={'grey.700'}>
                  40 minutes
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseChapterAccordion;

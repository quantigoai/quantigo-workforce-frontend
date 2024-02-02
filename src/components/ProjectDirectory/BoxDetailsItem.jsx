import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import DetailsItem from '../primary/ProjectLIstNew2/Project2Details/DetailsItem';
import { formatDate } from '../../helper/dateConverter';

const BoxDetailsItem = ({ item }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack sx={{ borderBottom: '0px solid #E6ECF5' }}>
        <Grid container>
          <Grid item xs={12} sx={{ paddingTop: '5%' }}>
            <Typography variant="wpf_p4_semiBold" sx={{ pl: 1 }}>
              Benchmarks
            </Typography>
            <Stack
              sx={{
                border: '1px solid #E6ECF5',
                marginTop: '14px',
                // padding: "16px",

                borderRadius: '8px',
                background: isLightTheme ? '#FAFCFF' : '#1E2A41',
                // height: item?.length === 1 ? '8vh' : item?.length === 0 ? '14vh' : '20vh',
                scrollBehavior: 'smooth',
                overflow: 'auto',
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                  width: '0.3em',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#888',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#555',
                },
              }}
            >
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Manual Creation'}
                Item1={item?.manual_Creation ? item?.manual_Creation : 'N/A'}
                Item2Title={'Correction'}
                Item2={item?.correction ? item?.correction : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Deletion'}
                Item1={item?.Deletion ? item?.Deletion : 'N/A'}
                Item2Title={'Object Assessment'}
                Item2={item?.object_Assessment ? item?.object_Assessment : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Manual Tagging'}
                Item1={item?.manual_Tagging ? item?.manual_Tagging : 'N/A'}
                Item2Title={'Tag Correction'}
                Item2={item?.tag_Correction ? item?.tag_Correction : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Tag Deletion'}
                Item1={item?.tag_Deletion ? item?.tag_Deletion : 'N/A'}
                Item2Title={'Tag Check Review'}
                Item2={item?.tag_Check_Review ? item?.tag_Check_Review : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Cloning Manual Object'}
                Item1={item?.cloning_Manual_Object ? item?.cloning_Manual_Object : 'N/A'}
                Item2Title={'Clone Correction'}
                Item2={item?.clone_Correction ? item?.clone_Correction : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Tag Check QA'}
                Item1={item?.tag_Check_QA ? item?.tag_Check_QA : 'N/A'}
                Item2Title={'Image Assessment'}
                Item2={item?.image_Assessment ? item?.image_Assessment : 'N/A'}
              />
              <DetailsItem
                isLightTheme={isLightTheme}
                Item1Title={'Video Assessment'}
                Item1={item?.video_Assessment ? item?.video_Assessment : 'N/A'}
                Item2Title={'Categorization'}
                Item2={item?.categorization ? item?.categorization : 'N/A'}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default BoxDetailsItem;

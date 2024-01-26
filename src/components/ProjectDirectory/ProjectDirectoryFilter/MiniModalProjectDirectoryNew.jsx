import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import AnnotationType from './AnnotationType';
import IndustryTypeField from './IndustryTypeField';
import SelectFilterProjectDirectory from './SelectFilterProjectDirectory';

import { useSelector } from 'react-redux';
import ActionTypeField from './ActionItemsField';
import Deletionfield from './Deletionfield';
import ImageLoadingField from './ImageLoadingField';
import ImgBenchmark from './ImgBenchmark';
import ItemsField from './ItemsField';
import JudgementTimeField from './JudgementTimeField';
import ObjBenchmarkField from './ObjBenchmarkField';
import ObjectSavingTimeField from './ObjectSavingTimeField';
import QABenchmarkField from './QABenchmarkField';
import QACheckPointsField from './QACheckPointsField';
import QAField from './QAField';
import SkipImageField from './SkipImageField';
import TaggingBenchmark from './TaggingBenchmark';
import ToolTypeField from './ToolTypeField';
import VideoWatchTimeField from './VideoWatchTimeField';

const MiniModalProjectDirectoryNew = ({
  handleCloseFilter,
  setIndustryType,
  handleFilterProjectDirectory,
  handleResetProjectDirectory,
  industryType,
  setClientAliasesFilter,
  clientAliasFilter,
  setPDRFilter,
  pDRFilter,
  setDataTypeFilter,
  dataTypeFilter,
  setAnnotationFilter,
  annotationFilter,
  platformFieldFilter,
  setPlatformFieldFilter,
  projectTypeFieldFilter,
  setProjectTypeFieldFilter,
  actionItemsFieldFilter,
  setActionItemsFieldFilter,
  qaCheckPointFieldFilter,
  setQaCheckPointFieldFilter,
  objBenchMarkFieldFilter,
  setObjBenchMarkFieldFilter,
  imgBenchMarkFieldFilter,
  setImgBenchMarkFieldFilter,
  taggingBenchMarkFieldFilter,
  setTaggingBenchMarkFieldFilter,
  deletionFieldFilter,
  setDeletionFieldFilter,
  toolTypeFieldFilter,
  setToolTypeFieldFilter,
  skipImageFieldFilter,
  setSkipImageFieldFilter,
  imageLoadingFieldFilter,
  setImageLoadingFieldFilter,
  objectSavingTimeFieldFilter,
  setobjectSavingTimeFieldFilter,
  videoWatchTimeFieldFilter,
  setVideoWatchTimeFieldFilter,
  qAFieldFilter,
  setQAFieldFilter,
  judgementTimeFieldFilter,
  setJudgementTimeFieldFilter,
  qABenchmarkFieldFilter,
  setQABenchmarkFieldFilter,
  setQAFilter,
  qAField,
  pdrSetFilter,
  Client_AliasSetFilter,
  annotationSetFilter,
  platformField,
  industrySetFilter,
  toolTypeField,
  actionItemsField,
  projectTypeField,
  qaCheckPointField,
  objBenchMarkField,
  imageBenchMarkField,
  tagingBenchMarkField,
  skipImageField,
  imageLoadingField,
  objectSavingTimeFilter,
  videoWatchTimeFilter,
  DeletionField,
  judgementTimeFilter,
  qABenchmarkField,
  handleMenuItemClick,
  setAnchorEl,
  anchorEl,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: 'background.paper',
          width: { xxl: '400px', xl: '300px', lg: '300px' },
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            paddingY: '10px',
            paddingX: '15px',
          }}
        >
          <Typography variant="wpf_p1_semiBold">Filter By</Typography>
          <CloseIcon
            sx={{ color: '#2D58FF', cursor: 'pointer', fontweight: '600 ' }}
            onClick={handleCloseFilter}
          />
        </Box>
        {/* <br /> */}
        <Box sx={{ px: '15px' }}>
          <Grid item xs={12}>
            <SelectFilterProjectDirectory
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
            />
          </Grid>
        </Box>
        <br />
        {qAField ? (
          <Grid container sx={{ padding: '1%' }}>
            <QAField
              isLightTheme={isLightTheme}
              setQAFieldFilter={setQAFieldFilter}
              qAFieldFilter={qAFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {judgementTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <JudgementTimeField
              isLightTheme={isLightTheme}
              setJudgementTimeFieldFilter={setJudgementTimeFieldFilter}
              judgementTimeFieldFilter={judgementTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qABenchmarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <QABenchmarkField
              isLightTheme={isLightTheme}
              setQABenchmarkFieldFilter={setQABenchmarkFieldFilter}
              qABenchmarkFieldFilter={qABenchmarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {skipImageField ? (
          <Grid container sx={{ padding: '1%' }}>
            <SkipImageField
              isLightTheme={isLightTheme}
              setSkipImageFieldFilter={setSkipImageFieldFilter}
              skipImageFieldFilter={skipImageFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {imageLoadingField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ImageLoadingField
              isLightTheme={isLightTheme}
              setImageLoadingFieldFilter={setImageLoadingFieldFilter}
              imageLoadingFieldFilter={imageLoadingFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objectSavingTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ObjectSavingTimeField
              isLightTheme={isLightTheme}
              setobjectSavingTimeFieldFilter={setobjectSavingTimeFieldFilter}
              objectSavingTimeFieldFilter={objectSavingTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {videoWatchTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <VideoWatchTimeField
              isLightTheme={isLightTheme}
              setVideoWatchTimeFieldFilter={setVideoWatchTimeFieldFilter}
              videoWatchTimeFieldFilter={videoWatchTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {toolTypeField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ToolTypeField
              isLightTheme={isLightTheme}
              setToolTypeFieldFilter={setToolTypeFieldFilter}
              toolTypeFieldFilter={toolTypeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {DeletionField ? (
          <Grid container sx={{ padding: '1%' }}>
            <Deletionfield
              isLightTheme={isLightTheme}
              setDeletionFieldFilter={setDeletionFieldFilter}
              deletionFieldFilter={deletionFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {tagingBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <TaggingBenchmark
              isLightTheme={isLightTheme}
              setTaggingBenchMarkFieldFilter={setTaggingBenchMarkFieldFilter}
              taggingBenchMarkFieldFilter={taggingBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {imageBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ImgBenchmark
              isLightTheme={isLightTheme}
              setImgBenchMarkFieldFilter={setImgBenchMarkFieldFilter}
              imgBenchMarkFieldFilter={imgBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ObjBenchmarkField
              isLightTheme={isLightTheme}
              setObjBenchMarkFieldFilter={setObjBenchMarkFieldFilter}
              objBenchMarkFieldFilter={objBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qaCheckPointField ? (
          <Grid container sx={{ padding: '1%' }}>
            <QACheckPointsField
              isLightTheme={isLightTheme}
              qaCheckPointFieldFilter={qaCheckPointFieldFilter}
              setQaCheckPointFieldFilter={setQaCheckPointFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {actionItemsField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ActionTypeField
              isLightTheme={isLightTheme}
              actionItemsFieldFilter={actionItemsFieldFilter}
              setActionItemsFieldFilter={setActionItemsFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {projectTypeField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              projectTypeFieldFilter={projectTypeFieldFilter}
              setProjectTypeFieldFilter={setProjectTypeFieldFilter}
              title="Platform"
              type="platform"
              isLightTheme={isLightTheme}
            />
          </Grid>
        ) : (
          <></>
        )}
        {platformField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Platform"
              type="platform"
              isLightTheme={isLightTheme}
              platformFieldFilter={platformFieldFilter}
              setPlatformFieldFilter={setPlatformFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {pdrSetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="PDR"
              type="PDR"
              isLightTheme={isLightTheme}
              pDRFilter={pDRFilter}
              setPDRFilter={setPDRFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {Client_AliasSetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              isLightTheme={isLightTheme}
              setClientAliasesFilter={setClientAliasesFilter}
              clientAliasFilter={clientAliasFilter}
              title="Client Alias"
              type="client_Alias"
            />
          </Grid>
        ) : (
          <></>
        )}
        {industrySetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <IndustryTypeField
              isLightTheme={isLightTheme}
              setIndustryType={setIndustryType}
              industryType={industryType}
            />
          </Grid>
        ) : (
          <></>
        )}
        {annotationSetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <AnnotationType
              isLightTheme={isLightTheme}
              setAnnotationFilter={setAnnotationFilter}
              annotationFilter={annotationFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        <br />
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: '15px',
              paddingY: '10px',
            }}
          >
            <Box>
              <Button
                onClick={handleResetProjectDirectory}
                fullWidth
                sx={{
                  backgroundColor: '#FF4757',
                  color: '#FFF',
                  fontSize: '14px',
                  borderRadius: '6px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  height: '40px',
                  '&:hover': {
                    backgroundColor: '#FF4757',
                    color: '#FFF',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#F5C4C8',
                    color: '#FFFFFF',
                  },
                }}
              >
                Reset
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  textTransform: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#2E58FF',
                  fontSize: '14px',
                  lineHeight: '20px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  height: '40px',
                  color: 'white',
                  '&:hover': {
                    background: '#244EF5',
                  },
                  padding: '16px 10px',
                }}
                onClick={handleFilterProjectDirectory}
                fullWidth
                variant="contained"
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MiniModalProjectDirectoryNew;

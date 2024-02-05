import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import ProjectDirectoryBenchMarkFieldIndex from '../ProjectDirectoryBenchMarkFieldIndex';
const data = [
  { value: 'industryType', title: '', type: '' },
  { value: 'setClientAliasesFilter', title: '', type: '' },
  { value: 'clientAliasFilter', title: '', type: '' },
  { value: 'setPDRFilter', title: '', type: '' },
  { value: 'pDRFilter', title: '', type: '' },
  { value: 'setDataTypeFilter', title: '', type: '' },
  { value: 'dataTypeFilter', title: '', type: '' },
  { value: 'setAnnotationFilter', title: '', type: '' },
  { value: 'annotationFilter', title: '', type: '' },
  { value: 'platformFieldFilter', title: '', type: '' },
  { value: 'setPlatformFieldFilter', title: '', type: '' },
  { value: 'projectTypeFieldFilter', title: '', type: '' },
  { value: 'setProjectTypeFieldFilter', title: '', type: '' },
  { value: 'actionItemsFieldFilter', title: '', type: '' },
  { value: 'setActionItemsFieldFilter', title: '', type: '' },
  { value: 'qaCheckPointFieldFilter', title: '', type: '' },
  { value: 'setQaCheckPointFieldFilter', title: '', type: '' },
  { value: 'objBenchMarkFieldFilter', title: '', type: '' },
  { value: 'setObjBenchMarkFieldFilter', title: '', type: '' },
  { value: 'imgBenchMarkFieldFilter', title: '', type: '' },
  { value: 'setImgBenchMarkFieldFilter', title: '', type: '' },
  { value: 'taggingBenchMarkFieldFilter', title: '', type: '' },
  { value: 'setTaggingBenchMarkFieldFilter', title: '', type: '' },
  { value: 'deletionFieldFilter', title: '', type: '' },
  { value: 'setDeletionFieldFilter', title: '', type: '' },
  { value: 'toolTypeFieldFilter', title: '', type: '' },
  { value: 'setToolTypeFieldFilter', title: '', type: '' },
  { value: 'skipImageFieldFilter', title: '', type: '' },
  { value: 'setSkipImageFieldFilter', title: '', type: '' },
  { value: 'imageLoadingFieldFilter', title: '', type: '' },
  { value: 'setImageLoadingFieldFilter', title: '', type: '' },
  { value: 'objectSavingTimeFieldFilter', title: '', type: '' },
  { value: 'setobjectSavingTimeFieldFilter', title: '', type: '' },
  { value: 'videoWatchTimeFieldFilter', title: '', type: '' },
  { value: 'setVideoWatchTimeFieldFilter', title: '', type: '' },
  { value: 'qAFieldFilter', title: '', type: '' },
  { value: 'setQAFieldFilter', title: '', type: '' },
  { value: 'judgementTimeFieldFilter', title: '', type: '' },
  { value: 'setJudgementTimeFieldFilter', title: '', type: '' },
  { value: 'qABenchmarkFieldFilter', title: '', type: '' },
  { value: 'setQABenchmarkFieldFilter', title: '', type: '' },
  { value: 'setQAFilter', title: '', type: '' },
  { value: 'qAField', title: 'QA', type: 'QA' },
  { value: 'pdrSetFilter', title: '', type: '' },
  { value: 'Client_AliasSetFilter', title: '', type: '' },
  { value: 'annotationSetFilter', title: '', type: '' },
  { value: 'platformField', title: '', type: '' },
  { value: 'industrySetFilter', title: '', type: '' },
  { value: 'toolTypeField', title: '', type: '' },
  { value: 'actionItemsField', title: '', type: '' },
  { value: 'projectTypeField', title: '', type: '' },
  { value: 'qaCheckPointField', title: '', type: '' },
  { value: 'objBenchMarkField', title: '', type: '' },
  { value: 'imageBenchMarkField', title: '', type: '' },
  { value: 'tagingBenchMarkField', title: '', type: '' },
  { value: 'skipImageField', title: '', type: '' },
  { value: 'imageLoadingField', title: '', type: '' },
  { value: 'objectSavingTimeFilter', title: '', type: '' },
  { value: 'videoWatchTimeFilter', title: '', type: '' },
  { value: 'DeletionField', title: '', type: '' },
  { value: 'judgementTimeFilter', title: '', type: '' },
  { value: 'qABenchmarkField', title: '', type: '' },
];
const MiniModalProjectDirectoryNew = ({
  setProjectDirectoryRemove,
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
  menuFilter,
}) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const { isLightTheme } = useSelector((state) => state.theme);
  const addBenchmarkType = [
    { item: 'Manual Creation', value: 'manual_Creation' },
    { item: 'Correction', value: 'correction' },
    { item: 'Deletion', value: 'deletion' },
    { item: 'Object Assessment', value: 'object_Assessment' },
    { item: 'Manual Tagging', value: 'manual_Tagging' },
    { item: 'Tag Correction', value: 'tag_Correction' },
    { item: 'Tag Deletion', value: 'tag_Deletion' },
    { item: 'Tag Check Review', value: 'tag_Check_Review' },
    { item: 'Cloning Manual Object', value: 'cloning_Manual_Object' },
    { item: 'Clone Correction', value: 'clone_Correction' },
    { item: 'Review', value: 'review' },
    { item: 'Tag Check QA', value: 'tag_Check_QA' },
    { item: 'Image Assessment', value: 'image_Assessment' },
    { item: 'Video Assessment', value: 'video_Assessment' },
    { item: 'Categorization', value: 'categorization' },
  ];
  const [addBenchmarkItems, setAddBenchmarkItems] = useState([]);
  const [benchmarkItems, setBenchmarkItems] = useState([]);
  useEffect(() => {
    addBenchmarkType.forEach((benchmark) => {
      if (benchmark.defaultValue) {
        setAddBenchmarkItems((prevState) => [...prevState, benchmark]);
      } else {
        setBenchmarkItems((prevState) => [...prevState, benchmark]);
        setProjectDirectoryRemove((prevState) => [...prevState, benchmark]);
      }
    });
  }, []);
  const handleMenuItemClickFilter = (val, item) => {
    // setAddBenchmarkItems((prevArray) => [...prevArray, val]);
    const addValue = {
      item: item,
      value: val,
    };
    setAddBenchmarkItems((prevArray) => [...prevArray, addValue]);

    const filteredArr = benchmarkItems.filter((item) => item.value !== val);
    setBenchmarkItems(filteredArr);
    setProjectDirectoryRemove(filteredArr);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleRemove = (name, label) => {
    const deleteValue = {
      item: label,
      value: name,
    };
    setBenchmarkItems((prevArray) => [...prevArray, deleteValue]);
    setProjectDirectoryRemove((prevArray) => [...prevArray, deleteValue]);

    const filteredArr = addBenchmarkItems.filter((item) => item.value != name);
    setAddBenchmarkItems(filteredArr);
  };
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
          <CloseIcon sx={{ color: '#2D58FF', cursor: 'pointer', fontweight: '600 ' }} onClick={handleCloseFilter} />
        </Box>
        {/* <br /> */}
        <Box sx={{ px: '15px' }}>
          <Grid item xs={12}>
            <SelectFilterProjectDirectory
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
              menuFilter={menuFilter}
            />
            {/* <ProjectDirectoryBenchMarkFieldIndex setProjectDirectoryRemove={setProjectDirectoryRemove} /> */}
          </Grid>
        </Box>
        <br />

        <Grid container spacing={1}>
          {addBenchmarkItems &&
            addBenchmarkItems.map((item) => (
              <>
                {item.defaultValue != '' && (
                  <Grid item xs={5.89}>
                    <Box
                      sx={{
                        width: '100%',
                        px: 0,

                        height: {
                          lg: '72px',
                          xl: '82px',
                          xxl: '85px',
                        },
                      }}
                    >
                      {/* <TextFieldProjectDirectoryBenchmark
                          name={item.value}
                          label={item.item}
                          handleRemove={handleRemove}
                          defaultValue={item.defaultValue}
                        /> */}
                      <ItemsField
                        title={item.item}
                        type={item.value}
                        isLightTheme={isLightTheme}
                        platformFieldFilter={judgementTimeFieldFilter}
                        setPlatformFieldFilter={setJudgementTimeFieldFilter}
                      />
                    </Box>
                  </Grid>
                )}
              </>
            ))}
          <Typography
            sx={{
              //   fontWeight: '600',
              // mt: '10px',
              //   fontSize: '14px',
              mb: '0px',
              color: benchmarkItems.length === 0 ? '#7D89A3' : '#2E58FF',
              cursor: benchmarkItems.length === 0 ? '' : 'pointer',

              //   pointerEvents: hasChanged ? "auto" : "none",
            }}
            disabled={benchmarkItems.length === 0 ? true : false}
            variant="wpf_h7_Bold"
            type="button"
            onClick={handleButtonClick}
            // onClick={handleAddOtherDocument}
          >
            <i className="ri-add-line"></i> Add Another Benchmark
          </Typography>
        </Grid>
        {qAField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="QA"
              type="QA"
              isLightTheme={isLightTheme}
              platformFieldFilter={qAFieldFilter}
              setPlatformFieldFilter={setQAFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {judgementTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Judgement Time"
              type="judgement_Time"
              isLightTheme={isLightTheme}
              platformFieldFilter={judgementTimeFieldFilter}
              setPlatformFieldFilter={setJudgementTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qABenchmarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="QA Benchmark"
              type="QA_Benchmark"
              isLightTheme={isLightTheme}
              platformFieldFilter={qABenchmarkFieldFilter}
              setPlatformFieldFilter={setQABenchmarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {skipImageField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Skip Image"
              type="skip_Image"
              isLightTheme={isLightTheme}
              platformFieldFilter={skipImageFieldFilter}
              setPlatformFieldFilter={setSkipImageFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {imageLoadingField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Image Loading"
              type="image_Loading"
              isLightTheme={isLightTheme}
              platformFieldFilter={imageLoadingFieldFilter}
              setPlatformFieldFilter={setImageLoadingFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objectSavingTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Object Saving Time"
              type="object_Saving_Time"
              isLightTheme={isLightTheme}
              platformFieldFilter={objectSavingTimeFieldFilter}
              setPlatformFieldFilter={setobjectSavingTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {videoWatchTimeFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Video Watch Time"
              type="video_Watch_Time"
              isLightTheme={isLightTheme}
              platformFieldFilter={videoWatchTimeFieldFilter}
              setPlatformFieldFilter={setVideoWatchTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {toolTypeField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Tool Type"
              type="tool_Type"
              isLightTheme={isLightTheme}
              platformFieldFilter={toolTypeFieldFilter}
              setPlatformFieldFilter={setToolTypeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {DeletionField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Deletion"
              type="deletion"
              isLightTheme={isLightTheme}
              platformFieldFilter={deletionFieldFilter}
              setPlatformFieldFilter={setDeletionFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {tagingBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Tagging Benchmark"
              type="tagging_Benchmark"
              isLightTheme={isLightTheme}
              platformFieldFilter={taggingBenchMarkFieldFilter}
              setPlatformFieldFilter={setTaggingBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {imageBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Img Benchmark"
              type="img_Benchmark"
              isLightTheme={isLightTheme}
              platformFieldFilter={imgBenchMarkFieldFilter}
              setPlatformFieldFilter={setImgBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objBenchMarkField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Object Benchmark"
              type="obj_Benchmark"
              isLightTheme={isLightTheme}
              platformFieldFilter={objBenchMarkFieldFilter}
              setPlatformFieldFilter={setObjBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qaCheckPointField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="QA Check Points"
              type="QA_Check_Points"
              isLightTheme={isLightTheme}
              platformFieldFilter={qaCheckPointFieldFilter}
              setPlatformFieldFilter={setQaCheckPointFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {actionItemsField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Action Items"
              type="action_Items"
              isLightTheme={isLightTheme}
              platformFieldFilter={actionItemsFieldFilter}
              setPlatformFieldFilter={setActionItemsFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {projectTypeField ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              platformFieldFilter={projectTypeFieldFilter}
              setPlatformFieldFilter={setProjectTypeFieldFilter}
              title="Project Type"
              type="project_Type"
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
              platformFieldFilter={pDRFilter}
              setPlatformFieldFilter={setPDRFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {Client_AliasSetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              isLightTheme={isLightTheme}
              setPlatformFieldFilter={setClientAliasesFilter}
              platformFieldFilter={clientAliasFilter}
              title="Client Alias"
              type="client_Alias"
            />
          </Grid>
        ) : (
          <></>
        )}
        {industrySetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            {/* <IndustryTypeField
              isLightTheme={isLightTheme}
              setIndustryType={setIndustryType}
              industryType={industryType}
            /> */}
            <ItemsField
              title="Industry"
              type="industry"
              isLightTheme={isLightTheme}
              platformFieldFilter={industryType}
              setPlatformFieldFilter={setIndustryType}
            />
          </Grid>
        ) : (
          <></>
        )}
        {annotationSetFilter ? (
          <Grid container sx={{ padding: '1%' }}>
            <ItemsField
              title="Annotation"
              type="annotation"
              isLightTheme={isLightTheme}
              platformFieldFilter={annotationFilter}
              setPlatformFieldFilter={setAnnotationFilter}
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
                  textTransform: 'none',
                  borderRadius: '8px',
                  lineHeight: '20px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  fontSize: { xxl: '14px', xl: '12px', lg: '10px' },
                  height: { xxl: '40px', xl: '40px', lg: '35px' },
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
                  lineHeight: '20px',
                  width: { xxl: '150px', xl: '100px', lg: '100px' },
                  fontSize: { xxl: '14px', xl: '12px', lg: '10px' },
                  height: { xxl: '40px', xl: '40px', lg: '35px' },
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

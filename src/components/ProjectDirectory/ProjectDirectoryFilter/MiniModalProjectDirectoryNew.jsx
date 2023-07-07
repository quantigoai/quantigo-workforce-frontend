import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import IndustryTypeField from "./IndustryTypeField";
import ClientAliasField from "./ClientAliasField";
import AnnotationType from "./AnnotationType";
import DataTypeField from "./DataTypeField";
import PdrField from "./PdrField";
import SelectFilterProjectDirectory from "./SelectFilterProjectDirectory";
import SampleExampleField from "./SampleExampleField";
import PlatformField from "./PlatformField";
import ToolTypeField from "./ToolTypeField";
import ProjectTypeField from "./ProjectTypeField";
import ActionTypeField from "./ActionItemsField";
import QACheckPointsField from "./QACheckPointsField";
import ObjBenchmarkField from "./ObjBenchmarkField";
import ImgBenchmark from "./ImgBenchmark";
import TaggingBenchmark from "./TaggingBenchmark";
import Deletionfield from "./Deletionfield";
import SkipImageField from "./SkipImageField";
import ImageLoadingField from "./ImageLoadingField";
import ObjectSavingTimeField from "./ObjectSavingTimeField";
import VideoWatchTimeField from "./VideoWatchTimeField";
import QAField from "./QAField";
import JudgementTimeField from "./JudgementTimeField";
import QABenchmarkField from "./QABenchmarkField";

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
}) => {
  // initialize value as an empty string
  const [typeFilter, setTypeFilter] = useState("");
  const [pdrSetFilter, setPdrSetFilter] = useState(false);
  const [Client_AliasSetFilter, setClient_AliasSetFilter] = useState(false);
  const [annotationSetFilter, setAnnotationSetFilter] = useState(false);
  const [platformField, setPlatformField] = useState(false);
  const [industrySetFilter, setIndustrySetFilter] = useState(false);
  const [toolTypeField, setToolTypeFilter] = useState(false);
  const [projectTypeField, setProjectTypeFilter] = useState(false);
  const [actionItemsField, setActionItemsFilter] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [qaCheckPointField, setQaCheckPointFilter] = useState(false);
  const [objBenchMarkField, setObjBenchMarkFilter] = useState(false);
  const [imageBenchMarkField, setImageBenchMarkFilter] = useState(false);
  const [tagingBenchMarkField, setTagingBenchMarkFilter] = useState(false);
  const [skipImageField, setSkipImageFilter] = useState(false);
  const [imageLoadingField, setImageLoadingFilter] = useState(false);
  const [objectSavingTimeFilter, setObjectSavingTimeFilter] = useState(false);
  const [videoWatchTimeFilter, setVideoWatchTimeFilter] = useState(false);
  const [DeletionField, setDeletionFilter] = useState(false);
  const [judgementTimeFilter, setJudgementTimeFilter] = useState(false);
  const [qABenchmarkField, setQABenchmarkField] = useState(false);
  const [qAField, setQAFilter] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuItemClick = (e) => {
    setFilterArray((current) => [...current, e]);

    setTypeFilter(e);
    if (e === "PDR") {
      setPdrSetFilter(true);
    }
    if (e === "QA") {
      setQAFilter(true);
    }
    if (e === "QA_Benchmark") {
      setQABenchmarkField(true);
    }
    if (e === "Judgement_Time") {
      setJudgementTimeFilter(true);
    }
    if (e === "Skip_Image") {
      setSkipImageFilter(true);
    }
    if (e === "Image_Loading") {
      setImageLoadingFilter(true);
    }
    if (e === "Object_Saving_Time") {
      setObjectSavingTimeFilter(true);
    }
    if (e === "Video_Watch_Time") {
      setVideoWatchTimeFilter(true);
    }
    if (e === "Deletion") {
      setDeletionFilter(true);
    }
    if (e === "Tagging_Benchmark") {
      setTagingBenchMarkFilter(true);
    }
    if (e === "Img_Benchmark") {
      setImageBenchMarkFilter(true);
    }
    if (e === "Obj_Benchmark") {
      setObjBenchMarkFilter(true);
    }
    if (e === "QA_Check_Points") {
      setQaCheckPointFilter(true);
    }
    if (e === "Action_Items") {
      setActionItemsFilter(true);
    }
    if (e === "Project_Type") {
      setProjectTypeFilter(true);
    }
    if (e === "Tool_Type") {
      setToolTypeFilter(true);
    }
    if (e === "Platform") {
      setPlatformField(true);
    }
    if (e === "Client_Alias") {
      setClient_AliasSetFilter(true);
    }
    if (e === "Industry") {
      setIndustrySetFilter(true);
    }
    if (e === "Annotation") {
      setAnnotationSetFilter(true);
    }
    setAnchorEl(null);
    console.log(e);
  };
  console.log(filterArray);

  const handleChange = (event) => {
    // setValue(event.target.value); // update the value state with the selected value
  };

  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: "background.paper",
          width: "570px",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Filter by</Typography>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "600 " }}
            onClick={handleCloseFilter}
          />
        </Box>
        <br />
        <Box sx={{ px: 1 }}>
          <Grid item xs={6}>
            <SelectFilterProjectDirectory
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
            />
          </Grid>
        </Box>
        <br />

        {/* {filterArray.length === 0 ? (
          <></>
        ) : (
          <>
            {filterArray.map((item) => (
              <>
                <SampleExampleField
                  setIndustryType={setIndustryType}
                  industryType={industryType}
                  item={item}
                />
                
              </>
            ))}
          </>
        )} */}
        {qAField ? (
          <Grid container sx={{ padding: "2%" }}>
            <QAField
              setQAFieldFilter={setQAFieldFilter}
              qAFieldFilter={qAFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {judgementTimeFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <JudgementTimeField
              setJudgementTimeFieldFilter={setJudgementTimeFieldFilter}
              judgementTimeFieldFilter={judgementTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qABenchmarkField ? (
          <Grid container sx={{ padding: "2%" }}>
            <QABenchmarkField
              setQABenchmarkFieldFilter={setQABenchmarkFieldFilter}
              qABenchmarkFieldFilter={qABenchmarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {skipImageField ? (
          <SkipImageField
            setSkipImageFieldFilter={setSkipImageFieldFilter}
            skipImageFieldFilter={skipImageFieldFilter}
          />
        ) : (
          <></>
        )}
        {imageLoadingField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ImageLoadingField
              setImageLoadingFieldFilter={setImageLoadingFieldFilter}
              imageLoadingFieldFilter={imageLoadingFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objectSavingTimeFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <ObjectSavingTimeField
              setobjectSavingTimeFieldFilter={setobjectSavingTimeFieldFilter}
              objectSavingTimeFieldFilter={objectSavingTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {videoWatchTimeFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <VideoWatchTimeField
              setVideoWatchTimeFieldFilter={setVideoWatchTimeFieldFilter}
              videoWatchTimeFieldFilter={videoWatchTimeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        {toolTypeField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ToolTypeField
              setToolTypeFieldFilter={setToolTypeFieldFilter}
              toolTypeFieldFilter={toolTypeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {DeletionField ? (
          <Grid container sx={{ padding: "2%" }}>
            <Deletionfield
              setDeletionFieldFilter={setDeletionFieldFilter}
              deletionFieldFilter={deletionFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {tagingBenchMarkField ? (
          <Grid container sx={{ padding: "2%" }}>
            <TaggingBenchmark
              setTaggingBenchMarkFieldFilter={setTaggingBenchMarkFieldFilter}
              taggingBenchMarkFieldFilter={taggingBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {imageBenchMarkField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ImgBenchmark
              setImgBenchMarkFieldFilter={setImgBenchMarkFieldFilter}
              imgBenchMarkFieldFilter={imgBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {objBenchMarkField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ObjBenchmarkField
              setObjBenchMarkFieldFilter={setObjBenchMarkFieldFilter}
              objBenchMarkFieldFilter={objBenchMarkFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {qaCheckPointField ? (
          <Grid container sx={{ padding: "2%" }}>
            <QACheckPointsField
              qaCheckPointFieldFilter={qaCheckPointFieldFilter}
              setQaCheckPointFieldFilter={setQaCheckPointFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {actionItemsField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ActionTypeField
              actionItemsFieldFilter={actionItemsFieldFilter}
              setActionItemsFieldFilter={setActionItemsFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {projectTypeField ? (
          <Grid container sx={{ padding: "2%" }}>
            <ProjectTypeField
              projectTypeFieldFilter={projectTypeFieldFilter}
              setProjectTypeFieldFilter={setProjectTypeFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {platformField ? (
          <Grid container sx={{ padding: "2%" }}>
            <PlatformField
              platformFieldFilter={platformFieldFilter}
              setPlatformFieldFilter={setPlatformFieldFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {pdrSetFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <PdrField setPDRFilter={setPDRFilter} pDRFilter={pDRFilter} />
          </Grid>
        ) : (
          <></>
        )}
        {Client_AliasSetFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <ClientAliasField
              setClientAliasesFilter={setClientAliasesFilter}
              clientAliasFilter={clientAliasFilter}
            />
          </Grid>
        ) : (
          <></>
        )}
        {industrySetFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <IndustryTypeField
              setIndustryType={setIndustryType}
              industryType={industryType}
            />
          </Grid>
        ) : (
          <></>
        )}
        {annotationSetFilter ? (
          <Grid container sx={{ padding: "2%" }}>
            <AnnotationType
              setAnnotationFilter={setAnnotationFilter}
              annotationFilter={annotationFilter}
            />
          </Grid>
        ) : (
          <></>
        )}

        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                onClick={handleResetProjectDirectory}
                fullWidth
                variant="outlined"
              >
                Reset
              </Button>
            </Grid>
            {/* <Grid item xs={4}>
              <Button
                // onClick={handleResetProjectDirectory}
                fullWidth
                variant="outlined">
                Add Filter
              </Button>
            </Grid> */}
            <Grid item xs={6}>
              <Button
                onClick={handleFilterProjectDirectory}
                fullWidth
                variant="contained"
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MiniModalProjectDirectoryNew;

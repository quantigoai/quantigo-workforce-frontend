import CloseIcon from "@mui/icons-material/Close";
import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import IndustryTypeField from "./IndustryTypeField";
import ClientAliasField from "./ClientAliasField";
import AnnotationType from "./AnnotationType";
import PdrField from "./PdrField";
import SelectFilterProjectDirectory from "./SelectFilterProjectDirectory";

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
  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: "background.paper",
          width: "540px",
          height: "100%",
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            paddingLeft: "3%",
            paddingRight: "2%",
          }}>
          <Typography variant="h6">
            <b>Filter By </b>
          </Typography>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "600 " }}
            onClick={handleCloseFilter}
          />
        </Box>
        <br />
        <Box sx={{ px: 2 }}>
          <Grid item xs={6}>
            <SelectFilterProjectDirectory
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
            />
          </Grid>
        </Box>
        <br />
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
          <Grid container sx={{ padding: "2%" }}>
            <SkipImageField
              setSkipImageFieldFilter={setSkipImageFieldFilter}
              skipImageFieldFilter={skipImageFieldFilter}
            />
          </Grid>
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
          <Grid
            container
            spacing={2}
            sx={{ paddingLeft: "2%", paddingRight: "2%", paddingBottom: "2%" }}>
            <Grid item xs={6}>
              <Button
                onClick={handleResetProjectDirectory}
                fullWidth
                variant="outlined">
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleFilterProjectDirectory}
                fullWidth
                variant="contained">
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

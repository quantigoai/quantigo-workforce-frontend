import SearchIcon from "@mui/icons-material/Search";
import {IconButton, Paper, Popover, styled} from "@mui/material";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MiniModalProjectDirectoryNew from "./MiniModalProjectDirectoryNew";

const CustomFilterIcon = styled(FilterAltIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const SearchProjectDirectory = ({
  placeholder,
  handleClickFilter,
  anchorE2,
  handleCloseFilter,
  setIndustryType,
  handleFilterProjectDirectory,
  handleResetProjectDirectory,
  industryType,
  handleChange,
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
  anchorEl
}) => {
  const open = Boolean(anchorE2);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
        <IconButton
          disabled
          type="button"
          sx={{ p: "10px" }}
          aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          onChange={handleChange}
          inputProps={{ "aria-label": placeholder }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={handleClickFilter}>
          <CustomFilterIcon />
        </IconButton>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorE2}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        {/* <MiniModelProjectDirectory
          handleCloseFilter={handleCloseFilter}
          setIndustryType={setIndustryType}
          handleFilterProjectDirectory={handleFilterProjectDirectory}
          handleResetProjectDirectory={handleResetProjectDirectory}
          industryType={industryType}
          setClientAliasesFilter={setClientAliasesFilter}
          clientAliasFilter={clientAliasFilter}
          setPDRFilter={setPDRFilter}
          pDRFilter={pDRFilter}
          setDataTypeFilter={setDataTypeFilter}
          dataTypeFilter={dataTypeFilter}
          setAnnotationFilter={setAnnotationFilter}
          annotationFilter={annotationFilter}
        /> */}
        <MiniModalProjectDirectoryNew
          handleCloseFilter={handleCloseFilter}
          setIndustryType={setIndustryType}
          handleFilterProjectDirectory={handleFilterProjectDirectory}
          handleResetProjectDirectory={handleResetProjectDirectory}
          industryType={industryType}
          setClientAliasesFilter={setClientAliasesFilter}
          clientAliasFilter={clientAliasFilter}
          setPDRFilter={setPDRFilter}
          pDRFilter={pDRFilter}
          setDataTypeFilter={setDataTypeFilter}
          dataTypeFilter={dataTypeFilter}
          setAnnotationFilter={setAnnotationFilter}
          annotationFilter={annotationFilter}
          platformFieldFilter={platformFieldFilter}
          setPlatformFieldFilter={setPlatformFieldFilter}
          projectTypeFieldFilter={projectTypeFieldFilter}
          setProjectTypeFieldFilter={setProjectTypeFieldFilter}
          actionItemsFieldFilter={actionItemsFieldFilter}
          setActionItemsFieldFilter={setActionItemsFieldFilter}
          qaCheckPointFieldFilter={qaCheckPointFieldFilter}
          setQaCheckPointFieldFilter={setQaCheckPointFieldFilter}
          objBenchMarkFieldFilter={objBenchMarkFieldFilter}
          setObjBenchMarkFieldFilter={setObjBenchMarkFieldFilter}
          imgBenchMarkFieldFilter={imgBenchMarkFieldFilter}
          setImgBenchMarkFieldFilter={setImgBenchMarkFieldFilter}
          taggingBenchMarkFieldFilter={taggingBenchMarkFieldFilter}
          setTaggingBenchMarkFieldFilter={setTaggingBenchMarkFieldFilter}
          deletionFieldFilter={deletionFieldFilter}
          setDeletionFieldFilter={setDeletionFieldFilter}
          toolTypeFieldFilter={toolTypeFieldFilter}
          setToolTypeFieldFilter={setToolTypeFieldFilter}
          skipImageFieldFilter={skipImageFieldFilter}
          setSkipImageFieldFilter={setSkipImageFieldFilter}
          imageLoadingFieldFilter={imageLoadingFieldFilter}
          setImageLoadingFieldFilter={setImageLoadingFieldFilter}
          objectSavingTimeFieldFilter={objectSavingTimeFieldFilter}
          setobjectSavingTimeFieldFilter={setobjectSavingTimeFieldFilter}
          videoWatchTimeFieldFilter={videoWatchTimeFieldFilter}
          setVideoWatchTimeFieldFilter={setVideoWatchTimeFieldFilter}
          qAFieldFilter={qAFieldFilter}
          setQAFieldFilter={setQAFieldFilter}
          judgementTimeFieldFilter={judgementTimeFieldFilter}
          setJudgementTimeFieldFilter={setJudgementTimeFieldFilter}
          qABenchmarkFieldFilter={qABenchmarkFieldFilter}
          setQABenchmarkFieldFilter={setQABenchmarkFieldFilter}
          setQAFilter={setQAFilter}
          qAField={qAField}
          pdrSetFilter={pdrSetFilter}
          Client_AliasSetFilter={Client_AliasSetFilter}
          annotationSetFilter={annotationSetFilter}
          platformField={platformField}
          industrySetFilter={industrySetFilter}
          toolTypeField={toolTypeField}
          actionItemsField={actionItemsField}
          projectTypeField={projectTypeField}
          qaCheckPointField={qaCheckPointField}
          objBenchMarkField={objBenchMarkField}
          imageBenchMarkField={imageBenchMarkField}
          tagingBenchMarkField={tagingBenchMarkField}
          skipImageField={skipImageField}
          imageLoadingField={imageLoadingField}
          objectSavingTimeFilter={objectSavingTimeFilter}
          videoWatchTimeFilter={videoWatchTimeFilter}
          DeletionField={DeletionField}
          judgementTimeFilter={judgementTimeFilter}
          qABenchmarkField={qABenchmarkField}
          handleMenuItemClick={handleMenuItemClick}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
        />
      </Popover>
    </>
  );
};

export default SearchProjectDirectory;

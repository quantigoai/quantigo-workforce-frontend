import { Box, Button, Grid, IconButton, InputBase, Paper, Popover } from "@mui/material";
import React from "react";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import MiniModalProjectDirectoryNew from "../ProjectDirectoryFilter/MiniModalProjectDirectoryNew";
import { ClearIcon } from "@mui/x-date-pickers";
import SyncIcon from "@mui/icons-material/Sync";
import { LoadingButton } from "@mui/lab";
import { is } from "date-fns/locale";
const ProjectDirectoryHeader = ({
  handleGetSync,
  isSyncLoading,
  search,
  setSearch,
  searchRef,
  clearSearch,
  handleSearch,
  placeholder,
  handleClickFilter,
  anchorE2,
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
  role,
  handleCreateModal,
}) => {
  const open = Boolean(anchorE2);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box
      className="contentHeader"
      sx={{
        backgroundColor: "neutral.N000",
      }}
    >
      <Box sx={{ width: "30%", padding: "12px 16px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {/* TODO Need to remove the unnecessary custom button */}
          <CommonHeader title="Project Directory" customButton="Create User" />
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: { lg: "160px", xl: "240px", xxl: "240px" },
            height: {
              lg: "30px",
              xl: "40px",
              xxl: "40px",
            },
            backgroundColor: "primary.B008",
            border: "1px solid #EFF3FE",
            borderRadius: "8px",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <IconButton disabled type="button" sx={{ p: "5px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            inputRef={searchRef}
            sx={{
              ml: 0,
              flex: 1,
              fontFamily: "Inter",
              fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
            }}
            placeholder="Search"
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSearch(ev);
                ev.preventDefault();
              }
            }}
          />
          {search && (
            <Button
              sx={{
                height: "30px",
                minWidth: "40px",
              }}
            >
              <ClearIcon
                sx={{
                  height: {
                    lg: "20px",
                    xl: "40px",
                    xxl: "40px",
                  },
                  color: "neutral.N300",
                  "&:hover": {
                    color: "#F04438",
                  },
                }}
                onClick={clearSearch}
              />
            </Button>
          )}
        </Paper>
        <IconButton
          onClick={handleClickFilter}
          sx={{
            px: "0px 0px",
            backgroundColor: "primary.B008",
            // mx: 2,
            ml: 2,
            mr: role === "admin" || role === "project_manager" || role === "project_delivery_lead" ? 2 : 0,
            borderRadius: "8px",
            height: {
              lg: "30px",
              xl: "40px",
              xxl: "40px",
            },
          }}
          aria-label="menu"
        >
          {/* {isFilter ? ( */}
          {/* <FilterListOffIcon sx={{ color: "primary.main" }} /> */}
          {/* ) : ( */}
          <FilterListIcon sx={{ color: "primary.main" }} />
          {/* )} */}
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorE2}
          onClose={handleCloseFilter}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
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
        <LoadingButton
          disabled={isSyncLoading}
          loading={isSyncLoading}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: "#FFAB00",
            height: {
              lg: "30px",
              xl: "40px",
              xxl: "40px",
            },

            fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
            lineHeight: "20px",
            width: {
              lg: "128px",
              xl: "128px",
              xxl: "140px",
            },
            color: "white",
            "&:hover": {
              background: "#F2A200",
            },
            padding: "16px 10px",
          }}
          onClick={handleGetSync}
        >
          <SyncIcon sx={{ fontSize: "20px" }} /> Sync
        </LoadingButton>
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: "#2E58FF",
            height: {
              lg: "30px",
              xl: "40px",
              xxl: "40px",
            },
            marginLeft: "13px",
            fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
            lineHeight: "20px",
            width: {
              lg: "128px",
              xl: "128px",
              xxl: "140px",
            },
            color: "white",
            "&:hover": {
              background: "#244EF5",
            },
            padding: "16px 10px",
          }}
          onClick={handleCreateModal}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDirectoryHeader;

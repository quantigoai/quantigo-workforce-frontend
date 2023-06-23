import CloseIcon from "@mui/icons-material/Close";
import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import IndustryTypeField from "./IndustryTypeField";
import ClientAliasField from "./ClientAliasField";
import AnnotationType from "./AnnotationType";
import DataTypeField from "./DataTypeField";
import PdrField from "./PdrField";

const MiniModelProjectDirectory = ({
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
}) => {
  const { users } = useSelector((state) => state.user);
  // initialize value as an empty string

  const location = useLocation();
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
          height: "350px",
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}>
          <Typography variant="h6">Filter by</Typography>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "600 " }}
            onClick={handleCloseFilter}
          />
        </Box>
        <br />
        <Box sx={{ px: 1 }}></Box>
        <br />
        <Box sx={{ paddingTop: "0%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PdrField setPDRFilter={setPDRFilter} pDRFilter={pDRFilter} />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ paddingTop: "2%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <IndustryTypeField
                setIndustryType={setIndustryType}
                industryType={industryType}
              />
            </Grid>
            <Grid item xs={6}>
              <ClientAliasField
                setClientAliasesFilter={setClientAliasesFilter}
                clientAliasFilter={clientAliasFilter}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ paddingTop: "2%" }}>
            <Grid item xs={6}>
              <AnnotationType
                setAnnotationFilter={setAnnotationFilter}
                annotationFilter={annotationFilter}
              />
            </Grid>
            <Grid item xs={6}>
              <DataTypeField
                setDataTypeFilter={setDataTypeFilter}
                dataTypeFilter={dataTypeFilter}
              />
            </Grid>
          </Grid>
        </Box>

        <br />
        <Box>
          <Grid container spacing={2}>
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

export default MiniModelProjectDirectory;

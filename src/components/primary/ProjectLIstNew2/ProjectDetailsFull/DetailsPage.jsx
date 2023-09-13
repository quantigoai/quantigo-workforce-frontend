import { Alert, Box, Stack } from "@mui/material";
import React from "react";
import BoxItem from "../Project2Details/BoxItem";
import DetailsItem from "../Project2Details/DetailsItem";
import SingleItem from "../Project2Details/SingleItem";
import ProjectModalHeader from "../ProjectModalHeader";

const style = {
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const DetailsPage = () => {
  return (
    <Box sx={style}>
      <ProjectModalHeader isPageDetail={"true"} modalTitle={"Project Details"} />
      <Alert
        sx={{
          borderRadius: "8px",
          width: "50%",
          border: "1px solid #F0D8A8",
          background: "#FFF8EB",
          mt: 2,
          color: "#FFAB00",
          fontSize: "12px",
          fontWeight: "500",
          ml: 3,
        }}
        variant="filled"
        severity="info"
      >
        You need to have these skills to work on this project. Complete these courses to get the required skills and
        come back
      </Alert>
      <Box sx={{ padding: "1%" }}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            //   padding: "16px",
            borderRadius: "8px",
            //   background: "#FAFCFF",
          }}
        >
          <DetailsItem Item1Title={"Project Name"} Item1={"Car Annotation"} Item2Title={"Batch"} Item2={3} />
          <DetailsItem Item1Title={"Alias"} Item1={"Qai_Bone"} Item2Title={"Project Type"} Item2={"Video"} />

          <DetailsItem Item1Title={"PDR"} Item1={2} Item2Title={"Completed Course"} Item2={"No Course"} />
          <DetailsItem
            Item1Title={"Benchmark"}
            Item1={"10 sec/object, 5 sec/tag"}
            Item2Title={"Estimated end Time"}
            Item2={"No Course"}
          />
          <SingleItem ItemTitle={"Status"} Item={"Pending"} />
          <SingleItem ItemTitle={"Skills"} Item={"bsjkdfsaf"} />
          {/* document Item List */}
          <BoxItem />
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailsPage;

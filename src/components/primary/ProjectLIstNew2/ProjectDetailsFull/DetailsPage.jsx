import { Alert, Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import BoxItem from "../Project2Details/BoxItem";
import SingleItem from "../Project2Details/SingleItem";

import { formatDate } from "../../../../helper/dateConverter";
import DetailsItemSIngle from "../Project2Details/DetailsItemSIngle";

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
const DetailsPage = ({ skillAlert }) => {
  const { isLoading, projectDrawer } = useSelector((state) => state.projectDrawer);

  return (
    <Box sx={style}>
      {skillAlert && (
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
      )}
      <Box sx={{ padding: "2%" }}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            borderRadius: "8px",
          }}
        >
          <DetailsItemSIngle
            Item1Title={"Project Name"}
            Item1={projectDrawer.project_drawer_name}
            Item2Title={"Batch"}
            Item2={projectDrawer.project_batch}
            Item3Title={"Alias"}
            Item3={projectDrawer.project_alias}
          />
          <DetailsItemSIngle
            Item1Title={"Project Type"}
            Item1={projectDrawer.project_type}
            Item2Title={"PDR"}
            Item2={projectDrawer.pdr}
            Item3Title={"Completed Course"}
            Item3={"No Course"}
          />
          <DetailsItemSIngle
            Item1Title={"Benchmark"}
            Item1={projectDrawer.benchMark ? projectDrawer.benchMark : "10 sec/object, 5 sec/tag"}
            Item2Title={"Estimated end Time"}
            Item2={formatDate(projectDrawer?.estimated_end_date)}
            Item3Title={"Status"}
            Item3={projectDrawer?.project_status}
          />
          <SingleItem ItemTitle={"Skills"} Item={projectDrawer?.project_skills} />
          {/* document Item List */}
          {projectDrawer.relevantDocuments && <BoxItem Item={projectDrawer?.relevantDocuments} />}
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailsPage;

import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectDrawerStatusChip from "../../../shared/FilterField/ProjectDrawerStatusChip";

const SingleItem = ({ ItemTitle, Item }) => {
  const documentList = [
    {
      name: "Document 01",
      _id: 1,
    },
    {
      name: "Document 02",
      _id: 2,
    },
    {
      name: "Document 03",
      _id: 3,
    },
  ];
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={12} sx={{ padding: "2%" }}>
            <Grid container>
              <Typography variant="caption" sx={{ color: "#7B98BA" }}>
                {ItemTitle}
              </Typography>
            </Grid>
            {ItemTitle === "Skills" ? (
              <>
                <Grid container>
                  {documentList.map((p) => (
                    <>
                      <Box key={p._id} sx={{ paddingRight: "1%" }}>
                        <ProjectDrawerStatusChip key={p._id} value={p.name} />
                      </Box>
                    </>
                  ))}
                </Grid>
              </>
            ) : (
              <>
                <Typography variant="wf_h5_bold" sx={{ color: "#091E42" }}>
                  {Item}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default SingleItem;

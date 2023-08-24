import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const BoxItem = () => {
  const documentList = [
    {
      name: "Document 01",
      link: " https://qaiworkforce.netlify.app/projectDirectory",
    },
    {
      name: "Document 02",
      link: " https://qaiworkforce.netlify.app/projectDirectory",
    },
    {
      name: "Document 03",
      link: " https://qaiworkforce.netlify.app/projectDirectory",
    },
    {
      name: "Document 04",
      link: " https://qaiworkforce.netlify.app/projectDirectory",
    },
  ];
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={12} sx={{ padding: "2%" }}>
            <Typography variant="caption" sx={{ color: "#7B98BA" }}>
              Guideline and Edge-case Document
            </Typography>
            <Stack
              sx={{
                border: "1px solid #E6ECF5",
                // padding: "16px",
                borderRadius: "8px",
                background: "#FAFCFF",
                height: documentList.length === 1 ? "8vh" : "14vh",
                scrollBehavior: "smooth",
                overflow: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "0.3em",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#888",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}>
              {documentList.map((item) => (
                <>
                  <Box
                    key={item.name}
                    sx={{
                      borderBottom:
                        documentList.length === 1
                          ? "0px solid #E6ECF5"
                          : "1px solid #E6ECF5",
                      padding: "2%",
                    }}>
                    <Typography variant="caption">{item.name}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {item.link}
                    </Typography>
                  </Box>
                </>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default BoxItem;

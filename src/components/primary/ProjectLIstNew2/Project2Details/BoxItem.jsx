import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const BoxItem = ({ Item }) => {
  console.log("🚀 ~ file: BoxItem.jsx:62 ~ BoxItem ~ Item:", Item);

  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={12} sx={{ padding: "1%" }}>
            <Typography variant="caption" sx={{ color: "#091E42", opacity: "0.7" }}>
              Guideline and Edge-case Document
            </Typography>
            <Stack
              sx={{
                border: "1px solid #E6ECF5",
                // padding: "16px",
                borderRadius: "8px",
                background: "#FAFCFF",
                height: Item?.length === 1 ? "8vh" : Item?.length === 0 ? "14vh" : "20vh",
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
              }}
            >
              {Item.map((item) => (
                <>
                  <Box
                    key={item.name}
                    sx={{
                      borderBottom: Item.length === 1 ? "0px solid #E6ECF5" : "1px solid #E6ECF5",
                      padding: "2%",
                    }}
                  >
                    <Typography sx={{ color: "#091E42", fontSize: "12px", fontWeight: "500" }} variant="caption">
                      {item.documentName}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#091E42", fontWeight: "500" }}>
                      {item.documentUrl}
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

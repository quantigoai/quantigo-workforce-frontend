/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/BenchMarkCard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Saturday, March 25th 2023, 2:07:11 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";

const BenchMarkCard = ({ bm }) => {
  const [handleDetails] = useOutletContext();
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: 2,
          p: 2,
          m: 1,
          backgroundColor: "#fff",
          height: "170px",
        }}
      >
        <Typography sx={{ color: "#090080" }} variant="h6">
          {bm.name}{" "}
        </Typography>
        <Typography variant="body2">{bm.description}</Typography>
        <Button
          onClick={() => handleDetails(bm)}
          fullWidth
          variant="outlined"
          color="primary"
        >
          View
        </Button>
      </Box>
    </Grid>
  );
};

export default BenchMarkCard;

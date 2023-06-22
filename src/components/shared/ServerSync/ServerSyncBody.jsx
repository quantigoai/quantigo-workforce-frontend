/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/ServerSync/ServerSyncBody.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 30th 2023, 12:54:46 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Grid, Skeleton} from "@mui/material";
import React from "react";
import MiniCard from "./MiniCard";
import {useSelector} from "react-redux";

const ServerSyncBody = () => {
  const { updatedValue, isLoading } = useSelector((state) => state.serverSync);
  const { data } = updatedValue;

  let updates = [];

  if (data !== undefined) {
    updates = Object.keys(data).reduce((acc, key) => {
      acc.push({ item: key, count: data[key] });
      return acc;
    }, []);
  }
  return (
    <>
      {isLoading ? (
        <>
          <Grid container sx={{ paddingTop: "5%" }}>
            {" "}
            <Box sx={{ width: "100%" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid container>
            {updates.map((item, i) => {
              if (item.item !== "updateTeam") {
                return <MiniCard key={i} item={item.item} count={item.count} />;
              } else {
                return <></>;
              }
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default ServerSyncBody;

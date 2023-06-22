/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/BenchmarkList.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Saturday, March 25th 2023, 1:52:29 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../features/slice/activePathSlice";
import { getAllBenchMarks } from "../../features/slice/benchMarkSlice";
import BenchMarkCard from "./BenchMarkCard";
import CommonHeader from "../shared/CustomComponenet/CommonHeader/CommonHeader";
import BenchMarkTable from "./BenchMarkTable";

const BenchmarkList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePath("Benchmark"));
    dispatch(getAllBenchMarks({ server_agent: "all" }));
  }, []);

  const { benchMarks, isLoading } = useSelector((state) => state.benchMark);

  return (
    <>
      <Grid container sx={{ paddingBottom: "2%" }}>
        <CommonHeader
          title="Benchmark"
          description="Create a new benchmark"
          isLoading={isLoading}
          customButton="Create Benchmark"
        />
      </Grid>

      {/* <Grid container>
        {benchMarks.map((bm) => (
          <BenchMarkCard key={bm.id} bm={bm} />
        ))}
      </Grid> */}

      {/* {benchMarks.map((bm) => ( */}
      <BenchMarkTable benchMarks={benchMarks} />
      {/* // ))} */}
    </>
  );
};

export default BenchmarkList;

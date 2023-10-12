/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/UpdateBenchMark
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:45:16 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
// TODO Changes need to be done immediately.

// save server agent field in backend
// disable team and others in update benchmark
// fix the images value for update benchmark
// bug in flat bm update benchmark
// Flat create benchmark should be fixed
// Default value is not set in text field for flat bm update benchmark

import {Button, Grid} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjectMeta, getProjectMetaAg,} from "../../features/slice/benchMarkSlice";
import CommonMetaFields from "../primary/BenchMark/sharedComponents/CommonMeta/CommonMetaFields";
import ImageFields from "../primary/BenchMark/sharedComponents/ImageFields";
import NameDescFIeld from "../primary/BenchMark/sharedComponents/NameDescFIeld";

const UpdateBenchMarkNew = () => {
  const { benchMark } = useSelector((state) => state.benchMark);

  const dispatch = useDispatch();

  useEffect(() => {
    if (benchMark.server_agent) {
      if (benchMark.server_agent === "ag") {
        dispatch(getProjectMetaAg(benchMark.projectId));
      } else {
        dispatch(getProjectMeta(benchMark.projectId));
      }
    }
  }, []);

  return (
    <>
      {benchMark && Object.keys(benchMark).length > 0 && (
        <>
          <NameDescFIeld isUpdate={true} />

          <CommonMetaFields
            isUpdate={true}
            bm={benchMark}
            renderItems={"classes"}
          />

          <CommonMetaFields
            isUpdate={true}
            bm={benchMark}
            renderItems={"tags"}
          />

          <ImageFields isUpdate={true} bm={benchMark} />

          <Grid
            container
            xs={12}
            sx={{
              justifyContent: "right",
              paddingTop: "3%",
              paddingBottom: "5%",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "282px",
                height: "45px",
                backgroundColor: "#2D58FF",
                color: "#FFFFFF",
                borderRadius: "2px",
              }}
            >
              Update BenchMark{" "}
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default UpdateBenchMarkNew;

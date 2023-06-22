/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/sharedComponentsNew/ClassTagFieldsNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:52:52 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/ClassTagFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 15th 2022, 10:35:17 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import NameDescFIeld from "../../primary/BenchMark/sharedComponents/NameDescFIeld";
import CommonMetaFields from "../../primary/BenchMark/sharedComponents/CommonMeta/CommonMetaFields";
import ImageFields from "../../primary/BenchMark/sharedComponents/ImageFields";

const ClassTagFieldsNew = ({ register, handleSubmit }) => {
  const { classes } = useSelector((state) => state.benchMark.projectMetas);
  const { tags } = useSelector((state) => state.benchMark.projectMetas);

  const [
    handleTest,
    imageData,
    setImageData,
    handleChangeName,
    handleChangeDescription,
    handelEdit,
    handleInputChange,
    handleChange,
    handleCreateTest,
    value,
    setValue1,
    handleChangeTag,
    value1,
    imageBenchMark,
    handleClassflatAvg,
    handleClassflatvalue,
  ] = useOutletContext();

  const navigate = useNavigate();
  const [classGrid, setClassGrid] = useState(4);
  const [tagGrid, setTagGrid] = useState(4);
  const classesLength = classes?.length;
  const tagLength = tags?.length;

  useEffect(() => {
    if (classesLength === 1) {
      setClassGrid(12);
    } else if (classesLength === 2) {
      setClassGrid(6);
    } else if (classesLength === 4) {
      setClassGrid(6);
    } else {
      setClassGrid(4);
    }
  }, [classesLength]);

  useEffect(() => {
    if (tagLength === 1) {
      setTagGrid(12);
    } else if (tagLength === 2) {
      setTagGrid(6);
    } else if (tagLength === 4) {
      setTagGrid(6);
    } else {
      setTagGrid(4);
    }
  }, [tagLength]);

  return (
    classes &&
    tags && (
      <>
        {/* Name and Description */}
        <NameDescFIeld />

        {/* Classes */}
        {/* <ClassFields /> */}
        <CommonMetaFields renderItems={"classes"} />

        {/* tags */}
        {/* <TagFields /> */}
        <CommonMetaFields renderItems={"tags"} />

        {/* Images */}
        <ImageFields />

        {/* <Box>
          <Grid
            container
            sx={{
              justifyContent: "right",
            }}
          >
            <Grid xs={6}></Grid>
            <Grid
              container
              xs={3}
              sx={{
                justifyContent: "right",
                paddingTop: "3%",
                paddingBottom: "5%",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => navigate("/benchmark")}
                sx={{
                  width: "282px",
                  height: "45px",

                  color: "#1D1D1D",
                  borderRadius: "2px",
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid
              container
              xs={3}
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
                  "&:hover": {
                    backgroundColor: "#FF9A45",
                    color: "#1D1D1D",
                  },
                  borderRadius: "2px",
                }}
              >
                Create BenchMark{" "}
              </Button>
            </Grid>
          </Grid>
        </Box> */}
      </>
    )
  );
};

export default ClassTagFieldsNew;

import { Box, Grid, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TextFieldProjectDirectoryBenchmark from "../shared/CustomField/TextFieldProjectDirectoryBenchmark";

const ProjectDirectoryBenchMarkFieldIndex = ({ item, setProjectDirectoryRemove }) => {
  const addBenchmarkType = [
    { item: "Manual Creation", value: "manual_Creation", defaultValue: item?.manual_Creation },
    { item: "Correction", value: "correction", defaultValue: item?.correction },
    { item: "Deletion", value: "deletion", defaultValue: item?.deletion },
    { item: "Object Assessment", value: "object_Assessment", defaultValue: item?.object_Assessment },
    { item: "Manual Tagging", value: "manual_Tagging", defaultValue: item?.manual_Tagging },
    { item: "Tag Correction", value: "tag_Correction", defaultValue: item?.tag_Correction },
    { item: "Tag Deletion", value: "tag_Deletion", defaultValue: item?.tag_Deletion },
    { item: "Tag Check Review", value: "tag_Check_Review", defaultValue: item?.tag_Check_Review },
    { item: "Cloning Manual Object", value: "cloning_Manual_Object", defaultValue: item?.cloning_Manual_Object },
    { item: "Clone Correction", value: "clone_Correction", defaultValue: item?.clone_Correction },
    { item: "Review", value: "review", defaultValue: item?.review },
    { item: "Tag Check QA", value: "tag_Check_QA", defaultValue: item?.tag_Check_QA },
    { item: "Image Assessment", value: "image_Assessment", defaultValue: item?.image_Assessment },
    { item: "Video Assessment", value: "video_Assessment", defaultValue: item?.video_Assessment },
    { item: "Categorization", value: "categorization", defaultValue: item?.categorization },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [addBenchmarkItems, setAddBenchmarkItems] = useState([]);
  const [benchmarkItems, setBenchmarkItems] = useState([]);
  const { isLightTheme } = useSelector((state) => state.theme);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    addBenchmarkType.forEach((benchmark) => {
      if (benchmark.defaultValue) {
        setAddBenchmarkItems((prevState) => [...prevState, benchmark]);
      } else {
        setBenchmarkItems((prevState) => [...prevState, benchmark]);
        setProjectDirectoryRemove((prevState) => [...prevState, benchmark]);
      }
     
    });
  }, []);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (val, item) => {
    // setAddBenchmarkItems((prevArray) => [...prevArray, val]);
    const addValue = {
      item: item,
      value: val,
    };
    setAddBenchmarkItems((prevArray) => [...prevArray, addValue]);

    const filteredArr = benchmarkItems.filter((item) => item.value !== val);
    setBenchmarkItems(filteredArr);
    setProjectDirectoryRemove(filteredArr);
  };
  const handleRemove = (name, label) => {
    const deleteValue = {
      item: label,
      value: name,
    };
    setBenchmarkItems((prevArray) => [...prevArray, deleteValue]);
    setProjectDirectoryRemove((prevArray) => [...prevArray, deleteValue]);

    const filteredArr = addBenchmarkItems.filter((item) => item.value != name);
    setAddBenchmarkItems(filteredArr);
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            mt: "5px",
            mb: "5px",
            color: "neutral.N300",
          }}
          variant='wpf_h7_medium'
        >
          Benchmark
        </Typography>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            padding: "16px",
            borderRadius: "8px",

            background: isLightTheme ? "#FAFCFF" : "#2C2C2C",
            // maxHeight: 155,
            color: isLightTheme ? "#091E42" : "#FFFFFF",
            // color: "#FFFFFF",
            // overflowY: "auto",
          }}
        >
          <Grid container spacing={1}>
            {addBenchmarkItems &&
              addBenchmarkItems.map((item) => (
                <>
                  {item.defaultValue != "" && (
                    <Grid item xs={5.89}>
                      <Box
                        sx={{
                          width: "100%",
                          px: 0,

                          height: {
                            lg: "72px",
                            xl: "82px",
                            xxl: "85px",
                          },
                        }}
                      >
                        <TextFieldProjectDirectoryBenchmark
                          name={item.value}
                          label={item.item}
                          handleRemove={handleRemove}
                          defaultValue={item.defaultValue}
                        />
                      </Box>
                    </Grid>
                  )}
                </>
              ))}
          </Grid>
          <Typography
            sx={{
              //   fontWeight: '600',
              // mt: '10px',
              //   fontSize: '14px',
              mb: "0px",
              color: benchmarkItems.length === 0 ? "#7D89A3" : "#2E58FF",
              cursor: benchmarkItems.length === 0 ? "" : "pointer",

              //   pointerEvents: hasChanged ? "auto" : "none",
            }}
            disabled={benchmarkItems.length === 0 ? true : false}
            variant='wpf_h7_Bold'
            type='button'
            onClick={handleButtonClick}
            // onClick={handleAddOtherDocument}
          >
            <i className='ri-add-line'></i> Add Another Benchmark
          </Typography>
          {benchmarkItems.length != 0 && (
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {benchmarkItems.map((filter, index) => (
                <MenuItem
                  sx={{
                    fontSize: "14px",
                    "& .MuiInputBase-root": {
                      // height: "42px",
                      // fontSize: '12px',
                      fontFamily: "Inter",
                      "@media(max-width:1439px)": {
                        // height: "30px",
                        fontSize: "10px",
                      },
                      "@media(min-width: 1920px)": {
                        fontSize: "14px",
                      },
                    },
                  }}
                  key={index}
                  value={filter.value}
                  onClick={() => handleMenuItemClick(filter.value, filter.item)}
                >
                  {filter.item}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default ProjectDirectoryBenchMarkFieldIndex;

import { Box, Grid, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FieldBox } from "../shared/FIeldbox/FieldBox";
import PDTextFIeld from "../shared/CustomField/PDTextFIeld";
import TextFieldProjectDirectoryBenchmark from "../shared/CustomField/TextFieldProjectDirectoryBenchmark";
const addBenchmarkType = [
  { item: "Platform", value: "Platform" },
  { item: "Tool Type", value: "Tool_Type" },
  { item: "Action Item", value: "Action_Items" },
  { item: "QA Check Points", value: "QA_Check_Points" },
  { item: "Object Benchmark", value: "Obj_Benchmark" },
  { item: "Image Benchmark", value: "Img_Benchmark" },
  { item: "Tagging Benchmark", value: "Tagging_Benchmark" },
  { item: "Deletion", value: "Deletion" },
  { item: "Skip Image", value: "Skip_Image" },
  { item: "Image Loading", value: "Image_Loading" },
  { item: "Object Saving Time", value: "Object_Saving_Time" },
  { item: "Video Watch Time", value: "Video_Watch_Time" },
  { item: "Judgement Time", value: "Judgement_Time" },
  { item: "QA Benchmark", value: "QA_Benchmark" },
  { item: "Annotation", value: "Annotation" },
  { item: "QA", value: "QA" },
];
const ProjectDirectoryBenchMarkFieldIndex = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addBenchmarkItems, setAddBenchmarkItems] = useState([]);
  console.log("🚀 ~ ProjectDirectoryBenchMarkFieldIndex ~ addBenchmarkItems:", addBenchmarkItems);
  const [benchmarkItems, setBenchmarkItems] = useState(addBenchmarkType);
  const { isLightTheme } = useSelector((state) => state.theme);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
  };
  const handleRemove = (name, label) => {
    const deleteValue = {
      item: label,
      value: name,
    };
    setBenchmarkItems((prevArray) => [...prevArray, deleteValue]);
    console.log(addBenchmarkItems);
    const filteredArr = addBenchmarkItems.filter((item) => item.value != name);
    console.log("🚀 ~ handleRemove ~ filteredArr:", filteredArr);
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
          variant="wpf_h7_medium"
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
          {addBenchmarkItems &&
            addBenchmarkItems.map((item) => (
              <>
                {/* <Typography>{item}</Typography> */}
                {/* <Grid
                  container
                  sx={{
                    display: "flex",
                    columnGap: { xxl: "16px", xl: "10px", lg: "8px" },
                    mt: "20px",
                  }}
                >
                  {" "}
                  <FieldBox>
                    <TextFieldProjectDirectoryBenchmark
                      name={item.value}
                      label={item.item}
                      handleRemove={handleRemove}
                    />
                  </FieldBox>
                </Grid> */}
                <FieldBox>
                  <TextFieldProjectDirectoryBenchmark name={item.value} label={item.item} handleRemove={handleRemove} />
                </FieldBox>
              </>
            ))}

          <Typography
            sx={{
              fontWeight: "600",
              mt: "15px",
              fontSize: "14px",
              mb: "0px",
              //   color: hasChanged ? "#2E58FF" : "#7D89A3",
              cursor: "pointer",
              //   pointerEvents: hasChanged ? "auto" : "none",
            }}
            variant="p"
            type="button"
            onClick={handleButtonClick}
            // onClick={handleAddOtherDocument}
          >
            <i className="ri-add-line"></i> Add Another Benchmark
          </Typography>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {benchmarkItems.map((filter, index) => (
              <MenuItem
                sx={{
                  fontSize: "14px",
                  "& .MuiInputBase-root": {
                    // height: "42px",
                    fontSize: "12px",
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
        </Stack>
      </Box>
    </>
  );
};

export default ProjectDirectoryBenchMarkFieldIndex;

import { Box, Radio, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import QuestionInput1 from "./QuestionInput";
import ImageInOptionIndex from "./QuizQuestionType/ImageInOptionIndex";
import ImageWithTitleIndex from "./QuizQuestionType/ImageWithTitleIndex";
import DefaultTypeIndex from "./QuizQuestionType/DefaultTypeIndex";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ paddingTop: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const QuestionType = ({ handleRemoveQA, handleChangeInput, inputField, inputFields }) => {
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log("🚀 ~ file: QuestionType.jsx:43 ~ handleChange ~ newValue:", newValue);
    console.log("🚀 ~ file: QuestionType.jsx:43 ~ handleChange ~ event:", event.target.value);
    handleChangeInput(
      (inputField.questionType =
        newValue === 0 ? "default" : newValue === 1 ? "imageAndOptions" : newValue === 2 ? "imageInOptions" : newValue),
      event
    );
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box sx={{ border: "1px solid #E6ECF5", borderRadius: "10px" }}>
      <Box
        sx={{
          backgroundColor: "neutral.N400",
          // border: "1px solid #E6ECF5",
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          width: "100%",
        }}>
        <Box>
          {" "}
          <Typography variant="wpf_p3_semiBold">Question Type: </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor=""
            variant="fullWidth"
            sx={{
              borderRadius: "8px",
              //   backgroundColor: "neutral.N600",
              padding: "1%",
            }}>
            <Tab
              sx={{
                borderRadius: value === 0 ? "8px" : "none",
                backgroundColor: value === 0 ? "neutral.N300" : "",
                height: "40px",
                padding: 0,
                // width: "200px",
              }}
              label={
                <Box>
                  <Radio
                    sx={{
                      p: 0,
                      mr: 1,

                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    {...controlProps(0)}
                  />
                  <Typography
                    sx={{ textTransform: "none" }}
                    variant="wpf_p3_semiBold"
                    color={value === 0 ? "#fff" : "neutral.700"}>
                    Default
                  </Typography>
                </Box>
              }
              {...a11yProps("sddsf")}
            />
            <Tab
              sx={{
                borderRadius: value === 1 ? "8px" : "none",
                backgroundColor: value === 1 ? "neutral.N300" : "",
                height: "40px",
                width: "220px",
              }}
              label={
                <Box>
                  {" "}
                  <Radio
                    sx={{
                      p: 0,
                      mr: 1,

                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    {...controlProps(1)}
                  />
                  <Typography
                    sx={{ textTransform: "none" }}
                    variant="wpf_p3_semiBold"
                    color={value === 1 ? "#fff" : "neutral.700"}>
                    Image with title
                  </Typography>
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                borderRadius: value === 2 ? "8px" : "none",
                backgroundColor: value === 2 ? "neutral.N300" : "",
                height: "40px",
                width: "280px",
              }}
              label={
                <Box>
                  {" "}
                  <Radio
                    sx={{
                      p: 0,
                      mr: 1,

                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    {...controlProps(2)}
                  />
                  <Typography
                    sx={{ textTransform: "none" }}
                    variant="wpf_p3_semiBold"
                    color={value === 2 ? "#fff" : "neutral.700"}>
                    Image in options
                  </Typography>
                </Box>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box>
          <i
            style={{ fontSize: "20px", color: "#FF4757" }}
            onClick={() => handleRemoveQA()}
            className="ri-delete-bin-6-line"></i>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <TabPanel
          value={value}
          index={0}
          //    dir={theme.direction}
        >
          <DefaultTypeIndex handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields} />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          //    dir={theme.direction}
        >
          <ImageWithTitleIndex handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields} />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          //    dir={theme.direction}
        >
          <ImageInOptionIndex handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields}/>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default QuestionType;

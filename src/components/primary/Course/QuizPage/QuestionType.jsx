import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ImageInOptionIndex from "./QuizQuestionType/ImageInOptionIndex";
import ImageWithTitleIndex from "./QuizQuestionType/ImageWithTitleIndex";
import DefaultTypeIndex from "./QuizQuestionType/DefaultTypeIndex";
import RestoreIcon from "@mui/icons-material/Restore";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
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

const QuestionType = ({
  handleRemoveQA,
  handleChangeInput,
  inputField,
  inputFields,
  update,
  handleUpdate,
  handleRestoreQuestion,
  RestoreQuestionID,
  deleteQuestionIds,
}) => {
  const [value, setValue] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("");

  const handleChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };
  useEffect(() => {
    if (inputField.questionType === "default") {
      setValue(0);
      setRadioValue("a");
    }
    if (inputField.questionType === "imageAndOptions") {
      setValue(1);
      setRadioValue("b");
      // setSelectedValue(1);
    }
    if (inputField.questionType === "imageInOptions") {
      setValue(2);
      setRadioValue("c");
      // setSelectedValue(2);
    }
  }, []);

  const handleChange = (event, newValue) => {
    if (update) {
      handleUpdate(
        newValue === 0 ? "default" : newValue === 1 ? "imageAndOptions" : newValue === 2 ? "imageInOptions" : newValue,
        "questionType",
        inputField
      );
      setValue(newValue);
      // setSelectedValue(newValue);
    } else {
      handleChangeInput(
        inputField.uniqueId,
        (inputField.questionType =
          newValue === 0
            ? "default"
            : newValue === 1
            ? "imageAndOptions"
            : newValue === 2
            ? "imageInOptions"
            : newValue)
      );
      // handleChangeInput((inputField.questionType = "default"), event);
      setValue(newValue);
      // setSelectedValue(newValue);
    }
  };
  // const controlProps = (item) => ({
  //   checked: selectedValue === item,
  //   onChange: handleChange,
  //   value: item,
  //   name: "color-radio-button-demo",
  //   inputProps: { "aria-label": item },
  // });
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  return (
    <Box
      sx={{
        border: "1px solid #E6ECF5",
        borderRadius: "10px",
        fontFamily: "Inter",
      }}
    >
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "25%" }}>
            {" "}
            <Typography variant="wpf_p3_semiBold">Question Type: </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor=""
              variant="fullWidth"
              sx={{
                //   backgroundColor: "neutral.N600",
                padding: "1%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Tab
                sx={{
                  borderRadius: "8px",
                  // backgroundColor: value === 0 ? "#3C4D6B" : "#DCE5F2",
                  // height: "30px",
                  padding: 0,
                  height: "40px",
                }}
                label={
                  <FormControl>
                    <RadioGroup
                      value={radioValue}
                      onChange={handleChangeRadio}
                      sx={{
                        // width: "50%",
                        color: value === 0 ? "#fff" : "neutral.700",
                        fontWeight: "600",
                        textTransform: "none",
                        // border: "2px solid yellow",
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "600",
                          width: "120px",
                          borderRadius: "8px",
                          backgroundColor: value === 0 ? "#3C4D6B" : "#DCE5F2",
                        }}
                        value="a"
                        control={
                          <Radio
                            sx={{
                              fontFamily: "Inter",
                              "&.Mui-checked": {
                                color: "white",
                              },
                            }}
                          />
                        }
                        // label="Default"
                        label={
                          <Typography
                            variant="wpf_p4_medium"
                            sx={{
                              color: value === 0 ? "white" : "#000", // Set label color based on the condition
                            }}
                          >
                            Default
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                }
                {...a11yProps("a")}
              />
              <Tab
                sx={{
                  borderRadius: "8px",
                  // backgroundColor: value === 1 ? "#3C4D6B" : "#DCE5F2",
                  height: "40px",
                }}
                label={
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={radioValue}
                      onChange={handleChangeRadio}
                      sx={{
                        color: value === 1 ? "#fff" : "neutral.700",
                        fontWeight: "600",
                        textTransform: "none",
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "600",
                          width: "160px",
                          // padding: "10px",
                          textAlign: "center",
                          borderRadius: "8px",
                          backgroundColor: value === 1 ? "#3C4D6B" : "#DCE5F2",
                        }}
                        value="b"
                        control={
                          <Radio
                            sx={{
                              fontFamily: "Inter",
                              "&.Mui-checked": {
                                color: "white",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            variant="wpf_p4_medium"
                            sx={{
                              color: value === 1 ? "white" : "#000", // Set label color based on the condition
                            }}
                          >
                            Image with Title
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                }
                {...a11yProps("b")}
              />
              <Tab
                sx={{
                  borderRadius: "8px",
                  // backgroundColor: value === 2 ? "#3C4D6B" : "#DCE5F2",
                  height: "40px",
                  width: "280px",
                }}
                label={
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={radioValue}
                      onChange={handleChangeRadio}
                      sx={{
                        color: value === 2 ? "#fff" : "neutral.700",
                        fontWeight: "600",
                        textTransform: "none",
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          width: "178px",
                          borderRadius: "8px",
                          backgroundColor: value === 2 ? "#3C4D6B" : "#DCE5F2",
                        }}
                        value="c"
                        control={
                          <Radio
                            sx={{
                              fontFamily: "Inter",
                              "&.Mui-checked": {
                                color: "white",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            variant="wpf_p4_medium"
                            sx={{
                              color: value === 2 ? "white" : "#000", // Set label color based on the condition
                            }}
                          >
                            Image in Options
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                }
                {...a11yProps("c")}
              />
            </Tabs>
          </Box>
        </Box>

        {/* // Restore Question */}
        <Box>
          {update && !inputField.newQuiz && deleteQuestionIds.includes(inputField._id) && (
            <Button onClick={() => handleRestoreQuestion(inputField._id)}>
              <RestoreIcon />
            </Button>
          )}
        </Box>
        {/* Delete Question for update Quiz */}
        <Box sx={{}}>
          {update && !deleteQuestionIds.includes(inputField._id) && (
            <i
              style={{ fontSize: "20px", color: "#FF4757", cursor: "pointer" }}
              onClick={update ? () => handleRemoveQA(inputField) : () => handleRemoveQA(inputField.uniqueId)}
              className="ri-delete-bin-6-line"
            ></i>
          )}

          {/* Delete Question for Create Quiz */}
          {!update && (
            <i
              style={{ fontSize: "20px", color: "#FF4757", cursor: "pointer" }}
              onClick={update ? () => handleRemoveQA(inputField) : () => handleRemoveQA(inputField.uniqueId)}
              className="ri-delete-bin-6-line"
            ></i>
          )}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <TabPanel
          value={value}
          index={0}
          //    dir={theme.direction}
        >
          <DefaultTypeIndex
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            handleUpdate={handleUpdate}
            update={update}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          //    dir={theme.direction}
        >
          <ImageWithTitleIndex
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            handleUpdate={handleUpdate}
            update={update}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          //    dir={theme.direction}
        >
          <ImageInOptionIndex
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            handleUpdate={handleUpdate}
            update={update}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default QuestionType;

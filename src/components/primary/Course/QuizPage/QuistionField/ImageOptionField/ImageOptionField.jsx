import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  styled,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { RadioOption } from '../BasicOptionField';
import ImageUploadIndex from "./ImageUploadIndex";
import { RadioOption } from "../basicOptionDesign";
import radioIcon from "../../../../../../assets/images/courses/Switch.svg";
import SwitchCheck from "../../../../../../assets/images/courses/SwitchCheck.svg";
import { PdTextField } from "../../../../../shared/CustomField/PDTextFIeld";
import SwitchForLink from "./SwitchForLink";
import { youtubeLinkEmbed } from "../../../../../../helper/youtubeLinkEmbed";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#2E58FF",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
const ImageOptionField = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  // console.log('🚀 ~ ImageOptionField ~ inputField:', inputField);
  const [alignment, setAlignment] = React.useState(inputField?.correctAnswerIndex);
  console.log("🚀 ~ BasicOptionField ~ alignment:", alignment);

  const handleAlignment = (event, newAlignment) => {
    console.log("🚀 ~ handleAlignment ~ newAlignment:", newAlignment);
    setAlignment(newAlignment);
    setCheckValue(newAlignment);
    if (update) {
      // setCheckValue(index);
      handleUpdate(newAlignment, "correctAnswerIndex", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = newAlignment), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };

  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage1, setCoverImage1] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [coverImage3, setCoverImage3] = useState(null);
  const [coverImage4, setCoverImage4] = useState(null);
  const [checkValue, setCheckValue] = useState(inputField?.correctAnswerIndex);
  const [videoLink1, setVideoLink1] = useState("");
  const [checked1, setChecked1] = React.useState(false);
  const [videoId1, setVideoId1] = useState("");
  const handleChangeSwitch1 = (event) => {
    setChecked1(event.target.checked);
    // setVideoLink1("");
  };

  const handleImage1 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      if (checked1) {
        setVideoLink1(e.target.value);
        // const videoId1 = youtubeLinkEmbed(e.target.value);
        setVideoId1(youtubeLinkEmbed(e.target.value));

        handleUpdate(e.target.value, "possibleAnswers_0", inputField);
      } else {
        const file = e[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setCoverImage1(url);
        }
        handleUpdate(e[0], "possibleAnswers_0", inputField);
      }

      // const file = e[0];
      // if (file) {
      //   const url = URL.createObjectURL(file);
      //   setCoverImage1(url);
      // }
      // handleUpdate(e[0], "possibleAnswers_0", inputField);
    } else {
      // handleChangeInput((inputField.possibleAnswers[0] = e[0]), e[0]);
      if (checked1) {
        setVideoLink1(e.target.value);
        // const videoId1 = youtubeLinkEmbed(e.target.value);
        setVideoId1(youtubeLinkEmbed(e.target.value));
        console.log("🚀 ~ handleImage1 ~ videoId1:", videoId1);

        handleChangeInput((inputField.possibleAnswers[0] = e.target.value), e.target.value);
      } else {
        handleChangeInput((inputField.possibleAnswers[0] = e[0]), e[0]);
      }
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage1(url);
      }
    }
  };

  const [videoLink2, setVideoLink2] = useState("");
  const [checked2, setChecked2] = React.useState(false);
  const [videoId2, setVideoId2] = useState("");

  const handleChangeSwitch2 = (event) => {
    setChecked2(event.target.checked);
    // setVideoLink1("");
  };

  const handleImage2 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      if (checked2) {
        setVideoLink2(e.target.value);
        // const videoId2 = youtubeLinkEmbed(e.target.value);
        setVideoId2(youtubeLinkEmbed(e.target.value));

        handleUpdate(e.target.value, "possibleAnswers_1", inputField);
      } else {
        const file = e[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setCoverImage2(url);
        }
        handleUpdate(e[0], "possibleAnswers_1", inputField);
      }

      // const file = e[0];
      // if (file) {
      //   const url = URL.createObjectURL(file);
      //   setCoverImage2(url);
      // }
      // handleUpdate(e[0], "possibleAnswers_1", inputField);
    } else {
      // handleChangeInput((inputField.possibleAnswers[1] = e[0]), e[0]);
      if (checked2) {
        setVideoLink2(e.target.value);
        // const videoId2 = youtubeLinkEmbed(e.target.value);
        setVideoId2(youtubeLinkEmbed(e.target.value));

        handleChangeInput((inputField.possibleAnswers[1] = e.target.value), e.target.value);
      } else {
        handleChangeInput((inputField.possibleAnswers[1] = e[0]), e[0]);
      }
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage2(url);
      }
    }
  };

  const [videoLink3, setVideoLink3] = useState("");
  const [checked3, setChecked3] = React.useState(false);
  const [videoId3, setVideoId3] = useState("");

  const handleChangeSwitch3 = (event) => {
    setChecked3(event.target.checked);
    // setVideoLink1("");
  };

  const handleImage3 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      if (checked3) {
        setVideoLink3(e.target.value);
        // const videoId3 = youtubeLinkEmbed(e.target.value);
        setVideoId3(youtubeLinkEmbed(e.target.value));

        handleUpdate(e.target.value, "possibleAnswers_2", inputField);
      } else {
        e[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setCoverImage3(url);
        }
        handleUpdate(e[0], "possibleAnswers_2", inputField);
      }

      // const file = e[0];
      // if (file) {
      //   const url = URL.createObjectURL(file);
      //   setCoverImage3(url);
      // }
      // handleUpdate(e[0], "possibleAnswers_2", inputField);
    } else {
      // handleChangeInput((inputField.possibleAnswers[2] = e[0]), e[0]);
      if (checked3) {
        setVideoLink3(e.target.value);
        // const videoId3 = youtubeLinkEmbed(e.target.value);
        setVideoId3(youtubeLinkEmbed(e.target.value));

        handleChangeInput((inputField.possibleAnswers[2] = e.target.value), e.target.value);
      } else {
        handleChangeInput((inputField.possibleAnswers[2] = e[0]), e[0]);
      }
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage3(url);
      }
    }
  };
  const [videoLink4, setVideoLink4] = useState("");
  const [checked4, setChecked4] = React.useState(false);
  const [videoId4, setVideoId4] = useState("");

  const handleChangeSwitch4 = (event) => {
    setChecked4(event.target.checked);
    // setVideoLink1("");
  };

  const handleImage4 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    if (update) {
      if (checked4) {
        setVideoLink4(e.target.value);
        // const videoId4 = youtubeLinkEmbed(e.target.value);
        setVideoId4(youtubeLinkEmbed(e.target.value));

        handleUpdate(e.target.value, "possibleAnswers_3", inputField);
      } else {
        const file = e[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setCoverImage4(url);
        }
        handleUpdate(e[0], "possibleAnswers_3", inputField);
      }
      // const file = e[0];
      // if (file) {
      //   const url = URL.createObjectURL(file);
      //   setCoverImage4(url);
      // }
      // handleUpdate(e[0], "possibleAnswers_3", inputField);
    } else {
      // handleChangeInput((inputField.possibleAnswers[3] = e[0]), e[0]);
      if (checked4) {
        setVideoLink4(e.target.value);
        // const videoId4 = youtubeLinkEmbed(e.target.value);
        setVideoId4(youtubeLinkEmbed(e.target.value));

        handleChangeInput((inputField.possibleAnswers[3] = e.target.value), e.target.value);
      } else {
        handleChangeInput((inputField.possibleAnswers[3] = e[0]), e[0]);
      }
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage4(url);
      }
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    // setCoverImage1(null);
  };
  const handleCorrectAnswerChange = (event, index, value) => {
    if (update) {
      setCheckValue(index);
      handleUpdate(index, "correctAnswerIndex", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = index), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }

    // handleChangeInput((inputField.correctAnswerIndex = index), event);
    // handleChangeInput((inputField.correctAnswer = value), event);
  };
  return (
    <>
      <Box>
        <Box>
          <Checkbox defaultChecked />
          <Typography
            variant='wpf_h7_medium'
            sx={{
              mb: 0,
              color: "neutral.N300",
            }}
          >
            List of Options
          </Typography>
        </Box>
        {update ? (
          <>
            <ToggleButtonGroup
              orientation='vertical'
              value={alignment}
              exclusive
              onChange={handleAlignment}
              sx={{ width: "100%" }}
              // aria-label='text alignment'
            >
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <ToggleButton
                    // style={{ color: alignment === "0" ? "blue" : "black" }}
                    value={0}
                    aria-label='left aligned'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    <img src={alignment === 0 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  {/* <RadioOption
                    checked={checkValue === 0}
                    onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  /> */}
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option A
                  </Typography>

                  <br />

                  <FormControlLabel
                    control={<Switch checked={checked1} onChange={handleChangeSwitch1} />}
                    label='Link'
                  />
                  {checked1 ? (
                    <>
                      <SwitchForLink handleImage={handleImage1} videoLink={videoLink1} videoId={videoId1} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage1}
                        removeImage={removeImage}
                        handleImage={handleImage1}
                        // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                        update={true}
                        defaultImage={inputField.possibleAnswers[0]}
                        inputField={inputField}
                      />
                    </>
                  )}

                  {/* <ImageUploadIndex
                    coverImage={coverImage1}
                    removeImage={removeImage}
                    handleImage={handleImage1}
                    // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                    update={true}
                    defaultImage={inputField.possibleAnswers[0]}
                    inputField={inputField}
                  /> */}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                    checked={checkValue === 1}
                    onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  /> */}
                  <ToggleButton
                    value={1}
                    aria-label='centered'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* <FormatAlignCenterIcon /> */}
                    <img src={alignment === 1 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option B
                  </Typography>

                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked2} onChange={handleChangeSwitch2} />}
                    label='Link'
                  />
                  {checked2 ? (
                    <>
                      <SwitchForLink handleImage={handleImage2} videoLink={videoLink2} videoId={videoId2} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage2}
                        removeImage={removeImage}
                        handleImage={handleImage2}
                        update={true}
                        defaultImage={inputField.possibleAnswers[1]}
                        inputField={inputField}
                      />
                    </>
                  )}

                  {/* <ImageUploadIndex
                    coverImage={coverImage2}
                    removeImage={removeImage}
                    handleImage={handleImage2}
                    update={true}
                    defaultImage={inputField.possibleAnswers[1]}
                    inputField={inputField}
                  /> */}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                    checked={checkValue === 2}
                    onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  /> */}
                  <ToggleButton
                    value={2}
                    aria-label='right aligned'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* <FormatAlignRightIcon /> */}
                    <img src={alignment === 2 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option C
                  </Typography>

                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked3} onChange={handleChangeSwitch3} />}
                    label='Link'
                  />
                  {checked3 ? (
                    <>
                      <SwitchForLink handleImage={handleImage3} videoLink={videoLink3} videoId={videoId3} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage3}
                        removeImage={removeImage}
                        handleImage={handleImage3}
                        update={true}
                        defaultImage={inputField.possibleAnswers[2]}
                        inputField={inputField}
                      />
                    </>
                  )}

                  {/* <ImageUploadIndex
                    coverImage={coverImage3}
                    removeImage={removeImage}
                    handleImage={handleImage3}
                    update={true}
                    defaultImage={inputField.possibleAnswers[2]}
                    inputField={inputField}
                  /> */}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                    checked={checkValue === 3}
                    onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  /> */}
                  <ToggleButton
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                    value={3}
                    aria-label='justified'
                  >
                    {/* <FormatAlignJustifyIcon /> */}
                    <img src={alignment === 3 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option D
                  </Typography>

                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked4} onChange={handleChangeSwitch4} />}
                    label='Link'
                  />
                  {checked4 ? (
                    <>
                      <SwitchForLink handleImage={handleImage4} videoLink={videoLink4} videoId={videoId4} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage4}
                        removeImage={removeImage}
                        handleImage={handleImage4}
                        update={true}
                        defaultImage={inputField.possibleAnswers[3]}
                        inputField={inputField}
                      />
                    </>
                  )}

                  {/* <ImageUploadIndex
                    coverImage={coverImage4}
                    removeImage={removeImage}
                    handleImage={handleImage4}
                    update={true}
                    defaultImage={inputField.possibleAnswers[3]}
                    inputField={inputField}
                  /> */}
                </Grid>
              </Grid>
            </ToggleButtonGroup>
          </>
        ) : (
          <>
            <ToggleButtonGroup
              orientation='vertical'
              value={alignment}
              exclusive
              onChange={handleAlignment}
              sx={{ width: "100%" }}
              // aria-label='text alignment'
            >
              <Grid container spacing={1} >
                <Grid item xs={3}>
                  <ToggleButton
                    // style={{ color: alignment === "0" ? "blue" : "black" }}
                    value={0}
                    aria-label='left aligned'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    <img src={alignment === 0 ? SwitchCheck : radioIcon} />
                  </ToggleButton>

                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option A
                  </Typography>
                  <br />

                  <FormControlLabel
                    control={<Switch checked={checked1} onChange={handleChangeSwitch1} />}
                    label='Link'
                  />
                  {checked1 ? (
                    <>
                      <SwitchForLink handleImage={handleImage1} videoLink={videoLink1} videoId={videoId1} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage1}
                        removeImage={removeImage}
                        handleImage={handleImage1}
                        // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                        update={false}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                  checked={inputField?.correctAnswerIndex === 1}
                  onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                /> */}
                  <ToggleButton
                    value={1}
                    aria-label='centered'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* <FormatAlignCenterIcon /> */}
                    <img src={alignment === 1 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option B
                  </Typography>
                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked2} onChange={handleChangeSwitch2} />}
                    label='Link'
                  />
                  {checked2 ? (
                    <>
                      <SwitchForLink handleImage={handleImage2} videoLink={videoLink2} videoId={videoId2} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage2}
                        removeImage={removeImage}
                        handleImage={handleImage2}
                        update={false}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                  checked={inputField?.correctAnswerIndex === 2}
                  onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                /> */}
                  <ToggleButton
                    value={2}
                    aria-label='right aligned'
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* <FormatAlignRightIcon /> */}
                    <img src={alignment === 2 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option C
                  </Typography>
                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked3} onChange={handleChangeSwitch3} />}
                    label='Link'
                  />
                  {checked3 ? (
                    <>
                      <SwitchForLink handleImage={handleImage3} videoLink={videoLink3} videoId={videoId3} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage3}
                        removeImage={removeImage}
                        handleImage={handleImage3}
                        update={false}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={3}>
                  {/* <RadioOption
                  checked={inputField?.correctAnswerIndex === 3}
                  onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                /> */}
                  <ToggleButton
                    style={{
                      border: "none",
                      paddingLeft: 5,
                      backgroundColor: "transparent",
                    }}
                    value={3}
                    aria-label='justified'
                  >
                    {/* <FormatAlignJustifyIcon /> */}
                    <img src={alignment === 3 ? SwitchCheck : radioIcon} />
                  </ToggleButton>
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Option D
                  </Typography>
                  <br />
                  <FormControlLabel
                    control={<Switch checked={checked4} onChange={handleChangeSwitch4} />}
                    label='Link'
                  />
                  {checked4 ? (
                    <>
                      <SwitchForLink handleImage={handleImage4} videoLink={videoLink4} videoId={videoId4} />
                    </>
                  ) : (
                    <>
                      <ImageUploadIndex
                        coverImage={coverImage4}
                        removeImage={removeImage}
                        handleImage={handleImage4}
                        update={false}
                      />
                    </>
                  )}
                </Grid>
              </Grid>
            </ToggleButtonGroup>
          </>
        )}
      </Box>
    </>
  );
};

export default ImageOptionField;

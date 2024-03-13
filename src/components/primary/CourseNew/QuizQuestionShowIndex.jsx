import { Box, Grid, Radio, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import { PdTextField } from "./QuizShow";
import { useSelector } from "react-redux";
import radioIcon from "../../../assets/images/courses/Switch.svg";
import SwitchCheck from "../../../assets/images/courses/SwitchCheck.svg";

const QuizQuestionShowIndex = ({ item, i, handleQuizResult, setData, handleSwitchContent }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [alignment, setAlignment] = React.useState();

  const handleAlignment = (event, possibleIndex, id, possibleText, isFromRadio = true) => {
    isFromRadio && setAlignment(possibleIndex);

    isFromRadio
      ? setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            submittedIndex: possibleIndex,
          },
        }))
      : setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            submittedText: possibleText,
          },
        }));
  };
  return (
    <>
      <Box>
        <Box
          key={i}
          sx={{
            border: "2px solid #E2E8F0",
            borderRadius: "8px",
            mb: "50px",
            backgroundColor: isLightTheme ? "#F1F5F9" : "",
          }}
        >
          <Grid container>
            <Grid
              xs={8}
              sx={{
                paddingLeft: "2%",
                paddingRight: "2%",
                // paddingBottom: "1%",
                paddingTop: "1%",
              }}
            >
              <Typography variant='wpf_p2_semiBold' sx={{ color: "primary.B300" }}>
                Q{i + 1}. {item?.question?.questionText} ?
              </Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                paddingLeft: "2%",
                paddingRight: "2%",
                // paddingBottom: "1%",
                paddingTop: "1%",
              }}
            >
              {/* {item.questionStatus === "rejected" ? (
                            <>
                              <CloseIcon />
                            </>
                          ) : item.questionStatus === "accepted" ? (
                            <AssignmentTurnedInIcon />
                          ) : (
                            <PendingIcon />
                          )} */}
            </Grid>
          </Grid>
          {item?.questionType === "imageAndOptions" ? (
            <>
              {/* <RadioGroup> */}
              <Grid container sx={{ backgroundColor: "", width: "100%" }}>
                <Grid xs={6} sx={{ paddingLeft: "2%", paddingTop: "3%" }}>
                  <ToggleButtonGroup
                    orientation='vertical'
                    value={alignment}
                    exclusive
                    // onChange={(value)=>handleAlignment(item ,value)}
                    onChange={(event, value) => handleAlignment(event, value, item._id)}
                    // aria-label='text alignment'
                  >
                    {item.possibleAnswers.map((posibleAnswer, i) => (
                      <Grid container key={i} sx={{ paddingBottom: "10px" }}>
                        <Grid item xs={0.7}>
                          <ToggleButton
                            // style={{ color: alignment === "0" ? "blue" : "black" }}
                            value={i}
                            aria-label='left aligned'
                            style={{
                              border: "none",
                              padding: 0,
                              backgroundColor: "transparent",
                            }}
                            // onChange={() => handleQuizResult(i, item._id)}
                          >
                            <img src={alignment === i ? SwitchCheck : radioIcon} />
                          </ToggleButton>
                        </Grid>
                        <Grid item xs={11}>
                          <Typography
                            variant='wpf_p3_regular'
                            //  sx={{ color: alignment === i ? "#2E58FF" : "#1E293B" }}
                            sx={{ color: alignment === i ? "#2E58FF" : "grey.600" }}
                          >
                            {posibleAnswer}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
                <Grid
                  xs={6}
                  sx={{
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    // paddingBottom: "1%",
                    paddingTop: "1%",
                    // backgroundColor: "red",
                  }}
                >
                  {item.question?.questionImage?.endsWith(".jpeg") && (
                    <img src={item.question.questionImage} style={{ borderRadius: "8px" }} height={224} width='100%' />
                  )}
                  <>
                    {/* for Audio */}
                    {/* <audio controls>
                                  <source src='horse.ogg' type='audio/ogg' />
                                  <source
                                    src='https://soundcloud.com/51beats/sets/51bts073-joao-ceser-brz?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252F51beats%252Fsets%252F51bts073-joao-ceser-brz'
                                    type='audio/mpeg'
                                  />
                                  Your browser does not support the audio element.
                                </audio> */}
                    {item.question?.questionImage?.endsWith(".mp4") && (
                      <video
                        width='100%'
                        height='240'
                        controls
                        style={{ borderRadius: "8px" }}
                        src='https://storage.googleapis.com/quantigo-workforce-image-storage/test%20video/production_id_4124024%20(2160p).mp4'
                      ></video>
                    )}
                  </>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              {" "}
              {/* <RadioGroup
                          //  value={value}
                          > */}
              <ToggleButtonGroup
                orientation='vertical'
                value={alignment}
                exclusive
                // onChange={(value)=>handleAlignment(item ,value)}
                onChange={(event, value) => handleAlignment(event, value, item._id)}
                // aria-label='text alignment'
              >
                <Grid container sx={{ paddingLeft: "2%", paddingBottom: "2%", paddingTop: "15px" }}>
                  {item?.possibleAnswers?.map((posibleAnswer, i) => (
                    <>
                      {item.questionType === "imageInOptions" ? (
                        <>
                          <Grid
                            item
                            xs={3}
                            sx={{
                              paddingRight: "2%",
                              borderRadius: "8px",
                              width: "500px",
                            }}
                          >
                            <Box
                              sx={{
                                border: "1px solid #E2E8F0",
                                borderRadius: "8px",
                              }}
                            >
                              {handleSwitchContent(posibleAnswer)}
                              {/* </Grid> */}
                              {/* <Grid item> */}
                              <Box
                                gap={1}
                                sx={{
                                  backgroundColor: "neutral.N000",
                                  paddingLeft: "5%",
                                  paddingTop: "3%",
                                  paddingBottom: "3%",

                                  borderRadius: "8px",
                                  display: "flex",
                                }}
                              >
                                <ToggleButton
                                  // style={{ color: alignment === "0" ? "blue" : "black" }}
                                  value={i}
                                  aria-label='left aligned'
                                  style={{
                                    border: "none",
                                    padding: 0,
                                    backgroundColor: "transparent",
                                  }}
                                  // onChange={() => handleQuizResult(i, item._id)}
                                >
                                  <img src={alignment === i ? SwitchCheck : radioIcon} />
                                </ToggleButton>
                                <Typography sx={{ color: alignment === i ? "#2E58FF" : "grey.600" }}>
                                  {i === 0 ? "Option A" : i === 1 ? "Option B" : i === 2 ? "Option C" : "Option D"}{" "}
                                </Typography>
                              </Box>
                            </Box>
                            {/* </Grid> */}
                          </Grid>
                        </>
                      ) : (
                        <>
                          {/* <Box style={{ display: "flex", flexDirection: "column" }}> */}
                          {/* <Grid container gap={2} sx={{ paddingBottom: "10px", paddingLeft: "10%", paddingTop: "3%" }}> */}
                          <Grid item xs={0.4} sx={{ backgroundColor: "", paddingY: "10px" }}>
                            <ToggleButton
                              // style={{ color: alignment === "0" ? "blue" : "black" }}
                              value={i}
                              aria-label='left aligned'
                              style={{
                                border: "none",
                                padding: 0,
                                backgroundColor: "transparent",
                              }}
                              // onChange={() => handleQuizResult(i, item._id)}
                            >
                              <img src={alignment === i ? SwitchCheck : radioIcon} />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={11.4} sx={{ paddingY: "10px" }}>
                            <Typography
                              variant='wpf_p3_regular'
                              // sx={{ color: alignment === i ? "#2E58FF" : "#1E293B" }}
                              sx={{ color: alignment === i ? "#2E58FF" : "grey.600" }}
                            >
                              {posibleAnswer}
                            </Typography>
                          </Grid>
                          {/* </Grid> */}

                          {/* </Box> */}
                        </>
                      )}
                    </>
                  ))}
                </Grid>
              </ToggleButtonGroup>
              {/* </RadioGroup> */}
            </>
          )}

          <Grid item xs={12}>
            {item?.isTextFieldEnabled && (
              <>
                <Box
                  sx={{
                    borderTop: "2px solid #E2E8F0",
                    borderRadius: "8px",
                    backgroundColor: "neutral.N000",
                    padding: "20px",
                  }}
                >
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      color: "neutral.N300",
                    }}
                  >
                    Label
                  </Typography>
                  <PdTextField
                    fullWidth
                    // variant='outlined'
                    placeholder='Write your thougts...'
                    // onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                    // onChange={(e) => handleQuizResult(null, item._id, e.target.value, false)}
                    onChange={(event, value) => handleAlignment(event, value, item._id, event.target.value, false)}
                  />
                </Box>
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default QuizQuestionShowIndex;

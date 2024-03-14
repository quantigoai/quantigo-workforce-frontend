import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import radioIcon from '../../../assets/images/courses/Switch.svg';
import SwitchCheck from '../../../assets/images/courses/SwitchCheck.svg';
import { PdTextField } from './QuizShow';

const QuizQuestionShowIndex = ({
  item,
  i,
  handleQuizResult,
  setData,
  handleSwitchContent,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [alignment, setAlignment] = React.useState();

  const handleAlignment = (
    event,
    possibleIndex,
    id,
    possibleText,
    isFromRadio = true,
  ) => {
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
  const audioStyle = {
    height: "200px",
    width: "100%",
    // backgroundColor: "#fff",
    border: "2px solid #E2E8F0",
    borderRadius: "8px",
  };
  const handleSwitchContentForQuestionImage = (value) => {
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img src={value} style={{ borderRadius: "8px" }} height={250} width='100%' />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return <audio style={audioStyle} src={value} controls></audio>;
      case value?.endsWith(".mp4"):
        return <iframe height={240} src={value} alt='' width='100%' style={{ borderRadius: "8px" }}></iframe>;
      default:
        return <p>Unsupported file </p>;
    }
  };
  return (
    <>
      <Box>
        <Box
          key={i}
          sx={{
            border: '2px solid #E2E8F0',
            borderRadius: '8px',
            mb: '50px',
            backgroundColor: isLightTheme ? '#F1F5F9' : '',
          }}
        >
          <Grid container>
            <Grid
              xs={12}
              sx={{
                paddingLeft: '20px',
                // paddingLeft: "2%",

                paddingRight: '2%',
                // paddingBottom: "1%",
                paddingTop: '1%',
              }}
            >
              <Typography
                variant="wpf_p2_semiBold"
                sx={{ color: 'primary.B300' }}
              >
                Q{i + 1}. {item?.question?.questionText} ?
              </Typography>
            </Grid>
          </Grid>
          {item?.questionType === 'imageAndOptions' ? (
            <>
              <Grid container sx={{ backgroundColor: "", width: "100%" }}>
                <Grid xs={6} sx={{ paddingLeft: "2%", paddingTop: "3%" }}>
                  <ToggleButtonGroup
                    orientation="vertical"
                    value={alignment}
                    exclusive
                    onChange={(event, value) => handleAlignment(event, value, item._id)}
                    sx={{ width: "100%" }}
                  >
                    {item.possibleAnswers.map((posibleAnswer, i) => (
                      <Grid container key={i} sx={{ paddingBottom: "10px" }}>
                        <Grid item xs={0.8}>
                          <ToggleButton
                            value={i}
                            aria-label="left aligned"
                            style={{
                              border: 'none',
                              padding: 0,
                              backgroundColor: 'transparent',
                            }}
                          >
                            <img
                              src={alignment === i ? SwitchCheck : radioIcon}
                            />
                          </ToggleButton>
                        </Grid>
                        <Grid item xs={11}>
                          <Typography
                            variant="wpf_p3_regular"
                            //  sx={{ color: alignment === i ? "#2E58FF" : "#1E293B" }}
                            sx={{
                              color: alignment === i ? '#2E58FF' : 'grey.600',
                            }}
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

                    paddingTop: "3%",
                  }}
                >
                  {handleSwitchContentForQuestionImage(item.question.questionImage)}
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <ToggleButtonGroup
                orientation="vertical"
                value={alignment}
                exclusive
                onChange={(event, value) => handleAlignment(event, value, item._id)}
                sx={{ width: "100%" }}
              >
                <Grid
                  container
                  sx={{
                    paddingLeft: "20px",
                    paddingBottom: "2%",
                    paddingTop: "1px",
                  }}
                >
                  {item?.possibleAnswers?.map((posibleAnswer, i) => (
                    <>
                      {item.questionType === 'imageInOptions' ? (
                        <>
                          <Grid
                            item
                            xs={3}
                            sx={{
                              paddingRight: "2%",
                              borderRadius: "8px",
                              width: "500px",
                              paddingTop: "12px",
                            }}
                          >
                            <Box
                              sx={{
                                border: '1px solid #E2E8F0',
                                borderRadius: '8px',
                              }}
                            >
                              {handleSwitchContent(posibleAnswer)}

                              <Box
                                gap={1}
                                sx={{
                                  backgroundColor: 'neutral.N000',
                                  paddingLeft: '5%',
                                  paddingTop: '3%',
                                  paddingBottom: '3%',

                                  borderRadius: '8px',
                                  display: 'flex',
                                }}
                              >
                                <ToggleButton
                                  value={i}
                                  aria-label="left aligned"
                                  style={{
                                    border: 'none',
                                    padding: 0,
                                    backgroundColor: 'transparent',
                                  }}
                                >
                                  <img
                                    src={
                                      alignment === i ? SwitchCheck : radioIcon
                                    }
                                  />
                                </ToggleButton>
                                <Typography
                                  sx={{
                                    color:
                                      alignment === i ? '#2E58FF' : 'grey.600',
                                  }}
                                >
                                  {i === 0
                                    ? 'Option A'
                                    : i === 1
                                    ? 'Option B'
                                    : i === 2
                                    ? 'Option C'
                                    : 'Option D'}{' '}
                                </Typography>
                              </Box>
                            </Box>
                            {/* </Grid> */}
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Box
                            sx={{
                              width: { xl: "4%", lg: "5%", xxl: "3.5%" },

                              paddingY: "10px",
                            }}
                          >
                            <ToggleButton
                              // style={{ color: alignment === "0" ? "blue" : "black" }}
                              value={i}
                              aria-label="left aligned"
                              style={{
                                border: 'none',
                                padding: 0,
                                backgroundColor: 'transparent',
                              }}
                              // onChange={() => handleQuizResult(i, item._id)}
                            >
                              <img
                                src={alignment === i ? SwitchCheck : radioIcon}
                              />
                            </ToggleButton>
                          </Box>
                          <Box
                            sx={{
                              width: { xl: "96%", lg: "95%", xxl: "96.5%" },
                              paddingY: "10px",
                              paddingX: "0px",
                              backgroundColor: "",
                            }}
                          >
                            <Typography
                              variant="wpf_p3_regular"
                              // sx={{ color: alignment === i ? "#2E58FF" : "#1E293B" }}
                              sx={{
                                color: alignment === i ? '#2E58FF' : 'grey.600',
                              }}
                            >
                              {posibleAnswer}
                            </Typography>
                          </Box>
                        </>
                      )}
                    </>
                  ))}
                </Grid>
              </ToggleButtonGroup>
            </>
          )}

          <Grid item xs={12}>
            {item?.isTextFieldEnabled && (
              <>
                <Box
                  sx={{
                    borderTop: '2px solid #E2E8F0',
                    borderRadius: '8px',
                    backgroundColor: 'neutral.N000',
                    padding: '20px',
                  }}
                >
                  <Typography
                    variant="wpf_h7_medium"
                    sx={{
                      mb: 0,
                      color: 'neutral.N300',
                    }}
                  >
                    Label
                  </Typography>
                  <PdTextField
                    fullWidth
                    placeholder='Write your thoughts...'
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

import React from 'react'

const TestQuizShow = () => {
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
                          <Typography variant='wpf_p2_semiBold' sx={{ color: "#090080" }}>
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
                          <RadioGroup>
                            <Grid container>
                              <Grid xs={6} sx={{ paddingLeft: "2%", paddingTop: "2%" }}>
                                {item.possibleAnswers.map((posibleAnswer, i) => (
                                  <Grid key={i} xs={12}>
                                    <MyFormControlLabel
                                      key={i}
                                      onChange={() => handleQuizResult(i, item._id)}
                                      value={posibleAnswer}
                                      control={<Radio />}
                                      label={posibleAnswer}
                                      // label={item.questionType === "imageInOptions" ? <img /> : posibleAnswer}
                                    />
                                  </Grid>
                                ))}
                              </Grid>

                              <Grid
                                xs={6}
                                sx={{
                                  paddingLeft: "2%",
                                  paddingRight: "2%",
                                  // paddingBottom: "1%",
                                  paddingTop: "1%",
                                }}
                              >
                                {item.question?.questionImage?.endsWith(".jpeg") && (
                                  <img
                                    src={item.question.questionImage}
                                    style={{ borderRadius: "8px" }}
                                    height={224}
                                    width='100%'
                                  />
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
                          </RadioGroup>
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
                            onChange={(event, value) => handleAlignment(event, value, item)}
                            // aria-label='text alignment'
                          >
                            <Grid container sx={{ paddingLeft: "2%", paddingBottom: "2%" }}>
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
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            border: "1px solid #E2E8F0",
                                            // borderRadius: "8px",
                                          }}
                                        >
                                          {/* <Grid item> */}
                                          {/* <Box sx={{}}>
                                            {posibleAnswer.endsWith('.jpeg') ? (
                                              <>
                                                <img
                                                  src={posibleAnswer}
                                                  style={{ borderRadius: '8px' }}
                                                  height={160}
                                                  width="100%"
                                                />
                                              </>
                                            ) : posibleAnswer.endsWith('.mpeg') ? (
                                              <>
                                                <audio style={audioStyle} src={posibleAnswer} controls></audio>
                                              </>
                                            ) : (
                                              <>
                                                <iframe
                                                  height={160}
                                                  src={posibleAnswer}
                                                  alt=""
                                                  width="100%"
                                                  style={{ borderRadius: '8px' }}
                                                ></iframe>
                                              </>
                                            )}
                                          </Box> */}
                                          {handleSwitchContent(posibleAnswer)}
                                          {/* </Grid> */}
                                          {/* <Grid item> */}
                                          <Box sx={{ backgroundColor: "#fff", paddingLeft: "5%", borderRadius: "8px" }}>
                                            <MyFormControlLabel
                                              key={i}
                                              onChange={() => handleQuizResult(i, item._id)}
                                              value={posibleAnswer}
                                              control={<Radio />}
                                              label={
                                                i === 0
                                                  ? "Option A"
                                                  : i === 1
                                                  ? "Option B"
                                                  : i === 2
                                                  ? "Option C"
                                                  : "Option D"
                                              }
                                            />
                                          </Box>
                                        </Box>
                                        {/* </Grid> */}
                                      </Grid>
                                    </>
                                  ) : (
                                    <>
                                      {/* <Box style={{ display: "flex", flexDirection: "column" }}> */}
                                      <Grid xs={12}>
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
                                          <Typography>{posibleAnswer} </Typography>
                                        </ToggleButton>

                                        {/* <MyFormControlLabel
                                          key={i}
                                          onChange={() => handleQuizResult(i, item._id)}
                                          value={posibleAnswer}
                                          control={<Radio />}
                                          label={posibleAnswer}
                                         
                                        /> */}
                                      </Grid>

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
                                backgroundColor: "#fff",
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
                                onChange={(e) => handleQuizResult(null, item._id, e.target.value, false)}
                              />
                            </Box>
                          </>
                        )}
                      </Grid>
                    </Box>
                  </Box>
   </>
  )
}

export default TestQuizShow
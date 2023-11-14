/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/AdditionalInfo.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 13th 2023, 2:02:51 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Chip, Grid, Link, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {capitalizeFirstLetter} from "../../../helper/capitalizeFirstWord";
import TakenTime from "../../shared/CountDown/TakenTime";
import CategoryChip from "../Course/CategoryChip";
import LevelChip from "../Course/CourseCardActionLebel/LevelChip";
import LanguageChip from "../Course/LanguageChip";

const AdditionalInfo = () => {
  const { course } = useSelector((state) => state.course);

  const liveTime = new Date(course.liveSessionStartedAt).toLocaleTimeString("en-US");

  return (
    <>
      <Box>
        <Typography variant="h5">Course Info</Typography>
        <hr />
        <br />

        <Box>
          <Grid container sx={{ paddingBottom: "2%" }}>
            <Grid item xs={4}>
              {" "}
              <Typography variant="body1" sx={{ color: "blue" }}>
                Level
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2%" }}>
              {" "}
              <LevelChip level={course?.level} />
            </Grid>
          </Grid>

          <Grid container sx={{ paddingBottom: "2%" }}>
            <Grid item xs={4}>
              {" "}
              <Typography variant="body1" sx={{ color: "blue" }}>
                Category
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2%" }}>
              {" "}
              <CategoryChip category={course?.category} />
            </Grid>
          </Grid>

          <Grid container sx={{ paddingBottom: "5%" }}>
            <Grid item xs={4}>
              {" "}
              <Typography variant="body1" sx={{ color: "blue" }}>
                Language
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2%" }}>
              <LanguageChip language={course?.language} />{" "}
            </Grid>
          </Grid>

          <Grid container sx={{ paddingBottom: "5%" }}>
            <Grid item xs={4}>
              {" "}
              <Typography variant="body1" sx={{ color: "blue" }}>
                Skill
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ paddingLeft: "2%" }}>
              {course?.skills?.length === 0 ? (
                <>
                  {" "}
                  <Typography variant="body1">None</Typography>
                </>
              ) : (
                <>
                  {" "}
                  <Grid container spacing={1}>
                    {course.skills &&
                      course?.skills.map((skill) => (
                        <Grid key={skill._id} item gap={1}>
                          <Chip
                            sx={{
                              color: "#00A671",
                              background: "rgba(0, 166, 113, 0.12)",
                            }}
                            label={capitalizeFirstLetter(skill.name)}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={4} sx={{ paddingTop: "0%" }}>
              <Typography variant="body1" sx={{ color: "blue" }}>
                Prerequisite
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ paddingLeft: "2%" }}>
              {course?.prerequisiteCourses?.length === 0 ? (
                <>
                  {" "}
                  <Typography variant="body1">None</Typography>
                </>
              ) : (
                <>
                  <Grid container spacing={1}>
                    {course?.prerequisiteCourses &&
                      course?.prerequisiteCourses.map((item) => (
                        <Grid key={item._id} item gap={1}>
                          <Chip
                            sx={{
                              color: "#D8514B",
                              background: "rgba(216, 81, 75, 0.1)",
                            }}
                            label={capitalizeFirstLetter(item.name)}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
        <br />
        <br />
      </Box>
      {course?.liveSessionLink ? (
        <>
          <Box>
            <Typography variant="h5">Additional Info</Typography>
            <hr />
            <br />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Live Session Link :{" "}
            </Typography>
            <br />
            <Link
              sx={{ fontStyle: "italic" }}
              underline="hover"
              href={course.liveSessionLink || "https://meet.google.com/yeb-vcyd-nhc"}
            >
              {course.liveSessionLink || "https://meet.google.com/yeb-vcyd-nhc"}
            </Link>
            <br />
            <br />
            <Box>
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="body1" sx={{ color: "blue" }}>
                    Date :
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="body1">
                    {<TakenTime takenAt={course?.liveSessionStartedAt} /> || "24th March"}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  {" "}
                  <Typography variant="body1" sx={{ color: "blue" }}>
                    Time :
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="body1">{liveTime || " 10:00 AM"}</Typography>
                </Grid>
              </Grid>

              {/* <Typography variant="body1" sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ color: "blue" }}>
                  Date:
                </Typography>

                {<TakenTime takenAt={course?.liveSessionStartedAt} /> ||
                  "24th March"}
              </Typography>

              <Typography variant="body1" sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ color: "blue" }}>
                  Time:
                </Typography>
                {liveTime || " 10:00 AM"}
              </Typography> */}
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdditionalInfo;

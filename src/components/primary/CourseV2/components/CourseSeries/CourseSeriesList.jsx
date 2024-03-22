/*
 * File           : CourseChapterContent.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:32:48
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../../../../assets/images/courses/arrowIcon.svg";
import { getAllCourseSeries } from "../../../../../features/slice/courseSlice";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
import CourseSkeletonForList from "../../shared/CourseSkeleton/CourseSkeletonForList";

const CourseSeriesList = ({ course }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [coursesSeries, setCoursesSeries] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const dispatch = useDispatch();
  const accordionBoxNumberStyle = {
    backgroundColor: isLightTheme ? "#E2E8F0" : "",
    padding: "2px",
    borderRadius: "99px",
    display: "flex",
    width: "24px",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };
  const navigate = useNavigate();
  useEffect(() => {
    course._id &&
      dispatch(getAllCourseSeries(course._id)).then((action) => {
        setCoursesSeries(action.payload.data.coursesSeries);
        setDataLoading(false);
      });
  }, [course]);

  return (
    <>
     
      <Box>
        <Box>
          {dataLoading ? (
            <>
              <Skeleton variant='rounded' width={400} height={40} />
            </>
          ) : (
            <>
              <Typography variant={"wpf_h5_Bold"} color='neutral.995'>
                Professional Certificate - {coursesSeries?.length} course series
              </Typography>
            </>
          )}

          <br />
          <Box sx={{ mt: "8px" }}>
            <Typography variant='wpf_p3_regular' color={"grey.500"}>
              Prepare for a new career in the high-growth field of project management, no experience or degree required.
              Get professional training designed by Google and get on the fastrack to a competitively paid job.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "20px",
            backgroundColor: isLightTheme ? "#F8FAFC" : "",
            // height: "200px",
            border: "2px solid #E2E8F0",
            borderRadius: "8px",
            maxHeight: 430,
            overflowY: "auto",
          }}
        >
          <>
            {dataLoading ? (
              <>
                <CourseSkeletonForList SkeletonCount={1} />
              </>
            ) : (
              <>
                {coursesSeries &&
                  coursesSeries.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        borderTop: index === 0 ? "" : "1px solid #E2E8F0",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                      }}
                    >
                      <Grid container>
                        <Grid
                          item
                          xs={1}
                          sx={{ backgroundColor: "", alignItems: "center", justifyContent: "center", display: "flex" }}
                        >
                          <Box sx={accordionBoxNumberStyle}>
                            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>{index + 1}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={9} sx={{ backgroundColor: "" }}>
                          <Typography
                            variant='wpf_p3_semiBold'
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(`/course-new/course-landing/${item._id}`)}
                          >
                            {capitalizeFirstLetter(item.name)}
                          </Typography>
                          <br />
                          <Typography variant='wpf_p4_regular' color={"grey.700"}>
                            {item?.totalTimeToRead} minutes
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{ px: "2%", alignItems: "center", justifyContent: "end", display: "flex" }}
                        >
                          <img
                            src={arrowIcon}
                            alt=''
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/course-new/course-landing/${item._id}`)}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
              </>
            )}
          </>
        </Box>
      </Box>
    </>
  );
};

export default CourseSeriesList;

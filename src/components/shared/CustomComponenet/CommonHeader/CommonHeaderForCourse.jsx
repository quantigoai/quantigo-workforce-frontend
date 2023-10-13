/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/CommonHeader/CommonHeader.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 10:21:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Alert, AlertTitle, Box, Button, Grid, Typography,} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CourseDeleteModal from "../../../primary/Course/CourseDetailsPage/CourseDeleteModal";
import CourseNewHeaderBottom from "../../../primary/CourseNew/CourseNewHeaderBottom/CourseNewHeaderBottom";
import editCourseIcon from "../../../../assets/images/edit.svg";
import RectangleIcon from "../../../../assets/images/Rectangle 3.svg";

const CommonHeaderForCourse = ({
  isLoading,
  title,
  description,
  customButton,
  handleCancel,
}) => {
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const handleNavigation = (navigateLink) => {
    switch (navigateLink) {
      case "Create Course":
        navigate("/create-course");
        break;
      case "Create Benchmark":
        navigate("/benchmarknew/create");
        break;
      case "Edit Course":
        navigate(`/edit-course/${course._id}`);
        break;
      case "Update Benchmark":
        navigate(`/benchmarknew/update`);
        break;
      case "Create Job":
        navigate("/jobs/create-job");
        break;
      case "Edit Profile":
        navigate("/edit-profile");
        break;
      default:
        break;
    }
  };
  const goPreviousPage = () => {
    handleCancel && handleCancel();
    navigate(-1);
  };

  return (
    <>
      {user.role === "reviewer" && !user.active ? (
        <>
          {" "}
          <Grid container sx={{ paddingBottom: "1%" }}>
            <Alert sx={{ width: "100%" }} severity="error">
              <AlertTitle>Warning</AlertTitle>
              Please activate your account .
            </Alert>
          </Grid>
        </>
      ) : (
        <></>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          width: "100%",
        }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              paddingTop: "1%",
              paddingLeft: "3%",
              paddingBottom: "1%",
              borderBottom: "1px solid #EBEDF5",
            }}>
            <Grid item xs={8}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ color: "#1D1D1D" }}>
                  <b> {title} </b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "#969CAF" }} variant="caption">
                  Course Duration: <b>4 hrs 32 mins </b>
                  <img src={RectangleIcon} /> Course Progress: 75%
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                justifyContent: "end",
              }}>
              <Grid
                container
                gap={4}
                sx={{
                  textAlign: "right",
                  justifyContent: "end",
                  paddingLeft: "0%",
                  // borderBottom: "1px solid #EBEDF5",
                }}>
                {customButton === "dashboard" ||
                customButton === "Create User" ||
                customButton === "null" ? (
                  <></>
                ) : customButton ? (
                  <Grid item xs={6}>
                    {/* {user.role === "trainer" || user.role === "admin" ? ( */}
                    <>
                      {user.role === "trainer" ||
                      user.role === "admin" ||
                      user.role === "delivery_manager" ? (
                        <>
                          <Grid
                            container
                            sx={{
                              paddingTop: "2%",
                              justifyContent: "right",
                            }}>
                            <Grid item xs={8} sx={{}}>
                              <Button
                                // variant="contained"
                                disabled={isLoading}
                                type="submit"
                                sx={{
                                  //   width: "100%",
                                  //   height: "45px",
                                  //   backgroundColor: "#2D58FF",
                                  //   color: "#FFFFFF",
                                  //   "&:hover": {
                                  //     backgroundColor: "#FF9A45",
                                  //     color: "#1D1D1D",
                                  //   },
                                  borderRadius: "2px",
                                }}
                                onClick={() => handleNavigation(customButton)}>
                                <img src={editCourseIcon} />
                              </Button>
                              <CourseDeleteModal
                                course={course}
                                // handleDeleteCourse={handleDeleteCourse}
                              />
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  </Grid>
                ) : (
                  <>
                    <Grid item xs={3}>
                      <Button
                        onClick={goPreviousPage}
                        variant="outlined"
                        sx={{
                          width: "100%",
                          color: "#2D58FF",
                          height: "45px",
                          borderRadius: "2px",
                        }}>
                        CANCEL
                      </Button>
                    </Grid>

                    <Grid item xs={3}>
                      {title === "Create Job Pool" ||
                      title === "Create a Benchmark" ? (
                        <>
                          <Button
                            variant="contained"
                            disabled={isLoading}
                            type="submit"
                            sx={{
                              width: "100%",
                              height: "45px",
                              backgroundColor: "#2D58FF",
                              color: "#FFFFFF",
                              "&:hover": {
                                backgroundColor: "#FF9A45",
                                color: "#1D1D1D",
                              },
                              borderRadius: "2px",
                            }}>
                            Create
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            disabled={isLoading}
                            type="submit"
                            sx={{
                              width: "100%",
                              height: "45px",
                              backgroundColor: "#2D58FF",
                              color: "#FFFFFF",
                              "&:hover": {
                                backgroundColor: "#FF9A45",
                                color: "#1D1D1D",
                              },
                              borderRadius: "2px",
                            }}>
                            Save
                          </Button>
                        </>
                      )}
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                justifyContent: "left",
                paddingTop: "1%",
                paddingLeft: "3%",
              }}>
              <CourseNewHeaderBottom course={course} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CommonHeaderForCourse;

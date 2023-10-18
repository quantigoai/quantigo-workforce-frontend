/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/CommonHeader/CommonHeader.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 10:21:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Alert, AlertTitle, Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CourseDeleteModal from "../../../primary/Course/CourseDetailsPage/CourseDeleteModal";

const CommonHeader = ({ isLoading, title, description, customButton, handleCancel }) => {
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const { isLightTheme } = useSelector((state) => state.theme);

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
        }}
      >
        <Grid item xs={10}>
          <Grid
            sx={{
              display: "flex",
            }}
            // container
          >
            <Typography
              variant="wpf_h5_semiBold"
              // sx={{
              //   fontSize: "20px",
              //   fontWeight: "600",
              //   lineHeight: "28px",
              //   color: isLightTheme ? " #3C4D6B" : "white",
              //   mt: 0.7,
              //   fontStyle: "normal",
              // }}
            >
              {title}
            </Typography>
          </Grid>
          {customButton === "Edit Course" ? (
            <Grid container sx={{ justifyContent: "left" }}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "justify",
                }}
              >
                {description?.length > 500 ? description?.substring(0, 500) + "....." : description}
              </Typography>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "end",
          }}
        >
          <Grid
            container
            gap={4}
            sx={{
              textAlign: "right",
              justifyContent: "end",
              paddingLeft: "0%",
            }}
          >
            {customButton === "dashboard" || customButton === "Create User" || customButton === "null" ? (
              <></>
            ) : customButton ? (
              <Grid item xs={6}>
                {/* {user.role === "trainer" || user.role === "admin" ? ( */}
                <>
                  {user.role === "trainer" || user.role === "admin" || user.role === "delivery_manager" ? (
                    <>
                      <Grid container>
                        <Grid item xs={customButton === "Edit Course" ? 8 : 12} sx={{ paddingRight: "2%" }}>
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
                            }}
                            onClick={() => handleNavigation(customButton)}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "center",
                              }}
                            >
                              {customButton === "Edit Course" ? <ModeEditIcon /> : <AddIcon />}
                              {customButton}
                            </Box>
                          </Button>
                        </Grid>
                        <Grid item xs={4}>
                          {customButton === "Edit Course" ? (
                            <CourseDeleteModal
                              course={course}
                              // handleDeleteCourse={handleDeleteCourse}
                            />
                          ) : (
                            <></>
                          )}
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
                    }}
                  >
                    CANCEL
                  </Button>
                </Grid>

                <Grid item xs={3}>
                  {title === "Create Job Pool" || title === "Create a Benchmark" ? (
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
                        }}
                      >
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
                        }}
                      >
                        Save
                      </Button>
                    </>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CommonHeader;

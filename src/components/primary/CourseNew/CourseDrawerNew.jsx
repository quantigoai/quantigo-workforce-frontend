/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CouseDrawer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:08:32 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleChapterNew from "../Course/SingleChapterNew";

const CourseDrawerNew = ({ handleChapterClick, durationTime }) => {
  const { courseChapters } = useSelector((state) => state.course);

  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const { user } = useSelector((state) => state.user);
  const { course, isLoading } = useSelector((state) => state.course);
  const navigate = useNavigate();

  const handleCreateChapter = (id) => {
    navigate(`/create-chapter/${id}`);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper elevation={0} sx={{ paddingTop: "0%" }}>
          {/* TODO Handle this smartly */}
          {/* If there are no chapters under this course */}
          {!courseChapters && <p>No Chapters found for this course</p>}
          <Box
            sx={{
              paddingX: "12px",
              paddingY: "16px",
              borderBottom: "2px solid #EBEDF5",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", paddingX: "10px" }}>
              <Box>
                <Box>
                  <Typography variant="wpf_h6_semiBold" color="neutral.995">
                    All Chapters
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{ opacity: "0.8", fontSize: { lg: "10px", xl: "12px" } }}
                    variant="wpf_h7_regular"
                    color="neutral.995"
                  >
                    {courseChapters?.length === 1
                      ? courseChapters?.length + " Chapter"
                      : courseChapters?.length + " Chapters"}
                    , {durationTime}
                  </Typography>
                </Box>
                {/* <Grid item xs={12}>
                  <Button sx={{ fontSize: "20px", color: "#000" }}>
                    {" "}
                    <i className="ri-menu-fold-line"></i>
                  </Button>
                  <Button sx={{ fontSize: "20px", color: "#000" }}>
                    {" "}
                    <i className="ri-menu-unfold-line"></i>
                  </Button>
                </Grid> */}
              </Box>
              {user.role === "trainer" || user.role === "admin" ? (
                <Box>
                  <Button
                    variant="contained"
                    disabled={isLoading}
                    type="submit"
                    sx={{
                      backgroundColor: "#2D58FF",
                      color: "#FFFFFF",
                      width: { xl: "100px", xxl: "105px", lg: "80px" },
                      fontSize: { xl: "12px", lg: "9px", xxl: "12px" },

                      "&:hover": {
                        backgroundColor: "#244EF5",
                      },
                      borderRadius: "32px",
                    }}
                    onClick={() => handleCreateChapter(course._id)}
                  >
                  <AddIcon />
                    Create
                  </Button>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/* If there are chapters under this course */}
          {courseChapters?.length &&
            courseChapters.map((courseChapter, index) => (
              <Grid container key={index} sx={{ paddingX: "8px", paddingY: "5px" }}>
                <Box
                  fullWidth
                  key={courseChapter._id}
                  sx={{
                    borderRadius: "6px",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(45, 88, 255, 0.04)",
                    },
                    backgroundColor: activeChapterIndex === index && "rgba(45, 88, 255, 0.04)",
                    // color: activeChapterIndex === index && "#2D58FF",
                  }}
                  onClick={() => handleChapterClick(courseChapter, index)}
                >
                  <SingleChapterNew role={user.role} courseChapter={courseChapter} index={index} />
                </Box>
              </Grid>
            ))}
          <br />
        </Paper>
      </Box>
    </>
  );
};

export default CourseDrawerNew;

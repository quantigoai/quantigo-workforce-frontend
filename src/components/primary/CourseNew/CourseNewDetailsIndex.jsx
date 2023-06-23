import {Box, Button, styled, Typography} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {enrollACourse} from "../../../features/slice/courseSlice";
import {updateUserEnrollCourse,} from "../../../features/slice/userSlice";

const ButtonStyle = styled(Button)({
  border: "8px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const CourseNewDetailsIndex = () => {
  const dispatch = useDispatch();
  const { course, courseChapter, courseChapters } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleStart = (id) => {
    navigate(`/course-details/${id}/content`);
    if (
      user.role === "level_0_annotator" ||
      user.role === "level_1_annotator" ||
      user.role === "level_2_annotator" ||
      user.role === "level_3_annotator" ||
      user.role === "reviewer"
    ) {
      !user.enrolledCourses.includes(courseChapter.rootCourse._id) &&
        dispatch(enrollACourse(courseChapter.rootCourse._id)).then((action) => {
          dispatch(updateUserEnrollCourse(action.payload.data._id));
        });
    }
  };
  return (
    <>
      {" "}
      <Box sx={{ padding: "3%" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1D1D1D" }}>
            {courseChapter?.title}
          </Typography>

          <Box sx={{ py: "2%" }}>
            <Typography sx={{}} variant="body1">
              {courseChapter?.description}
            </Typography>
          </Box>

          <Box sx={{ py: "2%", textAlign: "left" }}>
            {courseChapters?.length &&
              (user.role === "trainer" || user.role === "admin" ? (
                <>
                  {" "}
                  <ButtonStyle
                    variant="contained"
                    onClick={() => handleStart(courseChapter._id)}>
                    View Chapter
                  </ButtonStyle>
                </>
              ) : (
                <>
                  <ButtonStyle
                    variant="contained"
                    onClick={() => handleStart(courseChapter._id)}>
                    GET STARTED
                  </ButtonStyle>
                </>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseNewDetailsIndex;

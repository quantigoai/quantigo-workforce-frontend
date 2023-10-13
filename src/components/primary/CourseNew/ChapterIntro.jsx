/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/ChapterIntro.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 13th 2023, 11:14:56 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Button, styled, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import QuizIcon from "@mui/icons-material/Quiz";
import {useNavigate} from "react-router-dom";
import {enrollACourse} from "../../../features/slice/courseSlice";
import {updateUserEnrollCourse} from "../../../features/slice/userSlice";

const ButtonStyle = styled(Button)({
  border: "1px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const ChapterIntro = () => {
  const dispatch = useDispatch();
  const { courseChapter, courseChapters } = useSelector(
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
      <Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "blue" }}>
            {courseChapter?.title}
          </Typography>

          <Box sx={{ display: "flex", py: "15px" }} gap={3}>
            <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
              <AccessTimeIcon />
              <Typography variant="body1">
                Time to read: {courseChapter?.estimatedTimeToRead || 10} minutes
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", py: "2%" }}
              gap={1}
            >
              <QuizIcon />
              <Typography variant="body1">
                Assigned Quiz: {courseChapter?.quiz ? 1 : 0} item
              </Typography>
            </Box>
          </Box>
          <hr />
          <Box sx={{ py: "2%" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "blue" }}
            >
              Chapter Objectives
            </Typography>
            <Typography sx={{ fontStyle: "italic", px: "2%" }} variant="body1">
              {courseChapter?.description}
            </Typography>
          </Box>

          <Box sx={{ py: "2%", textAlign: "right" }}>
            {courseChapters?.length &&
              (user.role === "trainer" || user.role === "admin" ? (
                <>
                  {" "}
                  <ButtonStyle
                    variant="contained"
                    onClick={() => handleStart(courseChapter._id)}
                  >
                    View Chapter
                  </ButtonStyle>
                </>
              ) : (
                <>
                  <ButtonStyle
                    variant="contained"
                    onClick={() => handleStart(courseChapter._id)}
                  >
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

export default ChapterIntro;

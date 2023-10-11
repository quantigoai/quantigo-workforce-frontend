/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CouseMainContent.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:08:48 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { getAQuizById } from "../../../features/slice/quizSlice";
import ChapterContent from "./ChapterContent";

const CourseMainContent = () => {
  const dispatch = useDispatch();

  const toast = useToaster();
  const navigate = useNavigate();

  const { activeChapterIndex, activeCourseId } = useSelector((state) => state.activePath);
  const { course } = useSelector((state) => state.course);

  // useEffect(() => {
  //   if (course._id !== activeCourseId) {
  //     dispatch(setActiveChapterIndex(0));
  //   }
  // }, [course._id]);

  const handleCreateQuiz = () => {
    navigate("/create-quiz");
  };

  const handleQuizStart = (id) => {
    !id && toast.trigger("No Quiz Found", "error");

    id &&
      dispatch(getAQuizById(id)).then((res) => {
        const id = res.payload.data.course.id;
        navigate(`/course-details/${id}/show-quiz`);
      });
  };

  const handleEditChapter = (id) => {
    navigate(`/update-chapter/${id}`);
  };

  return (
    <>
      <>
        {/* {!showQuiz ? ( */}
        <ChapterContent
          handleQuizStart={handleQuizStart}
          handleCreateQuiz={handleCreateQuiz}
          handleEditChapter={handleEditChapter}
        />
      </>
    </>
  );
};

export default CourseMainContent;

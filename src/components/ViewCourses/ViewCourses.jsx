import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getACourseByID} from "../../features/slice/courseSlice";
import "./viewCourses.css";
import {useParams} from "react-router-dom";
import CourseContent from "./CourseContent/CourseContent";

export const ViewCourses = () => {
  const params = useParams();
  const id = params.id;
  // console.log(params.id);

  const dispatch = useDispatch();
  useSelector((state) => console.log(state));
  // const {course} = useSelector((state)=> state.course);
  // console.log(course);
  // const {id} = course;
  // console.log(id);
  // const [course, setCourse] =useState({})
  useEffect(() => {
    dispatch(getACourseByID(id));
    // console.log(course);
  }, []);

  return (
    <CourseContent />
    // <Test />
  );
};

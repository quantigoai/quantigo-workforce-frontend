import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../../../customHooks/useToaster";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createCourse,
  getACourseByID,
  getAllChapterFromACourse,
  getCourseQuizzesResults,
} from "../../../../../features/slice/courseSlice";
import { setActiveChapterIndex, setActiveCourseId } from "../../../../../features/slice/activePathSlice";

const useCourseManagement = () => {
  const { role } = useSelector((state) => state.user.user);
  const [filterCourses, setFilterCourses] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const { courses, isLoading } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const { skills } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const dispatch = useDispatch();
  const toast = useToaster();
  const CourseCreateSchema = Yup.object().shape({
    name: Yup.string().required('Course name is required'),
    description: Yup.string().required('Course description is required'),

    level: Yup.string().required('Course level is required'),
    category: Yup.string().required('Course category is required'),
    language: Yup.string().required('Course language is required'),
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    reset();
    setPreRequisiteCourses([]);
    setSkill([]);
    setCoverImageFile(null);
    setCoverImage(null);
  };
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: 'all',
  });
  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setSkill(typeof selectedSkills === 'string' ? value.split(',') : selectedSkills);
  };
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage(null);
  };
  const handleChange_Pre_Requisite_Course = (event) => {
    const {
      target: { value },
    } = event;

    const selectedPreRequisiteCourses = value.map((course) => {
      return courses.find((c) => c.name === course);
    });

    setPreRequisiteCourses(
      typeof selectedPreRequisiteCourses === 'string' ? value.split(',') : selectedPreRequisiteCourses
    );
  };
  const { handleSubmit, reset } = methods;
  const [isCourseLoading, setIsCourseLoading] = useState(false);

  const onSubmit = (data) => {
    const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
      return preRequisite._id;
    });
    const skillColl = skill.map((skill) => {
      return skill._id;
    });

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('level', data.level);
    formData.append('language', data.language);
    formData.append('description', data.description);
    formData.append('images', coverImageFile);

    formData.append('prerequisiteCourses', preRequisiteCoursesColl);
    formData.append('skills', skillColl);
    dispatch(createCourse(formData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        handleClose();
      }
    });
  };

  const handleViewDetailsButton = (id) => {
    setIsCourseLoading(true);
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          dispatch(getCourseQuizzesResults(id)).then((results) => {
            setIsCourseLoading(false);
            // navigate(`/course-details/${id}/index`);
            navigate(`/course-landing/${id}`);
          });
        });
      })
      .catch(() => {
        setIsCourseLoading(false);
      });
  };
  return {
    open,
    setOpen,
    handleOpen,
    isCourseLoading,
    isLoading,
    isDataLoading,
    setIsDataLoading,
    filterCourses,
    courses,
    handleViewDetailsButton,
    handleSubmit,
    methods,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    onSubmit,
    handleClose,
    skills,
    skill,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    role,
    isLightTheme,
  };
};

export default useCourseManagement;

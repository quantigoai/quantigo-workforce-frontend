<<<<<<< HEAD
<<<<<<< HEAD
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useToaster from "../../../../../customHooks/useToaster";
import { setActiveChapterIndex, setActiveCourseId } from "../../../../../features/slice/activePathSlice";
=======
=======
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import useToaster from '../../../../../customHooks/useToaster';
import { setActiveChapterIndex, setActiveCourseId } from '../../../../../features/slice/activePathSlice';
<<<<<<< HEAD
>>>>>>> 4f07cb4f5576cf366daebb659f5e34703c2e68db
=======
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
import {
  createCourse,
  getACourseByID,
  getAllChapterFromACourse,
  getAllCourses,
  getCourseQuizzesResults,
} from '../../../../../features/slice/courseSlice';

const useCourseManagement = () => {
  const { level } = useParams();
  const { role } = useSelector((state) => state.user.user);
  const { course } = useSelector((state) => state.course);
  const [filterCourses, setFilterCourses] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const searchRef = React.useRef(null);
  const [search, setSearch] = useState('');
  const { courses, isLoading } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const { skills } = useSelector((state) => state.skill);
  const [checkedFeatured, setCheckedFeatured] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [outcomes, setOutcomes] = useState(['']);
  const [skill, setSkill] = React.useState([]);
<<<<<<< HEAD
<<<<<<< HEAD
  const [hub, setHub] = useState(["Dhaka", "Mymensingh", "Sirajganj", "Khulna", "Chuadanga"]);
=======
  const [hub, setHub] = useState(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
>>>>>>> 4f07cb4f5576cf366daebb659f5e34703c2e68db
=======
  const [hub, setHub] = useState(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
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
    setHub(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
    setCoverImageFile(null);
    setCoverImage(null);
    setDateTime('');
    setCheckedFeatured(false);
    setOutcomes(['']);
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

<<<<<<< HEAD
    setSkill(typeof selectedSkills === "string" ? value.split(",") : selectedSkills);
=======
    setSkill(typeof selectedSkills === 'string' ? value.split(',') : selectedSkills);
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
  };
  const handleChangeHub = (event) => {
    const {
      target: { value },
    } = event;
    setHub(
      // On autofill we get a stringified value.
<<<<<<< HEAD
      typeof value === "string" ? value.split(",") : value
=======
      typeof value === 'string' ? value.split(',') : value
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
    );
  };

  const handleChangeFeatured = (event) => {
    setCheckedFeatured(event.target.checked);
  };
  const handleDateTime = (value) => {
    setDateTime(value);
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
<<<<<<< HEAD
      typeof selectedPreRequisiteCourses === "string" ? value.split(",") : selectedPreRequisiteCourses
=======
      typeof selectedPreRequisiteCourses === 'string' ? value.split(',') : selectedPreRequisiteCourses
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
    );
  };
  const { handleSubmit, reset } = methods;
  const [isCourseLoading, setIsCourseLoading] = useState(false);

  const handleSearch = (e) => {
    // setPagination((prevPagination) => ({
    //   ...prevPagination,
    //   currentPage: 0,
    // }));
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    searchRef.current.value = '';
  };
  const onSubmit = (data) => {
    const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
      return preRequisite._id;
    });
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const formData = new FormData();

<<<<<<< HEAD
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("description", data.description);
    formData.append("images", coverImageFile);
    preRequisiteCoursesColl.length && formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    hub.length && formData.append("hubs", hub);
    data.liveSessionLink !== undefined && formData.append("liveSessionLink", data.liveSessionLink);
    dateTime.$d !== undefined && formData.append("liveSessionStartedAt", dateTime.$d);
    formData.append("isFeaturedCourse", checkedFeatured);
    outcomes.length > 1 && formData.append("outComes", outcomes);
    skillColl.length && formData.append("skills", skillColl);
=======
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('level', data.level);
    formData.append('language', data.language);
    formData.append('description', data.description);
    formData.append('images', coverImageFile);
    preRequisiteCoursesColl.length && formData.append('prerequisiteCourses', preRequisiteCoursesColl);
    hub.length && formData.append('hubs', hub);
    data.liveSessionLink !== undefined && formData.append('liveSessionLink', data.liveSessionLink);
    dateTime.$d !== undefined && formData.append('liveSessionStartedAt', dateTime.$d);
    formData.append('isFeaturedCourse', checkedFeatured);
    outcomes.length > 1 && formData.append('outComes', outcomes);
    skillColl.length && formData.append('skills', skillColl);
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
    dispatch(createCourse(formData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, 'error');
      } else {
<<<<<<< HEAD
        toast.trigger(action.payload.data.message, "success");
=======
        toast.trigger(action.payload.data.message, 'success');
        if (level) {
          dispatch(getAllCourses({ level: level, search })).then((action) => {
            // setAllCourse(action.payload.data.courses);
            // setCourseCount(action.payload.data.count);
            setIsDataLoading(false);
          });
        }
>>>>>>> 8a56bbf54526d7a87716ad6bb4d7834909f038d3
        handleClose();
      }
    });
  };

  const handleViewDetailsButton = (id, courseDirection) => {
    console.log('🚀 ~ handleViewDetailsButton ~ id:', id);
    console.log('SADFS');
    setIsCourseLoading(true);
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          dispatch(getCourseQuizzesResults(id)).then((results) => {
            // navigate(`/course-details/${id}/index`);
            if (courseDirection === 'MyCourse') {
              navigate(`/course-homepage/${id}`);
              setIsCourseLoading(false);
            } else {
              navigate(`/course-landing/${id}`);
              setIsCourseLoading(false);
            }
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
    checkedFeatured,
    setCheckedFeatured,
    handleChangeFeatured,
    dateTime,
    handleDateTime,
    outcomes,
    setOutcomes,
    hub,
    handleChangeHub,
    search,
    setSearch,
    handleSearch,
    clearSearch,
    searchRef,
  };
};

export default useCourseManagement;

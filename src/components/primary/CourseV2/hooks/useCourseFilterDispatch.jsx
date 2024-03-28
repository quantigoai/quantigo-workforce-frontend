/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CourseNew/useCoursedispatch.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, March 15th 2024, 12:08:11 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import useToaster from '../../../../customHooks/useToaster';
import {
  createCourse,
  getAllCoursesList,
  getAllCoursesNew,
  getArchivedCourses,
  getMyCourses,
} from '../../../../features/slice/courseSlice';

const useCourseFilterDispatch = ({ setCourseCount }) => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [search, setSearch] = useState(null);
  const [pathLevel, setPathLevel] = useState('');
  const [filter, setFilter] = useState(null);
  const toast = useToaster();
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const [triggerFilter, setTriggerFilter] = useState(false);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const handleChangeFilter = (event, label) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [label]: event.target.value,
    }));
  };

  const handleResetFilter = () => {
    setTriggerFilter(true);
    setFilter(null);
  };

  const handleFilterCourse = () => {
    setTriggerFilter(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };
  const handleDispatch = async (pathname) => {
    switch (true) {
      case pathname === '/courses/my-course':
        dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
        });
        break;
      case pathname === '/courses/archive-course':
        dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
        });
        break;
      case pathname === '/course-new' || pathname === '/course-new/all-courses':
        dispatch(getAllCoursesNew({ filter, search })).then((action) => {
          setCourseCount(action.payload.data.courses.count);
        });
        break;
      default:
        break;
    }
  };

  //#create course modal
  //#states
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState([]);
  const [checkedFeatured, setCheckedFeatured] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [outcomes, setOutcomes] = useState(['']);
  const [hub, setHub] = useState(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
  const [preRequisiteCourses, setPreRequisiteCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  //#selector and useeffect  call

  useEffect(() => {
    dispatch(getAllCoursesList({})).then((action) => {
      setAllCourses(action.payload.data.courses);
      // setIsCourseFetched(true);
    });
  }, []);
  const { skills } = useSelector((state) => state.skill);
  //course create schema

  const CourseCreateSchema = Yup.object().shape({
    name: Yup.string().required('Course name is required'),
    description: Yup.string().required('Course description is required'),

    level: Yup.string().required('Course level is required'),
    category: Yup.string().required('Course category is required'),
    language: Yup.string().required('Course language is required'),
  });

  //#create modal functions
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: 'all',
  });
  const { handleSubmit, reset } = methods;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPreRequisiteCourses([]);
    setSkill([]);
    setHub(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
    setCoverImageFile(null);
    setCoverImage(null);
    setDateTime('');
    setCheckedFeatured(false);
    setOutcomes(['']);
  };

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setSkill(typeof selectedSkills === 'string' ? value.split(',') : selectedSkills);
  };
  const handleChangeHub = (event) => {
    const {
      target: { value },
    } = event;
    setHub(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleChangeFeatured = (event) => {
    setCheckedFeatured(event.target.checked);
  };
  const handleDateTime = (value) => {
    setDateTime(value);
  };
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
      return allCourses.find((c) => c.name === course);
    });

    setPreRequisiteCourses(
      typeof selectedPreRequisiteCourses === 'string' ? value.split(',') : selectedPreRequisiteCourses
    );
  };

  //#course create modal on submit
  const [isBtnLoading, setIsBtnLoading] = useState(false);
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
    preRequisiteCoursesColl.length && formData.append('prerequisiteCourses', preRequisiteCoursesColl);
    hub.length && formData.append('hubs', hub);
    data.liveSessionLink !== undefined && formData.append('liveSessionLink', data.liveSessionLink);
    dateTime.$d !== undefined && formData.append('liveSessionStartedAt', dateTime.$d);
    formData.append('isFeaturedCourse', checkedFeatured);
    outcomes.length > 1 && formData.append('outComes', outcomes);
    skillColl.length && formData.append('skills', skillColl);
    setIsBtnLoading(true);
    dispatch(createCourse(formData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, 'error');
        setIsBtnLoading(false);
        handleClose();
      } else {
        toast.trigger(action.payload.data.message, 'success');
        dispatch(getAllCoursesNew({ filter, search }));
        // setIsDataLoading(false);
        handleClose();
        reset();
        setIsBtnLoading(false);
        // if (level) {
        //   dispatch(getAllCourses({ level, filter, search })).then((action) => {
        //     setAllCoursesFull(action.payload.data.courses);
        //     setCourseCount(action.payload.data.count);
        //     setIsDataLoading(false);
        //     handleClose();
        //     setIsBtnLoading(false);
        //   });
        // } else {
        //   dispatch(getAllCoursesNew({})).then((action) => {
        //     setCourseCount(action.payload.data.courses.count);
        //     setAllCourses(action.payload.data.courses);
        //     setFeatureCourses(action.payload.data.courses.featureCourseList);
        //     setIsDataLoading(false);
        //     handleClose();
        //     setIsBtnLoading(false);
        //   });
        //   handleClose();
        // }
        // dispatch(getAllCoursesNew({ filter, search }));
      }
    });
  };
  return {
    isCourseLoading,
    setIsCourseLoading,
    pathLevel,
    setPathLevel,
    handleDispatch,
    search,
    setSearch,
    filter,
    pagination,
    searchRef,
    handleSearch,
    clearSearch,
    handleSubmit,
    methods,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    onSubmit,
    open,
    setOpen,
    handleClose,
    skills,
    skill,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    // isLoading,
    checkedFeatured,
    handleChangeFeatured,
    dateTime,
    handleDateTime,
    outcomes,
    setOutcomes,
    hub,
    handleChangeHub,
    isBtnLoading,
    handleOpen,
    triggerFilter,
    setPagination,
    handleChangeFilter,
    handleResetFilter,
    handleFilterCourse,
  };
};
export default useCourseFilterDispatch;

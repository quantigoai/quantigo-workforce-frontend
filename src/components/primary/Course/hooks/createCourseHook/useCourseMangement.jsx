import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import useToaster from '../../../../../customHooks/useToaster';
import { setActiveChapterIndex, setActiveCourseId } from '../../../../../features/slice/activePathSlice';
import {
  createCourse,
  getACourseByID,
  getAllChapterFromACourse,
  getAllCourses,
  getAllCoursesNew,
  getArchivedCourses,
  getCourseQuizzesResults,
  getMyCourses,
} from '../../../../../features/slice/courseSlice';

const useCourseManagement = () => {
  const { level } = useParams();
  const [featureCourses, setFeatureCourses] = useState([]);
  const [basicCourses, setBasicCourses] = useState([]);
  const [beginnerCourses, setBeginnerCourses] = useState([]);
  const [intermediateCourses, setIntermediateCourses] = useState([]);
  const [advancedCourses, setAdvancedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allCoursesFull, setAllCoursesFull] = useState([]);
  const [courseCountFull, setCourseCountFull] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const { role } = useSelector((state) => state.user.user);
  const { course } = useSelector((state) => state.course);
  const [filterCourses, setFilterCourses] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const searchRef = React.useRef(null);
  const [search, setSearch] = useState('');
  const [isActiveAll, setIsActiveAll] = useState(true);
  const [isActiveEnrolled, setIsActiveEnrolled] = useState(false);
  const [isActiveArchived, setIsActiveArchived] = useState(false);
  const { courses, isLoading } = useSelector((state) => state.course);
  console.log('🚀 ~ useCourseManagement ~ isLoading:', isLoading);
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const { skills } = useSelector((state) => state.skill);
  const [checkedFeatured, setCheckedFeatured] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [outcomes, setOutcomes] = useState(['']);
  const [skill, setSkill] = React.useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hub, setHub] = useState(['Dhaka', 'Mymensingh', 'Sirajganj', 'Khulna', 'Chuadanga']);
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

  //filter function

  const [anchorE2, setAnchorE2] = useState(null);
  const openModal = Boolean(anchorE2);
  const id = openModal ? 'simple-popover' : undefined;
  const handleCloseFilter = () => {
    setAnchorE2(null);
  };
  const [filter, setFilter] = useState({});

  const handleChange = (event, label) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [label]: event.target.value,
    }));
  };

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleResetFilter = () => {
    if (level) {
      if (isActiveEnrolled) {
        dispatch(getMyCourses({ filter: {}, search, pagination })).then((action) => {
          setCourseCountFull(action.payload.data.searchedTotal);
          setAllCoursesFull(action.payload.data.enrolledCourses);
          setFilter({});
          // setIsDataLoading(false);
        });
      } else if (isActiveArchived) {
        dispatch(getArchivedCourses({ filter: {}, search, pagination })).then((action) => {
          setCourseCountFull(action.payload.data.searchedTotal);
          setAllCoursesFull(action.payload.data.archivedCourses);
          setFilter({});
          // setIsDataLoading(false);
        });
      } else {
        dispatch(getAllCourses({ level, filter: {}, search })).then((action) => {
          setAllCoursesFull(action.payload.data.courses);
          setCourseCountFull(action.payload.data.count);
          setFilter({});
        });
      }
    } else {
      if (isActiveEnrolled) {
        dispatch(getMyCourses({ filter: {}, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
          setAllCourses(action.payload.data);
          setIsDataLoading(false);
          setFilter({});
        });
      } else if (isActiveArchived) {
        dispatch(getArchivedCourses({ filter: {}, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
          setAllCourses(action.payload.data);
          setIsDataLoading(false);
          setFilter({});
        });
      } else {
        dispatch(getAllCoursesNew({ filter: {}, search })).then((action) => {
          setCourseCount(action.payload.data.courses.count);
          setAllCourses(action.payload.data.courses);
          setFeatureCourses(action.payload.data.courses.featureCourseList);
          setFilter({});
        });
      }
    }
  };
  const handleFilterCourse = () => {
    setButtonClicked(true);
    if (level) {
      if (isActiveEnrolled) {
        dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
          setCourseCountFull(action.payload.data.searchedTotal);
          setAllCoursesFull(action.payload.data.enrolledCourses);
          // setIsDataLoading(false);
        });
      } else if (isActiveArchived) {
        dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
          setCourseCountFull(action.payload.data.searchedTotal);
          setAllCoursesFull(action.payload.data.archivedCourses);
          // setIsDataLoading(false);
        });
      } else {
        dispatch(getAllCourses({ level, filter, search })).then((action) => {
          setAllCoursesFull(action.payload.data.courses);
          setCourseCountFull(action.payload.data.count);
        });
      }
    } else {
      if (isActiveEnrolled) {
        dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
          setAllCourses(action.payload.data);
          setIsDataLoading(false);
        });
      } else if (isActiveArchived) {
        dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
          setAllCourses(action.payload.data);
          setIsDataLoading(false);
        });
      } else {
        dispatch(getAllCoursesNew({ filter, search })).then((action) => {
          setCourseCount(action.payload.data.courses.count);
          setAllCourses(action.payload.data.courses);
          setButtonClicked(false);
        });
      }
    }
  };

  //filter function------
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

  const handleSearch = (e) => {
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
    dispatch(createCourse(formData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        if (level) {
          dispatch(getAllCourses({ level, filter, search })).then((action) => {
            setAllCoursesFull(action.payload.data.courses);
            setCourseCountFull(action.payload.data.count);
            setIsDataLoading(false);
            handleClose();
          });
        } else {
          dispatch(getAllCoursesNew({})).then((action) => {
            setCourseCount(action.payload.data.courses.count);
            setAllCourses(action.payload.data.courses);
            setFeatureCourses(action.payload.data.courses.featureCourseList);
            setIsDataLoading(false);
            handleClose();
          });
          handleClose();
        }
      }
    });
  };

  const handleViewDetailsButton = (id, courseDirection) => {
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
    featureCourses,
    setFeatureCourses,
    basicCourses,
    setBasicCourses,
    beginnerCourses,
    setBeginnerCourses,
    intermediateCourses,
    setIntermediateCourses,
    advancedCourses,
    setAdvancedCourses,
    courseCount,
    setCourseCount,
    openModal,
    anchorE2,
    id,
    handleCloseFilter,
    filter,
    handleChange,
    handleClickFilter,
    handleResetFilter,
    handleFilterCourse,
    allCourses,
    setAllCourses,
    allCoursesFull,
    setAllCoursesFull,
    courseCountFull,
    setCourseCountFull,
    isActiveAll,
    setIsActiveAll,
    isActiveEnrolled,
    setIsActiveEnrolled,
    isActiveArchived,
    setIsActiveArchived,
    buttonClicked,
    setFilter,
    pagination,
    setPagination,
  };
};

export default useCourseManagement;

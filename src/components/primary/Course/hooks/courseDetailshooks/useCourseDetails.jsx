import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setActiveChapterIndex} from "../../../../../features/slice/activePathSlice";
import {getAChapterById, updateACourseById} from "../../../../../features/slice/courseSlice";
import useToaster from "../../../../../customHooks/useToaster";

const useCourseDetails = () => {
  const { course, courseChapter, isLoading, courseChapters } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skill);
  const { courses } = useSelector((state) => state.course);
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const { user } = useSelector((state) => state.user);
  const toast = useToaster();
  const navigate = useNavigate();
  const [isInContent, setIsInContent] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [durationTime, setDurationTime] = useState("");
  const [skillSet1, setSkillSet1] = useState([]);
  const [skillSet2, setSkillSet2] = useState([]);
  const [skill, setSkill] = useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const [isPreRequisiteCourseEmpty, setIsPreRequisiteCourseEmpty] = useState(false);
  const [preRequisite, setPreRequisite] = useState([]);
  const [preRequisite1, setPreRequisite1] = useState([]);
  const [preRequisiteCourses, setPreRequisiteCourses] = useState([]);
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [progress, setProgress] = React.useState(0);
  const handleChapterClick = (courseChapter, index) => {
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      navigate(`/course-details/${course._id}/index`);
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });
    selectedSkills.map((skill) => {
      const preData = {
        name: skill.name,
        id: skill._id,
      };
      setSkillSet1([{ ...preData }]);
    });
    setSkillSet2([{ ...skillSet1 }]);
    !selectedSkills.length && setIsSkillEmpty(true);
    setSkill(typeof selectedSkills === "string" ? value.split(",") : selectedSkills);
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
      return courses.find((c) => c.name === course);
    });
    selectedPreRequisiteCourses.map((preRequisite) => {
      const preData = {
        name: preRequisite.name,
        id: preRequisite._id,
      };
      setPreRequisite([{ ...preData }]);
    });
    setPreRequisite1([{ ...preRequisite }]);
    !selectedPreRequisiteCourses.length && setIsPreRequisiteCourseEmpty(true);
    setPreRequisiteCourses(
      typeof selectedPreRequisiteCourses === "string" ? value.split(",") : selectedPreRequisiteCourses
    );
  };

  const onSubmit = (data) => {
    const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
      return preRequisite._id;
    });
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("description", data.description);
    formData.append("images", coverImageFile);
    formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    formData.append("skills", skillColl);
    // preRequisiteCourses.length && formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    // isPreRequisiteCourseEmpty && formData.append("prerequisiteCourses", []);
    // skill.length && formData.append("skills", skillColl);
    // isSkillEmpty && formData.append("skills", []);
    const newData = {
      id: course._id,
      formData,
    };
    dispatch(updateACourseById(newData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger(action.payload.data.message, "success");
        handleClose();
        setOpen(false);
      }
    });
  };

  const handleCreateChapter = (id) => {
    navigate(`/create-chapter/${id}`);
  };
  return {
    courseChapters,
    courseChapter,
    course,
    durationTime,
    setDurationTime,
    isLoading,
    isInContent,
    setIsInContent,
    isLightTheme,
    handleChapterClick,
    skillSet1,
    setSkillSet1,
    skillSet2,
    isSkillEmpty,
    setIsSkillEmpty,
    setSkillSet2,
    skill,
    setSkill,
    preRequisite,
    setPreRequisite,
    isPreRequisiteCourseEmpty,
    setIsPreRequisiteCourseEmpty,
    preRequisite1,
    setPreRequisite1,
    handleClose,
    onSubmit,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    skills,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    open,
    setOpen,
    handleOpen,
    activeChapterIndex,
    handleCreateChapter,
    user,
    progress,
    setProgress,
  };
};

export default useCourseDetails;

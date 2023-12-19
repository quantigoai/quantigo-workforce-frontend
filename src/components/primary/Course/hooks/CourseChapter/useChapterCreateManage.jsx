import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../../../../customHooks/useToaster";
import { useState } from "react";
import * as Yup from "yup";
import { createCourseChapter } from "../../../../../features/slice/courseSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { realToken } from "../../../../../helper/lib";
import axios from "axios";
const useChapterCreateManage = () => {
  const { courseChapters } = useSelector((state) => state.course);
  const { isLoading } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToaster();
  const id = params.id;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [durationTime, setDurationTime] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            body.append("courseId", id);
            axios
              .post(`${API_URl}/${UPLOAD_ENDPOINT}`, body, {
                headers: {
                  Authorization: `Bearer ${realToken()}`,
                },
              })
              .then((res) => {
                return res.data;
              })
              .then((res) => {
                resolve({ default: res });
                // dispatch(updateTemporaryData({ id, chapterNo, links: res }));
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const CourseCreateSchema = Yup.object().shape({
    title: Yup.string().required("Course title is required"),
    estimatedTimeToRead: Yup.number()
      .required("Chapter estimated time is required")
      .lessThan(21, "Chapter estimated time must be in range between 1 to 20")
      .transform((value) => (isNaN(value) ? undefined : value)),
    description: Yup.string().required("Chapter description is required"),
  });
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: "all",
  });

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { title, estimatedTimeToRead, description } = watch();
  const isFieldNotEmpty = !!title && !!estimatedTimeToRead && !!description;
  const isInValid = errors.estimatedTimeToRead;

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      // chapterNo,
      rootCourse: id,
      content,
    };
    dispatch(createCourseChapter(finalData)).then((action) => {
      if (action.payload?.status === 201) {
        toast.trigger(action.payload.data.message, "success");
        // dispatch(deleteTemporaryData({ id, chapterNo }));
        navigate(`/quiz-create/${id}`);
      } else {
        toast.trigger(action.error.message, "error");
      }
    });
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isDisable,
    isLoading,
    durationTime,
    courseChapters,
    uploadPlugin,
    setContent,
    isFieldNotEmpty,
    isInValid,
    setIsDisable,
    setDurationTime,
  };
};

export default useChapterCreateManage;

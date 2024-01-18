import useToaster from "../../../../../customHooks/useToaster";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateAChapterById} from "../../../../../features/slice/courseSlice";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {realToken} from "../../../../../helper/lib";
import * as Yup from "yup";
import axios from "axios";

const useChapterUpdateManage = () => {
  const toast = useToaster();
  // const id = params.id;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const [content, setContent] = useState("");
  const { courseChapter, courseChapters } = useSelector((state) => state.course);
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const [durationTime, setDurationTime] = useState("");
  const dispatch = useDispatch();
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            body.append("courseId", courseChapter.rootCourse._id);
            axios
              .post(`${API_URl}/${UPLOAD_ENDPOINT}`, body, {
                headers: {
                  Authorization: `Bearer ${realToken()}`,
                },
              })
              .then((res) => res.data)
              .then((res) => {
                resolve({ default: res });
                // resolve({ default: `${API_URl}/${res}` });
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
    estimatedTimeToRead: Yup.string().required("estimated time is required"),
    description: Yup.string().required("Course description is required"),
  });
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: "all",
    defaultValues: {
      description: courseChapter.description,
      title: courseChapter.title,
      ChapterNo: courseChapter.ChapterNo,
      estimatedTimeToRead: courseChapter.estimatedTimeToRead,
    },
  });

  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    data.content = content;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("estimatedTimeToRead", data.estimatedTimeToRead);

    const newData = {
      id: courseChapter._id,
      formData: data,
    };
    dispatch(updateAChapterById(newData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger(action.payload.data.message, "success");
        // navigate(`/course-details/${course._id}`);
      }
    });
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    durationTime,
    setDurationTime,
    activeChapterIndex,
    courseChapter,
    courseChapters,
    uploadPlugin,
    setContent,
  };
};

export default useChapterUpdateManage;

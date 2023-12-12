import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { realToken } from "../../../../../helper/lib";
import { useParams } from "react-router-dom";

import backIcon from "../../../../../assets/images/dashboardIcon/GoBackIcon.svg";
import { createCourseChapter, updateAChapterById } from "../../../../../features/slice/courseSlice";
import useToaster from "../../../../../customHooks/useToaster";
import { deleteTemporaryData, updateTemporaryData } from "../../../../../features/slice/temporaryDataSlice";
import ChapterField from "../ChapterField";
import FormProvider from "../../../../shared/FormProvider/FormProvider";
import ChapterDescritionField from "../ChapterDescritionField";
import ContentField from "../../InputFields/ContentField";
import ChapterCreateHeader from "../ChapterCreateHeader";
import ChapterDIsableNoFIeld from "../ChapterDIsableNoFIeld";
import ChapterUpdateHeader from "../ChapterUpdateHeader";
const ChapterUpdateIndex = () => {
  const params = useParams();
  const toast = useToaster();
  // const id = params.id;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const [content, setContent] = useState("");
  const { courseChapter, course, courseChapters, isLoading } = useSelector((state) => state.course);
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const [durationTime, setDurationTime] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const duration = courseChapters?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.estimatedTimeToRead || 0;
    }, 0);
    const hours = Math.floor(duration / 60) || 0;
    const minutes = duration % 60 || 0;
    if (hours === 0) {
      if (minutes === 0) {
        setDurationTime(minutes + " minute");
      } else {
        setDurationTime(minutes + " minutes");
      }
    } else {
      setDurationTime(hours + " hours " + minutes + " minutes");
    }

    // navigate(`/course-details/${course._id}/index`);
  }, []);
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
      if (action.payload.status === 200) {
        // navigate(`/course-details/${course._id}`);
        toast.trigger("chapter update Successfully", "success");
      } else {
        toast.trigger("chapter do not update", "error");
      }
    });
  };
  return (
    <Box className="content" sx={{ backgroundColor: "neutral.N000" }}>
      <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "1%" }}>
        <Grid xs={2}>
          {/* <Button
            sx={{
              color: "neutral.800",
              // width: {
              //   xl: "110px",
              //   lg: "110px",
              // },
              height: {
                xl: "32px",
                lg: "100%",
              },
              textTransform: "none",
              display: "flex",
              gap: 1,
            }}
            // onClick={handleGoBack}
          >
            <img
              style={{
                width: "15px",
                height: "15px",
              }}
              src={backIcon}
            />

            <Typography variant="wpf_p4_medium" sx={{ paddingLeft: "0%" }}>
              Back to Course
            </Typography>
          </Button> */}
        </Grid>
        <Grid xs={8}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box className="">
              {/* <QuizHeader />
          <Button type="submit"> Create</Button> */}
              {/* <ChapterCreateHeader isEditChapter={true} durationTime={durationTime} /> */}
              <ChapterUpdateHeader isEditChapter={true} durationTime={durationTime} />
            </Box>

            <Box
              sx={{
                height: "85%",
                // overflow: "scroll",
                // overflowY: "auto",
                // height: "50vh",
                // backgroundColor: "red",
                width: "100%",
                pt: 2,
                //   mt: 2,
                // pr: 5,
                // pl: 5,
              }}
            >
              <Box
                sx={{
                  // height: "76vh",
                  height: { lg: "73vh", xl: "74vh", xxl: "78vh" },
                  overflowY: "auto  ",
                  "&::-webkit-scrollbar": {
                    width: "0", // Hide the scrollbar
                  },
                  // backgroundColor: "blue",
                }}
              >
                <Grid container sx={{ width: "100%" }}>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    {" "}
                    <ChapterDIsableNoFIeld
                      name="ChapterNo"
                      label="Chapter No"
                      isRequired={false}
                      defaultValue={activeChapterIndex + 1}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      paddingRight: "1%",
                      height: {
                        lg: "60px",
                        xl: "72px",
                        xxl: "70px",
                      },
                    }}
                  >
                    {" "}
                    <ChapterField
                      name="title"
                      label="Chapter Title"
                      isRequired={true}
                      defaultValue={courseChapter.title}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      height: {
                        lg: "60px",
                        xl: "72px",
                        xxl: "70px",
                      },
                    }}
                  >
                    {" "}
                    <ChapterField
                      name="estimatedTimeToRead"
                      label="Estimated Time to Read (Minutes)"
                      isRequired={true}
                      defaultValue={courseChapter.estimatedTimeToRead}
                      isNumber={true}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    height: {
                      lg: "110px",
                      xl: "120px",
                      xxl: "125px",
                    },
                  }}
                >
                  <Grid xs={12} sx={{ mt: 3 }}>
                    <ChapterDescritionField
                      name="description"
                      label="Chapter Description"
                      isRequired={true}
                      defaultValue={courseChapter.description}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ py: 5, backgroundColor: "" }}>
                  <ContentField
                    //  course={course}
                    courseChapter={courseChapter}
                    uploadPlugin={uploadPlugin}
                    setContent={setContent}
                  />{" "}
                </Grid>
              </Box>
            </Box>
          </FormProvider>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default ChapterUpdateIndex;

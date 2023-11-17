import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import QuizHeader from "../QuizPage/QuizHeader";
import ChapterField from "./ChapterField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ChapterDescritionField from "./ChapterDescritionField";
import ContentField from "../InputFields/ContentField";
import { useDispatch } from "react-redux";
import axios from "axios";
import { realToken } from "../../../../helper/lib";
import { useParams } from "react-router-dom";
import ChapterCreateHeader from "./ChapterCreateHeader";
import backIcon from "../../../../assets/images/dashboardIcon/GoBackIcon.svg";
import { createCourseChapter } from "../../../../features/slice/courseSlice";
import useToaster from "../../../../customHooks/useToaster";
import { deleteTemporaryData } from "../../../../features/slice/temporaryDataSlice";
const ChapterCreateIndex = () => {
  const params = useParams();
  const toast = useToaster();
  const id = params.id;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
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
    description: Yup.string().required("Course description is required"),
  });
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: "all",
    // defaultValues: {
    //   project_platform: 'encord',
    //   project_drawer_name: 'xxxxxxxxxxxx',
    //   project_type: 'image',
    //   project_batch: '2',
    //   project_alias: 'xxxxxxxxxxx',
    //   pdr: '3',
    //   project_status: 'in-Progress',
    // },
  });

  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log("🚀 ~ file: ChapterCreateIndex.jsx:34 ~ onSubmit ~ data:", data);
    console.log(content);
    const finalData = {
      ...data,
      // chapterNo,
      rootCourse: id,
      content,
    };
    dispatch(createCourseChapter(finalData)).then((action) => {
      if (action.payload?.status === 201) {
        toast.trigger("Chapter Create", "success");
        // dispatch(deleteTemporaryData({ id, chapterNo }));
        // navigate(`/course-details/${id}`);
      } else {
        toast.trigger("Can not create course chapter", "error");
      }
    });
  };
  return (
    <Box className="content" sx={{ backgroundColor: "neutral.N000" }}>
      <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "1%" }}>
        <Grid xs={2}>
          <Button
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
          </Button>
        </Grid>
        <Grid xs={8}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box className="">
              {/* <QuizHeader />
          <Button type="submit"> Create</Button> */}
              <ChapterCreateHeader />
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
              }}>
              <Box
                sx={{
                  // height: "76vh",
                  height: { lg: "73vh", xl: "74vh", xxl: "78vh" },
                  overflowY: "auto  ",
                  "&::-webkit-scrollbar": {
                    width: "0", // Hide the scrollbar
                  },
                  // backgroundColor: "blue",
                }}>
                <Grid container sx={{ width: "100%" }}>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    {" "}
                    <ChapterField name="ChapterNo" label="Chapter No" isRequired={false} />
                  </Grid>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    {" "}
                    <ChapterField name="title" label="Chapter Title" isRequired={true} />
                  </Grid>
                  <Grid item xs={4}>
                    {" "}
                    <ChapterField
                      name="estimatedTimeToRead"
                      label="Estimated Time to Read (Minutes)"
                      isRequired={false}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ width: "100%" }}>
                  <Grid xs={12}>
                    <ChapterDescritionField name="description" label="Chapter Description" isRequired={true} />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ py: 2, backgroundColor: "" }}>
                  <ContentField
                    //  course={course}
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

export default ChapterCreateIndex;

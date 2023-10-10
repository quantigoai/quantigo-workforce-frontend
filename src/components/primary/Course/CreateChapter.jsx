import { Box, Grid, Paper, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { createCourseChapter } from "../../../features/slice/courseSlice";
import {
  clearTemporaryData,
  deleteTemporaryData,
  updateTemporaryData,
} from "../../../features/slice/temporaryDataSlice";
import { realToken } from "../../../helper/lib";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import ChapterDescription from "./InputFields/ChapterDescription";
import ChapterName from "./InputFields/ChapterName";
import ChapterNoFiled from "./InputFields/ChapterNoFiled";
import ContentField from "./InputFields/ContentField";
import CourseNameField from "./InputFields/CourseNameField";
import EstimatedTimeToRead from "./InputFields/EstimatedTimeToRead";

const paperStyle = {
  width: "80vw",
};

const CreateChapter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const id = params.id;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();
  const { courseChapters, course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const [chapterNo, setChapterNo] = React.useState(0);

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
                dispatch(updateTemporaryData({ id, chapterNo, links: res }));
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

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      chapterNo,
      rootCourse: id,
      content,
    };
    dispatch(createCourseChapter(finalData)).then((action) => {
      if (action.payload?.status === 201) {
        toast.trigger("Chapter Create", "success");
        dispatch(deleteTemporaryData({ id, chapterNo }));
        navigate(`/course-details/${id}`);
      } else {
        toast.trigger("Can not create course chapter", "error");
      }
    });
  };

  const handleCancel = () => {
    dispatch(clearTemporaryData({ id, chapterNo })).then((res) => {
      dispatch(deleteTemporaryData({ id, chapterNo }));
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <CommonHeader
            title="Chapter create"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            handleCancel={handleCancel}
          />
        </Grid>

        <Box style={{ padding: "0%" }}>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid container style={{ padding: "0%" }}>
              {" "}
              <Grid
                container
                sx={{
                  py: "2%",
                  px: "2%",
                }}
              >
                <Grid container sx={{ mb: 4 }}>
                  <Grid item xs={12} px={0}>
                    <Stack direction="column" spacing={3}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <CourseNameField courseName={course.name} />
                        </Grid>
                        <Grid item xs={6}>
                          <ChapterNoFiled
                            // register={register}
                            chapterNo={chapterNo}
                            setChapterNo={setChapterNo}
                          />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid container sx={{ mb: 4 }}>
                  <Grid item xs={12} px={0}>
                    <Stack direction="column" spacing={3}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <ChapterName register={register} />
                        </Grid>
                        <Grid item xs={4}>
                          <ChapterDescription register={register} />
                        </Grid>
                        <Grid item xs={4}>
                          <EstimatedTimeToRead register={register} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid xs={12} sx={{ py: 6 }}>
                  <ContentField
                    //  course={course}
                    uploadPlugin={uploadPlugin}
                    setContent={setContent}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default CreateChapter;

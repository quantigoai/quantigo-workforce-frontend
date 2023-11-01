import { Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { updateAChapterById } from "../../../features/slice/courseSlice";
import { realToken } from "../../../helper/lib";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import ChapterDescription from "./InputFields/ChapterDescription";
import ChapterName from "./InputFields/ChapterName";
import ChapterNoFiledForUpdate from "./InputFields/ChapterNoFiledForUpdate";
import ContentField from "./InputFields/ContentField";
import CourseNameField from "./InputFields/CourseNameField";
import EstimatedTimeToRead from "./InputFields/EstimatedTimeToRead";

const UpdateChapter = () => {
  const API_URl = import.meta.env.VITE_APP_SERVER_URL;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const { courseChapter, course, isLoading } = useSelector((state) => state.course);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const toast = useToaster();

  useEffect(() => {
    if (courseChapter) {
      setContent(courseChapter.content);
    }
  }, [courseChapter]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            axios
              .post(`${API_URl}/${UPLOAD_ENDPOINT}`, body, {
                headers: {
                  Authorization: `Bearer ${realToken()}`,
                },
              })
              .then((res) => res.data)
              .then((res) => {
                resolve({ default: `${API_URl}/${res}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  const paperStyle = {
    width: "80vw",
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const onSubmit = (data) => {
    data.content = content;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("estimatedTimeToRead", data.estimatedTimeToRead);

    const newData = {
      id: id,
      formData: data,
    };

    dispatch(updateAChapterById(newData)).then((action) => {
      if (action.payload.status === 200) {
        navigate(`/course-details/${course._id}`);
        toast.trigger("chapter update Successfully", "success");
      } else {
        toast.trigger("chapter do not update", "error");
      }
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <CommonHeader
            title="Edit  Chapter"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            isLoading={isLoading}
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
                          <ChapterNoFiledForUpdate chapterNo={courseChapter.chapterNo} />
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
                          <ChapterName courseChapter={courseChapter} register={register} />
                        </Grid>
                        <Grid item xs={4}>
                          <ChapterDescription courseChapter={courseChapter} register={register} />
                        </Grid>
                        <Grid item xs={4}>
                          <EstimatedTimeToRead courseChapter={courseChapter} register={register} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ py: 6 }}>
                  <ContentField courseChapter={courseChapter} uploadPlugin={uploadPlugin} setContent={setContent} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default UpdateChapter;

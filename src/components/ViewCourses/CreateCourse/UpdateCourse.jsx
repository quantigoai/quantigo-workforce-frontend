import {CKEditor} from "@ckeditor/ckeditor5-react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Editor from "ckeditor5-custom-build/build/ckeditor";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {realToken} from "../../../features/lib/lib";
import {updateACourseById} from "../../../features/slice/courseSlice";
import NotificationToaster from "../../NotificationToaster/NotificationToaster";

const UpdateCourse = () => {
  const params = useParams();
  const id = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const API_URl = process.env.REACT_APP_SERVER_URL;
  const UPLOAD_ENDPOINT = "courses/couseimages/uploads";
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { course } = useSelector((state) => state.course);

  useEffect(() => {
    setContent(course?.content);
  }, [course]);

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

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const [coverImageFile, setCoverImageFile] = useState(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
  };

  const onSubmit = (data) => {
    data.content = content;


    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("content", data.content);
    formData.append("description", data.description);
    formData.append("skills", data.skills);
    formData.append("level", data.level);
    formData.append("language", data.language);
    // formData.append("images", coverImageFile);
    //! form data will be added letter after modifying the backend
    const newData = {
      id: course._id,
      formData: data,
    };


    dispatch(updateACourseById(newData)).then((action) => {
      if (action.payload?.status === 200) {
        const id = action.payload.data._id;
        navigate(`/coursesdetails/${id}`);
      } else {
        setMessage("Course can not updated");
        setVariant("error");
        setOpen(true);
      }
    });
  };
  return (
    <Box sx={{ px: "1%", py: "1%" }} style={{ width: 1300 }}>
      <Typography variant="h4" sx={{ mb: "2%" }}>
        Update a Course
      </Typography>
      {course && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justify={"center"} alignItems={"center"}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Course Name"
                defaultValue={course.name}
                {...register("name", { required: true })}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="description"
                label="Course description"
                defaultValue={course.description}
                {...register("description", { required: true })}
              ></TextField>
            </Grid>

            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Level"
                  defaultValue={course.level}
                  {...register("level", { required: true })}
                >
                  <MenuItem value={"basic"}>Basic</MenuItem>
                  <MenuItem value={"beginner"}>Beginner</MenuItem>
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"advanced"}>Advanced</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Image"
                  defaultValue={course.category}
                  {...register("category", { required: true })}
                >
                  <MenuItem value={"intro"}>Intro</MenuItem>
                  <MenuItem value={"image"}>Image</MenuItem>
                  <MenuItem value={"video"}>Video </MenuItem>
                  <MenuItem value={"LiDAR"}>LiDAR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={course.skills}
                  {...register("skills", { required: true })}
                >
                  <MenuItem value={"intro"}>Intro</MenuItem>
                  <MenuItem value={"bounding box annotation"}>
                    Bounding box Annotation
                  </MenuItem>
                  <MenuItem value={"polygon annotation"}>
                    Polygon Annotation
                  </MenuItem>
                  <MenuItem value={"bitmap annotation"}>
                    Bitmap Annotation
                  </MenuItem>
                  <MenuItem value={"point annotation"}>
                    Point Annotation
                  </MenuItem>
                  <MenuItem value={"key point annotation"}>
                    Key point Annotation
                  </MenuItem>
                  <MenuItem value={"line annotation"}>Line Annotation</MenuItem>
                  <MenuItem value={"cuboid annotation"}>
                    Cuboid Annotation
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Image"
                  defaultValue={course.language}
                  {...register("language", { required: true })}
                // onChange={handleChange}
                //   {...register("hub", { required: true })}
                //   onClick={handlehubselect}
                >
                  <MenuItem value={"english"}>English </MenuItem>
                  <MenuItem value={"bengali"}>Bangla</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant={"body1"}>Upload a Cover Image</Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleImage}
                  />
                  <PhotoCamera />
                </IconButton>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <CKEditor
                config={{
                  extraPlugins: [uploadPlugin],
                  mediaEmbed: {
                    previewsInData: true,
                  },
                  image: {
                    toolbar: [
                      "imageStyle:full",
                      "imageStyle:side",
                      "|",
                      "imageTextAlternative",
                    ],
                    upload: { types: ["jpeg", "jpg", "png", "pdf", "docx"] },
                  },
                }}
                editor={Editor}
                data={
                  course?.content
                    ? course.content
                    : "<h2>Write your content here</h2>"
                }
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  // const data = editor.getData();
                  // console.log({ event, editor, data });
                  setContent(editor.getData());
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: "2%" }}>
            Update Course
          </Button>
        </form>
      )}
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
};
export default UpdateCourse;

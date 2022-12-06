import {CKEditor} from "@ckeditor/ckeditor5-react";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {realToken} from "../../../features/lib/lib";
import {createCourse, getAllCourses,} from "../../../features/slice/courseSlice";
import NotificationToaster from "../../NotificationToaster/NotificationToaster";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const CreateCourse = () => {
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
  const { courses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

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
  const [coverImage, setCoverImage] = useState(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage(null);
  };

  // pre request courses function
  const [perRequestCourses, setPerRequestCourses] = React.useState([]);
  const [perRequest, setPerRequest] = React.useState([]);
  const [perRequest1, setPerRequest1] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    event.target.value.map((prerequest) => {
      const predata = {
        name: prerequest.name,
        id: prerequest._id

      }
      setPerRequest([{
        ...predata
      }]

      )
    }
    )
    setPerRequest1([{
      ...perRequest
    }])
    setPerRequestCourses(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,


    );

  };

  console.log(perRequest1)



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
    formData.append("images", coverImageFile);

    dispatch(createCourse(formData)).then((action) => {
      if (action.payload?.status === 200) {
        const id = action.payload.data._id;
        navigate(`/coursesdetails/${id}`);
      } else {
        setMessage("Course Not Create");
        setVariant("danger");
        setOpen(true);
      }
    });
  };
  return (
    <Box sx={{ px: "1%", py: "1%" }} style={{ width: 1300 }}>
      <Typography variant="h4" sx={{ mb: "2%" }}>
        Create a Course
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justify={"center"} alignItems={"center"}>
          <Grid container>
            <Grid item xs={8} px={2}>
              <Stack direction="column" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Course Name"
                    {...register("name", { required: true })}
                  ></TextField>
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="description"
                    label="Course description"
                    // defaultValue="hsajd"
                    {...register("description", { required: true })}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-chip-label"> Pre Requisite Courses</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      label="Pre Requisite Courses"
                      value={perRequestCourses}
                      onChange={handleChange}
                      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value.name} label={value.name} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    // onChange={(e) => handleChangeCourse(e)}
                    >
                      {courses.map((course) => (
                        <MenuItem key={course._id} value={course}>
                          {course.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img width={"80%"} height={120} src={coverImage} alt="" />
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                spacing={2}
              >
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
                <IconButton
                  color="warning"
                  aria-label="remove picture"
                  component="label"
                  onClick={removeImage}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Level"
                defaultValue={"basic"}
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
                defaultValue={"intro"}
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
                label="Image"
                defaultValue={"intro"}
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
                <MenuItem value={"point annotation"}>Point Annotation</MenuItem>
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
                defaultValue={"english"}
                {...register("language", { required: true })}
              >
                <MenuItem value={"english"}>English </MenuItem>
                <MenuItem value={"bengali"}>Bangla</MenuItem>
              </Select>
            </FormControl>
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
              data="<h2>Write your content here</h2>"
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                setContent(editor.getData());
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: "2%" }}>
          Create Course
        </Button>
      </form>
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
};
export default CreateCourse;

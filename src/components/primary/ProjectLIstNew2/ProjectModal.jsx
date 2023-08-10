import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import u_multiply from "../../../assets/images/u_multiply.png";
import { createProjectDrawer } from "../../../features/slice/projectDrawerSlice";
import SkillFieldProject from "./SkillFieldProject";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "#667085",
  marginRight: "10px",
});

const ProjectModal = () => {
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [addSkills, setAddSkills] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [platform, setPlatform] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [projectType, setProjectType] = React.useState("");
  const { register, handleSubmit, reset } = useForm();
  const { error } = useSelector((state) => state.projectDrawer);
  console.log("🚀 ~ file: ProjectModal.jsx:56 ~ ProjectModal ~ error:", error);

  const handleChangeSkill = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setAddSkills(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const skillId = addSkills?.map((skill) => skill._id);

  const onSubmit = (data) => {
    const newData = { ...data, project_skills: skillId };

    dispatch(createProjectDrawer(newData)).then((action) => {
      if (action.error?.message) {
        alert.show(action.error?.message, { type: "error" });
      }
      if (action.payload?.status === 201) {
        alert.show(action.payload.data.message, { type: "success" });
        reset();
        setOpen(false);
      }
    });
  };

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleAddDoc = () => {
    console.log("clicked");
  };

  const handleChangeProjectType = (event) => {
    setProjectType(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          background: "#2E58FF",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Create Project
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                paddingTop: "2%",
                width: "695px",
                background: "#F2F6FC",
              }}
            >
              <Grid
                container
                sx={{
                  paddingBottom: "1%",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              >
                <Grid item xs={11} sx={{ paddingLeft: "30px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#3C4D6B",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Create Project
                  </Typography>
                </Grid>
                <Grid item xs={1} sx={{ justifyContent: "right" }}>
                  <Button onClick={handleClose}>
                    <img
                      style={{ width: "20px" }}
                      alt="cross"
                      src={u_multiply}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{ paddingLeft: "3%", paddingTop: "2%", paddingRight: "3%" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                  <Grid item xs={6} sx={{ paddingRight: "1%", mt: "10px" }}>
                    <Typography
                      sx={{ fontWeight: "500", mb: "10px", fontSize: "14px" }}
                      variant="h6"
                    >
                      Platform
                    </Typography>
                    <FormControl
                      variant="filled"
                      size="small"
                      sx={{
                        backgroundColor: "#F8F8F8",
                        borderRadius: "8px",
                        // width: "238.5px",
                        height: "60px",
                        background: "#E6ECF5",
                        fontSize: "14px",
                        width: "90%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Select
                      </InputLabel>
                      <Select
                        {...register("project_platform")}
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        defaultValue={platform}
                        IconComponent={() => <CustomDownArrow />}
                        onChange={(e) => handleChange(e)}
                      >
                        <MenuItem value={"supervisely"}>Supervisely</MenuItem>
                        <MenuItem value={"encord"}>Encord Server</MenuItem>
                        <MenuItem value={"superb_ai"}>Superb Ai</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "10px",
                        fontSize: "14px",
                        mb: "10px",
                      }}
                      variant="h6"
                    >
                      Project Name
                    </Typography>

                    <TextField
                      {...register("project_drawer_name")}
                      required
                      sx={{ borderRadius: "10px", width: "100%" }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ paddingRight: "1%", mt: "10px" }}>
                    <Typography
                      sx={{ fontWeight: "500", mb: "10px", fontSize: "14px" }}
                      variant="h6"
                    >
                      Project Type
                    </Typography>
                    <FormControl
                      variant="filled"
                      size="small"
                      sx={{
                        backgroundColor: "#F8F8F8",
                        borderRadius: "8px",
                        // width: "238.5px",
                        height: "60px",
                        background: "#E6ECF5",
                        fontSize: "14px",
                        width: "90%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        defaultValue={projectType}
                        IconComponent={() => <CustomDownArrow />}
                        onChange={(e) => handleChangeProjectType(e)}
                      >
                        <MenuItem value={"supervisely"}>Supervisely</MenuItem>
                        <MenuItem value={"encord"}>Encord Server</MenuItem>
                        <MenuItem value={"superb_ai"}>Superb Ai</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "10px",
                        fontSize: "14px",
                        mb: "10px",
                        paddingRight: "1%",
                      }}
                      variant="h6"
                    >
                      Batch
                    </Typography>

                    <TextField
                      {...register("project_batch")}
                      required
                      type="number"
                      sx={{
                        borderRadius: "10px",
                        height: "40px",
                        width: "100%",
                      }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "15px",
                        fontSize: "14px",
                        mb: "10px",
                        marginLeft: "0%",
                      }}
                      variant="h6"
                    >
                      Alias
                    </Typography>

                    <TextField
                      {...register("project_alias")}
                      required
                      sx={{ width: "90%" }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "15px",
                        fontSize: "14px",
                        mb: "10px",
                      }}
                      variant="h6"
                    >
                      PDR
                    </Typography>

                    <TextField
                      type="number"
                      {...register("pdr")}
                      required
                      sx={{ width: "100%" }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                  {/* <SkillField/> */}

                  <Grid item xs={6} sx={{ width: "40%" }}>
                    <SkillFieldProject
                      skills={skills}
                      addSkills={addSkills}
                      handleChangeSkill={handleChangeSkill}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "15px",
                        fontSize: "14px",
                        mb: "10px",
                      }}
                      variant="h6"
                    >
                      Benchmark
                    </Typography>

                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "10px",
                        marginTop: "5%",
                      }}
                      variant="h6"
                    >
                      Estimated End Time
                    </Typography>

                    <TextField
                      // {...register("estimated_end_date")}
                      sx={{ width: "90%" }}
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={6} sx={{ paddingRight: "1%", mt: "10px" }}>
                    <Typography
                      sx={{ fontWeight: "500", mb: "10px", fontSize: "14px" }}
                      variant="h6"
                    >
                      Status
                    </Typography>
                    <FormControl
                      variant="filled"
                      size="small"
                      sx={{
                        backgroundColor: "#F8F8F8",
                        borderRadius: "8px",
                        // width: "238.5px",
                        height: "60px",
                        background: "#E6ECF5",
                        fontSize: "14px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Select
                      </InputLabel>
                      <Select
                        {...register("project_status")}
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        defaultValue={status}
                        IconComponent={() => <CustomDownArrow />}
                        onChange={(e) => handleStatus(e)}
                      >
                        <MenuItem value={"not-Started"}>Not Started</MenuItem>
                        <MenuItem value={"completed"}>Completed</MenuItem>
                        <MenuItem value={"hours-added"}>Hours Added</MenuItem>
                        <MenuItem value={"in-Progress"}>In Progress</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "15px",
                        fontSize: "14px",
                        mb: "10px",
                      }}
                      variant="h6"
                    >
                      Guideline and Edge-case Document
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    sx={{
                      border: "2px solid #E6ECF5",
                      padding: "16px",
                      borderRadius: "8px",
                      background: "#FAFCFF",
                    }}
                    item
                    xs={12}
                  >
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          marginLeft: "5%",
                        }}
                        variant="h6"
                      >
                        Document
                      </Typography>

                      <TextField
                        {...register("guideline")}
                        required
                        sx={{ width: "90%", height: "20px" }}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                        }}
                        variant="h6"
                      >
                        Link
                      </Typography>

                      <TextField
                        sx={{ width: "100%" }}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        mt: "15px",
                        fontSize: "14px",
                        mb: "10px",
                        color: "#2E58FF",
                        cursor: "pointer",
                      }}
                      variant="h6"
                      onClick={handleAddDoc}
                    >
                      <i className="ri-add-line"></i> Add another document
                    </Typography>
                  </Grid>
                </Grid>
                <hr
                  style={{
                    color: "#F2F6FC",
                    marginTop: "16px",
                    width: "650px",
                    paddingLeft: "0px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "rgba(46, 88, 255, .81)",
                        color: "white",
                      },
                    }}
                    variant="filled"
                    size="large"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      background: "#2E58FF",
                      "&:hover": {
                        backgroundColor: "rgba(46, 88, 255, .81)",
                        color: "white",
                      },
                    }}
                    variant="contained"
                    size="large"
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectModal;
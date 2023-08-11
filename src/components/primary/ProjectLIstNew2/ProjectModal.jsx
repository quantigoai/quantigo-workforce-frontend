import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid, styled } from "@mui/material";
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
import SkillFieldProject from "./SkillFieldProject";
import CreateProjectField from "./CreateProjectField";
import CreateProjectFieldSelect from "./CreateProjectFieldSelect";
import ProjectModalHeader from "./ProjectModalHeader";
import { createProjectDrawer } from "../../../features/slice/projectDrawerSlice";
import GuidelineField from "./GuidelineField";

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

const ProjectModal = ({
  createProjectOpen,
  // handleProjectCreateOpen,
  handleCreateProjectClose,
  setCreateProjectOpen,
}) => {
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [addSkills, setAddSkills] = useState([]);
  const [platform, setPlatform] = React.useState("");
  const [status, setStatus] = React.useState("");

  const { register, handleSubmit, reset } = useForm();
  // const { error } = useSelector((state) => state.projectDrawer);

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
        setCreateProjectOpen(false);
      }
    });
  };

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleAddDoc = () => {
    console.log("clicked");
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createProjectOpen}
        onClose={handleCreateProjectClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={createProjectOpen}>
          <Box sx={style}>
            <ProjectModalHeader
              handleCreateProjectClose={handleCreateProjectClose}
            />
            <Box
              sx={{ paddingLeft: "3%", paddingTop: "2%", paddingRight: "3%" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                  <CreateProjectFieldSelect
                    field={"Platform"}
                    register={register}
                    registerName={"project_platform"}
                    defaultValue={platform}
                    value_1={"supervisely"}
                    value_2={"encord"}
                    value_3={"superb_ai"}
                    MenuItemValue_1={"Supervisely"}
                    MenuItemValue_2={"Encord Server"}
                    MenuItemValue_3={"Superb AI"}
                    CustomDownArrow={CustomDownArrow}
                    onChange={(e) => handleChange(e)}
                  />

                  <CreateProjectField
                    field={"Project Name"}
                    registerName={"project_drawer_name"}
                    register={register}
                    type={"text"}
                  />

                  <CreateProjectField
                    field={"Batch"}
                    registerName={"project_batch"}
                    register={register}
                    type={"number"}
                    inputProps={{ min: "1" }}
                  />

                  <CreateProjectField
                    field={"Alias"}
                    registerName={"project_alias"}
                    register={register}
                    type={"text"}
                  />

                  <CreateProjectField
                    field={"PDR"}
                    registerName={"pdr"}
                    register={register}
                    type={"number"}
                    inputProps={{ min: "1", max: "5" }}
                  />
                  {/* <SkillField/> */}

                  <Grid item xs={6}>
                    <SkillFieldProject
                      skills={skills}
                      addSkills={addSkills}
                      handleChangeSkill={handleChangeSkill}
                    />
                  </Grid>
                  {/* benchmark goes here  */}

                  {/* estimated end date here  */}

                  <CreateProjectFieldSelect
                    field={"Status"}
                    register={register}
                    registerName={"project_status"}
                    defaultValue={status}
                    value_1={"not-Started"}
                    value_2={"completed"}
                    value_3={"in-Progress"}
                    value_4={"hours-added"}
                    MenuItemValue_1={"Not Started"}
                    MenuItemValue_2={"Completed"}
                    MenuItemValue_3={"In Progress"}
                    MenuItemValue_4={"Hours Added"}
                    CustomDownArrow={CustomDownArrow}
                    onChange={(e) => handleStatus(e)}
                  />

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        mt: "55px",
                        fontSize: "14px",
                        mb: "10px",
                      }}
                      variant="h6"
                    >
                      Guideline and Edge-case Document
                    </Typography>
                  </Grid>

                  <GuidelineField
                    register={register}
                    handleAddDoc={handleAddDoc}
                  />
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
                    onClick={handleCreateProjectClose}
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
    </>
  );
};

export default ProjectModal;

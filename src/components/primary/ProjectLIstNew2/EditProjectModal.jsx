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
import {
  createProjectDrawer,
  updateProjectDrawerById,
} from "../../../features/slice/projectDrawerSlice";
import SkillFieldProject from "./SkillFieldProject";
import CreateProjectFieldSelect from "./CreateProjectFieldSelect";
import CreateProjectField from "./CreateProjectField";
import GuidelineField from "./GuidelineField";
import ProjectModalHeader from "./ProjectModalHeader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};
const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "#667085",
  marginRight: "10px",
});
const EditProjectModal = ({
  editModalOpen,
  handleEditProjectClose,
  projectDrawer,
  setEditModalOpen,
}) => {
  console.log(
    "🚀 ~ file: EditProjectModal.jsx:41 ~ EditProjectModal ~ projectDrawer:",
    projectDrawer
  );
  // console.log(
  //   "🚀 ~ file: EditProjectModal.jsx:41 ~ EditProjectModal ~ projectDrawer:",
  //   projectDrawer
  // );
  // console.log(
  //   "🚀 ~ file: EditProjectModal.jsx:37 ~ EditProjectModal ~ open:",
  //   open
  // );

  const dispatch = useDispatch();
  const alert = useAlert();
  const [platform, setPlatform] = React.useState("");
  const [status, setStatus] = React.useState("");
  const { register, handleSubmit, reset } = useForm();
  const [selectedSkills, setSelectedSkills] = useState(
    projectDrawer.project_skills
  );
  console.log(
    "🚀 ~ file: EditProjectModal.jsx:70 ~ selectedSkills:",
    selectedSkills
  );
  const [editSkills, setEditSkills] = useState([]);

  const { skills } = useSelector((state) => state.skill);
  // const { isLoading, projectDrawer, projectDrawers, total, error } =
  //   useSelector((state) => state.projectDrawer);

  const handleEditSkill = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setEditSkills(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const filteredSkillInfo = editSkills.map((skill) => ({
    name: skill.name,
    id: skill._id,
  }));
  console.log(
    "🚀 ~ file: EditProjectModal.jsx:100 ~ filteredSkillInfo ~ filteredSkillInfo:",
    filteredSkillInfo
  );

  const onSubmit = (data) => {
    const newData = { ...data, project_skills: filteredSkillInfo };
    const allData = { id: projectDrawer._id, data: newData };

    dispatch(updateProjectDrawerById(allData)).then((action) => {
      if (action.error?.message) {
        alert.show(action.error?.message, { type: "error" });
      }
      if (action.payload?.status === 200) {
        alert.show(action.payload.data.message, { type: "success" });
        reset();
        setEditModalOpen(false);
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
        open={editModalOpen}
        onClose={handleEditProjectClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={editModalOpen}>
          <Box sx={style}>
            <ProjectModalHeader
              handleCreateProjectClose={handleEditProjectClose}
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
                    defaultValue={projectDrawer.project_platform}
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
                    defaultValue={projectDrawer.project_drawer_name}
                  />

                  <CreateProjectField
                    field={"Batch"}
                    registerName={"project_batch"}
                    register={register}
                    type={"number"}
                    inputProps={{ min: "1" }}
                    defaultValue={projectDrawer.project_batch}
                  />

                  <CreateProjectField
                    field={"Alias"}
                    registerName={"project_alias"}
                    register={register}
                    type={"text"}
                    defaultValue={projectDrawer.project_alias}
                  />

                  <CreateProjectField
                    field={"PDR"}
                    registerName={"pdr"}
                    register={register}
                    type={"number"}
                    inputProps={{ min: "1", max: "5" }}
                    defaultValue={projectDrawer.pdr}
                  />
                  {/* <SkillField/> */}

                  <Grid item xs={6}>
                    <SkillFieldProject
                      isEdit={true}
                      selectedSkills={selectedSkills}
                      skills={skills}
                      editSkills={editSkills}
                      handleChangeSkill={handleEditSkill}
                    />
                  </Grid>
                  {/* benchmark goes here  */}

                  {/* estimated end date here  */}

                  <CreateProjectFieldSelect
                    field={"Status"}
                    register={register}
                    registerName={"project_status"}
                    defaultValue={projectDrawer.project_status}
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
                    defaultValue={projectDrawer.guideline}
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
                    onClick={handleEditProjectClose}
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

export default EditProjectModal;

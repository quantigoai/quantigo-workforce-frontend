import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack, styled } from "@mui/material";
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
import * as Yup from "yup";
import { createProjectDrawer } from "../../../features/slice/projectDrawerSlice";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import ProjectModalHeader from "./ProjectModalHeader";
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
  handleCreateProjectClose,
  setCreateProjectOpen,
}) => {
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [addSkills, setAddSkills] = useState([]);
  const [platform, setPlatform] = React.useState("");
  const [status, setStatus] = React.useState("");

  // const { register, handleSubmit, reset } = useForm();
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
  const [addDoc, setAddDoc] = useState([]);

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleAddDoc = () => {
    const newDoc = [...addDoc, []];
    setAddDoc(newDoc);
  };

  const handleDeleteDoc = (id) => {
    const deleteDoc = [...addDoc];
    deleteDoc.splice(id, 1);
    setAddDoc(deleteDoc);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const ProjectDrawerSchema = Yup.object().shape({
    project_drawer_name: Yup.string().required(" project name is required"),
    project_alias: Yup.string().required("alias is required"),
    project_batch: Yup.string().required(" batch is required"),
    pdr: Yup.string().required(" pdr is required"),
    benchmark: Yup.string().required(" benchmark is required"),
    guideline: Yup.string().required(" document is required"),
    link: Yup.string().required("link is required"),
  });

  const methods = useForm({
    resolver: yupResolver(ProjectDrawerSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

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
              sx={{
                paddingLeft: "3%",
                paddingTop: "2%",
                paddingRight: "3%",
                position: "relative",
              }}
            >
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="row" gap={2} sx={{ py: "2%" }}>
                  <PDTextFIeld
                    name="project_drawer_name"
                    label="Project Name"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />

                  <PDTextFIeld
                    name="project_batch"
                    label="Batch"
                    InputProps={{
                      disableUnderline: true,
                      min: 1,
                    }}
                    isNumber="true"
                  />
                </Stack>

                {/* <CreateProjectFieldSelect
                    field={"Platform"}
                    // register={register}
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
                  /> */}

                <Stack direction="row" gap={2} sx={{ py: "2%" }}>
                  <PDTextFIeld
                    name="project_alias"
                    label="Alias"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />

                  <PDTextFIeld
                    name="pdr"
                    label="PDR"
                    InputProps={{
                      disableUnderline: true,
                      min: 1,
                      max: 5,
                    }}
                    isNumberPdr="true"
                  />
                </Stack>
                {/* <SkillField/> */}

                {/* <Grid item xs={6}>
                    <SkillFieldProject
                      skills={skills}
                      addSkills={addSkills}
                      handleChangeSkill={handleChangeSkill}
                    />
                  </Grid> */}

                <Stack direction="row" gap={2} sx={{ py: "2%" }}>
                  <PDTextFIeld
                    name="benchmark"
                    label="Benchmark"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />

                  <PDTextFIeld
                    name="end_time"
                    label="Estimated End Time"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Stack>

                {/* 
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
 */}
                <Typography
                  sx={{
                    fontWeight: "500",
                    mt: "5px",
                    fontSize: "14px",
                    mb: "10px",
                  }}
                  variant="h6"
                >
                  Relevant Documents
                </Typography>

                <Stack
                  sx={{
                    border: "2px solid #E6ECF5",
                    padding: "16px",
                    borderRadius: "8px",
                    background: "#FAFCFF",
                    maxHeight: 300,
                    overflowY: "auto",
                  }}
                >
                  <Stack direction="row" gap={2} xs={12}>
                    <PDTextFIeld
                      name="guideline"
                      label="Document Name"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />

                    <PDTextFIeld
                      name="link"
                      label="Link"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  {addDoc.map((doc, id) => {
                    return (
                      <Stack
                        key={id}
                        direction="row"
                        gap={2}
                        xs={12}
                        sx={{ mt: 2, position: "relative" }}
                      >
                        <PDTextFIeld
                          name={`guideline${id + 1}`}
                          label="Document Name"
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />

                        <PDTextFIeld
                          name={`link${id + 1}`}
                          label="Link"
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                        <Button
                          onClick={() => handleDeleteDoc(id)}
                          sx={{
                            mt: "30px",
                            position: "absolute",
                            left: 550,
                            fontSize: "20px",
                          }}
                        >
                          {" "}
                          <i
                            style={{ color: "red", cursor: "pointer" }}
                            className="ri-delete-bin-line"
                          ></i>
                        </Button>
                      </Stack>
                    );
                  })}

                  <Typography
                    sx={{
                      fontWeight: "600",
                      mt: "15px",
                      fontSize: "14px",
                      mb: "0px",
                      color: "#2E58FF",
                      cursor: "pointer",
                    }}
                    variant="p"
                    onClick={() => handleAddDoc()}
                  >
                    <i className="ri-add-line"></i> Add another document
                  </Typography>
                </Stack>

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
              </FormProvider>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectModal;

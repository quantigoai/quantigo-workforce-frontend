import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createProjectDrawer } from "../../../features/slice/projectDrawerSlice";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import ProjectModalHeader from "./ProjectModalHeader";
import PDSelectField from "../../shared/CustomField/PDSelectField";
import PDskillFIeld from "../../shared/CustomField/PDskillFIeld";
import useHandleChange from "./Hooks/useHandleChange";
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

const ProjectModal = ({
  createProjectOpen,
  handleCreateProjectClose,
  setCreateProjectOpen,
  statusCreateOptions,
  platformCreateOptions,
  projectTypeCreateOptions,
}) => {
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const alert = useAlert();

  const inputRef = useRef(null);

  const { handleChangeSkill, addSkills, count } = useHandleChange();

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

  const handleAddDoc = () => {
    const newDoc = [...addDoc, []];
    setAddDoc(newDoc);
  };

  const handleDeleteDoc = (id) => {
    const deleteDoc = [...addDoc];
    deleteDoc.splice(id, 1);
    setAddDoc(deleteDoc);
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

  const { reset, handleSubmit } = methods;

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
              modalTitle={"Create Project"}
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
                <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                  <PDSelectField
                    name={"project_platform"}
                    label="Platform"
                    options={platformCreateOptions}
                    defaultValue={"Select"}
                  />
                  <PDTextFIeld
                    name="project_drawer_name"
                    label="Project Name"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Stack>
                <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                  {" "}
                  <PDSelectField
                    name={"project_type"}
                    label="Project Type"
                    options={projectTypeCreateOptions}
                    defaultValue={"Select"}
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

                <Stack direction="row" gap={2} sx={{ py: "0%" }}>
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

                <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                  <PDskillFIeld
                    name={"project_skills"}
                    addSkills={addSkills}
                    label="Skills"
                    handleChangeSkill={handleChangeSkill}
                    skills={skills}
                    count={count}
                    inputRef={inputRef}
                  />
                  <PDTextFIeld
                    name="benchmark"
                    label="Benchmark"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Stack>

                <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                  <PDTextFIeld
                    name="end_time"
                    label="Estimated End Time"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                  <PDSelectField
                    name={"project_status"}
                    label="Status"
                    options={statusCreateOptions}
                    defaultValue="Select"
                  />
                </Stack>

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
                    maxHeight: 200,
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

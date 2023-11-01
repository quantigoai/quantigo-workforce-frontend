import { Box, Button, Grid, Modal } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { courseCategoryFields, courseLevelFields } from "../../../primary/AllUsers/userFilterOptions";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import CSelectField from "./CSelectField";
// import FormProvider from "../../../shared/FormProvider/FormProvider";
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
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const CreateTestMOdal = ({ handleClose, open }) => {
  const { register, handleSubmit, formState } = useForm();
  //   const methods = useForm({
  //     mode: "all",
  //   });
  //   const {
  //     watch,
  //     reset,
  //     setError,
  //     clearErrors,
  //     setValue,
  //     handleSubmit,
  //     formState: { errors },
  //   } = methods;

  const onSubmit = (data) => {};

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: { xl: "95%", lg: "85%" },
            width: { xl: "35%", lg: "40%" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "",
              height: "100%",
              position: "relative",
            }}
          >
            <Box sx={{ height: "8%" }}>
              <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Create Project"} />
            </Box>
            <Box
              sx={{
                height: "92%",
                backgroundColor: "",
              }}
            >
              <FormProvider onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    height: "90%",
                    // backgroundColor: "red",
                    // overflowY: "auto",
                    padding: "3%",
                    "&::-webkit-scrollbar": {
                      width: "0",
                    },
                    overflowY: "auto",
                    // zIndex: 1,
                  }}
                >
                  <>
                    <Grid container>
                      <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                        <CSelectField name={"level"} options={courseLevelFields} level={"Level"} register={register} />
                      </Grid>
                      <Grid item xs={6}>
                        {" "}
                        <CSelectField
                          name={"category"}
                          options={courseCategoryFields}
                          level={"Category"}
                          register={register}
                        />
                      </Grid>
                    </Grid>

                    {/* <CustomTextField name="firstNamdfdfe" label="First Name" />
                    <CustomTextField name="fime" label="First Name" />
                    <CustomTextField name="rame" label="First Name" />

                    <CustomeSelectField
                      name="gender"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Gender"}
                      setValue={setValue}
                    />
                    <CustomeSelectField
                      name="genssdder"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Gender"}
                      setValue={setValue}
                    />
                    <CustomeSelectField
                      name="gendeaar"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Gender"}
                      setValue={setValue}
                    />
                    <CustomeSelectField
                      name="genaaader"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Genaaader"}
                      setValue={setValue}
                    />
                    <CustomeSelectField
                      name="gendaaaaaer"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Gender"}
                      setValue={setValue}
                    />
                    <CustomeSelectField
                      name="gendaaaaaer"
                      //   defaultValue={genderOptions[0].value}
                      helperText="Select an option"
                      options={courseLanguageFields}
                      label={"Gender"}
                      setValue={setValue}
                    /> */}
                  </>
                </Box>
                <Box sx={{ height: "10%", backgroundColor: "", zIndex: 0 }}>
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px",
                      mt: 2,
                      borderTop: "2px solid #F2F6FC",
                    }}> */}
                  <Grid container sx={{ padding: "2%" }}>
                    <Grid item xs={6}>
                      <Button
                        sx={{
                          width: "120px",
                          textTransform: "none",
                          backgroundColor: "primary.B008",
                          color: "neutral.N650",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "neutral.N600",
                            color: "neutral.N650",
                          },
                        }}
                        onClick={() => handleClose()}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container sx={{ justifyContent: "right" }}>
                        <Button
                          type="submit"
                          sx={{
                            width: "128px",
                            textTransform: "none",
                            backgroundColor: "#2E58FF",
                            color: "#FFFFFF",

                            borderRadius: "8px",
                            "&.Mui-disabled": {
                              background: "#B6C9F0",
                              color: "#FFFFFF",
                            },
                            "&:hover": {
                              backgroundColor: "#2E58FF",
                              color: "#FFFFFF",
                              // border: "1px solid #2E58FF",
                            },
                          }}
                          // onClick={() => handleChange()}
                          // onClick={handleSubmission}
                        >
                          Create
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* </Box> */}
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CreateTestMOdal;

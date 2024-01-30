import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Backdrop, Box, Button, Fade, Grid, Modal } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../customHooks/useToaster.jsx";
import { ProjectDirectorySchema } from "../primary/ProjectLIstNew2/ProjectDrawerHelper";
import { LineStack } from "../primary/ProjectLIstNew2/ProjectModal";
import ProjectModalHeader from "../primary/ProjectLIstNew2/ProjectModalHeader";
import PDTextFIeld from "../shared/CustomField/PDTextFIeld";
import FormProvider from "../shared/FormProvider/FormProvider";
import { FieldBox } from "../shared/FIeldbox/FieldBox.jsx";
import ProjectDirectoryBenchMarkFieldIndex from "./ProjectDirectoryBenchMarkFieldindex.jsx";

const style = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // height: "80%",
  overflowY: "auto",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
  "&::-webkit-scrollbar": {
    width: "0", // Hide the scrollbar
  },
};
const ProjectDirectoryEditModal = ({
  item,
  handleEditClose,
  openProjectModalEdit,
  setOpenProjectModalEdit,
  onSubmitEdit,
}) => {
  const dispatch = useDispatch();
  const toast = useToaster();
  const { isLoading } = useSelector((state) => state.projectDirectory);
  const methods = useForm({
    resolver: yupResolver(ProjectDirectorySchema),
    defaultValues: {
      project_Name: item.project_Name,
      client_Alias: item.client_Alias,
      industry: item.industry,
      platform: item.platform,
      tool_Type: item.tool_Type,
      PDR: item.PDR,
      project_Type: item.project_Type,
      action_Items: item.action_Items,
      QA_Check_Points: item.QA_Check_Points,
      obj_Benchmark: item.obj_Benchmark,
      img_Benchmark: item.img_Benchmark,
      tagging_Benchmark: item.tagging_Benchmark,
      deletion: item.deletion,
      skip_Image: item.skip_Image,
      update: item.update,
      image_Loading: item.image_Loading,
      object_Saving_Time: item.object_Saving_Time,
      video_Watch_Time: item.video_Watch_Time,
      judgement_Time: item.judgement_Time,
      QA_Benchmark: item.QA_Benchmark,
      annotation: item.annotation,
      QA: item.QA,
      remarks: item.remarks,
    },
    mode: "all",
  });
  const { handleSubmit } = methods;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openProjectModalEdit}
        onClose={handleEditClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openProjectModalEdit}>
          <Box
            sx={{
              ...style,
              width: { xxl: "50%", xl: "60%", lg: "70%" },
              top: {
                lg: "50%",
                xl: "50%",
                xxl: "50%",
              },
              left: {
                lg: "55%",
                xl: "50%",
                xxl: "53%",
              },
            }}
          >
            <Box
              sx={{
                height: {
                  lg: "10%",
                  xl: "10%",
                  xxl: "8%",
                },
              }}
            >
              <ProjectModalHeader
                handleCreateProjectClose={handleEditClose}
                modalTitle={`Edit ${item?.project_Name}`}
              />
            </Box>
            <Box
              sx={{
                height: {
                  lg: "90%",
                  xl: "90%",
                  xxl: "92%",
                },
              }}
            >
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitEdit)}>
                <Box
                  sx={{
                    // ...style1,

                    height: {
                      lg: "480px",
                      xl: "480px",
                      xxl: "608px",
                    },
                    paddingLeft: "16px",
                    paddingRight: "12px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "0",
                    },
                  }}
                >
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      columnGap: { xxl: "16px", xl: "10px", lg: "8px" },
                      mt: "20px",
                    }}
                  >
                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="project_Name" label="Project Name" defaultValue={item.project_Name} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="client_Alias" label="Client Alias" defaultValue={item.client_Alias} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="industry" label="Industry" defaultValue={item.industry} />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="platform" label="Batch" defaultValue={item.platform} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="tool_Type" label="Tool Type" defaultValue={item.tool_Type} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="PDR"
                        label="PDR"
                        defaultValue={item.PDR}
                        InputProps={{
                          min: 1,
                          max: 5,
                        }}
                        isNumberPdr="true"
                      />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="project_Type" label="Project Type" defaultValue={item.project_Type} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="action_Items" label="Action Items" defaultValue={item.action_Items} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="QA_Check_Points" label="QA Check Points" defaultValue={item.QA_Check_Points} />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="obj_Benchmark" label="Object Benchmark" defaultValue={item.Obj_Benchmark} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="img_Benchmark" label="Image Benchmark" defaultValue={item.img_Benchmark} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="tagging_Benchmark"
                        label="Tagging Benchmark"
                        defaultValue={item.tagging_Benchmark}
                      />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="deletion" label="Deletion" defaultValue={item.deletion} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="skip_Image" label="Skip Image" defaultValue={item.skip_Image} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="update" label="Update" defaultValue={item.update} />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="image_Loading" label="Image Loading" defaultValue={item.image_Loading} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="object_Saving_Time"
                        label="Object_Saving_Time"
                        defaultValue={item.object_Saving_Time}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="video_Watch_Time"
                        label="Video Watch Time"
                        defaultValue={item.video_Watch_Time}
                      />
                    </FieldBox>
                    {/* </LineStack> */}

                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld
                        name="judgement_Time"
                        label="Judgement Time Loading"
                        defaultValue={item.judgement_Time}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="QA_Benchmark" label="QA Benchmark" defaultValue={item.QA_Benchmark} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="annotation" label="Annotation" defaultValue={item.annotation} />
                    </FieldBox>
                    {/* </LineStack> */}
                    {/* <LineStack> */}
                    <FieldBox>
                      <PDTextFIeld name="QA" label="QA" defaultValue={item.QA} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="remarks" label="Remarks" defaultValue={item.remarks} />
                    </FieldBox>

                    {/* </LineStack> */}
                  </Grid>

                  {/* benchmark add option */}
                  <ProjectDirectoryBenchMarkFieldIndex />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: { lg: "10px", xl: "12px", xxl: "12px" },
                    paddingX: "12px",
                    mt: 1,
                    borderTop: "2px solid #F2F6FC",
                  }}
                >
                  <Button
                    onClick={handleEditClose}
                    sx={{
                      textTransform: "none",
                      paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                      paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                      fontSize: {
                        lg: "12px",
                        xl: "14px",
                        xxl: "14px",
                      },
                      height: { lg: "40px", xl: "40px", xxl: "40px" },
                      width: "120px",
                      borderRadius: "8px",
                      border: "1px solid #F4F7FE",
                      backgroundColor: "#F4F7FE",
                      color: "#62728F",
                      "&:hover": {
                        backgroundColor: "#F4F7FE",
                      },
                    }}
                    variant="filled"
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    type="submit"
                    loading={isLoading}
                    sx={{
                      textTransform: "none",
                      paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                      paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                      fontSize: {
                        lg: "12px",
                        xl: "14px",
                        xxl: "14px",
                      },
                      height: { lg: "40px", xl: "40px", xxl: "40px" },
                      width: "120px",
                      borderRadius: "8px",
                      backgroundColor: "#2E58FF",
                      "&:hover": {
                        background: "#244EF5",
                      },
                      "&:disabled": {
                        backgroundColor: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                    }}
                    variant="contained"
                  >
                    Save
                  </LoadingButton>
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectDirectoryEditModal;

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useToaster from '../../../customHooks/useToaster';
import { ProjectDirectorySchema } from '../../primary/ProjectLIstNew2/ProjectDrawerHelper';
import {
  FieldBox,
  LineStack,
} from '../../primary/ProjectLIstNew2/ProjectModal';
import ProjectModalHeader from '../../primary/ProjectLIstNew2/ProjectModalHeader';
import PDTextFIeld from '../../shared/CustomField/PDTextFIeld';
import FormProvider from '../../shared/FormProvider/FormProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 0,
};
const ProjectDirectoryEditModal = ({
  item,
  handleEditClose,
  openProjectModalEdit,
  setOpenProjectModalEdit,
  onSubmitEdit,
}) => {
  console.log('🚀 ~ file: ProjectDirectoryEditModal.jsx:33 ~ item:', item);
  const dispatch = useDispatch();
  const toast = useToaster();
  const { isLoading } = useSelector((state) => state.projectDirectory);
  const methods = useForm({
    resolver: yupResolver(ProjectDirectorySchema),
    defaultValues: {
      Project_Name: item.Project_Name,
      Client_Alias: item.Client_Alias,
      Industry: item.Industry,
      Platform: item.Platform,
      Tool_Type: item.Tool_Type,
      PDR: item.PDR,
      Project_Type: item.Project_Type,
      Action_Items: item.Action_Items,
      QA_Check_Points: item.QA_Check_Points,
      Obj_Benchmark: item.Obj_Benchmark,
      Img_Benchmark: item.Img_Benchmark,
      Tagging_Benchmark: item.Tagging_Benchmark,
      Deletion: item.Deletion,
      Skip_Image: item.Skip_Image,
      Update: item.Update,
      Image_Loading: item.Image_Loading,
      Object_Saving_Time: item.Object_Saving_Time,
      Video_Watch_Time: item.Video_Watch_Time,
      Judgement_Time: item.Judgement_Time,
      QA_Benchmark: item.QA_Benchmark,
      Annotation: item.Annotation,
      QA: item.QA,
      Remarks: item.Remarks,
    },
    mode: 'all',
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
          <Box sx={style}>
            <ProjectModalHeader
              handleCreateProjectClose={handleEditClose}
              modalTitle={`Edit ${item.Project_Name}`}
            />
            <Box>
              <FormProvider
                methods={methods}
                onSubmit={handleSubmit(onSubmitEdit)}
              >
                <Box
                  sx={{
                    paddingLeft: '16px',
                    paddingTop: '1%',
                    paddingRight: '16px',
                    position: 'relative',
                  }}
                >
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Project_Name"
                        label="Project Name"
                        defaultValue={item.Project_Name}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Client_Alias"
                        label="Client Alias"
                        defaultValue={item.Client_Alias}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Industry"
                        label="Industry"
                        defaultValue={item.Industry}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Platform"
                        label="Batch"
                        defaultValue={item.Platform}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Tool_Type"
                        label="Tool Type"
                        defaultValue={item.Tool_Type}
                      />
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
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Project_Type"
                        label="Project Type"
                        defaultValue={item.Project_Type}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Action_Items"
                        label="Action Items"
                        defaultValue={item.Action_Items}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="QA_Check_Points"
                        label="QA Check Points"
                        defaultValue={item.QA_Check_Points}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Obj_Benchmark"
                        label="Object Benchmark"
                        defaultValue={item.Obj_Benchmark}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Img_Benchmark"
                        label="Image Benchmark"
                        defaultValue={item.Img_Benchmark}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Tagging_Benchmark"
                        label="Tagging Benchmark"
                        defaultValue={item.Tagging_Benchmark}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Deletion"
                        label="Deletion"
                        defaultValue={item.Deletion}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Skip_Image"
                        label="Skip Image"
                        defaultValue={item.Skip_Image}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Update"
                        label="Update"
                        defaultValue={item.Update}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Image_Loading"
                        label="Image Loading"
                        defaultValue={item.Image_Loading}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Object_Saving_Time"
                        label="Object_Saving_Time"
                        defaultValue={item.Object_Saving_Time}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Video_Watch_Time"
                        label="Video Watch Time"
                        defaultValue={item.Video_Watch_Time}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="Judgement_Time"
                        label="Judgement Time Loading"
                        defaultValue={item.Judgement_Time}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="QA_Benchmark"
                        label="QA Benchmark"
                        defaultValue={item.QA_Benchmark}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Annotation"
                        label="Annotation"
                        defaultValue={item.Annotation}
                      />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="QA"
                        label="QA"
                        defaultValue={item.QA}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld
                        name="Remarks"
                        label="Remarks"
                        defaultValue={item.Remarks}
                      />
                    </FieldBox>
                  </LineStack>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingY: { lg: '10px', xl: '12px', xxl: '12px' },
                    paddingX: { lg: '14px', xl: '16px', xxl: '16px' },
                    mt: 1,
                    borderTop: '2px solid #F2F6FC',
                  }}
                >
                  <Button
                    onClick={handleEditClose}
                    sx={{
                      textTransform: 'none',
                      paddingX: { lg: '20px', xl: '30px', xxl: '30px' },
                      paddingY: { lg: '3px', xl: '5px', xxl: '5px' },
                      fontSize: {
                        lg: '12px',
                        xl: '14px',
                        xxl: '14px',
                      },
                      height: { lg: '40px', xl: '40px', xxl: '40px' },
                      width: '120px',
                      borderRadius: '8px',
                      border: '1px solid #F4F7FE',
                      backgroundColor: '#F4F7FE',
                      color: '#62728F',
                      '&:hover': {
                        backgroundColor: '#F4F7FE',
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
                      textTransform: 'none',
                      paddingX: { lg: '20px', xl: '30px', xxl: '30px' },
                      paddingY: { lg: '3px', xl: '5px', xxl: '5px' },
                      fontSize: {
                        lg: '12px',
                        xl: '14px',
                        xxl: '14px',
                      },
                      height: { lg: '40px', xl: '40px', xxl: '40px' },
                      width: '120px',
                      borderRadius: '8px',
                      backgroundColor: '#2E58FF',
                      '&:hover': {
                        background: '#244EF5',
                      },
                      '&:disabled': {
                        backgroundColor: '#B6C9F0',
                        color: '#FFFFFF',
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

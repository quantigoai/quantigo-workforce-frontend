import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Backdrop, Box, Button, Fade, Grid, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ProjectDirectorySchema } from '../primary/ProjectLIstNew2/ProjectDrawerHelper';
import ProjectModalHeader from '../primary/ProjectLIstNew2/ProjectModalHeader';
import PDTextFIeld from '../shared/CustomField/PDTextFIeld';
import FormProvider from '../shared/FormProvider/FormProvider';
import { FieldBox } from '../shared/FIeldbox/FieldBox.jsx';
import PDSelectField from '../shared/CustomField/PDSelectField.jsx';
import { dataTypeOptions, labelingToolOptions, projectTypeOptions } from '../primary/AllUsers/userFilterOptions.js';
import PDDateField from '../shared/CustomField/PDDateField.jsx';
import ProjectDirectoryBenchMarkFieldIndex from './ProjectDirectoryBenchMarkFieldIndex.jsx';

const style = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // height: "80%",
  overflowY: 'auto',
  boxShadow: 24,
  borderRadius: '10px',
  p: 0,
  '&::-webkit-scrollbar': {
    width: '0', // Hide the scrollbar
  },
};
const ProjectDirectoryEditModal = ({ item, handleEditClose, openProjectModalEdit, onSubmitEdit }) => {
  const { isLoading } = useSelector((state) => state.projectDirectory);
  const methods = useForm({
    resolver: yupResolver(ProjectDirectorySchema),
    defaultValues: {
      project_Name: item.project_Name,
      client_Alias: item.client_Alias,
      industry: item.industry,
      platform: item.platform,
      PDR: item.PDR,
      project_Type: item.project_Type,
      labeling_Tool: item.labeling_Tool,
      data_Type: item.data_Type,
      guideline: item.guideline,
      PDL: item.PDL,
      DL: item.DL,
      DCR: item.DCR,
      PCR: item.PCR,
      // completion_Date: item.completion_Date,
      // tool_Type: item.tool_Type,
      // action_Items: item.action_Items,
      // QA_Check_Points: item.QA_Check_Points,
      // obj_Benchmark: item.obj_Benchmark,
      // img_Benchmark: item.img_Benchmark,
      // tagging_Benchmark: item.tagging_Benchmark,
      // deletion: item.deletion,
      // skip_Image: item.skip_Image,
      // update: item.update,
      // image_Loading: item.image_Loading,
      // object_Saving_Time: item.object_Saving_Time,
      // video_Watch_Time: item.video_Watch_Time,
      // judgement_Time: item.judgement_Time,
      // QA_Benchmark: item.QA_Benchmark,
      // annotation: item.annotation,
      // QA: item.QA,
      // remarks: item.remarks,
    },
    mode: 'all',
  });
  const { handleSubmit, getValues } = methods;
  const values = getValues();
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
              width: { xxl: '50%', xl: '60%', lg: '70%' },
              top: {
                lg: '50%',
                xl: '50%',
                xxl: '50%',
              },
              left: {
                lg: '55%',
                xl: '50%',
                xxl: '53%',
              },
            }}
          >
            <Box
              sx={{
                height: {
                  lg: '10%',
                  xl: '10%',
                  xxl: '8%',
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
                  lg: '90%',
                  xl: '90%',
                  xxl: '92%',
                },
              }}
            >
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitEdit)}>
                <Box
                  sx={{
                    // ...style1,

                    height: {
                      lg: '480px',
                      xl: '480px',
                      xxl: '608px',
                    },
                    paddingLeft: '16px',
                    paddingRight: '12px',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                      width: '0',
                    },
                  }}
                >
                  <Box
                    sx={{
                      '&::-webkit-scrollbar': {
                        width: '0',
                      },
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        columnGap: { xxl: '16px', xl: '10px', lg: '8px' },
                        mt: '20px',
                      }}
                    >
                      <FieldBox>
                        <PDTextFIeld
                          name="project_Name"
                          label="Project Name"
                          defaultValue={item.project_Name}
                          isRequired={true}
                        />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld
                          name="client_Alias"
                          label="Client Alias"
                          defaultValue={item.client_Alias}
                          isRequired={true}
                        />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="industry" label="Industry" defaultValue={item.industry} />
                      </FieldBox>


                      <FieldBox>
                        <PDTextFIeld
                          name="PDR"
                          label="PDR"
                          placeholder="PDR must be in range between 1 to 5"
                          isNumberPdr="true"
                          defaultValue={item.PDR}
                        />
                      </FieldBox>
                      <FieldBox>
                        <PDSelectField
                          name={'project_Type'}
                          label="Project Type"
                          options={projectTypeOptions}
                          // defaultValue={item.project_Type}
                        />
                      </FieldBox>
                      <FieldBox>
                        {/* <PDTextFIeld name="labeling_Tool" label="Labeling tool" /> */}
                        <PDSelectField
                          name={'labeling_Tool'}
                          label="Labeling Tool"
                          options={labelingToolOptions}
                          defaultValue={''}
                        />
                      </FieldBox>


                      <FieldBox>
                        <PDSelectField name="data_Type" label="Data Type" options={dataTypeOptions} defaultValue={''} />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="guideline" label="Guideline" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="PDL" label="PDL" />
                      </FieldBox>

                      <FieldBox>
                        <PDTextFIeld name="DL" label="DL" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="DCR" label="DCR" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="PCR" label=" PCR" />
                      </FieldBox>

                      <FieldBox>
                        {/* <PDTextFIeld name="remarks" label="Remarks" /> */}
                        <PDDateField
                          name="completion_Date"
                          defaultValue={item.completion_Date}
                          label="Completion Date"
                        />
                      </FieldBox>
                      {/* <FieldBox>
                        <PDTextFIeld name="obj_Benchmark" label="Object Benchmark" />
                      </FieldBox> */}
                    </Grid>
                  </Box>
                  <ProjectDirectoryBenchMarkFieldIndex item={item} />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingY: { lg: '10px', xl: '12px', xxl: '12px' },
                    paddingX: '12px',
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

import { Backdrop, Box, Button, Fade, Grid, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ProjectDirectorySchema } from '../primary/ProjectLIstNew2/ProjectDrawerHelper.js';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../shared/FormProvider/FormProvider.jsx';
import { LoadingButton } from '@mui/lab';
import ProjectModalHeader from '../primary/ProjectLIstNew2/ProjectModalHeader.jsx';
import PDTextFIeld from '../shared/CustomField/PDTextFIeld.jsx';
import { useSelector } from 'react-redux';
import { FieldBox } from '../shared/FIeldbox/FieldBox.jsx';
import PDSelectField from '../shared/CustomField/PDSelectField.jsx';
import { dataTypeOptions, labelingToolOptions, projectTypeOptions } from '../primary/AllUsers/userFilterOptions.js';
import PDDateField from '../shared/CustomField/PDDateField.jsx';

const style = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  // height: "80%",
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  // overflowY: "auto",
  '&::-webkit-scrollbar': {
    width: '0',
  },
  p: 0,
  input: {
    height: '20px',
    borderRadius: '8px',
  },
  select: {
    height: '20px',
  },
};

const CreateProjectDirectoryModal = ({ openModal, handleClose, onSubmit }) => {
  const { isLoading } = useSelector((state) => state.projectDirectory);
  const methods = useForm({
    resolver: yupResolver(ProjectDirectorySchema),
    mode: 'all',
  });
  const { handleSubmit } = methods;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
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
                xxl: '50%',
              },
            }}
          >
            <Box
              sx={{
                height: {
                  lg: '10%',
                  xl: '10%',
                  xxl: '9%',
                },
              }}
            >
              <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={'Add Project'} />
            </Box>

            <Box
              sx={{
                height: {
                  lg: '90%',
                  xl: '90%',
                  xxl: '91%',
                },
              }}
            >
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
                        <PDTextFIeld name="project_Name" label="Project Name" defaultValue={''} isRequired={true} />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="client_Alias" label="Client Alias" defaultValue={''} isRequired={true} />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld name="industry" label="Industry" />
                      </FieldBox>

                      <FieldBox>
                        <PDTextFIeld
                          name="PDR"
                          label="PDR"
                          placeholder="PDR must be in range between 1 to 5"
                          isNumberPdr="true"
                        />
                      </FieldBox>
                      <FieldBox>
                        <PDSelectField
                          name={'project_Type'}
                          label="Project Type"
                          options={projectTypeOptions}
                          defaultValue={''}
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
                        <PDTextFIeld defaultValue={''} name="guideline" label="Guideline" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld defaultValue={''} name="PDL" label="PDL" />
                      </FieldBox>

                      <FieldBox>
                        <PDTextFIeld defaultValue={''} name="DL" label="DL" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld defaultValue={''} name="DCR" label="DCR" />
                      </FieldBox>
                      <FieldBox>
                        <PDTextFIeld defaultValue={''} name="PCR" label=" PCR" />
                      </FieldBox>

                      <FieldBox>
                        {/* <PDTextFIeld name="remarks" label="Remarks" /> */}
                        <PDDateField name="completion_Date" label="Completion Date" />
                      </FieldBox>
                      {/* <FieldBox>
                        <PDTextFIeld name="obj_Benchmark" label="Object Benchmark" />
                      </FieldBox> */}
                    </Grid>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingY: { lg: '10px', xl: '12px', xxl: '12px' },
                    paddingX: '13px',
                    mt: 1,
                    borderTop: '2px solid #F2F6FC',
                  }}
                >
                  <Button
                    onClick={handleClose}
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
                    Add
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

export default CreateProjectDirectoryModal;

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useToaster from '../../../customHooks/useToaster';
import { updateASkill } from '../../../features/slice/skillSlice';
import { capitalizeFirstLetter } from '../../../helper/capitalizeFirstWord';

export const MyTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '78%',
    fontSize: '14px',
    backgroundColor: 'neutral.N000',
  },
}));
const ButtonStyleDelete = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  '&:hover': {
    backgroundColor: '#FF9A45',
    color: '#1D1D1D',
  },
});
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  '&:hover': {
    backgroundColor: '#FF9A45',
    color: '#1D1D1D',
  },
});
const SkillEdit = ({ skill }) => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(skill.name);
  const [error, setError] = useState(false);

  const toast = useToaster();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { skills, isLoading } = useSelector((state) => state.skill);

  const [skillsName, setSkillsName] = useState([]);

  useEffect(() => {
    setSkillsName(
      skills.map((sk) => sk.name !== skill.name && sk.name.toLowerCase()),
    );
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSetName = (e) => {
    setName(capitalizeFirstLetter(e.target.value));
    if (skillsName.includes(e.target.value.toLowerCase())) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const onSubmit = (data) => {
    data.name = name;
    const finalData = {
      data: data,
      id: skill._id,
    };

    dispatch(updateASkill(finalData)).then((action) => {
      if (action.payload.status === 200) {
        toast.trigger(' Update Skill', 'success');
        setOpen(false);
      } else {
        toast.trigger('Skill Not Update', 'error');
      }
    });
  };

  return (
    <>
      <Tooltip title="Edit Skill" arrow>
        <Button
          // variant="outlined"
          // disabled={isLoading}

          onClick={handleClickOpen}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
            }}
          >
            <i className="ri-edit-line"></i>
          </Box>
        </Button>
      </Tooltip>
      <Dialog
        PaperProps={{
          sx: {
            width: '700px',
            // // maxHeight: 500,
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // sx={{ height: "100%", width: "100%" }}
      >
        {/* TODO Handle with state value instead of react hook form */}
        <DialogTitle
          sx={{
            backgroundColor: 'neutral.N400',
            borderBottom: '1px solid #EBF0F5',
            fontSize: '16px',
          }}
          id="alert-dialog-title"
        >
          <Typography
            variant="wpf_p2_semiBold"
            sx={{
              color: isLightTheme ? '#3C4D6B' : '#FFFFFF',
            }}
          >
            Skill Edit
          </Typography>
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Box sx={{ paddingBottom: '2%' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  mb: 1,
                  color: isLightTheme ? '#091E42' : '#FFFFFF',
                  paddingBottom: '%',
                }}
              >
                Name
              </Typography>
              <MyTextField
                fullWidth
                defaultValue={capitalizeFirstLetter(skill.name)}
                
                id="filled-basic"
                onChange={handleSetName}
              />
              {error && (
                <Box
                  style={{
                    color: 'red',
                    padding: '5px 5px',
                    marginBottom: '10px',
                  }}
                >
                  {' '}
                  {'This Skill is already exists.'}
                </Box>
              )}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  mb: 1,
                  color: isLightTheme ? '#091E42' : '#FFFFFF',
                  paddingBottom: '1%',
                }}
              >
                Description
              </Typography>
              <MyTextField
                fullWidth
                defaultValue={capitalizeFirstLetter(skill.description)}
                // sx={{ backgroundColor: '#FFFFFF' }}
                id="filled-basic"
                multiline
                rows={4}
                // label="Skill Description"
                // variant="filled"
                {...register('description', {
                  required: true,
                })}
              />
            </Box>
          </DialogContent>
          <Box
            sx={{
              flex: '0 0 64px',
              borderTop: '2px solid #F2F6FC',
              backgroundColor: 'neutral.N100',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2%',

              bottom: '0px',
              borderRadius: '8px',
            }}
          >
            <Grid container sx={{ padding: '2%' }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '120px',
                    textTransform: 'none',
                    backgroundColor: 'primary.B008',
                    color: 'neutral.N650',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'neutral.N600',
                      color: 'neutral.N650',
                    },
                  }}
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: 'right' }}>
                  <Button
                    disabled={isLoading}
                    type="submit"
                    autoFocus
                    sx={{
                      width: '128px',
                      textTransform: 'none',
                      backgroundColor: '#2E58FF',
                      color: '#FFFFFF',

                      borderRadius: '8px',
                      '&.Mui-disabled': {
                        background: '#B6C9F0',
                        color: '#FFFFFF',
                      },
                      '&:hover': {
                        backgroundColor: '#2E58FF',
                        color: '#FFFFFF',
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    // onClick={handleSubmission}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          {/* <DialogActions sx={{ paddingRight: "5%", paddingBottom: "4%" }}>
            <ButtonStyle variant="outlined" onClick={handleClose}>
              Cancel
            </ButtonStyle>
            <ButtonStyle variant="outlined" disabled={isLoading} type="submit" autoFocus>
              Save
            </ButtonStyle>
          </DialogActions> */}
        </form>
      </Dialog>
    </>
  );
};

export default SkillEdit;

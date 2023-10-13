import {Box, Button, Dialog, DialogTitle, styled, TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Tooltip from "@mui/material/Tooltip";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {updateASkill} from "../../../features/slice/skillSlice";
import {capitalizeFirstLetter} from "../../../helper/capitalizeFirstWord";

const ButtonStyleDelete = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const SkillEdit = ({ skill }) => {
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
    setSkillsName(skills.map((sk) => sk.name !== skill.name && sk.name.toLowerCase()));
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
        toast.trigger(" Update Skill", "success");
        setOpen(false);
      } else {
        toast.trigger("Skill Not Update", "error");
      }
    });
  };

  return (
    <>
      <Tooltip title="Edit Skill" arrow>
        <ButtonStyleDelete
          variant="outlined"
          // disabled={isLoading}

          onClick={handleClickOpen}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            Edit
          </Box>
        </ButtonStyleDelete>
      </Tooltip>
      <Dialog
        PaperProps={{
          sx: {
            width: "50%",
            maxHeight: 500,
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // sx={{ height: "100%", width: "100%" }}
      >
        {/* TODO Handle with state value instead of react hook form */}
        <DialogTitle id="alert-dialog-title">{"Edit Skill"}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
              fullWidth
              defaultValue={capitalizeFirstLetter(skill.name)}
              sx={{ backgroundColor: "#FFFFFF" }}
              id="filled-basic"
              label="Skill Name"
              variant="filled"
              onChange={handleSetName}
              // {...register("name", {
              //   required: true,
              // })}
            />
            {error && (
              <Box
                style={{
                  color: "red",
                  padding: "5px 5px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                {"This Skill is already exists."}
              </Box>
            )}
          </DialogContent>

          <DialogContent>
            <TextField
              fullWidth
              defaultValue={capitalizeFirstLetter(skill.description)}
              sx={{ backgroundColor: "#FFFFFF" }}
              id="filled-basic"
              label="Skill Description"
              variant="filled"
              {...register("description", {
                required: true,
              })}
            />
          </DialogContent>

          <DialogActions sx={{ paddingRight: "5%", paddingBottom: "4%" }}>
            <ButtonStyle variant="outlined" onClick={handleClose}>
              Cancel
            </ButtonStyle>
            <ButtonStyle variant="outlined" disabled={isLoading} type="submit" autoFocus>
              Save
            </ButtonStyle>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default SkillEdit;

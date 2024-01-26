import {
  Button,
  FormControl,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { createASkill, getAllSkills } from "../../../features/slice/skillSlice";

import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import SkillDeleteModal from "./SkillDeleteModal";
import SkillEdit from "./SkillEdit";

export const MyTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #DADCDF !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '78%',
    fontSize: '14px',
    backgroundColor: 'neutral.N000',
  },
}));
export const MyTextFieldDesc = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #DADCDF !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': { height: '78%', fontSize: '14px' },
}));
const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const ButtonStyleDelete = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const Skills = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { skills, isLoading } = useSelector((state) => state.skill);

  const toast = useToaster();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");
  const [skillsName, setSkillsName] = useState([]);
  const { isLightTheme } = useSelector((state) => state.theme);

  const paperstyle = {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    width: "92%",
    height: "100%",
    borderRadius: "2px",
  };
  useEffect(() => {
    dispatch(setActivePath("Skill"));
    dispatch(getAllSkills());
  }, []);

  useEffect(() => {
    setSkillsName(skills.map((skill) => skill.name.toLowerCase()));
  }, [skills]);

  const handleSetName = (e) => {
    setName(capitalizeFirstLetter(e.target.value));

    if (skillsName.includes(e.target.value.toLowerCase())) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSetDescription = (e) => {
    setDescription(capitalizeFirstLetter(e.target.value));
  };

  const onSubmit = (data) => {
    data.name = name;
    data.description = description;

    dispatch(createASkill(data)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      }
      if (action.payload.status === 200 || action.payload.status === 201) {
        setName("");
        setDescription("");
        dispatch(getAllSkills());
        toast.trigger("Skill Create", "success");
      } else {
        toast.trigger("Skill Not create", "error");
      }
    });
  };

  return (
    <>
      <Box className="projectBox">
        <Box className="projectHeader">
          <Box
            className="headerBox"
            sx={{
              height: "75%",
              backgroundColor: "neutral.N000",
            }}
          >
            <Box sx={{ width: "30%", padding: "12px 16px" }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  paddingX: "10px",
                }}
              >
                <Typography variant="wpf_h5_semiBold">Skill</Typography>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box
          className="contentBody"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              // overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "8px",
              padding: "1%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                height: "100%",
                // overflow: "auto",
              }}
            >
              <Box
                sx={{
                  paddingTop: "0%",
                  px: 2,
                  width: "40%",
                  height: "100%",
                  backgroundColor: "neutral.N400",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container sx={{ paddingBottom: "3%", paddingTop: "3%" }}>
                    <FormControl fullWidth>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          mb: 1,
                          color: isLightTheme ? "#091E42" : "#FFFFFF",
                          paddingBottom: "1%",
                        }}
                      >
                        Name
                      </Typography>
                      <MyTextField
                        fullWidth
                        sx={{ height: "50px" }}
                        id="filled-basic"
                        variant="outlined"
                        value={name}
                        onChange={handleSetName}
                        error={error}
                        helperText={error ? "This Skill is already exists." : ""}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                    <FormControl fullWidth>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          mb: 1,
                          color: isLightTheme ? "#091E42" : "#FFFFFF",
                          paddingBottom: "1%",
                        }}
                      >
                        Description
                      </Typography>

                      <MyTextFieldDesc
                        fullWidth
                        variant="outlined"
                        sx={{ backgroundColor: "" }}
                        multiline
                        rows={4}
                        value={description}
                        onChange={handleSetDescription}
                      />
                    </FormControl>
                  </Grid>

                  <Grid container>
                    <Button
                      sx={{
                        width: "128px",
                        textTransform: "none",
                        backgroundColor: "primary.B200",
                        color: "neutral.N000",
                        borderRadius: "8px",
                        "&.Mui-disabled": {
                          color: "neutral.N000",
                          backgroundColor: "#B6C9F0",
                        },
                        "&:hover": {
                          backgroundColor: "primary.B100",
                          color: "neutral.N000",
                          cursor: "pointer",
                        },
                      }}
                      disabled={error || isLoading}
                      variant="contained"
                      type="submit"
                    >
                      Create Skill
                    </Button>
                  </Grid>
                </form>
              </Box>

              <Box
                sx={{
                  width: "60%",
                  height: "100%",
                  // overflowY: "auto",
                }}
              >
                <>
                  <Grid item xs={12}>
                    <Paper elevation={0} sx={{ width: "100%", overflow: "auto" }}>
                      <TableContainer
                        sx={{
                          height: {
                            lg: "500px",
                            xl: "497px",
                            xxl: "630px",
                          },
                        }}
                      >
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead sx={{ background: "#F8F8F8", height: "0px" }}>
                            <TableRow>
                              <TableCell sx={{ color: "neutral.550", zIndex: 10 }}>NAME</TableCell>
                              <TableCell sx={{ color: "neutral.550" }}>DESCRIPTION</TableCell>
                              <TableCell align="center" sx={{ color: "neutral.550" }}>
                                ACTION
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {skills.map((skill, i) => (
                              <TableRow
                                key={skill._id}
                                sx={{
                                  "&:last-child td, &:last-child th": { border: 0 },
                                }}
                              >
                                {/* <TableCell align="left">{i + 1}</TableCell> */}
                                <TableCell align="left">{capitalizeFirstLetter(skill.name)}</TableCell>
                                <TableCell align="left">{capitalizeFirstLetter(skill.description)}</TableCell>
                                {/* <TableCell align="center"></TableCell> */}

                                <TableCell align="center">
                                  <Box sx={{ display: "flex" }}>
                                    <SkillEdit skill={skill} />
                                    <SkillDeleteModal skill={skill} />
                                  </Box>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                </>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Skills;

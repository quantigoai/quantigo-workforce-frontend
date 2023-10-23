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
// import io from "socket.io-client";

export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "78%", fontSize: "14px" },
}));
export const MyTextFielddec = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "78%", fontSize: "14px" },
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
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
            // backgroundColor: "blue",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "8px",
              padding: "2%",
            }}
          >
            <Grid container>
              <Grid item xs={5} sx={{ paddingTop: "%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <Grid item xs={12} sx={{ paddingBottom: "4%" }}>
                    <Typography variant="wpf_h5_semiBold" sx={{ color: "neutral.750" }}>
                      Skill Create
                    </Typography>
                  </Grid> */}
                  <Grid container sx={{ paddingBottom: "2%", paddingTop: "3%" }}>
                    <FormControl fullWidth>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "500",
                          mb: 1,
                          color: isLightTheme ? "#091E42" : "#FFFFFF",
                          paddingBottom: "1%",
                        }}
                      >
                        Skill Name
                      </Typography>
                      <MyTextField
                        fullWidth
                        sx={{ backgroundColor: "" }}
                        id="filled-basic"
                        // label="Skill Name"
                        variant="outlined"
                        value={name}
                        onChange={handleSetName}
                      />
                    </FormControl>
                  </Grid>
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

                  <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                    <FormControl fullWidth>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "500",
                          mb: 1,
                          color: isLightTheme ? "#091E42" : "#FFFFFF",
                          paddingBottom: "1%",
                        }}
                      >
                        Skill Description
                      </Typography>

                      <MyTextField
                        fullWidth
                        variant="outlined"
                        sx={{ backgroundColor: "" }}
                        value={description}
                        onChange={handleSetDescription}
                        // {...register("description", {
                        //   required: true,
                        // })}
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
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "5%", paddingTop: "5%" }}>
                <>
                  {" "}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      height: "60vh",
                      overflow: "auto",
                      scrollbarWidth: "thin",
                      "&::-webkit-scrollbar": {
                        width: "0.4em",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#888",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                      },
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead sx={{ background: "#F8F8F8", height: "70px" }}>
                          <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="left">Action</TableCell>
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
                              <TableCell align="left">{i + 1}</TableCell>
                              <TableCell align="left">{capitalizeFirstLetter(skill.name)}</TableCell>
                              <TableCell align="left">{capitalizeFirstLetter(skill.description)}</TableCell>
                              <TableCell align="left">
                                <SkillEdit skill={skill} />
                              </TableCell>

                              <TableCell align="left">
                                <>
                                  <SkillDeleteModal skill={skill} />
                                </>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Skills;

import {
  Button,
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
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { createASkill, getAllSkills } from "../../../features/slice/skillSlice";

import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import SkillDeleteModal from "./SkillDeleteModal";
import SkillEdit from "./SkillEdit";
// import io from "socket.io-client";

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
  const alert = useAlert();

  const toast = useToaster();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");
  const [skillsName, setSkillsName] = useState([]);
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
      <Box>
        <Grid
          container
          sx={{
            // justifyContent: "center",
            paddingLeft: "0%",
            paddingBottom: "2%",
          }}
        >
          <Typography variant="h4" sx={{ color: "#090080" }}>
            Skill
          </Typography>
        </Grid>
      </Box>
      <Box>
        <Paper elevation={0} style={paperstyle}>
          <Grid container>
            <Grid item xs={5} sx={{ paddingTop: "3%" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} sx={{ paddingBottom: "4%" }}>
                  <Typography variant="h6" sx={{ color: "#090080" }}>
                    Skill create
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingBottom: "2%", paddingTop: "3%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    id="filled-basic"
                    label="Skill Name"
                    variant="filled"
                    value={name}
                    onChange={handleSetName}
                  />
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
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    id="filled-basic"
                    label="Skill Description"
                    variant="filled"
                    value={description}
                    onChange={handleSetDescription}
                    // {...register("description", {
                    //   required: true,
                    // })}
                  />
                </Grid>
                <Grid container>
                  <ButtonStyle disabled={error || isLoading} variant="contained" type="submit">
                    Create Skill
                  </ButtonStyle>
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
                    height: "63vh",
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
                          <TableCell align="center">Action</TableCell>
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
                            <TableCell align="center">
                              <SkillEdit skill={skill} />
                            </TableCell>

                            <TableCell align="center">
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
    </>
  );
};

export default Skills;

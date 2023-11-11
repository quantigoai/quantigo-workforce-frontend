/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/SharedComponents/OptionalFieldsNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:54:34 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/SharedComponents/OptionalFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, December 19th 2022, 11:34:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import styled from "@emotion/styled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {FilledInput, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllSkills} from "../../../../features/slice/skillSlice";
import SkillField from "../../Course/InputFields/SkillField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const CustomClockIcon = styled(AccessTimeIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const OptionalFieldsNew = ({ register, setSkills }) => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skill);
  const { course } = useSelector((state) => state.course);
  const [skill, setSkill] = React.useState([]);

  const [skillSet1, setSkillSet1] = React.useState([]);

  const [skillSet2, setSkillSet2] = React.useState([]);
  useEffect(() => {
    dispatch(getAllSkills());
  }, []);

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;

    event.target.value.map((skill) => {
      const preData = {
        name: skill.name,
        id: skill._id,
      };
      setSkillSet1([
        {
          ...preData,
        },
      ]);
    });
    setSkillSet2([
      {
        ...skillSet1,
      },
    ]);
    setSkill(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Grid container sx={{ pb: "2%" }}>
        <Grid item xs={6} sx={{ pr: "1%" }}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}
              IconComponent={() => <CustomDownArrow />}
              {...register("jobType", { required: true })}
            >
              <MenuItem value={"tagging"}>Tag</MenuItem>
              <MenuItem value={"labeling"}>Labeling</MenuItem>
              <MenuItem value={"all"}>All</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={"image"}
              IconComponent={() => <CustomDownArrow />}
              label="Image"
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}
              {...register("category", { required: true })}
            >
              <MenuItem value={"image"}>Image</MenuItem>
              <MenuItem value={"video"}>Video</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container sx={{ paddingBottom: "2%" }}>
        <Grid item xs={4} sx={{ paddingRight: "1%" }}>
          <FormControl
            variant="filled"
            fullWidth
            sx={{ backgroundColor: "#FFFFFF" }}
            {...register("timeLimit", { required: false })}
          >
            <InputLabel htmlFor="filled-adornment-password">Expire Time (Minute)</InputLabel>
            <FilledInput
              defaultValue={90}
              endAdornment={
                <InputAdornment position="end">
                  <CustomClockIcon
                    IconComponent={() => <CustomClockIcon />}
                    aria-label="toggle password visibility"
                    edge="end"
                  ></CustomClockIcon>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>

        <Grid item xs={4} sx={{ paddingRight: "1%" }}>
          <FormControl
            variant="filled"
            fullWidth
            sx={{ backgroundColor: "#FFFFFF" }}
            {...register("work_worth_time", { required: false })}
          >
            <InputLabel htmlFor="filled-adornment-password">Actual Work Time (Minute)</InputLabel>
            <FilledInput
              defaultValue={30}
              endAdornment={
                <InputAdornment position="end">
                  <CustomClockIcon
                    IconComponent={() => <CustomClockIcon />}
                    aria-label="toggle password visibility"
                    edge="end"
                  ></CustomClockIcon>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ paddingRight: "0%" }}>
          <FormControl variant="filled" fullWidth sx={{ backgroundColor: "#FFFFFF" }}>
            <SkillField
              course={course}
              skills={skills}
              register={register}
              skillSet={skill}
              handleChangeSkills={handleChangeSkills}
              MenuProps={MenuProps}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default OptionalFieldsNew;

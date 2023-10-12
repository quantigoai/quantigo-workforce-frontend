import {Box, Button, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import {getAllSkills} from "../../../../features/slice/skillSlice";
import {updateAUserById} from "../../../../features/slice/userSlice";
import SkillField from "../../Course/InputFields/SkillField";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // borderRadius: "2px",
  // cursor: "pointer",
  width: "100%",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const UserSkillChange = ({ user }) => {
  const { skills, isLoading } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const [skillSet1, setSkillSet1] = React.useState([]);
  const [skillSet2, setSkillSet2] = React.useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const dispatch = useDispatch();

  const toast = useToaster();
  useEffect(() => {
    dispatch(getAllSkills());
  }, []);

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    // value.map((skill) => {
    selectedSkills.map((skill) => {
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
    !selectedSkills.length && setIsSkillEmpty(true);
    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };
  const handleChangeSkillSubmit = () => {
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const data = {
      id: user._id,
      varifiedData: {
        skills: skillColl,
      },
    };

    dispatch(updateAUserById(data)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger("Skill Update successfully", "success");
      } else {
        toast.trigger("Skill can not updated ", "error");
      }
    });
  };

  return (
    <>
      <SkillField skills={skills} skillSet={skill} handleChangeSkills={handleChangeSkills} user={user} />
      <Box sx={{ paddingTop: "3%" }}>
        <ButtonStyle variant="outlined" disabled={isLoading} onClick={handleChangeSkillSubmit}>
          Change Skill
        </ButtonStyle>
      </Box>
    </>
  );
};

export default UserSkillChange;

import React, { useState } from "react";
import { useSelector } from "react-redux";

const useHandleEditChange = () => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const { skills } = useSelector((state) => state.skill);
  const [prevSkills, setPrevSkills] = useState(projectDrawer.project_skills);
  const [editSkills, setEditSkills] = useState([]);
  const [count, setCount] = useState(prevSkills.length - 1);

  const handleEditSkill = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setCount(value.length);

    setEditSkills(
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const filteredSkillInfo = editSkills.map((skill) => ({
    name: skill.name,
    id: skill._id,
  }));

  return {
    handleEditSkill,
    filteredSkillInfo,
    count,
    prevSkills,
    editSkills,
    skills,
  };
};

export default useHandleEditChange;

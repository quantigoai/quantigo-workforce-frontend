import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import useAllFunc from "./useAllFunc";

const useHandleEditChange = () => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const { skills } = useSelector((state) => state.skill);
  const [isEdit, setIsEdit] = useState(false);
  const [prevSkills, setPrevSkills] = useState(projectDrawer.project_skills);

  const [editSkills, setEditSkills] = useState([]);
  const [editCount, setEditCount] = useState(
    projectDrawer.project_skills.length > 0 ? projectDrawer.project_skills.length : 0
  );

  const { setEditModalOpen } = useAllFunc();
  const alert = useAlert();

  useEffect(() => {
    setEditCount(prevSkills?.length - 1);
    setPrevSkills(projectDrawer.project_skills);
  }, [prevSkills?.length, projectDrawer.project_skills, isEdit]);

  const handleEditSkill = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setEditCount(value.length - 1);

    setEditSkills(typeof selectedSkills === "string" ? value.split(",") : selectedSkills);
  };

  const filteredSkillInfo = editSkills.map((skill) => ({
    name: skill.name,
    id: skill._id,
  }));

  return {
    handleEditSkill,
    filteredSkillInfo,
    editCount,
    prevSkills,
    editSkills,
    skills,
    isEdit,
    setIsEdit,
  };
};

export default useHandleEditChange;

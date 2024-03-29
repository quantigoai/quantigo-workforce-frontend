import {useState} from "react";
import {useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
// import { roleOptions } from "./userFilterOptions";
const useHandleChange = () => {
  const { skills } = useSelector((state) => state.skill);
  const [addSkills, setAddSkills] = useState([]);
  const [count, setCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [addRoles, setAddRoles] = useState([]);

  const toast = useToaster();

  const handleChangeSkill = (event) => {
    const {
      target: { value },
    } = event;
   
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setSkillCount(value.length - 1);
    setAddSkills((s) => {
      return typeof selectedSkills === "string" ? value.split(",") : selectedSkills;
    });
  };
  const handleChangeRoles = (event) => {
    const {
      target: { value },
    } = event;
    setCount(value.length - 1);
    setAddRoles(value);
  };

  return {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    setCount,
    addRoles,
    setAddRoles,
    handleChangeRoles,
    skillCount,
    setSkillCount,
  };
};

export default useHandleChange;

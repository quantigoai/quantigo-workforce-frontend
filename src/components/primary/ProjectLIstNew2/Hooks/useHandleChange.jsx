import { useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
// import { roleOptions } from "./userFilterOptions";
const useHandleChange = () => {
  const { skills } = useSelector((state) => state.skill);
  const [search, setSearch] = useState("");
  const [addSkills, setAddSkills] = useState([]);
  const [count, setCount] = useState(0);
  const [addRoles, setAddRoles] = useState([]);

  const alert = useAlert();

  const handleChangeSkill = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setCount(value.length - 1);
    setAddSkills((s) => {
      return typeof selectedSkills === "string" ? value.split(",") : selectedSkills;
    });
  };
  const handleChangeRoles = (event) => {
    const {
      target: { value },
    } = event;
    setCount(value.length - 1);
    setAddRoles(typeof value === "string" ? value.split(",") : value);
  };

  return {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    addRoles,
    search,
    setSearch,
    setAddRoles,
    handleChangeRoles,
  };
};

export default useHandleChange;

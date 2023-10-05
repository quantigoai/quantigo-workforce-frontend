import { useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
// import { roleOptions } from "./userFilterOptions";
const useHandleChange = () => {
  const { skills } = useSelector((state) => state.skill);
  const [addSkills, setAddSkills] = useState([]);
  const [count, setCount] = useState(0);
  const [addRoles, setAddRoles] = useState([]);

  const alert = useAlert();

  const handleChangeSkill = (event) => {
    console.log("2");
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setCount(value.length - 1);
    // inputRef.current = ` ${value.length - 2} more`;
    setAddSkills((s) => {
      console.log(s);
      // On autofill we get a stringified value.
      return typeof selectedSkills === "string" ? value.split(",") : selectedSkills;
    });
  };
  const handleChangeRoles = (event) => {
    const {
      target: { value },
    } = event;
    console.log("🚀 ~ file: useHandleChange.jsx:14 ~ handleChangeSkill ~ value:", value);
    setCount(value.length - 1);
    setAddRoles(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    addRoles,
    handleChangeRoles,
  };
};

export default useHandleChange;

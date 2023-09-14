import { useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

const useHandleChange = () => {
  const { skills } = useSelector((state) => state.skill);
  const [addSkills, setAddSkills] = useState([]);
  const [count, setCount] = useState(0);

  const alert = useAlert();
  const handleChangeSkill = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });
    setCount(value.length - 1);
    // inputRef.current = ` ${value.length - 2} more`;
    setAddSkills(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  return {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
  };
};

export default useHandleChange;

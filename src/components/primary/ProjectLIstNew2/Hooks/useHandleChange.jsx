import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProjectDrawer } from "../../../../features/slice/projectDrawerSlice";
import useAllFunc from "./useAllFunc";
import { useAlert } from "react-alert";

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
    count,
  };
};

export default useHandleChange;

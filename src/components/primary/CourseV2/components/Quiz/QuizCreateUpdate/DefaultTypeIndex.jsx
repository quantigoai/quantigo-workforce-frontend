import { Box } from "@mui/material";
import React from "react";
// import QuestionName from "../QuistionField/QuestionName";
// import BasicOptionField from "../QuistionField/BasicOptionField";
// import EnableUserInputField from "../QuistionField/ImageOptionField/EnableUserInputField";
import { useSelector } from "react-redux";
import EnableUserInputField from "./EnableUserInputField";
import QuestionName from "./QuestionName";
import BasicOptionField from "./BasicOptionField";

const DefaultTypeIndex = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: isLightTheme ? "#F8FAFC" : "", px: 1, py: "6px" }}>
        <EnableUserInputField
          handleChangeInput={handleChangeInput}
          inputField={inputField}
          inputFields={inputFields}
          update={update}
          handleUpdate={handleUpdate}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Box>
          <QuestionName
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            update={update}
            handleUpdate={handleUpdate}
          />
        </Box>
        <Box>
          <BasicOptionField
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            update={update}
            handleUpdate={handleUpdate}
          />
        </Box>
      </Box>
    </>
  );
};

export default DefaultTypeIndex;

import { Box } from "@mui/material";
import ProjectSelectFIlterField from "./ProjectSelectFIlterField";
import { useState } from "react";

const ProjectSelectFIlter = () => {
  const [filterdSelect, setFilteredSelect] = useState([]);
  const filterPDR = [
    { value: "pdr", label: "1" },
    { value: "pdr2", label: "2" },
    { value: "pdr3", label: "3" },
  ];
  const industryType = [
    { value: "type1", label: "1" },
    { value: "type2", label: "2" },
    { value: "type3", label: "3" },
  ];
  const clientFilter = [
    { value: "type1", label: "1" },
    { value: "type2", label: "2" },
    { value: "type3", label: "3" },
  ];
  const annotationFilter = [
    { value: "type1", label: "1" },
    { value: "type2", label: "2" },
    { value: "type3", label: "3" },
  ];
  const dataFilter = [
    { value: "video", label: "video" },
    { value: "image", label: "image" },
  ];

  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ mt: 1, width: "100%" }}>
      <ProjectSelectFIlterField label={"Pdr Options"} options={filterPDR} />
      <ProjectSelectFIlterField
        label={"Industry Type"}
        options={industryType}
        handleChange={handleChange}
      />
      <ProjectSelectFIlterField label={"Client Alias"} options={clientFilter} />
      <ProjectSelectFIlterField
        label={"Annotation Type"}
        options={annotationFilter}
        handleChange={handleChange}
      />
      <ProjectSelectFIlterField
        label={"Data Type"}
        options={dataFilter}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default ProjectSelectFIlter;

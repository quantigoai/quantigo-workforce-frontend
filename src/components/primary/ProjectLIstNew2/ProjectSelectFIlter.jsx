import { Box } from "@mui/material";
import ProjectSelectFIlterField from "./ProjectSelectFIlterField";
import { useEffect, useState } from "react";

const ProjectSelectFIlter = () => {
  const filterPDR = [
    { value: "pdr1", label: "pdr1" },
    { value: "pdr2", label: "pdr2" },
    { value: "pdr3", label: "pdr3" },
  ];
  const industryType = [
    { value: "industry1", label: "industry1" },
    { value: "industry2", label: "industry2" },
    { value: "industry3", label: "industry3" },
  ];
  const clientFilter = [
    { value: "alias1", label: "alias1" },
    { value: "alias2", label: "alias2" },
    { value: "alias3", label: "alias3" },
  ];
  const annotationFilter = [
    { value: "annotation1", label: "annotation1" },
    { value: "annotation2", label: "annotation2" },
    { value: "annotation3", label: "annotation3" },
  ];
  const dataFilter = [
    { value: "video", label: "video" },
    { value: "image", label: "image" },
  ];
  const [value, setValue] = useState();

  const handleChange = (event) => {
    // console.log(event.target);
    const field = event.target.name;
    const value = event.target.value;
    const newVal = [...value];
    newVal[field] = value;
    console.log(newVal);
  };

  return (
    <Box sx={{ mt: 1, width: "100%" }}>
      <ProjectSelectFIlterField
        label={"Pdr Options"}
        name="pdr_Options"
        options={filterPDR}
        handleChange={handleChange}
      />
      <ProjectSelectFIlterField
        label={"Industry Type"}
        name="industry_type"
        options={industryType}
        handleChange={handleChange}
      />
      <ProjectSelectFIlterField label={"Client Alias"} options={clientFilter} />
      <ProjectSelectFIlterField
        label={"Annotation Type"}
        name="annotation_type"
        options={annotationFilter}
        handleChange={handleChange}
      />
      <ProjectSelectFIlterField
        label={"Data Type"}
        name="data_type"
        options={dataFilter}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default ProjectSelectFIlter;

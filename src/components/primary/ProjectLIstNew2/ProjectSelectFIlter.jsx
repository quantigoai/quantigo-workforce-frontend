import { Box, Button, Grid } from "@mui/material";
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
  const [filterValue, setFilterValue] = useState({});

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newVal = { ...filterValue };
    newVal[field] = value;
    setFilterValue(newVal);
    console.log(newVal);
  };

  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid items xs={10}>
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
        <ProjectSelectFIlterField
          name="client_type"
          label={"Client Alias"}
          options={clientFilter}
          handleChange={handleChange}
        />
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
      </Grid>
      <Grid  item xs={2}>
        {" "}
        <Button> Delete</Button>
      </Grid>
    </Grid>
  );
};

export default ProjectSelectFIlter;

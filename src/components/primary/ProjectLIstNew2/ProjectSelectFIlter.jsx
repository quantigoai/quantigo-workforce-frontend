import { Button, Grid } from "@mui/material";
import ProjectSelectFIlterField from "./ProjectSelectFIlterField";

const ProjectSelectFIlter = ({
  filterPDR,
  platformOptions,
  statusOptions,
  projectTypeOptions,
  handleChange,
  handleClearFilter,
  filterValue,
}) => {
  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid items xs={11}>
        <ProjectSelectFIlterField
          label={"Pdr Options"}
          name="pdr"
          filterValue={filterValue}
          options={filterPDR}
          handleChange={handleChange}
        />

        <ProjectSelectFIlterField
          name="project_platform"
          label={"project Platform"}
          options={platformOptions}
          filterValue={filterValue}
          handleChange={handleChange}
        />
        <ProjectSelectFIlterField
          name={"project_type"}
          label="project Type"
          options={projectTypeOptions}
          filterValue={filterValue}
          handleChange={handleChange}
        />
        <ProjectSelectFIlterField
          name={"project_status"}
          label="project Status"
          options={statusOptions}
          filterValue={filterValue}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={1}>
        {" "}
        <Button
          onClick={() => handleClearFilter()}
          sx={{ mt: 2, textTransform: "none", borderRadius: "8px" }}
          size="medium"
          color="error"
          variant={"contained"}
        >
          {" "}
          Clear Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProjectSelectFIlter;

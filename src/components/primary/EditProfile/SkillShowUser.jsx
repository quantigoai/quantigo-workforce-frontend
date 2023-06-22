import {Chip, Grid, Typography} from "@mui/material";
import React from "react";
import {capitalizeFirstLetter} from "../../../helper/capitalizeFirstWord";

const SkillShowUser = ({ user }) => {
  return (
    <Grid container sx={{ paddingTop: "2%" }}>
      <Grid xs={12} sx={{ paddingBottom: "3%" }}>
        <Typography variant="h5" sx={{ color: "#090080" }}>
          {user.skills.length === 0 ? "" : "Skill"}
        </Typography>
      </Grid>

      {user.skills.length === 0 ? (
        <>
          <Grid container sx={{ paddingLeft: "10%" }} spacing={1}>
            <Typography></Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={1}>
            {user.skills.map((skill) => (
              <Grid item gap={1}>
                <Chip
                  sx={{
                    color: "#00A671",
                    background: "rgba(0, 166, 113, 0.12)",
                  }}
                  label={capitalizeFirstLetter(skill.name)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SkillShowUser;

import {
  Grid,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import React from "react";
import skillImage from "../../../../assets/images/skillsIcon.svg";
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
const CourseSkillChip = ({ skills }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={1} sx={{ paddingTop: "1%" }}>
          <img src={skillImage} />
        </Grid>

        <Grid item xs={11} sx={{ paddingLeft: "4%" }}>
          <Grid xs={12}>
            <Typography sx={{ color: "#969CAF" }} variant="caption">
              SKILLS
            </Typography>
          </Grid>
          <Grid xs={12}>
            {skills.length === 1 ? (
              <>
                {skills.map((skill) => (
                  <Grid key={skill._id} item gap={1}>
                    <Typography>
                      {" "}
                      <b>{skill.name} </b>
                    </Typography>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Grid container>
                  <Typography>
                    {" "}
                    <b>{skills[0]?.name} , </b>
                  </Typography>
                  <Tooltip
                    title={skills.map((skill) => (
                      <Grid key={skill._id} item gap={1}>
                        <Typography> {skill.name}</Typography>
                      </Grid>
                    ))}
                    arrow
                  >
                    <Typography sx={{ cursor: "pointer" }}>
                      <b> +{skills.length} more</b>
                    </Typography>
                  </Tooltip>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseSkillChip;
import {Grid, Tooltip, Typography} from "@mui/material";
import skillImage from "../../../../assets/images/skillsIcon.svg";
import {useSelector} from "react-redux";

const CourseSkillChip = ({ skills = [] }) => {
  const { isLoading } = useSelector((state) => state.course);

  return (
    <>
      {!isLoading && (
        <Grid container>
          <Grid item xs={1} sx={{ paddingTop: "1%" }}>
            <img src={skillImage} />
          </Grid>

          <Grid item xs={11} sx={{ paddingLeft: "4%" }}>
            <Grid item xs={12}>
              <Typography sx={{ color: "#969CAF" }} variant="caption">
                SKILLS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {skills?.length === 1 ? (
                <>
                  {skills?.map((skill) => (
                    <Grid key={skill._id} item gap={1}>
                      <Typography>
                        {" "}
                        <b>{skill?.name} </b>
                      </Typography>
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  <Grid container>
                    <Typography>
                      {" "}
                      <b>{skills[0]?.name + " ,"} </b>
                    </Typography>
                    <Tooltip
                      title={skills?.map((skill) => (
                        <Grid key={skill?._id} item gap={1}>
                          <Typography> {skill?.name}</Typography>
                        </Grid>
                      ))}
                      arrow
                    >
                      <Typography sx={{ cursor: "pointer" }}>
                        <b> + {skills?.length - 1} more</b>
                      </Typography>
                    </Tooltip>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CourseSkillChip;

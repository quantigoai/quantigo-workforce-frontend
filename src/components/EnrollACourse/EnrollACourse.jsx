import React from 'react'
import {useSelector} from "react-redux";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export const EnrollACourse = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { course } = useSelector((state) => state.course)

  const handelStartCourse = () => {
    navigate("/startcoures")
  }
  return (
    <div>
      <h1> {user.name} Enroll the {course.name} </h1>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {user.name} Enroll the {course.name}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>

          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button onClick={handelStartCourse} variant="contained">Start Course</Button>

          </Stack>
        </Container>
      </Box>
    </div>
  )
}

import Button from 'react-bootstrap/Button';
import React from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import parse from 'html-react-parser';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const Test = () => {
    
    const navigate = useNavigate();
    const {course} = useSelector((state) => state.course)
    const handleEnrollButton=()=>{
        navigate("/enrollcourse");
    }
  return (
    <div >
      <div>

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
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {course.name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            {course.description}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Level : {course.level}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Language : {course.language}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Image :{course.category}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Price : {course.price}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Skills : {course.skills}
            
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Version  : {course.__v}
            
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={handleEnrollButton} variant="primary">Enroll Button</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
      </div>
        {/* <img src={`${process.env.REACT_APP_SERVER_URL}/${course.images[0]}`}    />   */}
    <div>
    <div>
      <h1>{course.name}</h1>
    </div>
     <div>
    {/* <Image className='g3eaodg'
      src={imageanno}

      /> */}
    <div>
       {course.description}
    </div>
    <div>{course._id}</div>
    <div>NAME : {course.name}</div> 
    <div>Image :{course.category}</div>
    <div>Level : {course.level}</div>
    <div>Price : {course.price}</div>
    <div>Language : {course.language}</div>
    <div>Skills : {course.skills}</div>
    <div>prerequisiteCourse : {course.prerequisiteCourses}</div>
    <div>Version  : {course.__v}</div>
    <div>Create TIME : {course.createdAt}</div>
    <div>Course LAST Update TIME : {course.updatedAt}</div>
       <div>{course.content && parse(course.content)}</div>
    <br/>
    </div> 
    <Button onClick={handleEnrollButton} variant="primary">EnrollButton </Button>
    </div>
  
  </div>
  )
}

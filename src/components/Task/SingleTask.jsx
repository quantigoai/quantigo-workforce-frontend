import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import {Card} from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
// import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {deleteACourseById, getACourseByID} from '../../features/slice/courseSlice';
import NotificationToaster from '../NotificationToaster/NotificationToaster';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PreviewIcon from '@mui/icons-material/Preview';

export const SingleTask = ({ course }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { role } = user.user;
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleViewDetailsButton = (id) => {
    navigate(`/coursesdetails/${id}`)

  }
  const handledeleteACourse = (id) => {

    dispatch(deleteACourseById(id)).then((action) => {
      if (action.payload?.status === 200) {
        setMessage("Delete Course");
        setVariant("success");
        setOpen(true);
        setOpenDialog(false);

      }

    })
  }

  const handleModificationCourse = (id) => {
    dispatch(getACourseByID(id)).then((action) => {
      navigate(`/updatecourse/${id}`)
    })
  }


  // handle delete course

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };


  const buttonstyle = { color: 'white', backgroundColor: 'blue', margin: "5px auto" }

  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card
        sx={{  width: 345 ,height: "600", display: 'flex', flexDirection: 'column' }}

      >
        <CardMedia
          component="img"
          height="200"
          sx={{
            // 16:9
            pt: '0%',
          }}
          image={`${process.env.REACT_APP_SERVER_URL}/${course.images[0]}`}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 , height: 230,}}>
          <Typography gutterBottom variant="h5" component="h2">
            {course.name}
          </Typography>
          <Typography >
            {course.description}
          </Typography>
          <Typography>
            Language :  {course.language}
          </Typography>
          <Typography>
            Level :  {course.level}
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={buttonstyle} onClick={() => handleViewDetailsButton(course._id)} ><PreviewIcon /></Button>
          {role === "admin" || role === "trainer" ? <>
            <Button onClick={() => handleModificationCourse(course._id)}><ModeEditIcon /></Button>
            <Button style={buttonstyle}
              // onClick={() => handledeleteACourse(course._id)} 
              onClick={handleClickOpen}
            >
              <DeleteIcon />
            </Button>
            <Dialog
              open={openDialog}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure Delete Course?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Delete    {course.name}   Course
                </DialogContentText>
              </DialogContent>
              <DialogActions>

                <Button onClick={() => handledeleteACourse(course._id)} autoFocus>
                  Yes
                </Button>
                <Button onClick={handleClose}>No </Button>
              </DialogActions>
            </Dialog>
          </>
            :
            <></>}
        </CardActions>
      </Card>
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />
    </Grid>
  )
}

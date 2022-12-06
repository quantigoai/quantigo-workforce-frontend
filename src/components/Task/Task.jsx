import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses} from "../../features/slice/courseSlice";

import Grid from "@mui/material/Grid";
import {Card, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {useNavigate} from "react-router-dom";
//import Card from '@mui/material/Card';
import {SingleTask} from "./SingleTask";

export const Task = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const handleViewDetailsButton = (id) => {
    navigate(`/coursesdetails/${id}`);
  };
  const paperdiv1style = {
    padding: "10px 20px",
    width: 1250,
    height: 150,
    margin: "5px auto",
  };
  // const paperdiv2style ={padding:'10px 20px', width :1275,height : 850, margin:"5px auto"}
  const paperdiv2style = {
    padding: "10px 20px",
    width: 1275,
    
    margin: "5px auto",
  };
  //const paperstyle ={padding:'10px 20px', width :1300,height : 300, margin:"5px auto"}
  return (
    <>
      <div>
        <div>
          <div style={paperdiv1style}>
            <Row className="justify-content-md-center">
              <Card style={{ width: "100rem" }} className="text-center">
                <Card.Header as="h5">Welcome {user.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Available courses</Card.Title>
                  <Card.Text>Quantigo ai training project content.</Card.Text>
                  {/* <Button onClick={handletask} variant="primary">Start Tasking</Button> */}
                </Card.Body>
              </Card>
            </Row>
          </div>

          <div style={paperdiv2style}>
            <Grid container spacing={4}>
              {courses.map((course) => (
                <SingleTask key={course._id} course={course} />
              ))}
            </Grid>
          </div>
          <br />

          

          <br />
          <div>
            <Row className="justify-content-md-center">
              <Card style={{ width: "78rem" }} className="text-center">
                <Card.Header>Live </Card.Header>
                <Card.Body>
                  <Card.Title> live sessions</Card.Title>
                  <Button variant="danger">Live</Button>
                  <h4>upcoming live sessions</h4>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Live Name </th>
                        <th>Time</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Video Annotation</td>
                        <td>3:30 PM</td>
                        <td>LINK</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>image annotation</td>
                        <td>3.30 PM</td>
                        <td>LINK</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td> annotation</td>
                        <td>3.30 PM</td>
                        <td>LINK</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

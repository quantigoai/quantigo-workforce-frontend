import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Grid from '@mui/material/Unstable_Grid2';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis,} from "recharts";


const data = [
    {
        name: "january",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "february",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "March",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "April",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "June",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "July",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "August",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "September",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "October",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "November",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ProjectDashboard = () => {
    const { user } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const handletask = () => {
        navigate("/task")
    }
    const handelNda = (e) => {

        e.preventDefault();

    }
    const handleaccount = () => {

        navigate("/editmyprofile")
    }
    var cardStyle = {
        transitionDuration: '0.3s',
        height: '15vw'
    }
    var cardStyleGrid1 = {
        transitionDuration: '0.3s',
        height: '15vw',

    }
    var cardStyleGrid2 = {
        transitionDuration: '0.3s',
        height: '12vw',
    }
    const paperstyle = { padding: '10px 20px', width: 1300, height: 300, margin: "5px auto" }
    const card1style = { padding: '3px 3px', width: 600, height: 250, margin: "5px auto" };
    const card2style = { padding: '3px 3px', width: 600, height: 250, margin: "5px auto" }
    const card3style = { padding: '3px 3px', width: 600, height: 250, margin: "10px auto" }
    const card4style = { padding: '3px 3px', width: 600, height: 250, margin: "10px auto" }
    const carddiv3style1 = { padding: '3px 3px', width: 400, height: 200, margin: "5px auto" }

    const [selectedImage, setSelectedImage] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [imageName, setImageName] = React.useState("");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);

        navigate("/project")

    };
    const handledisagree = () => {
        setOpen(false);
    }
    const handleClickNda = () => {
        navigate("/ndadownload")
    }
    const handleAlluser = () => {
        navigate("/allusers")
    }
    const handleCreateCourse = () => {
        navigate("/createcourse")
    }
    const handlecreatequiz = () => {
        navigate("/createquiz")
    }
    const handleuserddetails = () => {
        navigate("/userdetails")
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <div>
            <div>


                <div style={paperstyle}>
                    <Grid container spacing={2} sx={{ position: "relative", bottom: "2px", "paddingTop": "40px" }}>
                        <Grid xs={6}>

                            <Card className="text-center" style={card1style} >
                                <Card.Header as="h5">Add Project</Card.Header>
                                <Card.Body>
                                    <Card.Title>Craete A New Project </Card.Title>
                                    <Card.Text>
                                        Quantigo ai project
                                    </Card.Text>
                                    <Button variant="primary">Create project</Button>
                                </Card.Body>
                            </Card>

                        </Grid>

                        <Grid xs={6}>
                            <Card style={card2style} className="text-center" >
                                <Card.Header as="h5">All project List</Card.Header>
                                <Card.Body>
                                    <Card.Title>Active project</Card.Title>
                                    <Card.Text>
                                        Quantigo ai training project  content.
                                    </Card.Text>
                                    <Button >project list</Button>
                                </Card.Body>
                            </Card>
                        </Grid>
                        {/* <Grid xs={2}>
       <Card style={cardStyleGrid1} className="text-center" >
       <Card.Header as="h5">{user.name}</Card.Header>
       <Card.Body>
       
       <Card.Text>
         {user.name} Role : {user.role}
       </Card.Text>
         {user.occupation}
        </Card.Body>
       </Card>
       </Grid> */}

                    </Grid>



                </div>

                <div style={paperstyle}>
                    <Grid container spacing={0} sx={{ position: "relative", bottom: "2px", "paddingTop": "30px" }}>
                        <Grid xs={6}>
                            <Card style={card3style}>
                                <Card.Body>
                                    <Card.Title>Create  Quiz</Card.Title>
                                    <Card.Text>
                                        Course Quiz create

                                    </Card.Text>
                                    <Button >Quiz Quiz</Button>
                                </Card.Body>

                            </Card>
                        </Grid>

                        <Grid xs={6}>
                            <Card style={card3style}>
                                <Card.Body>
                                    <BarChart
                                        width={550}
                                        height={180}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        {/* <Legend /> */}
                                        <Bar dataKey="pvdss" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                    <Button onClick={handleuserddetails} >Project  statistics</Button>


                                </Card.Body>

                            </Card>



                        </Grid>



                    </Grid>
                </div>


            </div>


        </div>
    )
}

export default ProjectDashboard;
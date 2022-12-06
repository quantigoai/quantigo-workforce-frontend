import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { createJob, getAllJobs } from '../../../features/slice/jobSlice';


const RejectjobCommentModal = () => {
    const dispatch = useDispatch();
    const { teams } = useSelector((state) => state.team);
    const { workspaces } = useSelector((state) => state.workspace);
    const { projects } = useSelector((state) => state.project);
    const { datasets } = useSelector((state) => state.dataset);
    const { jobs } = useSelector((state) => state.job);


    const { register, handleSubmit } = useForm();
    const [teamID, setTeamID] = useState("");
    const [workspaceID, setWorkSpaceID] = useState("")
    const [projecID, setProjectID] = useState("")
    const [datasetID, setDatasetID] = useState("")
    const [imagecount, setimagecount] = useState("")

    useEffect(() => {

        dispatch(getAllJobs())
    }, []);




    const onSubmit = (data) => {
        console.log(data);
        dispatch(createJob(data))
        console.log(jobs);
    }

    const paperstyle = { padding: '0px 0px', width: 700, height: 750, margin: "0px auto" }

    return (
        <>

            <Grid>
                <div >
                    <Paper elevation={5} style={paperstyle} sx={{  }}>
                        <Grid container style={{ paddingTop: "30%", paddingLeft: "30%" }} >
                            <Typography variant='h4'>
                                Reviewer Update

                            </Typography>

                        </Grid>
                        <form >
                            <Grid container style={{ padding: "2%" }}>
                               <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                 
                               </Grid>
                                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                    <TextField
                                        fullWidth
                                        name="Comment"
                                        label="Comment"
                                        {...register("reviweNote", { required: true })}
                                    >

                                    </TextField>
                                </Grid>

                                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                    <Button>Update</Button>
                                </Grid>

                            </Grid>

                        </form>
                    </Paper>
                </div>
            </Grid>

        </>
    )
}

export default RejectjobCommentModal;
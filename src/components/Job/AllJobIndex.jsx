import React, {useEffect, useState} from 'react'
import {FormControlLabel, Grid, Radio, RadioGroup, Typography} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {getAllAssignedJob, getAllJobs} from '../../features/slice/jobSlice';
import AllJobList from './AllJobList';
import AllAssaignJob from './AllAssaignJob';


const AllJobIndex = () => {
    const [value1, setValue1] = React.useState('Pandding');
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    const { role } = user.user;
    const [jobPandding, setJobPannding] = useState("")
    useEffect(() => {
        dispatch(getAllJobs())
        dispatch(getAllAssignedJob())
    }, [])
    const handleChangeTag = (event) => {
        setValue1(event.target.value);

    };

    return (
        <>
            <Grid container sx={{ paddingLeft: "5%" }}>
                <Typography variant='h4' style={{ color: "#5C5CFF" }}>Job list</Typography>
            </Grid>

            {role === "admin" || role === "project_lead" || role === "delivery_manager" ?
                <Grid container sx={{ paddingLeft: "5%" }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value1}
                        onChange={handleChangeTag}
                    >
                        <FormControlLabel value="Pandding" control={<Radio />} label="Pending job" />
                        <FormControlLabel value="taken" control={<Radio />} label="On Going Job" />
                    </RadioGroup>
                </Grid>
                : <></>
            }
            {
                value1 === "Pandding" ? <AllJobList /> : <AllAssaignJob />
            }
        </>
    )
}

export default AllJobIndex
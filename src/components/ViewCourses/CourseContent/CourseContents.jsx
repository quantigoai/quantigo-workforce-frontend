import {Paper} from '@mui/material'
import React from 'react'

const CourseContents = () => {
    const paperstyle = { padding: "0px 0px", width: 1200,  height :900, borderRadius: 20 , margin: "20px auto" }; 
    const headergrid ={ paddingTop:" 10px 0px",backgroundColor: "#5F71F1",borderRadius: 20 ,height :100}
    const coursenamegrid ={ height :100}
    return (
        <>
        
            <div elevation={20} style={{ padding: "10px" }}>
                <Paper elevation={10} style={paperstyle} sx={{ padding: "20%" }}>
                    <div style={headergrid}>
                    <h6>New Course! Complete this short course to continue working on the Watch_tryon project.</h6>
                    </div>
                    <div style={coursenamegrid}>
                        <h1>
                        Welcome to   Course Name
                        </h1>

                    </div>
                    
                </Paper>
            </div>
           
        </>
    )
}

export default CourseContents
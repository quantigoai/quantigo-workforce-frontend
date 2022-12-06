import {Box} from '@mui/material'
import React from 'react'
import RejectjobCommentModal from './RejectjobCommentModal';


const RejectJobModal = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        //    paddingLeft :"20%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 10,
        p: 1,
    };
    return (
        <>
            <Box sx={style}>
                <RejectjobCommentModal />
            </Box>

        </>
    )
}

export default RejectJobModal;
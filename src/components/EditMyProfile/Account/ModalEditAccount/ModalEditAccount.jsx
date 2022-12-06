import {Box} from '@mui/material'
import React from 'react'
import EditMyProfile from '../../EditMyProfile';

const ModalEditAccount = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    //    paddingLeft :"20%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 10,
        p:1,
    };
    return (
        <>
            <Box sx={style}>
                <EditMyProfile />
            </Box>

        </>
    )
}

export default ModalEditAccount
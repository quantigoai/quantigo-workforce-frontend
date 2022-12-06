import {Avatar, Button, Grid, Modal, Paper, Typography} from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModalEditAccount from './ModalEditAccount/ModalEditAccount';
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch, useSelector} from "react-redux";

const Account = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const paperstyle = { padding: "5%", width: "100%", height: "100%" }
    const accountgrid = { paddingLeft: "5%", paddingTop: "2%" }
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    return (
        <>
            <div style={{ background: "#F5F7F9", width: "270%", height: "100%" }}>


                <Grid container style={accountgrid}>
                    <Grid item xs={1}>
                        <Avatar sx={{ bgcolor: "#D3ECFA" }}>
                            <AccountCircleIcon style={{ color: "#1974D2" }} />
                        </Avatar>

                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h5' style={{ color: "#1974D2" }}>Account Information</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: "4%" }} >
                    <Paper elevation={2} style={paperstyle}>

                        <Grid container>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h5' style={{ color: "#98AFC7" }}>Account Name</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>{user.name}</Typography>
                            </Grid>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h5' style={{ color: "#728FCE" }}>Gender:</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>{user.gender}</Typography>
                            </Grid>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h5' style={{ color: "#728FCE" }}>Email :</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>{user.email}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h5' style={{ color: "#728FCE" }}>Occupation :</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>{user.occupation}</Typography>
                            </Grid>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h5' style={{ color: "#728FCE" }}>Phone Number :</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>{user.phone}</Typography>
                            </Grid>
                            <Grid item xs={3} style={{ paddingBottom: "2%" }}>
                                <Typography variant='h6' style={{ color: "#728FCE" }}>password:</Typography>
                                <Typography variant='h6' style={{ color: "#566D7E" }}>********</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item style={{ paddingLeft: "10%", paddingTop: "3%" }}>
                                <Button variant="contained" onClick={handleOpen}><EditIcon />Edit</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <ModalEditAccount />
                                </Modal>
                            </Grid>
                        </Grid>



                    </Paper>

                </Grid>
            </div>
        </>
    )
}

export default Account
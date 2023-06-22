import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import croxButton from "../../../assets/images/u_multiply.png";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  borderRadius: "2px",
  width: "80%",
  height: "30px",
});

const NewNdaUpload = () => {
  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleClick() {
    setClicked(true);
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description">
        <Grid container>
          <Grid xs={10}>
            <DialogTitle id="dialog-title">
              {"Non-disclosure agreement (NDA)"}
            </DialogTitle>
          </Grid>
          <Grid xs={2}>
            <DialogTitle id="dialog-title">
              <Button
                onClick={() => {
                  handleClose();
                }}>
                <img src={croxButton} />
              </Button>
            </DialogTitle>
          </Grid>
        </Grid>
        <DialogContent>
          <DialogContentText id="dialog-description" variant="caption">
            Lorem ipsum dolor sit amet consectetur. Dolor ipsum consequat urna
            tortor lectus mauris. Urna eu ac aliquam vitae habitasse est metus
            porta. Venenatis eget ullamcorper in faucibus nec eleifend massa in
            nulla. Interdum diam congue vitae at non ut. Pulvinar enim non
            pretium iaculis in nisl urna. Facilisis faucibus imperdiet duis
            mauris vel vitae. Egestas at semper erat nibh. Erat pulvinar platea
            penatibus dictum ornare pulvinar sit amet sed. Congue in nisi
            commodo ullamcorper scelerisque.
          </DialogContentText>
          <DialogContentText id="dialog-description" variant="caption">
            Neque aliquet at neque urna sed tristique dolor non venenatis.
            Scelerisque eget netus duis integer ac a vitae neque ut. Proin id
            nisl in netus odio fames sed eget faucibus. Cursus rutrum sagittis
            nec euismod non. Proin sollicitudin eget potenti in volutpat augue.
            Eu tortor purus venenatis volutpat. Ornare eget tellus pulvinar
            laoreet. Velit nunc congue sit interdum donec mauris lorem id. Ut
            augue blandit ut morbi vitae sed. In volutpat turpis vitae est
            lacus.
          </DialogContentText>
          <DialogContentText id="dialog-description" variant="caption">
            Placerat vestibulum pulvinar elementum condimentum et cursus purus
            ultrices. Sagittis ornare auctor ipsum id sed elementum dui.
            Condimentum egestas magna pretium amet non a amet ac. Quisque eget
            diam at eget nulla sit nisl egestas duis. Sodales hendrerit iaculis
            phasellus cras quis ornare. Molestie quam id volutpat fringilla leo
            viverra pharetra. Id tellus pellentesque pulvinar commodo mauris
            pellentesque netus.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container sx={{ padding: "1%", paddingLeft: "2%" }}>
            <Grid xs={4}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#FFFFFF" }}>
                <InputLabel htmlFor="filled-adornment-password">
                  Write your name here
                </InputLabel>
                <FilledInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"></IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <InputLabel
                htmlFor="filled-adornment-password"
                sx={{ paddingLeft: "30%" }}>
                Signature
              </InputLabel>
            </Grid>
            <Grid xs={4}></Grid>
            <Grid xs={4} sx={{ justifyContent: "right" }}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#FFFFFF" }}>
                <InputLabel htmlFor="filled-adornment-password">
                  DD/MM/YYYY
                </InputLabel>
                <FilledInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"></IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <InputLabel
                htmlFor="filled-adornment-password"
                sx={{ paddingLeft: "40%" }}>
                Date
              </InputLabel>
            </Grid>
          </Grid>
        </DialogActions>
        <DialogActions>
          <Grid container sx={{ padding: "0%", paddingLeft: "2%" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Dolor justo tristique nec mauris volutpat id morbi commodo odio."
              />
            </FormGroup>
          </Grid>
        </DialogActions>
        <DialogActions>
          <Grid container sx={{ paddingLeft: "50%" }}>
            <Grid xs={6}>
              <ButtonStyle variant="outlined">CANCEL</ButtonStyle>
            </Grid>
            <Grid xs={6}>
              <ButtonStyle variant="contained">AGREE</ButtonStyle>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewNdaUpload;

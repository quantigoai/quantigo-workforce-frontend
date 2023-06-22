import {Avatar, Button, Grid, styled} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const ProfilePictureIndex = ({
  coverImage,
  handleImage,
  removeImage,
  handleuploadImage,
}) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const image = user.image;

  return (
    <>
      <Grid container>
        <Grid xs={4}>
          <Avatar
            alt="Profile Picture"
            src={!coverImage ? image : coverImage}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid xs={8} sx={{ paddingTop: "5%" }}>
          <Grid xs={12} sx={{ paddingBottom: "3%" }}>
            <ButtonStyle
              variant="contained"
              aria-label="upload picture"
              component="label">
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              Change picture
              {/* <PhotoCamera /> */}
            </ButtonStyle>
          </Grid>
          <Grid xs={12}>
            <Button
              variant="outlined"
              sx={{
                color: "#2D58FF",

                borderRadius: "2px",
              }}
              aria-label="remove picture"
              component="label"
              onClick={removeImage}>
              Remove Picture
              {/* <DeleteIcon /> */}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePictureIndex;

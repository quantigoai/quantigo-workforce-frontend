import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  myProfileEdit,
  removeMyImage,
  uploadMyImage,
} from "../../../features/slice/userSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import AddressField from "./AddressField";
import CityField from "./CityField";
import DobField from "./DobField";
import EmailField from "./EmailField";
import GenderField from "./GenderField";
import NameFiled from "./NameFiled";
import OccupationField from "./OccupationField";
import PhoneNumberField from "./PhoneNumberField";
import ProfilePictureIndex from "./ProfilePicture/ProfilePictureIndex";
import SkillShowUser from "./SkillShowUser";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import ActivateDeactivateStatus from "./ActivateDeactivateStatus";
import ChangePasswordIndex from "./Password/ChangePasswordIndex";
import NagadPhoneNumberField from "./NagadPhoneNumberField";

const paperStyle = {
  width: "80vw",
};
const EditProfileIndex = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, seteditAble] = useState("show");
  useEffect(() => {
    if (location.pathname === "/edit-profile") {
      seteditAble("edit");
    } else {
      seteditAble("show");
    }
  }, [location.pathname]);

  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };
  const removeImage = () => {
    dispatch(removeMyImage(user._id)).then((action) => {
      if (action.payload.status === 200) {
        alert.show("Image remove Successfully", { type: "success" });
        setCoverImageFile(null);
        setCoverImage(null);
        navigate("/edit-profile");
      }
    });
  };

  const handleuploadImage = () => {};

  const onSubmit = (data) => {
    const finalData = {
      id: user._id,
      data,
    };

    const formData = new FormData();
    formData.append("image", coverImageFile);

    const finalImageData = {
      id: user._id,
      formData,
    };

    dispatch(uploadMyImage(finalImageData));

    dispatch(myProfileEdit(finalData)).then((action) => {
      if (action.payload.status === 200) {
        alert.show("Profile update Successfully", { type: "success" });
        navigate("/edit-profile");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          {location.pathname === "/edit-profile" ? (
            <Grid
              container
              sx={{
                paddingBottom: "2%",
              }}
            >
              <CommonHeader
                title="Profile"
                // description={}
                isLoading={isLoading}
                // customButton="Edit Profile"
              />
            </Grid>
          ) : (
            <Grid
              container
              sx={{
                paddingBottom: "2%",
              }}
            >
              <CommonHeader
                title="Show Profile"
                // description={}
                // isLoading={isLoading}
                customButton="Edit Profile"
              />
            </Grid>
          )}
        </Box>

        <Box style={{ padding: "0%" }}></Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          {/* profile pic */}
          <Box sx={{ padding: "2%" }}>
            <Grid container>
              <Grid item xs={6}>
                <ProfilePictureIndex
                  coverImage={coverImage}
                  handleImage={handleImage}
                  removeImage={removeImage}
                  handleuploadImage={handleuploadImage}
                />
              </Grid>
              <Grid item xs={4}>
                {user.role === "admin" ? (
                  <></>
                ) : (
                  <>
                    <SkillShowUser user={user} />
                  </>
                )}
              </Grid>
              {user.role === "reviewer" ? (
                <>
                  <Grid item xs={2}>
                    <ActivateDeactivateStatus user={user} />
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </Grid>
          </Box>

          <Box sx={{ padding: "2%" }}>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Grid item xs={1} sx={{ paddingTop: ".5%" }}>
                <Typography variant="h7" sx={{ color: "#090080" }}>
                  General Info
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Chip
                  sx={{
                    color: "#D8514B",
                    background: "rgba(216, 81, 75, 0.1)",
                  }}
                  label={capitalizeFirstLetter(user.qaiUserName || "")}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <NameFiled
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <GenderField user={user} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <OccupationField
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <DobField user={user} />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "2%" }}>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Typography variant="h7" sx={{ color: "#090080" }}>
                Contact Info
              </Typography>
            </Grid>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <PhoneNumberField
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <EmailField user={user} />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <AddressField
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <CityField
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <NagadPhoneNumberField
                  editAble={editAble}
                  user={user}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "2%" }}>
            <Grid container sx={{ paddingBottom: "1%" }}>
              <Typography variant="h7" sx={{ color: "#090080" }}>
                Change Password
              </Typography>
            </Grid>
            {/* <Grid container>
              <Grid xs={4} sx={{ paddingRight: "1%" }}>
                <CurrentPasswordfield />
              </Grid>
              <Grid xs={4} sx={{ paddingRight: "1%" }}>
                <ResetPassword />
              </Grid>
              <Grid xs={4}>
                <ConfirmPassword />
              </Grid>
            </Grid> */}
            <Grid xs={4}>
              <ChangePasswordIndex />
              {/*               
              <Button
                variant="contained"
                sx={{
                  height: "45px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FF9A45",
                    color: "#1D1D1D",
                  },
                  borderRadius: "2px",
                }}
                onClick={() => handleChangePassword()}>
                Change Password
              </Button> */}
            </Grid>
          </Box>
        </Paper>
      </form>
    </>
  );
};

export default EditProfileIndex;

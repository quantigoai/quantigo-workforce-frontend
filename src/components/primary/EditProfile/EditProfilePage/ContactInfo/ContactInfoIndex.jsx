import React, { useState } from "react";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { Box, Button, Grid, Typography } from "@mui/material";
import FieldForProfile from "../FieldForProfile";
import CommonFieldTest from "../CommonFieldTest";
import SelectFieldForProfile from "../SelectFieldForProfile";
import { useSelector } from "react-redux";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";

const ContactInfoIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  console.log("🚀 ~ file: MyprofileIndexNew.jsx:21 ~ MyprofileIndexNew ~ user:", user);
  const [editAble, setEditAble] = useState(false);
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const handleCancel = () => {
    setEditAble(false);
  };
  return (
    <>
      <>
        <Box
          sx={{
            flex: "1",
            height: {
              lg: "95%",
              xl: "100%",
              xxl: "100%",
            },
          }}
        >
          <Box
            sx={{
              // flex: "0 0 auto",
              height: {
                lg: "17%",
                xl: "17%",
                xxl: "17%",
              },
              // backgroundColor: "yellow",
            }}
          >
            <ProfilePicture
              user={user}
              editAble={editAble}
              handleEditProfile={handleEditProfile}
              //   coverImage={coverImage}
              //   handleImage={handleImage}
              //   coverImageFile={coverImageFile}
            />
          </Box>

          <Box
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "0",
              },
              height: {
                lg: "78%",
                xl: "71%",
                xxl: "75%",
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  "&::-webkit-scrollbar": {
                    width: "0",
                  },
                  overflowY: "auto",
                }}
              >
                {/* <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Personal Information
                  </Typography>
                </Grid> */}

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <PasswordFieldForProfile
                      name="phone"
                      label={"Phone No."}
                      //   defaultValue={contactNo}
                      disableItem={false}
                      //   handleChange={handlePhoneNumberChange}
                      editAble={editAble}
                      //   phone={contactNo}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <PasswordFieldForProfile
                      name="billingAccountNo"
                      label={"Nagad No."}
                      //   defaultValue={billingAccountNo}
                      disableItem={false}
                      //   handleChange={handlebillingAccountNoChange}
                      editAble={editAble}
                      //   phone={billingAccountNo}
                    />
                  </Grid>
                </Grid>

                <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Present Address
                  </Typography>
                </Grid>

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Division"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"District"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Sub-District"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"City / Village"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Road Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"House Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Permanent Address
                  </Typography>
                </Grid>

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"District"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Subdistrict"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Postal Code"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Area"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Road Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"House Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Emergency Contact Information
                  </Typography>
                </Grid>

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Name of Contact Person"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Relationship"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={12} sx={{ paddingRight: "0%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Mobile Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  {/* <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Address"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid> */}
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"District"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Subdistrict"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Postal Code"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Area"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Road Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"House Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* <button type="submit">Submit</button> */}
            </Box>
          </Box>

          <Box
            sx={{
              height: {
                lg: "10%",
                xl: "14%",
                xxl: "8%",
              },
            }}
          >
            <Grid
              container
              sx={{
                height: "100%",
              }}
            >
              {editAble && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      // onClick={() => handleSubmitChange()}
                      disabled={isLoading}
                      sx={{
                        height: {
                          lg: "30px",
                          xl: "40px",
                          xxl: "40px",
                        },
                        backgroundColor: "primary.B200",
                        color: "neutral.N000",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "12px",
                        width: "150px",
                        mr: 3,
                        "&:hover": {
                          backgroundColor: "primary.B200",
                          color: "neutral.N000",
                        },
                        "&.Mui-disabled": {
                          background: "#B6C9F0",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={() => handleCancel()}
                      sx={{
                        height: {
                          lg: "30px",
                          xl: "40px",
                          xxl: "40px",
                        },
                        textTransform: "none",
                        backgroundColor: "#F2F6FC",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#253E5C",
                        width: "150px",
                        "&:hover": {
                          background: "#F2F6FC",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </>
    </>
  );
};

export default ContactInfoIndex;

import React, { useEffect, useState } from "react";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import FieldForProfile from "../FieldForProfile";
import CommonFieldTest from "../CommonFieldTest";
import SelectFieldForProfile from "../SelectFieldForProfile";
import { useSelector } from "react-redux";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
import PermanentAdressIndex from "./PermanentAdressIndex";
import EmergencyContactInformation from "./EmergencyContactInformation";
import SelectFieldForBdInfo from "./SelectFieldForBdInfo";
import axios from "axios";
const ContactInfoIndex = () => {
  const url = import.meta.env.VITE_APP_SERVER_URL;
  const { user, isLoading } = useSelector((state) => state.user);
  const [contactNo, setContactNo] = useState(user.contactNo);
  const [billingAccountNo, setBillingAccountNo] = useState(user.billingAccountNo);
  const [editAble, setEditAble] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubDistricts] = useState([]);

  const [divisionsPermanent, setDivisionsPermanent] = useState([]);
  const [districtsPermanent, setDistrictsPermanent] = useState([]);
  console.log("🚀 ~ file: ContactInfoIndex.jsx:25 ~ ContactInfoIndex ~ districtsPermanent:", districtsPermanent);
  const [subdistrictsPermanent, setSubDistrictsPermanent] = useState([]);

  const [divisionsEmergency, setDivisionsEmergency] = useState([]);
  const [districtsEmergency, setDistrictsEmergency] = useState([]);
  const [subdistrictsEmergency, setSubDistrictsEmergency] = useState([]);

  const [presentAddress, setPresentAddress] = useState({
    division: "",
    district: "",
    subdistrict: "",
    city: "",
    roadNumber: "",
    houseNumber: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    division: "",
    district: "",
    subdistrict: "",
    city: "",
    roadNumber: "",
    houseNumber: "",
  });
  const [emergencyContact, setEmergencyContact] = useState({
    nameContactPerson: "",
    relationship: "",
    mobileNumber: "",
    division: "",
    district: "",
    subdistrict: "",
    city: "",
    roadNumber: "",
    houseNumber: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  console.log("🚀 ~ file: ContactInfoIndex.jsx:61 ~ ContactInfoIndex ~ isChecked:", isChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // if (isChecked) {
    //   console.log("sdasd")
    //   setPermanentAddress({
    //     division: presentAddress.division,
    //     district: presentAddress.district,
    //     subdistrict: presentAddress.subdistrict,
    //     city: presentAddress.city,
    //     roadNumber: presentAddress.roadNumber,
    //     houseNumber: presentAddress.houseNumber,
    //   });
    // }
  };
  useEffect(() => {
 
    if (isChecked) {
      setPermanentAddress({
        division: presentAddress.division,
        district: presentAddress.district,
        subdistrict: presentAddress.subdistrict,
        city: presentAddress.city,
        roadNumber: presentAddress.roadNumber,
        houseNumber: presentAddress.houseNumber,
      });

      setDistrictsPermanent([...districts]);
      setSubDistrictsPermanent([...subdistricts]);
      // setDivisionsPermanent((prevSubDistricts) => [...prevSubDistricts, ...divisions]);
      // setDistrictsPermanent((prev) => [...prev, districts]);
      // setSubDistrictsPermanent((prev) => [...prev, subdistricts]);
    }
    if (!isChecked) {
      setPermanentAddress({
        division: "",
        district: "",
        subdistrict: "",
        city: "",
        roadNumber: "",
        houseNumber: "",
      });

      setDistrictsPermanent([]);
      setSubDistrictsPermanent([]);
      // setDivisionsPermanent((prevSubDistricts) => [...prevSubDistricts, ...divisions]);
      // setDistrictsPermanent((prev) => [...prev, districts]);
      // setSubDistrictsPermanent((prev) => [...prev, subdistricts]);
    }
  }, [isChecked]);
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const handlePhoneNumberChange = (e) => {
    setContactNo(e.target.value);
  };
  const handlebillingAccountNoChange = (e) => {
    setBillingAccountNo(e.target.value);
  };
  useEffect(() => {
    axios.get(`${url}/bd-info/division/get-all-divisions`).then((res) => {
      setDivisions(res.data);
      setDivisionsEmergency(res.data);
      setDivisionsPermanent(res.data);
    });
  }, []);

  const handleCancel = () => {
    setEditAble(false);
  };
  // Present Address

  const handleChangeDivision = (id, name) => {
    console.log("🚀 ~ file: ContactInfoIndex.jsx:43 ~ handleChangeDivision ~ name:", name);
    console.log(id);
    // setPresentAddress({})
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      division: name,
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistricts(res.data);
      setSubDistricts([]);
    });
  };
  const handleChangeDistricts = (id, name) => {
    console.log(id);
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      district: name,
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistricts(res.data);
    });
  };
  const handleChangeSubDistricts = (id, name) => {
    console.log("🚀 ~ file: ContactInfoIndex.jsx:57 ~ handleChangeSubDistricts ~ name:", name);
    console.log(id);
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      subdistrict: name,
    }));
  };

  const handleChangeSubDistrictsCity = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };
  const handleChangeSubDistrictsRoadNumber = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      roadNumber: e.target.value,
    }));
  };
  const handleChangeSubDistrictsHouseNumber = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      houseNumber: e.target.value,
    }));
  };
  // permanent Address

  const handleChangeDivisionPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      division: name,
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistrictsPermanent(res.data);
      setSubDistrictsPermanent([]);
    });
  };
  const handleChangeDistrictsPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      district: name,
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistrictsPermanent(res.data);
    });
  };
  const handleChangeSubDistrictsPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      subdistrict: name,
    }));
  };
  const handleChangePermanentCity = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };
  const handleChangePermanentRoadNumber = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      roadNumber: e.target.value,
    }));
  };
  const handleChangePermanentHouseNumber = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      houseNumber: e.target.value,
    }));
  };

  // Emergency Contact Information

  const handleChangeDivisionEmergency = (id, name) => {
    // setPresentAddress({})
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      division: name,
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistrictsEmergency(res.data);
      setSubDistrictsEmergency([]);
    });
  };
  const handleChangeDistrictsEmergency = (id, name) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      district: name,
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistrictsEmergency(res.data);
    });
  };
  const handleChangeSubDistrictsEmergency = (id, name) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      subdistrict: name,
    }));
  };
  const handleChangeEmergencyNamePerson = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      nameContactPerson: e.target.value,
    }));
  };
  const handleChangeEmergencyRelation = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      relationship: e.target.value,
    }));
  };

  const handleChangeEmergencyMobileNumber = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      mobileNumber: e.target.value,
    }));
  };

  const handleChangeEmergencyCity = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };

  const handleChangeEmergencyRoadNumber = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      roadNumber: e.target.value,
    }));
  };

  const handleChangeEmergencyHouseNumber = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      houseNumber: e.target.value,
    }));
  };

  const handleSubmitChange = () => {
    const data = {
      contactNo,
      billingAccountNo,
    };
    console.log(presentAddress);
    console.log(permanentAddress);
    console.log(emergencyContact);
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
                      defaultValue={contactNo}
                      disableItem={false}
                      handleChange={handlePhoneNumberChange}
                      editAble={editAble}
                      phone={contactNo}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <PasswordFieldForProfile
                      name="billingAccountNo"
                      label={"Nagad No."}
                      defaultValue={billingAccountNo}
                      disableItem={false}
                      handleChange={handlebillingAccountNoChange}
                      editAble={editAble}
                      phone={billingAccountNo}
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
                    <SelectFieldForBdInfo
                      name="Division"
                      label={"Division"}
                      defaultValue={presentAddress.division}
                      disableItem={false}
                      editAble={editAble}
                      handleChange={handleChangeDivision}
                      options={divisions}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectFieldForBdInfo
                      name="District"
                      label={"District"}
                      defaultValue={presentAddress.district}
                      disableItem={false}
                      editAble={editAble}
                      handleChange={handleChangeDistricts}
                      options={districts}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <SelectFieldForBdInfo
                      name="Sub-District"
                      label={"Sub-District"}
                      defaultValue={presentAddress.subdistrict}
                      disableItem={false}
                      editAble={editAble}
                      handleChange={handleChangeSubDistricts}
                      options={subdistricts}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"City / Village"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      handleChange={handleChangeSubDistrictsCity}
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
                      handleChange={handleChangeSubDistrictsRoadNumber}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"House Number"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      handleChange={handleChangeSubDistrictsHouseNumber}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>

                {/* Permanent Address */}

                <>
                  <Grid container sx={{ paddingTop: "2%", paddingBottom: "0%" }}>
                    <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                      Permanent Address
                    </Typography>
                  </Grid>
                  <Grid container>
                    <FormControlLabel
                      control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                      label={
                        <Typography
                          sx={{
                            color: "neutral.N300",

                            // mb: 1,
                          }}
                          variant="wpf_p4_medium"
                        >
                          Same as Present Address{" "}
                        </Typography>
                      }
                    />
                  </Grid>

                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                      <SelectFieldForBdInfo
                        name="Division"
                        label={"Division"}
                        defaultValue={permanentAddress.division}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeDivisionPermanent}
                        options={divisionsPermanent}
                        isChecked={isChecked}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <SelectFieldForBdInfo
                        name="District"
                        label={"District"}
                        defaultValue={permanentAddress.district}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeDistrictsPermanent}
                        options={districtsPermanent}
                        isChecked={isChecked}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                      <SelectFieldForBdInfo
                        name="Sub-District"
                        label={"Sub-District"}
                        defaultValue={permanentAddress.subdistrict}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeSubDistrictsPermanent}
                        options={subdistrictsPermanent}
                        isChecked={isChecked}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"Area"}
                        defaultValue={permanentAddress.city}
                        disableItem={false}
                        handleChange={handleChangePermanentCity}
                        editAble={editAble}
                        isChecked={isChecked}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"Road Number"}
                        defaultValue={permanentAddress.roadNumber}
                        disableItem={false}
                        handleChange={handleChangePermanentRoadNumber}
                        editAble={editAble}
                        isChecked={isChecked}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"House Number"}
                        defaultValue={permanentAddress.houseNumber}
                        disableItem={false}
                        handleChange={handleChangePermanentHouseNumber}
                        editAble={editAble}
                        isChecked={isChecked}
                      />
                    </Grid>
                  </Grid>
                </>

                {/* EmergencyContactInformation */}

                <>
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
                        handleChange={handleChangeEmergencyNamePerson}
                        editAble={editAble}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"Relationship"}
                        //   defaultValue={presentAddress}
                        disableItem={false}
                        handleChange={handleChangeEmergencyRelation}
                        editAble={editAble}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={12} sx={{ paddingRight: "0%" }}>
                      <PasswordFieldForProfile
                        name="mobileNumber"
                        label={"Mobile Number"}
                        defaultValue={emergencyContact.mobileNumber}
                        disableItem={false}
                        handleChange={handleChangeEmergencyMobileNumber}
                        editAble={editAble}
                        phone={emergencyContact.mobileNumber}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                      <SelectFieldForBdInfo
                        name="Division"
                        label={"Division"}
                        // defaultValue={bloodGroup}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeDivisionEmergency}
                        options={divisionsEmergency}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <SelectFieldForBdInfo
                        name="District"
                        label={"District"}
                        // defaultValue={bloodGroup}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeDistrictsEmergency}
                        options={districtsEmergency}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ paddingBottom: "20px" }}>
                    <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                      <SelectFieldForBdInfo
                        name="Sub-District"
                        label={"Sub-District"}
                        // defaultValue={bloodGroup}
                        disableItem={false}
                        editAble={editAble}
                        handleChange={handleChangeSubDistrictsEmergency}
                        options={subdistrictsEmergency}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"City / Village"}
                        //   defaultValue={presentAddress}
                        disableItem={false}
                        handleChange={handleChangeEmergencyCity}
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
                        handleChange={handleChangeEmergencyRoadNumber}
                        editAble={editAble}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldForProfile
                        name="presentAddress"
                        label={"House Number"}
                        //   defaultValue={presentAddress}
                        disableItem={false}
                        handleChange={handleChangeEmergencyHouseNumber}
                        editAble={editAble}
                      />
                    </Grid>
                  </Grid>
                </>
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
                      onClick={() => handleSubmitChange()}
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

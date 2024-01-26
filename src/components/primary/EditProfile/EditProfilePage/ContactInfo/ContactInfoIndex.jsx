import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { getUserContactInfo, updateMyContact } from "../../../../../features/slice/userSlice";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
import FieldForProfile from "../FieldForProfile";
import SelectFieldForBdInfo from "./SelectFieldForBdInfo";

const ContactInfoIndex = ({ user, editAble, setEditAble, setData, setIsDataLoading }) => {
  const toast = useToaster();
  const url = import.meta.env.VITE_APP_SERVER_URL;
  const { isLoading } = useSelector((state) => state.user);
  const [contactNo, setContactNo] = useState(user.contactNo || "");
  const [billingAccountNo, setBillingAccountNo] = useState(user.billingAccountNo || "");
  // const [editAble, setEditAble] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubDistricts] = useState([]);
  const dispatch = useDispatch();
  const [divisionsPermanent, setDivisionsPermanent] = useState([]);
  const [districtsPermanent, setDistrictsPermanent] = useState([]);
  const [subdistrictsPermanent, setSubDistrictsPermanent] = useState([]);

  const [divisionsEmergency, setDivisionsEmergency] = useState([]);
  const [districtsEmergency, setDistrictsEmergency] = useState([]);
  const [subdistrictsEmergency, setSubDistrictsEmergency] = useState([]);

  const [presentAddress, setPresentAddress] = useState({
    division: {
      id: user.presentAddress?.division?.id,
      name: user.presentAddress?.division?.name,
    },
    district: {
      id: user.presentAddress?.district?.id,
      name: user.presentAddress?.district?.name,
    },
    subdistrict: {
      id: user.presentAddress?.subdistrict?.id,
      name: user.presentAddress?.subdistrict?.name,
    },
    area: user.presentAddress?.area,
    roadNo: user.presentAddress?.roadNo,
    houseNo: user.presentAddress?.houseNo,
  });

  const [permanentAddress, setPermanentAddress] = useState({
    division: {
      id: user.permanentAddress?.division?.id || "",
      name: user.permanentAddress?.division?.name || "",
    },
    district: {
      id: user.permanentAddress?.district?.id || "",
      name: user.permanentAddress?.district?.name || "",
    },
    subdistrict: {
      id: user.permanentAddress?.subdistrict?.id || "",
      name: user.permanentAddress?.subdistrict?.name || "",
    },
    area: user.permanentAddress?.area || "",
    roadNo: user.permanentAddress?.roadNo || "",
    houseNo: user.permanentAddress?.houseNo || "",
  });
  const [emergencyContact, setEmergencyContact] = useState({
    contactPersonName: user.emergencyContact?.contactPersonName || "",
    relationship: user.emergencyContact?.relationship || "",
    contactNumber: user.emergencyContact?.contactNumber || "",
    address: {
      division: {
        id: user.emergencyContact?.address?.division?.id || "",
        name: user.emergencyContact?.address?.division?.name || "",
      },
      district: {
        id: user.emergencyContact?.address?.district?.id || "",
        name: user.emergencyContact?.address?.district?.name || "",
      },
      subdistrict: {
        id: user.emergencyContact?.address?.subdistrict?.id || "",
        name: user.emergencyContact?.address?.subdistrict?.name || "",
      },
      area: user.emergencyContact?.address?.area || "",
      roadNo: user.emergencyContact?.address?.roadNo || "",
      houseNo: user.emergencyContact?.address?.houseNo || "",
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // if (isChecked) {
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
        division: {
          name: presentAddress.division.name,
          id: presentAddress.division.id,
        },
        district: {
          name: presentAddress.district.name,
          id: presentAddress.district.id,
        },
        subdistrict: {
          name: presentAddress.subdistrict.name,
          id: presentAddress.subdistrict.id,
        },
        area: presentAddress.area,
        roadNo: presentAddress.roadNo,
        houseNo: presentAddress.houseNo,
      });
      setDistrictsPermanent([...districts]);
      setSubDistrictsPermanent([...subdistricts]);
    }
  }, [isChecked]);
  useEffect(() => {
    if (user.presentAddress?.district) {
      axios
        .get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${user.presentAddress.district.id}`)
        .then((res) => {
          setSubDistricts(res.data);
        });
    }
    if (user.permanentAddress?.district) {
      axios
        .get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${user.permanentAddress?.district?.id}`)
        .then((res) => {
          setSubDistrictsPermanent(res.data);
        });
    }
    if (user.emergencyContact?.address) {
      axios
        .get(
          `${url}/bd-info/sub-district/get-sub-districts-by-district-id/${user.emergencyContact?.address?.district?.id}`
        )
        .then((res) => {
          setSubDistrictsEmergency(res.data);
        });
    }
    if (user.presentAddress?.district) {
      axios
        .get(`${url}/bd-info/district/get-districts-by-division-id/${user.presentAddress?.division?.id}`)
        .then((res) => {
          setDistricts(res.data);
          // setSubDistricts([]);
        });
    }
    if (user.permanentAddress?.district) {
      axios
        .get(`${url}/bd-info/district/get-districts-by-division-id/${user.permanentAddress?.division?.id}`)
        .then((res) => {
          setDistrictsPermanent(res.data);
          // setSubDistricts([]);
        });
    }
    if (user.emergencyContact?.address) {
      axios
        .get(`${url}/bd-info/district/get-districts-by-division-id/${user.emergencyContact?.address?.division?.id}`)
        .then((res) => {
          setDistrictsEmergency(res.data);
          // setSubDistricts([]);
        });
    }
    // if (!isChecked) {
    //   setPermanentAddress({
    //     division: "",
    //     district: "",
    //     subdistrict: "",
    //     city: "",
    //     roadNumber: "",
    //     houseNumber: "",
    //   });
    //   setDistrictsPermanent([]);
    //   setSubDistrictsPermanent([]);
    //   // setDivisionsPermanent((prevSubDistricts) => [...prevSubDistricts, ...divisions]);
    //   // setDistrictsPermanent((prev) => [...prev, districts]);
    //   // setSubDistrictsPermanent((prev) => [...prev, subdistricts]);
    // }
  }, [user]);

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
    setIsDataLoading(true);
    dispatch(getUserContactInfo(user._id)).then((action) => {
      setData(action.payload.data);
      setIsDataLoading(false);
    });
  };
  // Present Address

  const handleChangeDivision = (id, name) => {
    // setPresentAddress({})
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      division: {
        name: name,
        id: id,
      },
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistricts(res.data);
      setSubDistricts([]);
    });
  };
  const handleChangeDistricts = (id, name) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      district: {
        name: name,
        id: id,
      },
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistricts(res.data);
    });
  };
  const handleChangeSubDistricts = (id, name) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      subdistrict: {
        name: name,
        id: id,
      },
    }));
  };

  const handleChangeSubDistrictsCity = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      area: e.target.value,
    }));
  };
  const handleChangeSubDistrictsRoadNumber = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      roadNo: e.target.value,
    }));
  };
  const handleChangeSubDistrictsHouseNumber = (e) => {
    setPresentAddress((prevAddress) => ({
      ...prevAddress,
      houseNo: e.target.value,
    }));
  };
  // permanent Address

  const handleChangeDivisionPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      division: {
        name: name,
        id: id,
      },
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistrictsPermanent(res.data);
      setSubDistrictsPermanent([]);
    });
  };
  const handleChangeDistrictsPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      district: {
        name: name,
        id: id,
      },
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistrictsPermanent(res.data);
    });
  };
  const handleChangeSubDistrictsPermanent = (id, name) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      subdistrict: {
        name: name,
        id: id,
      },
    }));
  };
  const handleChangePermanentCity = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      area: e.target.value,
    }));
  };
  const handleChangePermanentRoadNumber = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      roadNo: e.target.value,
    }));
  };
  const handleChangePermanentHouseNumber = (e) => {
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      houseNo: e.target.value,
    }));
  };

  // Emergency Contact Information

  const handleChangeDivisionEmergency = (id, name) => {
    // setPresentAddress({})
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        division: {
          name: name,
          id: id,
        },
      },
    }));
    axios.get(`${url}/bd-info/district/get-districts-by-division-id/${id}`).then((res) => {
      setDistrictsEmergency(res.data);
      setSubDistrictsEmergency([]);
    });
  };
  const handleChangeDistrictsEmergency = (id, name) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        district: {
          name: name,
          id: id,
        },
      },
    }));
    axios.get(`${url}/bd-info/sub-district/get-sub-districts-by-district-id/${id}`).then((res) => {
      setSubDistrictsEmergency(res.data);
    });
  };
  const handleChangeSubDistrictsEmergency = (id, name) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        subdistrict: {
          name: name,
          id: id,
        },
      },
    }));
  };
  const handleChangeEmergencyNamePerson = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      contactPersonName: e.target.value,
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
      contactNumber: e.target.value,
    }));
  };

  const handleChangeEmergencyCity = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        area: e.target.value,
      },
    }));
  };

  const handleChangeEmergencyRoadNumber = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        roadNo: e.target.value,
      },
    }));
  };

  const handleChangeEmergencyHouseNumber = (e) => {
    setEmergencyContact((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        houseNo: e.target.value,
      },
    }));
  };

  const handleSubmitChange = () => {
    const data = {
      contactNo,
      billingAccountNo,
      presentAddress: presentAddress,
      permanentAddress: permanentAddress,
      emergencyContact: emergencyContact,
    };
    const filteredData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (key === "emergencyContact" && value.contactNumber === "") {
          const { contactNumber, ...restEmergencyContact } = value;
          return [key, restEmergencyContact];
        }
        return [key, value];
      })
    );
    const filteredFinal = Object.fromEntries(Object.entries(filteredData).filter(([key, value]) => value !== ""));

    const finalData = {
      id: user._id,
      filteredFinal,
    };
    dispatch(updateMyContact(finalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger(action.payload.data.message, "success");
        setEditAble(false);
      }
    });
  };

  return (
    <>
      <>
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

              <Grid container sx={{ paddingBottom: "25px" }}>
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
                    disableItem={true}
                    handleChange={handlebillingAccountNoChange}
                    editAble={editAble}
                    phone={billingAccountNo}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ paddingTop: "%", paddingBottom: "1%" }}>
                <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                  Present Address
                </Typography>
              </Grid>

              <Grid container sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <SelectFieldForBdInfo
                    name="Division"
                    label={"Division"}
                    defaultValue={presentAddress.division.name}
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
                    defaultValue={presentAddress.district.name}
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
                    defaultValue={presentAddress.subdistrict.name}
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
                    defaultValue={presentAddress.area}
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
                    defaultValue={presentAddress.roadNo}
                    disableItem={false}
                    handleChange={handleChangeSubDistrictsRoadNumber}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="presentAddress"
                    label={"House Number"}
                    defaultValue={presentAddress.houseNo}
                    disableItem={false}
                    handleChange={handleChangeSubDistrictsHouseNumber}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>

              {/* Permanent Address */}

              <>
                <Grid container sx={{ paddingTop: "1%", paddingBottom: "0%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Permanent Address
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "%", paddingBottom: "%", height: "38px" }}>
                  {editAble && (
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
                  )}
                </Grid>

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <SelectFieldForBdInfo
                      name="Division"
                      label={"Division"}
                      defaultValue={permanentAddress.division.name}
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
                      defaultValue={permanentAddress.district.name}
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
                      defaultValue={permanentAddress.subdistrict.name}
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
                      defaultValue={permanentAddress.area}
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
                      defaultValue={permanentAddress.roadNo}
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
                      defaultValue={permanentAddress.houseNo}
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
                <Grid container sx={{ paddingTop: "%", paddingBottom: "1%" }}>
                  <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                    Emergency Contact Information
                  </Typography>
                </Grid>

                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Name of Contact Person"}
                      defaultValue={emergencyContact.contactPersonName}
                      disableItem={false}
                      handleChange={handleChangeEmergencyNamePerson}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Relationship"}
                      defaultValue={emergencyContact.relationship}
                      disableItem={false}
                      handleChange={handleChangeEmergencyRelation}
                      editAble={editAble}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "25px" }}>
                  <Grid item xs={12} sx={{ paddingRight: "0%" }}>
                    <PasswordFieldForProfile
                      name="mobileNumber"
                      label={"Mobile Number"}
                      defaultValue={emergencyContact.contactNumber}
                      disableItem={false}
                      handleChange={handleChangeEmergencyMobileNumber}
                      editAble={editAble}
                      phone={emergencyContact.contactNumber}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ paddingBottom: "20px" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <SelectFieldForBdInfo
                      name="Division"
                      label={"Division"}
                      defaultValue={emergencyContact.address?.division?.name}
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
                      defaultValue={emergencyContact.address?.district?.name}
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
                      defaultValue={emergencyContact?.address?.subdistrict?.name}
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
                      defaultValue={emergencyContact?.address?.area}
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
                      defaultValue={emergencyContact?.address?.roadNo}
                      disableItem={false}
                      handleChange={handleChangeEmergencyRoadNumber}
                      editAble={editAble}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"House Number"}
                      defaultValue={emergencyContact?.address?.houseNo}
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
      </>
    </>
  );
};

export default ContactInfoIndex;

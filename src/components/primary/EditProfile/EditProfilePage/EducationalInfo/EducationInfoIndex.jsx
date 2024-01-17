import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { updateMyEducation, updateMyEducationFunction } from "../../../../../features/slice/userSlice";
import InstitutionSelectAdd from "./InstitutionSelectAdd";
import dayjs from "dayjs";
import UploadImagesField from "../VerificationInfo/UploadImagesField";
import EducationSelect from "./EducationSelect";
import EducationFieldSelect from "./EducationFieldSelect";

export const MyDatePicker = styled(DatePicker)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));

const EducationInfoIndex = ({ data, setData, editAble, setEditAble }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [higherDegree, setHigherDegree] = useState(data?.highestLevelOfDegree || "");
  const [field, setField] = useState(data?.fieldOfStudy || "");
  const [institution, setInstitution] = useState(data?.instituteName);
  const [files, setFiles] = useState(data?.certificateImages || "");
  const dispatch = useDispatch();
  const toast = useToaster();
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [value, setValue] = React.useState(dayjs(data?.completedYear || ""));
  const [isSyncLoading, setIsSyncLoading] = useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [imagesCopy, setImagesCopy] = useState(data?.certificateImages);
  const [removeImagesUpdate, setRemoveImagesUpdate] = useState([
    {
      name: "",
      isRemoved: false,
    },
  ]);
  const [removeImages, setRemoveImages] = useState([]);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const handleCancel = () => {
    setEditAble(false);
  };

  const handleSubmitChange = async () => {
    const formData = new FormData();

    formData.append("highestLevelOfDegree", higherDegree);
    formData.append("fieldOfStudy", field);

    if (institution === null) {
      formData.append("instituteName", "");
    } else {
      institution.name !== undefined && formData.append("instituteName", institution.name);
    }

    formData.append("completedYear", value?.$y);

    files.forEach((item) => {
      if (item.name) {
        formData.append("certificateImages", item);
      }
    });

    if (imagesCopy?.length != 0) {
      imagesCopy?.map((item, index) => {
        const tempData = {
          name: "",
          isRemoved: false,
        };
        const isRemoved = removeImages.includes(item);
        tempData.name = item;
        tempData.isRemoved = isRemoved;
        formData.append(`removedImages[${index}][name]`, tempData.name);
        formData.append(`removedImages[${index}][isRemoved]`, tempData.isRemoved);
      });
    }

    const finalData = {
      id: user._id,
      formData,
    };

    // dispatch(updateMyEducation(finalData)).then((action) => {
    //   if (action.error) {
    //     toast.trigger(action.error.message, "error");
    //   } else {
    //     toast.trigger(action.payload.data.message, "success");
    //     setEditAble(false);
    //   }
    // });
    await toast.responsePromise(updateMyEducationFunction(finalData), setIsSyncLoading, {
      initialMessage: "Education info is updating...",
      inPending: () => {
        setOpenReject(false);
        setIsSyncLoading(true);
      },
      afterSuccess: (data) => {
        setOpenReject(false);
        setIsSyncLoading(false);
        setData(data.data.user);
        setFiles(data.data.user.certificateImages);
        setEditAble(false);
      },
      afterError: (data) => {
        setOpenReject(false);
        setIsSyncLoading(false);
      },
    });
  };
  const higherStudies = [
    { value: "SSC", label: "SSC" },
    { value: "HSC", label: "HSC" },
    { value: "B.Sc", label: "B.Sc" },
    { value: "M.Sc", label: "M.Sc" },
    { value: "BBA", label: "BBA" },
    { value: "MBA", label: "MBA" },
    { value: "others", label: "others" },
  ];
  const fieldStudies = [
    { value: "engineering", label: "Engineering" },
    { value: "business_studies", label: "Business Studies" },
    { value: "others", label: "others" },
  ];
  const handleChangeDegree = (event) => {
    setHigherDegree(event.target.value);
  };
  const handleChangeField = (event) => {
    setField(event.target.value);
  };

  return (
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
                Educational Information
              </Typography>
            </Grid> */}

            <Grid container spacing={0} sx={{ paddingBottom: "15px" }}>
              <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                <EducationSelect
                  name={"highestLevelOfDegree"}
                  label={"Highest level of degree"}
                  options={higherStudies}
                  editAble={editAble}
                  handleChangeDegree={handleChangeDegree}
                  higherDegree={higherDegree}
                  defaultValue={data?.highestLevelOfDegree}
                />
              </Grid>
              <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                <EducationFieldSelect
                  name={"fieldOfStudy"}
                  label={"Field of Study"}
                  options={fieldStudies}
                  editAble={editAble}
                  handleChangeField={handleChangeField}
                  field={field}
                  defaultValue={data?.fieldOfStudy}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ paddingBottom: "15px" }}>
              <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                <InstitutionSelectAdd
                  label={"Institution Name"}
                  disableItem={false}
                  editAble={editAble}
                  institution={institution}
                  setInstitution={setInstitution}
                />
              </Grid>
              <Grid item xs={6} sx={{ paddingRight: "2%", display: "flex", flexDirection: "column" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Typography sx={{ mb: "10px" }} variant="wpf_p4_medium" color="neutral.N300">
                    Year of completion
                  </Typography>
                  <MyDatePicker
                    sx={{
                      backgroundColor: editAble ? "" : "neutral.N400",
                    }}
                    disabled={!editAble}
                    views={["year"]}
                    openTo="year"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <UploadImagesField
              editAble={editAble}
              label={"sdsadasd"}
              files={files}
              setFiles={setFiles}
              setImagesCopy={setImagesCopy}
              imagesCopy={imagesCopy}
              setRemoveImages={setRemoveImages}
            />
          </Box>
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
                  disabled={isSyncLoading}
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

      {/* <Box
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
            coverImage={coverImage}
            handleImage={handleImage}
            coverImageFile={coverImageFile}
          />
        </Box>

        
      </Box> */}
    </>
  );
};

export default EducationInfoIndex;

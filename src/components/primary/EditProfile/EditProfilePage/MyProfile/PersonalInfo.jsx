import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPersonalInfo } from "../../../../../features/slice/userSlice";
import { Box } from "@mui/material";
import ProfilePicture from "../MyProfile/ProfilePicture";
import LoadingComponent from "../../../../shared/Loading/LoadingComponent";
import MyprofileIndexNew from "./MyprofileIndexNew";

const PersonalInfo = () => {
  const [editAble, setEditAble] = useState(false);
  const { user, isLoading } = useSelector((state) => state.user);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleEditProfile = () => {
    setEditAble(true);
  };
  useEffect(() => {
    dispatch(getUserPersonalInfo(user._id)).then((action) => {
      setData(action.payload.data);
      setIsDataLoading(false);
    });
  }, [user, editAble]);

  return (
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
            // profileImageChange={false}
            //   coverImage={coverImage}
            //   handleImage={handleImage}
            //   coverImageFile={coverImageFile}
          />
        </Box>
        {isDataLoading ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <LoadingComponent />
            </Box>
          </>
        ) : (
          <>
            <MyprofileIndexNew
              data={data}
              isDataLoading={isDataLoading}
              editAble={editAble}
              setEditAble={setEditAble}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default PersonalInfo;

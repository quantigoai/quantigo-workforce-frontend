import React from "react";
import { Box, Grid, TextField, styled } from "@mui/material";
import { useSelector } from "react-redux";

const TextFieldForLink = styled(TextField)(() => ({
  borderRadius: "5px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const SwitchForLink = ({ handleImage, videoLink, videoId }) => {
  console.log("🚀 ~ SwitchForLink ~ videoId:", videoId);
  const { isLightTheme } = useSelector((state) => state.theme);
  const baseUploadBoxStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "20px",
    marginTop: "6px",
    borderWidth: 2,
    borderRadius: 8,
    height: "130px",
    // width: "12px",
    borderColor: "rgba(70, 70, 70, 0.2)",
    borderStyle: "dashed",
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? "#FAFBFC" : "#000",
    color: "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  return (
    <>
      <>
        <Grid container>
          <TextFieldForLink
            fullWidth
            // sx={{ border: "1px solid red" }}
            // onChange={(e) => setVideoLink(e.target.value)}
            onChange={handleImage}
          />
          {/* <figure class='media'> */}
          {videoId ? (
            <>
              <div data-oembed-url={videoLink}>
                {/* <div data-oembed-url="https://www.youtube.com/watch?v=PEWP9nbqG9Q&list=RDPEWP9nbqG9Q&start_radio=1"> */}
                {/* <div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"> */}
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  // src={`https://www.youtube.com/embed/hPaLAUzq4Ls`}
                  // style={{position: absolute; width: 100%; height: 100%; top: 0; left: 0;}}
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen=''
                  width='100%'
                  height='130px'
                ></iframe>
                {/* </div> */}
              </div>
            </>
          ) : (
            <>
              <Box style={baseUploadBoxStyle}>
                <Box
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}
                ></Box>
              </Box>
            </>
          )}

          {/* </figure> */}

          {/* <iframe
            // width='100%'
            width='90%'
            height='162px'
            src={videoLink}
            // src='https://www.youtube.com/embed/Lq1uQD4Orls?si=A_cbqxbmdDQxpxF5'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe> */}
        </Grid>
      </>
    </>
  );
};

export default SwitchForLink;

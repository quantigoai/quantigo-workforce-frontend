import React from "react";
import { PdTextField } from "../../../../../shared/CustomField/PDTextFIeld";

const SwitchForLink = ({ handleImage, videoLink }) => {
  return (
    <>
      <>
        <PdTextField
          fullWidth
          sx={{ border: "1px solid red" }}
          // onChange={(e) => setVideoLink(e.target.value)}
          onChange={handleImage}
        />
        <iframe
          width='100%'
          height='162px'
          src={videoLink}
          // src='https://www.youtube.com/embed/Lq1uQD4Orls?si=A_cbqxbmdDQxpxF5'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </>
    </>
  );
};

export default SwitchForLink;

/*
 * File           : ndaUploadStyle.js
 * Project        : wmpfrontv2
 * Created Date   : We 04 Oct 2023 12:26:03
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Oct 04 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
const ndaUploadStyle = (isLightTheme) => {
  const baseUploadBoxStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    height: "180px",
    borderColor: "rgba(70, 70, 70, 0.2)",
    borderStyle: "dashed",
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? "#E6ECF5" : "#2C2C2C",
    color: isLightTheme ? "#1D1D1D" : "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  return {
    baseUploadBoxStyle,
  };
};

export default ndaUploadStyle;

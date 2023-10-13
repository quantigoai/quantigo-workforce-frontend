/*
 * File           : dashboardStyle.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 03 Oct 2023 11:08:51
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Oct 03 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const dashboardStyle = () => {
    const buttonStyle = {
        backgroundColor: "neutral.N000",
        color: "#2E58FF",
        borderRadius: "6px",
        border: "1px solid #E6ECF5",
        height: "35px",
        "&:hover": {
            backgroundColor: "#FFFFFF",
        },
    };
    return {
        buttonStyle,
    };
};

export default dashboardStyle;

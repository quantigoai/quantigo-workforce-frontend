/*
 * File           : typography.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 26 Sep 2023 11:10:02
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Sep 26 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const createTypography = (fontSize, fontWeight, lineHeight) => ({
  fontFamily: ["Inter", "sans-serif"].join(","),
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing: "0em",
  textAlign: "left",
  // color: "#3C4D6B",
});

const typography = {
  wf_h4: createTypography("20px", "500", "30px"), // our own typography
  
  wpf_h1_Bold: createTypography("40px", "700", "48px"),
  wpf_h2_Bold: createTypography("36px", "700", "44px"),
  wpf_h3_Bold: createTypography("32px", "700", "40px"),
  wpf_h4_Bold: createTypography("24px", "700", "32px"),
  wpf_h5_Bold: createTypography("20px", "700", "28px"),
  wpf_h6_Bold: createTypography("16px", "700", "28px"),
  wpf_h7_Bold: createTypography("12px", "700", "28px"),

  wpf_h1_semiBold: createTypography("40px", "600", "48px"),
  wpf_h2_semiBold: createTypography("36px", "600", "44px"),
  wpf_h3_semiBold: createTypography("32px", "600", "40px"),
  wpf_h4_semiBold: createTypography("24px", "600", "30px"),
  wpf_h5_semiBold: createTypography("20px", "600", "28px"),
  wpf_h6_semiBold: createTypography("16px", "600", "28px"),
  wpf_h7_semiBold: createTypography("12px", "600", "28px"),

  wpf_h1_medium: createTypography("40px", "500", "48px"),
  wpf_h2_medium: createTypography("36px", "500", "44px"),
  wpf_h3_medium: createTypography("32px", "500", "40px"),
  wpf_h4_medium: createTypography("24px", "500", "30px"),
  wpf_h5_medium: createTypography("20px", "500", "28px"),
  wpf_h6_medium: createTypography("16px", "500", "24px"),
  wpf_h7_medium: createTypography("12px", "500", "20px"),

  wpf_h1_regular: createTypography("40px", "400", "48px"),
  wpf_h2_regular: createTypography("36px", "400", "44px"),
  wpf_h3_regular: createTypography("32px", "400", "40px"),
  wpf_h4_regular: createTypography("24px", "400", "30px"),
  wpf_h5_regular: createTypography("20px", "400", "28px"),
  wpf_h6_regular: createTypography("16px", "400", "24px"),
  wpf_h7_regular: createTypography("12px", "400", "20px"),
  wpf_h8_regular: createTypography("12px", "400", "16px"),

  wpf_p1_semiBold: createTypography("18px", "600", "28px"),
  wpf_p2_semiBold: createTypography("16px", "600", "24px"),
  wpf_p3_semiBold: createTypography("14px", "600", "20px"),
  wpf_p4_semiBold: createTypography("12px", "600", "18px"),
  wpf_p4_semiBold_2: createTypography("12px", "600", "16px"),

  wpf_p1_medium: createTypography("18px", "500", "28px"),
  wpf_p2_medium: createTypography("16px", "500", "24px"),
  wpf_p3_medium: createTypography("14px", "500", "20px"),
  wpf_p3_medium_2: createTypography("14px", "500", "24px"),
  wpf_p3_medium_3: createTypography("14px", "500", "16px"),
  wpf_p4_medium: createTypography("12px", "500", "18px"),
  wpf_p5_medium: createTypography("10px", "500", "12px"),

  wpf_p1_regular: createTypography("18px", "400", "28px"),
  wpf_p2_regular: createTypography("16px", "400", "24px"),
  wpf_p3_regular: createTypography("14px", "400", "20px"),
  wpf_p4_regular: createTypography("12px", "400", "18px"),
  wpf_p5_regular: createTypography("10px", "400", "16px"),
};

export default typography;

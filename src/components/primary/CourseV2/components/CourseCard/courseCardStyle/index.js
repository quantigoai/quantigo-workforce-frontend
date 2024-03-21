/*
 * File           : index.js
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 12:32:04
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
export const MyCustomCard = {
  padding: "0 0 0 0 ",
  objectFit: "cover",
  borderRadius: "10px 10px 0px 0px",
};

export const MyCustomCardHover = {
  padding: "0 0 0 0 ",
  width: "278px",
  height: "160px",
  objectFit: "cover",
  borderRadius: "10px 10px 0px 0px !important",
  transform: "scale(1.04) ",
  transition: "all 1.2s ease",
  // border: '1px solid red',
};

export const ButtonInitial = {
  borderRadius: "2px",
  border: "1px solid #ffffff",
  color: "#ffffff",
  transition: "all 1s ease",
};
export const ButtonDivMouseOn = {
  borderRadius: "2px",
  border: "1px solid #2D58FF",
  color: "#2D58FF",
};
export const ButtonHover = {
  color: "#090080",
  backgroundColor: "rgba(255, 154, 69, 0.1)",
};

export const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  width: "100%",
  height: "100%",
};

export const btnStyle = {
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "#2E58FF",
  padding: "10px 24px",
  color: "#fff",
  height: "40px",
  "&:hover": { backgroundColor: "#244EF5" },
  "&:disabled": { backgroundColor: "#B6C9F0", color: "#FFFFFF" },
};

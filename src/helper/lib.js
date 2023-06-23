/*
 * File           : lib.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:36:44
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Dec 13 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;
export const realToken = () => {
  const existedToken = Cookies.get("token");
  if (existedToken) {
    var bytes = CryptoJS.AES.decrypt(existedToken, jwtSecret);
    var originalToken = bytes.toString(CryptoJS.enc.Utf8);
    return originalToken.replaceAll('"', "");
  }
  return null;
};

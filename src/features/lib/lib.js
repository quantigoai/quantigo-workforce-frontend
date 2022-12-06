import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const jwtSecret = process.env.REACT_APP_JWT_SECRET;
export const realToken = () => {
  const existedToken = Cookies.get("token");
  if (existedToken) {
    var bytes = CryptoJS.AES.decrypt(existedToken, jwtSecret);
    var originalToken = bytes.toString(CryptoJS.enc.Utf8);
    return originalToken.replaceAll('"', "");
  }
  return null;
};

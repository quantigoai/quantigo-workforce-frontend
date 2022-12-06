import "./App.css";
import Header from "./components/Header/Header";
import Routers from "./components/Routers/Routers";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {alreadyLogin} from "./features/slice/userSlice";
import CopyRight from "./components/Footer/CopyRight";

const CryptoJS = require("crypto-js");

const jwtSecret = process.env.REACT_APP_JWT_SECRET;

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isLoggedIn } = user;

  const tokenCheck = () => {
    const existedToken = Cookies.get("token");
    if (existedToken) {
      var bytes = CryptoJS.AES.decrypt(existedToken, jwtSecret);
      var originalToken = bytes.toString(CryptoJS.enc.Utf8);
      var decoded = jwt_decode(originalToken);
      const { _id, name } = decoded;
      return _id;
    }
  };

    useEffect(() => {
    if (tokenCheck()) {
      dispatch(alreadyLogin(tokenCheck()));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routers />
      {/* <Footer /> */}
      <CopyRight />
    </div>
  );
}

export default App;

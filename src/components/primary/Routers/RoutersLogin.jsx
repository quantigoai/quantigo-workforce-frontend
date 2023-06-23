import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectDirectoryIndex from "../../ProjectDirectory/ProjectDirectoryIndex";
import EmailVerification from "../Auth/EmailVerification/EmailVerification";
import EmailVerificationConfarmation from "../Auth/EmailVerification/EmailVerificationConfarmation";
import Faq from "../Auth/FAQ/Faq";
import HowItWorkPage from "../Auth/HowItWorkPage/HowItWorkPage";
import LoginPage from "../Auth/Login/LoginPage";
import UpdateDocument from "../Documents/UpdateDocument";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from "../ForgetPassword/ResetPassword";
import LoginHomePage from "../HomePage/LoginHomePage";
import RegisterHomePage from "../HomePage/RegisterHomePage";
import NDAuploadModal from "../Nda/NDAuploadModal";

const RoutersLogin = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<LoginHomePage />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/doc"} element={<LoginPage />} />

        <Route path={"/howitworks"} element={<HowItWorkPage />} />

        <Route path={"/loginpage"} element={<LoginPage />} />
        <Route path={"/emailVerification"} element={<EmailVerification />} />
        <Route
          path={"/verify-email/:id/:token"}
          element={<EmailVerificationConfarmation />}
        />
        <Route path={"/reset-password"} element={<ResetPassword />} />
        {/* <Route path={"/reset-password"} element={<ResetPassword />} /> */}
        <Route path={"/forgetpassword"} element={<ForgetPassword />} />
        <Route path={"/register"} element={<RegisterHomePage />} />
        <Route path={"/login"} element={<LoginHomePage />} />
        <Route path={"/updatedocument"} element={<UpdateDocument />} />
        <Route path={"/ndamodal"} element={<NDAuploadModal />} />
        <Route path={"/howitworks"} element={<HowItWorkPage />} />
        <Route path={"/projectDirectory"} element={<ProjectDirectoryIndex />} />
        <Route
          path={"/reset-password/:id/:token"}
          element={<ResetPassword />}
        />
      </Routes>
    </>
  );
};

export default RoutersLogin;

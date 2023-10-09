import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerification from "../Auth/EmailVerification/EmailVerification";
import EmailVerificationConfirmation from "../Auth/EmailVerification/EmailVerificationConfirmation";
import Faq from "../Auth/FAQ/Faq";
import HowItWorkPage from "../Auth/HowItWorkPage/HowItWorkPage";
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

        <Route path={"/howitworks"} element={<HowItWorkPage />} />

        <Route path={"/emailVerification"} element={<EmailVerification />} />

        <Route path={"/verify-email/:id/:token/"} element={<EmailVerificationConfirmation />} />
        <Route path={"/reset-password"} element={<ResetPassword />} />
        <Route path={"/forgetpassword"} element={<ForgetPassword />} />
        
        <Route path={"/register"} element={<RegisterHomePage />} />
        <Route path={"/login"} element={<LoginHomePage />} />

        <Route path={"/updatedocument"} element={<UpdateDocument />} />
        <Route path={"/ndamodal"} element={<NDAuploadModal />} />
        <Route path={"/howitworks"} element={<HowItWorkPage />} />
        <Route path={"/reset-password/:id/:token"} element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default RoutersLogin;

import React from "react";
import {Route, Routes} from "react-router-dom";
import EmailVerification from "../Auth/EmailVerification/EmailVerification";
import EmailVerificationConfirmation from "../Auth/EmailVerification/EmailVerificationConfirmation";
import HowItWorkPage from "../Auth/HowItWorkPage/HowItWorkPage";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from "../ForgetPassword/ResetPassword";
import LoginHomePage from "../HomePage/LoginHomePage";
import RegisterHomePage from "../HomePage/RegisterHomePage";

const RoutersLogin = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<LoginHomePage />} />
        <Route path={"/register"} element={<RegisterHomePage />} />
        <Route path={"/login"} element={<LoginHomePage />} />

        {/* <Route path={"/faq"} element={<Faq />} /> */}
        {/* <Route path={"/faq"} element={<ComingSoon />} /> */}

        <Route path={"/howitworks"} element={<HowItWorkPage />} />

        <Route path={"/emailVerification"} element={<EmailVerification />} />

        <Route path={"/forgetpassword"} element={<ForgetPassword />} />

        <Route path={"/reset-password/:id/:token/"} element={<ResetPassword />} />
        <Route path={"/verify-email/:id/:token/"} element={<EmailVerificationConfirmation />} />
        <Route path="*" element={<LoginHomePage />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
};

export default RoutersLogin;

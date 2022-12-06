import React from "react";
import {Route, Routes} from "react-router-dom";
import Userdetails from "../AdminTasklog/Userdetails";
import AllUsers from "../AllUsers/AllUsers";
import UpdateBenchMark from "../AnnotationCalculate/UpdateBenchMark/UpdateBenchMark";
import Auth from "../Auth/Auth";
import {GoogleLogin} from "../Auth/GoogleLogin";
import Billing from "../Billing/Billing";
import {Dashboard} from "../Dashboard/Dashboard";
import EditMyProfile from "../EditMyProfile/EditMyProfile";
import {EnrollACourse} from "../EnrollACourse/EnrollACourse";
import {ForgetPassword} from "../ForgetPassword/ForgetPassword";
import {ResetPassword} from "../ForgetPassword/ResetPassword";
import Home from "../Home/Home";
import {Ndapdf} from "../NdaForproject/Ndapdf";
import NdaUpload from "../NdaForproject/NdaUpload";
import Profile from "../Profile/Profile";
import {Project} from "../project/Project";
import CreateQuiz from "../Quiz/CreateQuiz";
import {Quiz} from "../Quiz/Quiz";
import Records from "../Records/Records";
import AdminDashboardSlidebar from "../SideBar/AdminDashboardSlidebar";
import ChecksideBar from "../SideBar/ChecksideBar";
import DashboardSidebar from "../SideBar/DashboardSidebar";
import DelivaryDashboardSlider from "../SideBar/DelivaryDashboardSlider";
import ProjectDashboardSlide from "../SideBar/ProjectDashboardSlide";
import ReviwerDashboardSlide from "../SideBar/ReviwerDashboardSlide";
import Sidebar from "../SideBar/Sidebar";
import {Task} from "../Task/Task";
import {TaskLog} from "../TaskLog/TaskLog";
import Team from "../Team/Team";
import UpdateMyDocuments from "../UpdateMyDocuments/UpdateMyDocuments";
import CreateCourse from "../ViewCourses/CreateCourse/CreateCourse";
import UpdateCourse from "../ViewCourses/CreateCourse/UpdateCourse";
import {ViewCourses} from "../ViewCourses/ViewCourses";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/allusers" element={<AllUsers />} />
      <Route path="/editmyprofile" element={<EditMyProfile />} />
      <Route path="/updatemydocument" element={<UpdateMyDocuments />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/task" element={<Task />} />
      <Route path="/coursesdetails/:id" element={<ViewCourses />} />
      <Route path="/enrollcourse" element={<EnrollACourse />} />
      <Route path={"/updatecourse/:id"} element={<UpdateCourse />} />
      <Route path={"/tasklog"} element={<TaskLog />} />
      <Route path={"/project"} element={<Project />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/ndadownload"} element={<Ndapdf />} />
      <Route path={"/quiz"} element={<Quiz />} />
      <Route path={"/forgetpassword"} element={<ForgetPassword />} />
      <Route path={"/reset-password/:id/:token"} element={<ResetPassword />} />
      <Route path={"/fb"} element={<GoogleLogin />} />
      <Route path={"/admindashboard"} element={<AdminDashboardSlidebar />} />
      <Route path={"/createquiz"} element={<CreateQuiz />} />
      <Route path={"/userdetails"} element={<Userdetails />} />
      {/* <Route path={"/account"} element={<Account />} /> */}
      <Route path={"/team"} element={<Team />} />
      <Route path={"/billing"} element={<Billing />} />
      <Route path={"/records"} element={<Records />} />
      <Route path={"/fileupload"} element={<NdaUpload />} />
      <Route path={"/account"} element={<Sidebar />} />
      <Route path={"/annotatordashboard"} element={<DashboardSidebar />} />
      <Route path={"/projectdashboard"} element={<ProjectDashboardSlide />} />
      <Route path={"/updatebench"} element={<UpdateBenchMark />}/>
      <Route
        path={"/delivarydashboard"}
        element={<DelivaryDashboardSlider />}
      />
      <Route path={"/reviwerdashboard"} element={<ReviwerDashboardSlide />} />
      <Route path={"/checksidebar"} element={<ChecksideBar />} />
      <Route path={"/createCourse"} element={<CreateCourse />} />
    </Routes>
  );
};

export default Routers;

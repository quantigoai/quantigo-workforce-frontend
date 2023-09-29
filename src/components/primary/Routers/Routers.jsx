/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Routers/Routers.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 11:19:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
import BenchMarkIndex from "../../BenchMarkNew/BenchMarkIndex";
import BenchmarkList from "../../BenchMarkNew/BenchmarkList";
import CreateBenchMarkNew from "../../BenchMarkNew/CreateBenchMarkNew";
import SingleBenchmarkNew from "../../BenchMarkNew/SingleBenchmarkNew";
import UpdateBenchMarkNew from "../../BenchMarkNew/UpdateBenchMarkNew";
import ProjectDirectoryIndex from "../../ProjectDirectory/ProjectDirectoryIndex";
import ErrorPage from "../../shared/Error/ErrorPage";
import AllNotification from "../../shared/Notification/AllNotification";
import Payment from "../../shared/Payment/Payment";
import ServerSync from "../../shared/ServerSync/ServerSync";
import AllUserListIndex from "../AllUsers/AllUserListIndex";
import CalculateAnnotations from "../Annotations/CalculateAnnotations";
import EmailVerification from "../Auth/EmailVerification/EmailVerification";
import EmailVerificationAfterLogin from "../Auth/EmailVerification/EmailVerificationAfterLogin";
import Course from "../Course/Course";
import CreateChapter from "../Course/CreateChapter";
import CreateCourse from "../Course/CreateCourse";
import UpdateChapter from "../Course/UpdateChapter";
import UpdateCourse from "../Course/UpdateCourse";
import CourseDetails from "../CourseNew/CourseDetails";
import CourseDetailsIndex from "../CourseNew/CourseDetailsIndex";
import CourseMainContent from "../CourseNew/CourseMainContent";
import QuizShow from "../CourseNew/QuizShow";
import Dashboard from "../Dashboard/Dashboard";
import UpdateDocument from "../Documents/UpdateDocument";
import EditProfileIndex from "../EditProfile/EditProfileIndex";
import EditProfilePageIndex from "../EditProfile/EditProfilePage/EditProfilePageIndex";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from "../ForgetPassword/ResetPassword";
import ActiveJobList from "../Job/ActiveJobList";
import AllJobs from "../Job/AllJobs";
import AllJobsForReviewer from "../Job/AllJobsForReviewer";
import CreateJob from "../Job/CreateJob";
import Job from "../Job/Job";
import OngoingJob from "../Job/OngoingJob";
import ProjectList from "../Project/ProjectList";
import DetailsPage from "../ProjectLIstNew2/ProjectDetailsFull/DetailsPage";
import FullProjectDetails from "../ProjectLIstNew2/ProjectDetailsFull/FullProjectDetails";
import ProjectLIstIndex2 from "../ProjectLIstNew2/ProjectLIstIndex2";
import CreateQuiz from "../Quiz/CreateQuiz";
import ShowResult from "../Quiz/QuizPage/ShowResult/ShowResult";
import UpdateQuiz from "../Quiz/UpdateQuiz";
import Skills from "../Skill/Skills";
import UserListIndex from "../UserListNew/UserListIndex";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/verify-email/:id/:token/"} element={<EmailVerificationAfterLogin />} />
        {/*TODO Correction in this component */}
        <Route path={"/emailVerification"} element={<EmailVerification />} />

        <Route path={"/dashboard"} element={<Dashboard />} />

        {/* ---------- Course and chapter related routes ------------ */}
        <Route path={"/course"} element={<Course />} />
        <Route
          path={"/create-course"}
          element={
            <PrivateRoute>
              {" "}
              <CreateCourse />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path={"/edit-course/:id"}
          element={
            <PrivateRoute>
              {" "}
              <UpdateCourse />{" "}
            </PrivateRoute>
          }
        />
        <Route path={"/update-chapter/:id"} element={<UpdateChapter />} />

        <Route path={"/course-details/:id"} element={<CourseDetails />}>
          <Route path="index" element={<CourseDetailsIndex />} />
          {/* <Route path="index" element={<CourseNewDetailsIndex />} /> */}
          <Route path="content" element={<CourseMainContent />} />
          <Route path="show-quiz" element={<QuizShow />} />
          <Route path={"quiz-result"} element={<ShowResult />} />
        </Route>

        <Route path={"/create-quiz"} element={<CreateQuiz />} />
        <Route path={"/edit-quiz"} element={<UpdateQuiz />} />
        <Route path={"/create-chapter/:id"} element={<CreateChapter />} />

        <Route path={"/updatedocument"} element={<UpdateDocument />} />
        <Route path={"/projectlist"} element={<ProjectList />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/forgetpassword"} element={<ForgetPassword />} />
        <Route path={"/skillcreate"} element={<Skills />} />
        <Route path={"/reset-password/:id/:token"} element={<ResetPassword />} />
        {/* TODO Check if iis really needed or not */}
        <Route path={"/annotators"} element={<UserListIndex action={"annotator"} />} />

        <Route
          path={"/allusers"}
          element={
            <PrivateRoute>
              <UserListIndex action={"alluser"} />
            </PrivateRoute>
          }
        />
        <Route
          path={"/all-users"}
          element={
            <PrivateRoute>
              <AllUserListIndex action={"admin"} />
            </PrivateRoute>
          }
        />
        <Route path={"/allprojects"} element={<ProjectLIstIndex2 action={"allprojects"} />} />
        <Route path={"/detailsInfo/:id"} element={<DetailsPage action={"detailsInfo"} />} />
        <Route path={"/projectDetails/:id"} element={<FullProjectDetails action={"projectDetails"} />} />

        <Route path={"/users"} element={<UserListIndex action={"recruitment_manager"} />} />
        <Route path={"/reviewers"} element={<UserListIndex action={"reviewer"} />} />

        <Route path={"jobs"} element={<Job />}>
          <Route path={"create-job"} element={<CreateJob />} />
          <Route path={"alljobs"} element={<AllJobs />} />
          <Route path={"availablejobs"} element={<AllJobsForReviewer />} />
          <Route path={"ongoingjobs"} element={<OngoingJob action={"jobs"} />} />
          <Route path={"archivejob"} element={<OngoingJob action={"archiveJob"} />} />
          <Route path={"activejobs"} element={<ActiveJobList action={"jobs"} />} />
          <Route path={"archivejobs"} element={<ActiveJobList action={"archivejobs"} />} />
          <Route path={"reviwerJoblist"} element={<ActiveJobList action={"jobs"} />} />
        </Route>

        {/* TODO Need to fixed the skeleton */}
        <Route path={"/calculate-annotation"} element={<CalculateAnnotations />} />

        {/* TODO Apply this asap */}
        {/* New Version */}

        <Route
          path={"/benchmarknew"}
          element={
            <PrivateRoute>
              {" "}
              <BenchMarkIndex />{" "}
            </PrivateRoute>
          }
        >
          <Route path={"list"} element={<BenchmarkList />} />
          <Route path={":id"} element={<SingleBenchmarkNew />} />
          <Route path={"update"} element={<UpdateBenchMarkNew />} />
          <Route path={"create"} element={<CreateBenchMarkNew />} />
        </Route>

        {/* --------Server Sync ---------- */}
        <Route
          path={"/serversync"}
          element={
            <PrivateRoute>
              {" "}
              <ServerSync />{" "}
            </PrivateRoute>
          }
        />

        {/* --------------- */}
        {/* <Route path={"/edit-profile"} element={<EditProfileIndex />}></Route> */}
        <Route path={"/edit-profile"} element={<EditProfilePageIndex />}></Route>
        <Route path={"/show-profile"} element={<EditProfileIndex />}></Route>
        <Route path={"/show-all-notification"} element={<AllNotification />}></Route>
        <Route path={"/projectDirectory"} element={<ProjectDirectoryIndex />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routers;

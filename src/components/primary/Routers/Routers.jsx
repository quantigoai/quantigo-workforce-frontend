/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Routers/Routers.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 11:19:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../../shared/Error/ErrorPage";
import AllNotification from "../../shared/Notification/AllNotification";
import AllUserListIndex from "../AllUsers/AllUserListIndex";
import EmailVerification from "../Auth/EmailVerification/EmailVerification";
import EmailVerificationAfterLogin from "../Auth/EmailVerification/EmailVerificationAfterLogin";
import Dashboard from "../Dashboard/Dashboard";
import EditProfilePageIndex from "../EditProfile/EditProfilePage/EditProfilePageIndex";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from "../ForgetPassword/ResetPassword";
import Home from "../Home/Home";
import DetailsPage from "../ProjectLIstNew2/ProjectDetailsFull/DetailsPage";
import FullProjectDetails from "../ProjectLIstNew2/ProjectDetailsFull/FullProjectDetails";
import ProjectLIstIndex2 from "../ProjectLIstNew2/ProjectLIstIndex2";
import PrivateRoute from "./PrivateRoute";
import AccountActivation from "../Dashboard/CongratulationDashBoard/AccountActivation";
import Skills from "../Skill/Skills";

export const roles = {
  admin: "admin",
  eng_lead: "engineering_lead",

  level_0: "level_0_annotator",

  level_1: "level_1_annotator",
  level_2: "level_2_annotator",
  level_3: "level_3_annotator",

  reviewer: "reviewer",

  trainer: "trainer",

  pro_lead: "project_lead",
  pro_co: "project_coordinator",
  pro_manager: "project_manager",

  del_manager: "delivery_manager",

  rec_manger: "recruitment_manager",
};

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/identity-verification"} element={<AccountActivation />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/verify-email/:id/:token/"} element={<EmailVerificationAfterLogin />} />

        {/* //!! important */}
        {/* TODO Correction in this component */}
        <Route path={"/emailVerification"} element={<EmailVerification />} />

        {/* ---------- Course routes ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route path={"/course"} element={<Course />} />
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/create-course"} element={<CreateCourse />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/edit-course/:id"} element={<UpdateCourse />} />
        </Route>
        <Route path={"/course-details/:id"} element={<CourseDetails />}>
          <Route path="index" element={<CourseDetailsIndex />} />
          <Route path="content" element={<CourseMainContent />} />
          <Route path="show-quiz" element={<QuizShow />} />
          <Route path={"quiz-result"} element={<ShowResult />} />
        </Route> */}

        {/* ---------- ------------ ------------ */}

        {/* ---------- Chapter related routes ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/update-chapter/:id"} element={<UpdateChapter />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]} />}>
          <Route path={"/create-chapter/:id"} element={<CreateChapter />} />
        </Route> */}
        {/* ---------- ------------ ------------ */}

        {/* ---------- Quiz related routes ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]} />}>
          <Route path={"/create-quiz"} element={<CreateQuiz />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.trainer, roles.admin]} />}>
          <Route path={"/edit-quiz"} element={<UpdateQuiz />} />
        </Route> */}
        {/* ---------- ------------ ---------------- */}

        <Route path={"/forgetpassword"} element={<ForgetPassword />} />
        <Route path={"/reset-password/:id/:token"} element={<ResetPassword />} />

        {/* ----------- Project List ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
              ]}
            />
          }
        >
          <Route path={"/projectlist"} element={<ProjectList />} />
        </Route> */}
        {/* --------- ------------- ------------ */}

        {/* --------- Payment ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route path={"/payment"} element={<Payment />} /> */}
        {/* --------- ------------- ------------ */}

        {/* --------- Skill ------------ */}
        <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
                roles.trainer,
              ]}
            />
          }>
          <Route path={"/skillcreate"} element={<Skills />} />
        </Route>
        {/* -------- ---------- ------------ */}

        {/* --------All users ------------ */}

        <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
                roles.trainer,
              ]}></PrivateRoute>
          }>
          <Route path={"/all-users"} element={<AllUserListIndex action={"admin"} />} />
        </Route>

        {/* -------- --------- ------------ */}

        {/* --------All Projects ------------ */}

        <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
              ]}></PrivateRoute>
          }>
          <Route path={"/allprojects"} element={<ProjectLIstIndex2 action={"allprojects"} />} />
        </Route>

        <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
              ]}></PrivateRoute>
          }>
          <Route path={"/detailsInfo/:id"} element={<DetailsPage action={"detailsInfo"} />} />
        </Route>

        <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
              ]}></PrivateRoute>
          }>
          <Route path={"/projectDetails/:id"} element={<FullProjectDetails action={"projectDetails"} />} />
        </Route>

        {/* -------- ---------- ------------ */}

        {/* -------- Jobs ------------ */}
        {/* TODO Should updated and release later  */}
        {/* <Route
          element={
            <PrivateRoute
              roles={[
                roles.admin,
                roles.eng_lead,
                roles.pro_lead,
                roles.pro_co,
                roles.pro_manager,
                roles.del_manager,
                roles.rec_manger,
                roles.level_1,
                roles.level_2,
                roles.level_3,
              ]}
            />
          }
        >
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
        </Route> */}
        {/* -------- ------ ------------ */}

        {/* TODO Need to fixed the skeleton */}
        {/* TODO Should updated and release later  */}
        {/* <Route element={<PrivateRoute roles={[roles.admin]} />}>
          <Route path={"/calculate-annotation"} element={<CalculateAnnotations />} />
        </Route> */}

        {/* -------- Benchmark ---------- */}
        {/* TODO Should updated and release later  */}
        {/* <Route
          element={
            <PrivateRoute
              roles={[roles.admin, roles.eng_lead, roles.pro_lead, roles.pro_co, roles.pro_manager, roles.del_manager]}
            />
          }
        >
          <Route path={"/benchmarknew"} element={<BenchMarkIndex />}>
            <Route path={"list"} element={<BenchmarkList />} />
            <Route path={":id"} element={<SingleBenchmarkNew />} />
            <Route path={"update"} element={<UpdateBenchMarkNew />} />
            <Route path={"create"} element={<CreateBenchMarkNew />} />
          </Route>
        </Route> */}
        {/* -------- -------------- ---------- */}

        {/* --------Server Sync ---------- */}
        {/* TODO Should updated and release later  */}
        {/* <Route
          element={
            <PrivateRoute
              roles={[roles.admin, roles.eng_lead, roles.pro_lead, roles.pro_co, roles.pro_manager, roles.del_manager]}
            />
          }
        >
          <Route path={"/serversync"} element={<ServerSync />} />
        </Route> */}
        {/* -------- ------------ ---------- */}

        {/* -------- My Profile ---------- */}

        <Route path={"/edit-profile"} element={<EditProfilePageIndex />}></Route>

        {/* -------- ------------ ---------- */}

        {/* ---------- Notification ----------- */}
        <Route path={"/show-all-notification"} element={<AllNotification />}></Route>
        {/* ---------- ---------- ----------- */}

        {/* ---------- Project Directory ----------- */}
        {/* TODO Should updated and release later  */}
        {/* <Route
          element={
            <PrivateRoute
              roles={[roles.admin, roles.eng_lead, roles.pro_lead, roles.pro_co, roles.pro_manager, roles.del_manager]}
            />
          }
        >
          <Route path={"/projectDirectory"} element={<ProjectDirectoryIndex />} />
        </Route> */}
        {/* ---------- ---------- ----------- */}

        {/* ---------- Error Page ----------- */}
        <Route path="*" element={<ErrorPage />} />
        {/* ---------- ---------- ----------- */}

        {/* ---------- Coming Soon page ----------- */}

        {/* ---------- ---------- ----------- */}
      </Routes>
    </>
  );
};

export default Routers;

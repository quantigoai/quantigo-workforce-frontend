/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Routers/Routers.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 11:19:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
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

const roles = {
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
        <Route path={"/verify-email/:id/:token/"} element={<EmailVerificationAfterLogin />} />
        {/*TODO Correction in this component */}
        <Route path={"/emailVerification"} element={<EmailVerification />} />

        <Route path={"/dashboard"} element={<Dashboard />} />

        {/* ---------- Course and chapter related routes ------------ */}

        <Route path={"/course"} element={<Course />} />
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/create-course"} element={<CreateCourse />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/edit-course/:id"} element={<UpdateCourse />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          <Route path={"/update-chapter/:id"} element={<UpdateChapter />} />
        </Route>

        <Route path={"/course-details/:id"} element={<CourseDetails />}>
          <Route path="index" element={<CourseDetailsIndex />} />
          {/* <Route path="index" element={<CourseNewDetailsIndex />} /> */}
          <Route path="content" element={<CourseMainContent />} />
          <Route path="show-quiz" element={<QuizShow />} />
          <Route path={"quiz-result"} element={<ShowResult />} />
        </Route>

        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]} />}>
          <Route path={"/create-quiz"} element={<CreateQuiz />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.trainer, roles.admin]} />}>
          <Route path={"/edit-quiz"} element={<UpdateQuiz />} />
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]} />}>
          <Route path={"/create-chapter/:id"} element={<CreateChapter />} />
        </Route>

        <Route path={"/updatedocument"} element={<UpdateDocument />} />
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
              ]}
            />
          }
        >
          <Route path={"/projectlist"} element={<ProjectList />} />
        </Route>
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/forgetpassword"} element={<ForgetPassword />} />

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
          }
        >
          <Route path={"/skillcreate"} element={<Skills />} />
        </Route>
        <Route path={"/reset-password/:id/:token"} element={<ResetPassword />} />
        {/* TODO Check if iis really needed or not */}
        <Route path={"/annotators"} element={<UserListIndex action={"annotator"} />} />

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
            ></PrivateRoute>
          }
        >
          <Route path={"/allusers"} element={<UserListIndex action={"alluser"} />} />
          <Route path={"/all-users"} element={<AllUserListIndex action={"admin"} />} />
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
              ]}
            ></PrivateRoute>
          }
        >
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
              ]}
            ></PrivateRoute>
          }
        >
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
              ]}
            ></PrivateRoute>
          }
        >
          <Route path={"/projectDetails/:id"} element={<FullProjectDetails action={"projectDetails"} />} />
        </Route>

        <Route path={"/users"} element={<UserListIndex action={"recruitment_manager"} />} />
        <Route path={"/reviewers"} element={<UserListIndex action={"reviewer"} />} />

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
        </Route>

        {/* TODO Need to fixed the skeleton */}
        <Route element={<PrivateRoute roles={[roles.admin]} />}>
          <Route path={"/calculate-annotation"} element={<CalculateAnnotations />} />
        </Route>

        {/* TODO Apply this asap */}
        {/* New Version */}

        <Route
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
        </Route>
        <Route
          element={
            <PrivateRoute
              roles={[roles.admin, roles.eng_lead, roles.pro_lead, roles.pro_co, roles.pro_manager, roles.del_manager]}
            />
          }
        >
          <Route path={"/serversync"} element={<ServerSync />} />
        </Route>

        {/* --------Server Sync ---------- */}

        {/* --------------- */}
        {/* <Route path={"/edit-profile"} element={<EditProfileIndex />}></Route> */}
        <Route path={"/edit-profile"} element={<EditProfilePageIndex />}></Route>
        <Route path={"/show-profile"} element={<EditProfileIndex />}></Route>
        <Route path={"/show-all-notification"} element={<AllNotification />}></Route>
        <Route
          element={
            <PrivateRoute
              roles={[roles.admin, roles.eng_lead, roles.pro_lead, roles.pro_co, roles.pro_manager, roles.del_manager]}
            />
          }
        >
          <Route path={"/projectDirectory"} element={<ProjectDirectoryIndex />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routers;

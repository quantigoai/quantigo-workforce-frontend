/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Routers/Routers.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 11:19:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Route, Routes } from 'react-router-dom';
import ProjectDirectoryIndex from '../../ProjectDirectory/ProjectDirectoryIndex';
import ErrorPage from '../../shared/Error/ErrorPage';
import AllUserListIndex2 from '../AllUsers/AllUserListIndex2';
import EmailVerificationAfterLogin from '../Auth/EmailVerification/EmailVerificationAfterLogin';
import VerifyEmail from '../Auth/EmailVerification/VerifyEmail';
import BasicCourses from '../Course/BasicCourses';
import ChapterViewIndex from '../Course/Chapter/ChapterViewIndex';
import ChapterCreateIndex from '../Course/ChapterCreate/ChapterCreateIndex';
import ChapterUpdateIndex from '../Course/ChapterCreate/ChapterUpdate/ChapterUpdateIndex';
import Course from '../Course/Course';
import CourseAllPage from '../Course/CourseAllPage';
import CourseHomePageIndex from '../Course/CourseHomePage/CourseHomePageIndex';
import CourseLandingPageIndex from '../Course/CourseLandingPage/CourseLandingPageIndex';
import AllCourse from '../Course/CourseNew/AllCourse';
import ArchiveCourse from '../Course/CourseNew/ArchiveCourse';
import CourseNew from '../Course/CourseNew/CourseNew';
import MyCourse from '../Course/CourseNew/MyCourse';
import QuizCreateIndex from '../Course/QuizCreate/QuizCreateIndex';
import QuizSubmissionListIndex from '../Course/QuizPage/QuizReview/QuizSubmissionListIndex';
import QuizreviewIndex from '../Course/QuizPage/QuizReview/QuizreviewIndex';
import QuizUpdateIndex from '../Course/QuizUpdate/QuizUpdateIndex';
import CourseDetails from '../CourseNew/CourseDetails';
import CourseMainContent from '../CourseNew/CourseMainContent';
import CourseNewDetailsIndex from '../CourseNew/CourseNewDetailsIndex';
import QuizShow from '../CourseNew/QuizShow';
import AllCourses from '../CourseV2/pages/AllCourses';
import AllLeveledCourses from '../CourseV2/pages/AllLeveledCourses';
import CourseLandingPage from '../CourseV2/pages/CourseLandingPage';
import CourseNewIndex from '../CourseV2/pages/CourseNewIndex';
import AccountActivation from '../Dashboard/CongratulationDashBoard/AccountActivation';
import Dashboard from '../Dashboard/Dashboard';
import EditProfilePageIndex from '../EditProfile/EditProfilePage/EditProfilePageIndex';
import ResetPassword from '../ForgetPassword/ResetPassword';
import Home from '../Home/Home';
import DetailsPage from '../ProjectLIstNew2/ProjectDetailsFull/DetailsPage';
import FullProjectDetails from '../ProjectLIstNew2/ProjectDetailsFull/FullProjectDetails';
import ProjectLIstIndex2 from '../ProjectLIstNew2/ProjectLIstIndex2';
import CreateQuiz from '../Quiz/CreateQuiz';
import QuizResultShowIndex from '../Quiz/QuizPage/ShowResult/QuizResultShowIndex';
import Skills from '../Skill/Skills';
import PrivateRoute from './PrivateRoute';

export const roles = {
  admin: 'admin',
  eng_lead: 'engineering_lead',

  level_0: 'level_0_annotator',

  level_1: 'level_1_annotator',
  level_2: 'level_2_annotator',
  level_3: 'level_3_annotator',

  reviewer: 'reviewer',

  trainer: 'trainer',

  pro_lead: 'delivery_lead',
  pro_co: 'project_coordinator',
  pro_manager: 'project_manager',

  del_manager: 'project_delivery_lead',

  rec_manger: 'recruitment_manager',
  acc_manger: 'account_manager',
};

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/identity-verification'} element={<AccountActivation />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/verify-email/'} element={<VerifyEmail />} />
        <Route path={'/verify-email/:id/:token/'} element={<EmailVerificationAfterLogin />} />
        {/* ---------- Course routes ------------ */}
        {/* TODO Should updated and release later  */}
        <Route path={'/course'} element={<Course />} />
        <Route path={'/content/:id'} element={<ChapterViewIndex />} />
        <Route path={'/submitted/:id'} element={<QuizSubmissionListIndex />} />

        {/* ----------------------------- */}
        <Route path={'/test-quiz-show'} element={<QuizShow />} />
        <Route path={'/test-quiz-review/:id'} element={<QuizreviewIndex />} />
        <Route path={'/result-test'} element={<QuizResultShowIndex />} />

        {/* ----------------------------- */}

        {/* <Route path={"/quiz-page"} element={<QuizPage />} /> */}
        {/* <Route path={"/chapter-page"} element={<ChapterCreateIndex />} /> */}
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          {/* <Route path={'/create-course'} element={<CreateCourse />} /> */}
        </Route>
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]}></PrivateRoute>}>
          {/* <Route path={'/edit-course/:id'} element={<UpdateCourse />} /> */}
        </Route>

        <Route path={'/course-details/:id'} element={<CourseDetails />}>
          {/* TODO Check it and remove this */}
          {/* <Route path='index' element={<CourseDetailsIndex />} /> */}
          <Route path='index' element={<CourseNewDetailsIndex />} />
          <Route path='content' element={<CourseMainContent />} />
          <Route path='show-quiz' element={<QuizShow />} />
          {/* <Route path={'quiz-result'} element={<ShowResult />} /> */}
        </Route>
        <Route path={'/course-landing/:id'} element={<CourseLandingPageIndex />}></Route>
        {/* <Route path={'/basic-course'} element={<BasicCourseAll />}></Route> */}
        <Route path={'/all-course/:level'} element={<CourseAllPage />}></Route>

        <Route path={'/course-homepage/:id'} element={<CourseHomePageIndex />}></Route>

        {/* <Route path={"/course-landing/content/:id"} element={<ChapterViewIndex />}></Route> */}
        <Route element={<PrivateRoute roles={[roles.admin, roles.trainer]} />}>
          <Route path={'/create-chapter/:id'} element={<ChapterCreateIndex />} />
          <Route path={'/update-chapter/:id'} element={<ChapterUpdateIndex />} />
          <Route path={'/update-quiz/:id'} element={<QuizUpdateIndex />} />
          <Route path={'/quiz-create/:id'} element={<QuizCreateIndex />} />
          <Route path={'/create-quiz'} element={<CreateQuiz />} />
        </Route>
        <Route path='courses' element={<CourseNew />}>
          <Route path='my-course' element={<MyCourse />}></Route>
          <Route path='all-course' element={<AllCourse />}></Route>
          {/* <Route path="allCourse/:level" element={<FullCourse />} /> */}
          <Route path='archive-course' element={<ArchiveCourse />}></Route>
        </Route>
        <Route path='courses/all-course/:level' element={<BasicCourses />} />

        {/*############################ newCourse #########################*/}
        {/* TODO Write new path here */}
        <Route path='course-new' element={<CourseNewIndex />}>
          <Route path='all-courses/' element={<AllCourses />} />
          <Route path='course-level/:level' element={<AllLeveledCourses />} />
          <Route path='course-landing/:courseId' element={<CourseLandingPage />} />
        </Route>

        {/* ########################################################### */}

        {/* ---------- ------------ ---------------- */}
        {/* <Route path={"/forgetpassword"} element={<ForgetPassword />} /> */}
        <Route path={'/reset-password/:id/:token'} element={<ResetPassword />} />
        {/* ----------- Project List ------------ */}

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
          }
        >
          <Route path={'/skillcreate'} element={<Skills />} />
        </Route>
        {/* -------- ---------- ------------ */}
        {/* --------All users ------------ */}
        <Route
          element={
            <PrivateRoute roles={[roles.admin, roles.eng_lead, roles.acc_manger, roles.rec_manger]}></PrivateRoute>
          }
        >
          {/* <Route path={"/all-users"} element={<AllUserListIndex action={"admin"} />} /> */}
          <Route path={'/all-users'} element={<AllUserListIndex2 action={'admin'} />} />
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
                // roles.rec_manger,
                roles.acc_manger,
                roles.level_1,
                roles.level_2,
                roles.level_3,
              ]}
            ></PrivateRoute>
          }
        >
          <Route path={'/allprojects'} element={<ProjectLIstIndex2 action={'allprojects'} />} />
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
                // roles.acc_manger,
                roles.level_1,
                roles.level_2,
                roles.level_3,
              ]}
            ></PrivateRoute>
          }
        >
          <Route path={'/detailsInfo/:id'} element={<DetailsPage action={'detailsInfo'} />} />
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
                roles.acc_manger,
                roles.level_1,
                roles.level_2,
                roles.level_3,
              ]}
            ></PrivateRoute>
          }
        >
          <Route path={'/projectDetails/:id'} element={<FullProjectDetails action={'projectDetails'} />} />
        </Route>
        {/* -------- ---------- ------------ */}
        {/* -------- Jobs ------------ */}

        {/* -------- My Profile ---------- */}
        <Route path={'/edit-profile'} element={<EditProfilePageIndex />}></Route>
        {/* -------- ------------ ---------- */}
        {/* ---------- Notification ----------- */}
        {/* <Route
          path={'/show-all-notification'}
          element={<AllNotification />}
        ></Route> */}
        {/* ---------- ---------- ----------- */}
        {/* ---------- Project Directory ----------- */}
        {/* TODO Should updated and release later  */}
        <Route element={<PrivateRoute roles={[roles.admin, roles.eng_lead]} />}>
          <Route path={'/projectDirectory'} element={<ProjectDirectoryIndex />} />
        </Route>
        {/* ---------- ---------- ----------- */}
        {/* ---------- Error Page ----------- */}
        <Route path='*' element={<ErrorPage />} />
        {/* <Route path="/certificate" element={<CertificatePdf />} /> */}
        {/* <Route path="/certificate" element={<CertificatePdf />} /> */}
        {/* ---------- ---------- ----------- */}
        {/* ---------- Coming Soon page ----------- */}
        {/* ---------- ---------- ----------- */}
      </Routes>
    </>
  );
};

export default Routers;

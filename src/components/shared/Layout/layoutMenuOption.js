/*
 * File           : layoutMenuOption.js
 * Project        : wmpfrontv2
 * Created Date   : Fr 20 Oct 2023 11:24:02
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Oct 20 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import BenchmarkSvg from "../../../assets/images/wmp_svg/drawer/banchmarkIcon.svg";
import CourseSvg from "../../../assets/images/wmp_svg/drawer/courseNew.svg";
import DashboardSvg from "../../../assets/images/wmp_svg/drawer/DashboardIcon.svg";
import JobSvg from "../../../assets/images/wmp_svg/drawer/jobsNew.svg";
import ProjectSvg from "../../../assets/images/wmp_svg/drawer/projectNew.svg";
import PaymentSvg from "../../../assets/images/wmp_svg/drawer/u_credit-card.svg";
import UserSvg from "../../../assets/images/wmp_svg/drawer/userNew.svg";

const layoutMenuOption = () => {
  const adminOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "All Projects", icon: ProjectSvg },
    { name: "Skill", icon: BenchmarkSvg },
    // { name: "Course", icon: CourseSvg },

    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Sync Server", icon: SyncIcon },
    { name: "Project Directory", icon: ProjectSvg },
    // { name: "Hour Calculation", icon: HourSvg },
  ];
  const accountManagerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "All Users", icon: UserSvg },
    // { name: "All Projects", icon: ProjectSvg },

    // { name: "All Users", icon: UserSvg },
    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Sync Server", icon: SyncIcon },
    // { name: "Project Directory", icon: ProjectSvg },
    // { name: "Hour Calculation", icon: HourSvg },
  ];
  const verifiedAccountManagerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects", icon: ProjectSvg },
    { name: "All Users", icon: UserSvg },

    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Sync Server", icon: SyncIcon },
    // { name: "Project Directory", icon: ProjectSvg },
    // { name: "Hour Calculation", icon: HourSvg },
  ];
  const projectManagerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },
    // { name: "All Users", icon: UserSvg },
    // { name: "All Projects", icon: ProjectSvg },

    // { name: "Skill", icon: CourseSvg },
    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Sync Server", icon: SyncIcon },
    // { name: "Project Directory", icon: ProjectSvg },
  ];
  const projectLeadOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },
    // { name: "All Projects", icon: ProjectSvg },
    // { name: "Skill", icon: CourseSvg },
    // { name: "All Users", icon: UserSvg },

    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Project Directory", icon: ProjectSvg },
    // { name: "Sync Server", icon: SyncIcon },
  ];
  const projectCoordinatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "Projects", icon: ProjectSvg },

    // { name: "Jobs", icon: JobSvg },
    // { name: "Sync Server", icon: SyncIcon },
    // { name: "Project Directory", icon: ProjectSvg },
  ];

  const verifiedPDLOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects", icon: ProjectSvg },
  ];
  const verifiedTrainerOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    // { name: "All Users", icon: UserSvg },
  ];
  const verifiedProjectManagerOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects", icon: ProjectSvg },

    // { name: "All Users", icon: UserSvg },
  ];
  const verifiedProjectLeadOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects", icon: ProjectSvg },

    // { name: "All Users", icon: UserSvg },
  ];
  const verifiedProjectCoordinatorOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects", icon: ProjectSvg },

    // { name: "Projects", icon: ProjectSvg },
    // { name: "All Users", icon: UserSvg },
  ];
  const verifiedReviewerOptions = [
    // { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
  ];
  const verifiedDevOptions = [
    { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
  ];
  const verifiedRecruitOptions = [
    // { name: "Home", icon: BenchmarkSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
  ];

  const pdlOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "All Projects", icon: ProjectSvg },
    // { name: "Annotator List", icon: UserSvg },
    // { name: "Reviewer List", icon: UserSvg },
    // { name: "Skill", icon: SkillIcon },
    // { name: "Projects", icon: ProjectSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Benchmark", icon: BenchmarkSvg },
    // { name: "Project Directory", icon: ProjectSvg },
    // { name: "Sync Server", icon: SyncIcon },
  ];

  const anntatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "All Projects", icon: ProjectSvg },
    // { name: "Course", icon: CourseSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Payment", icon: PaymentSvg },
  ];
  const verifiedAnnotatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    // { name: "Verification", icon: CourseSvg },

    { name: "All Projects", icon: ProjectSvg },
    // { name: "Course", icon: CourseSvg },
    // { name: "Jobs", icon: JobSvg },
    // { name: "Payment", icon: PaymentSvg },
  ];

  const level0AnnotatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },
  ];
  const Verifiedlevel0AnnotatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    // { name: "Course", icon: CourseSvg },
  ];
  const trainerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "Course", icon: CourseSvg },
    // { name: "Skill", icon: SkillIcon },
  ];

  const reviewerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },

    // { name: "Course", icon: CourseSvg },
    // { name: "Jobs", icon: JobSvg },
  ];

  const recruitOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },
    // { name: "All Projects", icon: ProjectSvg },
    // { name: "Users", icon: UserSvg },
    // { name: "All Users", icon: UserSvg },
  ];

  const unverifiedOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    {
      name: "Verify Email",
      icon: DashboardSvg,
    },
  ];
  const devOptions = [
    { name: "Verify Email", icon: DashboardSvg },
    { name: "Verification", icon: CourseSvg },
    { name: "All Users", icon: UserSvg },
    { name: "Project Directory", icon: ProjectSvg },
    { name: "All Projects", icon: ProjectSvg },
    { name: "Annotator List", icon: UserSvg },
    { name: "Archive Job", icon: JobSvg },
    // { name: "Calculate Annotation", icon: HourSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Create Course", icon: CourseSvg },
    { name: "Create Job", icon: JobSvg },
    { name: "Create Quiz", icon: CourseSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Job List", icon: JobSvg },
    { name: "On Going Job", icon: JobSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Quiz", icon: CourseSvg },
    { name: "Reviewer Course", icon: CourseSvg },
    { name: "Reviewer Job Lst", icon: JobSvg },
    { name: "Reviewer List", icon: UserSvg },
    { name: "Skill", icon: PaymentSvg },
    { name: "Show Quiz", icon: CourseSvg },
    { name: "Users", icon: UserSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
  ];

  return {
    adminOptions,
    projectManagerOptions,
    projectLeadOptions,
    projectCoordinatorOptions,
    verifiedPDLOptions,
    verifiedTrainerOptions,
    verifiedProjectManagerOptions,
    verifiedProjectLeadOptions,
    verifiedProjectCoordinatorOptions,
    verifiedReviewerOptions,
    verifiedDevOptions,
    verifiedRecruitOptions,
    pdlOptions,
    anntatorOptions,
    level0AnnotatorOptions,
    Verifiedlevel0AnnotatorOptions,
    trainerOptions,
    reviewerOptions,
    recruitOptions,
    unverifiedOptions,
    devOptions,
    accountManagerOptions,
    verifiedAccountManagerOptions,
    verifiedAnnotatorOptions,
  };
};

export default layoutMenuOption;

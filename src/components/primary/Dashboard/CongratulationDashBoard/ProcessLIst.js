import uploadImg from "./carouselImg/003-upload-file.png";
import accountImg from "./carouselImg/004-add-user.png";
import verifytImg from "./carouselImg/005-check.png";

const processList = [
  {
    header: "Create an Account",
    describe:
      "This is the initial step to join our workforce platform. By creating an account, you gain access to a variety of features and opportunities.",
    active: true,
    _id: 1,
    image: accountImg,
    navigationLink: "/",
  },
  {
    header: "Verify your email address",
    describe:
      "After signing up, you will need to verify your email address. This step is crucial to ensure the security of your account and the authenticity of your identity.",
    active: true,
    _id: 2,
    image: verifytImg,
    navigationLink: "/verify-email",
  },
  {
    header: "Upload Identity  (NDA/ Documents)",
    describe:
      "In this step, you will be required to provide necessary identity documents such as NDAs or other relevant documents. This step may be essential for certain roles or tasks on the platform.",
    active: false,
    _id: 3,
    image: uploadImg,
    navigationLink: "/identity-verification",
  },
  // {
  //   header: "Start a course",
  //   describe: "Lorem ipsum dolor sit amet consectetur. Euismod mattis quam ut nulla eget",
  //   active: false,
  //   _id: 4,
  //   image: courseImg,
  // },
  // {
  //   header: "Achieve skills",
  //   describe: "Lorem ipsum dolor sit amet consectetur. Euismod mattis quam ut nulla eget",
  //   active: false,
  //   _id: 5,
  //   image: skillImg,
  // },
  // {
  //   header: "Start Job",
  //   describe: "Lorem ipsum dolor sit amet consectetur. Euismod mattis quam ut nulla eget",
  //   active: false,
  //   _id: 6,
  //   image: jobImg,
  // },
  // {
  //   header: "Submit Job",
  //   describe: "Lorem ipsum dolor sit amet consectetur. Euismod mattis quam ut nulla eget",
  //   active: false,
  //   _id: 7,
  //   image: submitImg,
  // },
  // {
  //   header: "Earn Money",
  //   describe: "Lorem ipsum dolor sit amet consectetur. Euismod mattis quam ut nulla eget",
  //   active: false,
  //   _id: 8,
  //   image: moneyImg,
  // },
];

export default processList;

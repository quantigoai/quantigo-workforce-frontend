import dayjs from 'dayjs';
import * as Yup from 'yup';

const maxDOB = dayjs().subtract(13, 'year');
const minDOB = dayjs().subtract(70, 'year');

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  qaiUserName: Yup.string().required('QAI Id is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date()
    .required('Date of Birth is required')
    .min(minDOB, 'User age must be in range between 13 to 70 years.')
    .max(maxDOB, 'User must be 13 years old.'),

  billingAccountNo: Yup.string()
    .required('Nagad Number is required')
    .matches(
      /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/, // Regex for the specified phone number format
      'Nagad Number must be a valid Bangladeshi phone number',
    ),
  contactNo: Yup.string()
    .required('Contact Number is required')
    .matches(
      /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/, // Regex for the specified phone number format
      'Contact Number must be a valid Bangladeshi phone number',
    ),
});

const userStatusOptions = [
  { value: 'newUser', label: 'New User' },
  { value: 'oldUser', label: 'Old User' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const hubOptions = [
  { value: 'DK', label: 'Dhaka' },
  { value: 'KH', label: 'Khulna' },
  { value: 'SG', label: 'Sirajganj' },
  { value: 'MS', label: 'Mymensingh' },
  { value: 'CD', label: 'Chuadanga' },
];

export { RegistrationSchema, genderOptions, hubOptions, userStatusOptions };

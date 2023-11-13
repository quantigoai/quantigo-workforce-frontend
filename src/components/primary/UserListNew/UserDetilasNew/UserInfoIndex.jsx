import {Box, Stack} from '@mui/material';
import moment from 'moment/moment';
import React from 'react';
import {capitalizeFirstLetter} from '../../../../helper/capitalizeFirstWord';
import SingleItem from '../../ProjectLIstNew2/Project2Details/SingleItem';
import ChangeInfoIndex from './ChangeInfoIndex';
import DetailsItemThree from './DetailsItemThree';
import NdaDocumentSection from './NdaDocumentSection';
import SkillFieldForUserDetails from './SkillFieldForUserDetails';

const UserInfoIndex = ({
  user,
  role,
  handleSetRole,
  handleSetStatus,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const DOB = user.dob
    ? moment.utc(user.dob).format('MMM Do, YYYY')
    : 'Not Available';
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <>
      <Box sx={{}}>
        <Stack
          sx={{
            border: '1px solid #E6ECF5',
            borderRadius: '8px',
          }}
        >
          <DetailsItemThree
            Item1Title={'Name'}
            Item1={user.name}
            Item2Title={'Id'}
            Item2={user.qaiUserName}
            Item3Title={'Role'}
            Item3={
              user.role === 'level_1_annotator'
                ? 'Level 1 Annotator'
                : user.role === 'level_2_annotator'
                ? 'Level 2 Annotator'
                : user.role === 'level_0_annotator'
                ? 'Level 0 Annotator'
                : user.role === 'level_3_annotator'
                ? 'Level 3 Annotator'
                : user.role === 'project_delivery_lead'
                ? 'Project Delivery Lead'
                : user.role === 'delivery_lead'
                ? 'Delivery Lead'
                : user.role === 'project_coordinator'
                ? 'Project Coordinator'
                : user.role === 'project_manager'
                ? 'Project Manager'
                : user.role === 'recruitment_manager'
                ? 'Recruitment Manager'
                : capitalizeFirstLetter(user?.role)
            }
          />
          <DetailsItemThree
            Item1Title={'Email'}
            Item1={user.email}
            Item2Title={'Annotation Status'}
            Item2={
              user.role === 'project_delivery_lead' ||
              user.role === 'delivery_lead' ||
              user.role === 'recruitment_manager' ||
              user.role === 'admin' ||
              user.role === 'trainer' ||
              user.role === 'reviewer'
                ? 'Active'
                : user.lastJobTakenAt && diffInDays <= 15
                ? 'Active'
                : 'Inactive'
            }
            Item3Title={'Rating'}
            Item3={5}
          />
          <DetailsItemThree
            Item1Title={'Date Of Birth'}
            Item1={DOB}
            Item2Title={'Phone'}
            Item2={user.contactNo}
            Item3Title={'Completed Course'}
            Item3={'No Course Completed'}
          />
          <SingleItem ItemTitle={'Address'} Item={user.presentAddress} />
          {/* <SingleItem ItemTitle={"Skills"} Item={user.skills} /> */}
          <SkillFieldForUserDetails
            ItemTitle={'Skills'}
            Item={user.skills}
            user={user}
            skillSet={skillSet}
            handleChangeSkills={handleChangeSkills}
            setIsEditSkill={setIsEditSkill}
            isEditSkill={isEditSkill}
          />
          <NdaDocumentSection user={user} />
        </Stack>
      </Box>

      <Box>
        <ChangeInfoIndex
          role={role}
          user={user}
          handleSetRole={handleSetRole}
          handleSetStatus={handleSetStatus}
        />
      </Box>
    </>
  );
};

export default UserInfoIndex;

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updateAUserById } from "../../../../features/slice/userSlice";
import CommonModalFooter from "../../../shared/CommonModal/CommonModalFooter";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import DetailsTab from "./DetailsTab";
import styled from "./testDrawer";

export default function UserDetailsNewIndex({ user, open, handleProjectDetailsOpen, handleClose }) {
  const [roleValue, setRole] = React.useState("");
  const [actionStatus, setActionStatus] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState(false);
  const { isLoading } = useSelector((state) => state.user);
  const { skills } = useSelector((state) => state.skill);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [skill, setSkill] = useState([]);
  const [skillSet1, setSkillSet1] = useState([]);
  const [skillSet2, setSkillSet2] = useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const dispatch = useDispatch();
  const [isEditSkill, setIsEditSkill] = useState(false);
  const alert = useAlert();
  const { buttonStyle, BoxStyle } = styled(isLightTheme);
  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
    setDisabledButton(true);
  };
  const handleSetRole = (e) => {
    setRole(e.target.value);
    setDisabledButton(true);
  };

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    // value.map((skill) => {
    selectedSkills.map((skill) => {
      const preData = {
        name: skill.name,
        id: skill._id,
      };
      setSkillSet1([
        {
          ...preData,
        },
      ]);
    });
    setSkillSet2([
      {
        ...skillSet1,
      },
    ]);
    !selectedSkills.length && setIsSkillEmpty(true);
    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const handleChange = () => {
    console.log(skill);
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const skillData = {
      id: user._id,
      varifiedData: {
        skills: skillColl,
      },
    };
    console.log(skillData);
    const data = {
      role: roleValue,
    };
    const finalData = {
      id: user._id,
      data,
    };
    const finalStatusData = {
      id: user._id,
      action: actionStatus,
    };

    // skill Change
    dispatch(updateAUserById(skillData)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Skill Update successfully", { type: "success" });
        setIsEditSkill(false);
      } else {
        alert.show("Skill can not updated ", { type: "error" });
      }
    });
    // roleValue &&
    //   dispatch(changeRole(finalData)).then((action) => {
    //     if (action.payload?.status === 200) {
    //       alert.show("Role Change Successfully", { type: "success" });
    //     } else {
    //       alert.show("Role can not Change", { type: "error" });
    //     }
    //   });

    // actionStatus &&
    //   dispatch(deleteOrActivateUser(finalData)).then((action) => {
    //     if (action.payload?.status === 200) {
    //       if (actionStatus === "delete") {
    //         window.location.reload(false);
    //         alert.show(
    //           "User Delete Successfully",

    //           { type: "success" }
    //         );
    //       } else {
    //         alert.show(
    //           "Status change Successfully",

    //           { type: "success" }
    //         );
    //       }
    //     } else {
    //       alert.show("Status can not Change", { type: "error" });
    //     }
    //   });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...BoxStyle,
            height: { xl: "80%", lg: "90%" },
            width: { xl: "40%", lg: "50%" },
          }}
        >
          <Box sx={{ height: "8%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Details"} />
          </Box>

          <Box sx={{ height: "86%" }}>
            <DetailsTab
              user={user}
              handleSetRole={handleSetRole}
              handleSetStatus={handleSetStatus}
              skillSet={skill}
              handleChangeSkills={handleChangeSkills}
              setIsEditSkill={setIsEditSkill}
              isEditSkill={isEditSkill}
            />
          </Box>
          <Box sx={{ height: "7%" }}>
            <CommonModalFooter
              isLoading={isLoading}
              leftButtonTitle={"Cancel"}
              rightButtonTitle={"Save Changes"}
              disabledButton={disabledButton}
              handleClose={handleClose}
              handleChange={handleChange}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

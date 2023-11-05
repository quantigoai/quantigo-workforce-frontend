import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import { changeRole, deleteOrActivateUser, updateAUserById } from "../../../../features/slice/userSlice";
import CommonModalFooter from "../../../shared/CommonModal/CommonModalFooter";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import DetailsTab from "./DetailsTab";
import styled from "./testDrawer";

export default function UserDetailsNewIndex({ open, handleClose, role }) {
  const toast = useToaster();
  const { targetedUser: user } = useSelector((state) => state.user);
  const [roleValue, setRoleValue] = React.useState("");
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

  React.useEffect(() => {
    !open && setIsEditSkill(false);
    !open && setRoleValue("");
    !open && setActionStatus("");
  }, [open]);

  const { buttonStyle, BoxStyle } = styled(isLightTheme);

  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
    setDisabledButton(true);
  };

  const handleSetRole = (e) => {
    setRoleValue(e.target.value);
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
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const skillData = {
      id: user._id,
      varifiedData: {
        skills: skillColl,
      },
    };
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

    // TODO Call this when skill change
    // skill Change
    isEditSkill &&
      dispatch(updateAUserById(skillData)).then((action) => {
        if (action.payload?.status === 200) {
          toast.trigger("User skill has been updated successfully.", "success");
          setIsEditSkill(false);
        } else {
          toast.trigger("Failed to update user skills, please try again later.", "error");
        }
      });
    roleValue &&
      dispatch(changeRole(finalData)).then((action) => {
        if (action.payload?.status === 200) {
          toast.trigger("User role has been changed successfully.", "success");
          setRoleValue("");
        } else {
          toast.trigger("Failed to change user role, try again later.", "error");
        }
      });

    actionStatus &&
      dispatch(deleteOrActivateUser(finalStatusData)).then((action) => {
        if (action.payload?.status === 200) {
          if (actionStatus === "delete") {
            window.location.reload(false);
            toast.trigger("User deleted successfully from the application.", "success");
            setActionStatus("");
          } else {
            toast.trigger("User status has been changed successfully.", "success");
            setActionStatus("");
          }
        } else {
          toast.trigger("Failed to change user status, please try again later.", "error");
        }
      });
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
            width: { lg: "65%", xl: "50%", xxl: "40%" },
          }}
        >
          <Box sx={{ height: "8%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Details"} />
          </Box>

          <Box sx={{ height: "86%" }}>
            <DetailsTab
              role={role}
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

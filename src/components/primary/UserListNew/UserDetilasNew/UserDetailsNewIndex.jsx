import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../../customHooks/useToaster";
import {changeRole, deleteOrActivateUser, updateAUserById} from "../../../../features/slice/userSlice";
import CommonModalFooter from "../../../shared/CommonModal/CommonModalFooter";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import DetailsTab from "./DetailsTab";
import styled from "./testDrawer";

export default function UserDetailsNewIndex({ open, handleClose, role }) {
  const toast = useToaster();
  const { targetedUser: user } = useSelector((state) => state.user);
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

  React.useEffect(() => {
    !open && setIsEditSkill(false);
    !open && setRole("");
    !open && setActionStatus("");
  }, [open]);

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
          toast.trigger("Skill Update successfully", "success");
          setIsEditSkill(false);
        } else {
          toast.trigger("Skill can not updated ", "error");
        }
      });
    roleValue &&
      dispatch(changeRole(finalData)).then((action) => {
        if (action.payload?.status === 200) {
          toast.trigger("Role Change Successfully", "success");
        } else {
          toast.trigger("Unable to Change the Role", "error");
        }
      });

    actionStatus &&
      dispatch(deleteOrActivateUser(finalData)).then((action) => {
        if (action.payload?.status === 200) {
          if (actionStatus === "delete") {
            window.location.reload(false);
            toast.trigger("User Deleted Successfully", "success");
          } else {
            toast.trigger("Status change Successfully", "success");
          }
        } else {
          toast.trigger("Unable to Change the Status", "error");
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
            width: { xl: "40%", lg: "50%" },
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

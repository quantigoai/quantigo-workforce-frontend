/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/UsersFilter.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:19:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProjectSelectFIlterField from "../ProjectLIstNew2/ProjectSelectFIlterField";
import ProjectMultipleSelectRole from "./ProjectMultipleSelectRole";
import UserSkillFieldSelect from "./UserSkillFieldSelect";

const UsersFilter = ({
  role,
  roleOptions,
  isFilter,
  isLightTheme,
  filterPDR,
  platformOptions,
  statusOptions,
  projectTypeOptions,
  handleChange,
  handleClearFilter,
  filterValue,
  userStatusOptions,
  hubOptions,
  handleChangeAnnotatorFilter,
  skillOptions,
  handleChangeSkill,
  addSkills,
  count,
  handleClickAway,
  addRoles,
  handleChangeRoles,
}) => {
  const { skills } = useSelector((state) => state.skill);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N000",
          width: "100%",
          height: isFilter ? "45%" : "0%",
          paddingY: "5px",
          display: isFilter ? "block" : "none",
          borderTop: "1px solid #E6ECF5",
          transition: isFilter && "all 0.2s ease-in-out",
        }}
      >
        {/* <Stack sx={{ width: "100%" }}> */}
        <Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {role === "admin" || role === "recruitment_manager" ? (
              <>
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    paddingX: "16px",
                  }}
                >
                  <ProjectMultipleSelectRole
                    name={"Roles"}
                    label={"Users Roles"}
                    addRoles={addRoles}
                    handleChangeRoles={handleChangeRoles}
                    roles={roleOptions}
                    count={count}
                    handleClickAway={handleClickAway}
                  />
                  <ProjectSelectFIlterField
                    label={"Users Hub"}
                    name="hub"
                    filterValue={filterValue}
                    options={hubOptions}
                    handleChange={handleChange}
                  />

                  <UserSkillFieldSelect
                    name={"skills"}
                    addSkills={addSkills}
                    label={"Users Skills"}
                    handleChangeSkill={handleChangeSkill}
                    skills={skills}
                    count={count}
                    handleClickAway={handleClickAway}
                  />
                  <ProjectSelectFIlterField
                    label={"Users Status"}
                    name="activeAnnotator"
                    filterValue={filterValue}
                    options={userStatusOptions}
                    handleChange={handleChange}
                  />
                </Stack>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", paddingX: "40px", width: "70%" }}></Box>
            )}

            <Stack
              sx={{
                width: "10%",
                paddingRight: "16px",
              }}
            >
              <Button
                onClick={() => handleClearFilter()}
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#FF4757",
                  color: "white",
                  // width: "140px",
                  height: { xl: "35 px", lg: "35px" },
                  "&:hover": {
                    backgroundColor: "#F53142",
                  },
                }}
                size="medium"
                color="error"
              >
                Clear Filter
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default UsersFilter;

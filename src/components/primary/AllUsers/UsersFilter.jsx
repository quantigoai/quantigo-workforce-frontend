/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/UsersFilter.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:19:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import ProjectSelectFIlterField from "../ProjectLIstNew2/ProjectSelectFIlterField";
import ProjectMultipleSelectRole from "./ProjectMultipleSelectRole";
import UserSkillFieldSelect from "./UserSkillFieldSelect";

const UsersFilter = ({
  role,
  roleOptions,
  isFilter,
  handleChange,
  handleClearFilter,
  filterValue,
  userStatusOptions,
  hubOptions,
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
        component={motion.div}
        animate={{
          transition: { type: "spring", stiffness: 300, duration: 0.4, delay: 0.2 },
        }}
        sx={{
          backgroundColor: "neutral.N000",
          width: "100%",
          paddingY: "5px",
          display: isFilter ? "block" : "none",
          borderTop: "1px solid #E6ECF5",
          height: "52px",
        }}
      >
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingY: "6px",
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
                    pl: 2,
                    gap: 2,
                    // backgroundColor: "blue",
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

            <Stack sx={{ width: "7%", px: 2 }}>
              <Button
                onClick={() => handleClearFilter()}
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#FF4757",
                  color: "white",
                  height: { xl: "30 px", lg: "30px" },
                  "&:hover": {
                    backgroundColor: "#F53142",
                  },
                }}
                size="medium"
                color="error"
              >
                Clear
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default UsersFilter;

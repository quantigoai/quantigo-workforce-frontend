import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Chip, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  // background: "white",
  borderRadius: "8px",
}));
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};
const UserSkillFieldSelect = ({ name, addSkills, handleChangeSkill, skills, count, handleClickAway, label }) => {
  return (
    <>
      <MyFormControl fullWidth>
        <MySelect
          sx={{
            backgroundColor: "neutral.N000",
            height: "36px",
          }}
          displayEmpty
          multiple
          value={addSkills?.map((skill) => skill.name) || ""}
          onChange={handleChangeSkill}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography variant="h7" color="neutral.600">
                  {label}
                </Typography>
              );
            }
            return (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: "12px",
                }}
              >
                {selected?.map(
                  (value, i) =>
                    [0].includes(i) && (
                      <Chip sx={{ fontSize: "12px", height: "95%", color: "neutral.750" }} key={value} label={value} />
                    )
                )}
                {selected?.length > 1 && (
                  <Typography variant="h7" sx={{ ml: 2, mt: 0, color: "neutral.850" }}>
                    + {count} more
                  </Typography>
                )}
              </Box>
            );
          }}
          name={name}
          MenuProps={MenuProps}
          onClose={handleClickAway}
        >
          {skills?.map((skill) => (
            <MenuItem sx={{ fontSize: "14px" }} key={skill._id} value={skill.name || ""}>
              {skill.name}
            </MenuItem>
          ))}
        </MySelect>
      </MyFormControl>
    </>
  );
};

export default UserSkillFieldSelect;
import { Box, Chip, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl } from "./CustomDatePicker";
import { MySelect } from "./CustomSelectField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};
const PDskillFIeld = ({
  name,
  addSkills,
  label,
  handleChangeSkill,
  selectedSkills,
  skills,
  isEdit,
  count,
  // inputRef,
  ...other
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MyFormControl fullWidth>
            <Typography sx={{ fontSize: "14px", fontWeight: "500", mb: 1 }}>{label}</Typography>

            <MySelect
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              variant="outlined"
              multiple
              defaultValue={isEdit ? selectedSkills?.map((skill) => skill.name) : addSkills}
              onChange={handleChangeSkill}
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1,1fr)",
                    gap: 0.5,
                    fontSize: "12px",
                  }}
                >
                  {selected?.map((value, i) => [0].includes(i) && <Chip key={value} label={value} />)}
                  {isEdit
                    ? selectedSkills.length > 1 && (
                        <Typography variant="h7" sx={{ ml: 2, mt: 0.5 }}>
                          {" "}
                          + {count} more
                        </Typography>
                      )
                    : selected.length > 1 && (
                        <Typography
                          variant="h7"
                          sx={{ ml: 2, mt: 0.5 }}
                          // ref={inputRef}
                        >
                          {" "}
                          + {count} more
                          {/* {inputRef.current} */}
                        </Typography>
                      )}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {skills?.map((skill) => (
                <MenuItem key={skill._id} value={skill.name}>
                  {skill.name}
                </MenuItem>
              ))}
            </MySelect>
          </MyFormControl>
        </>
      )}
    />
  );
};

export default PDskillFIeld;

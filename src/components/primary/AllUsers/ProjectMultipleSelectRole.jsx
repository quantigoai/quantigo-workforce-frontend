import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Box, Chip, MenuItem, Select, styled, Typography} from "@mui/material";
import {MyFormControl} from "../../shared/CustomField/CustomDatePicker";

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

const ProjectMultipleSelectRole = ({ name, addRoles, handleChangeRoles, label, roles, count, handleClickAway }) => {
  return (
    <MyFormControl fullWidth>
      <MySelect
        sx={{
          backgroundColor: "neutral.N000",
          height: "36px",
        }}
        displayEmpty
        multiple
        value={addRoles?.map((role) => role)}
        onChange={handleChangeRoles}
        IconComponent={KeyboardArrowDownIcon}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="h7" color="neutral.N300">
                {label}
              </Typography>
            );
          }
          return (
            <Box
              key={selected}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {selected.map(
                (value, i) =>
                  [0].includes(i) && <Chip sx={{ height: "100%", color: "neutral.700" }} key={value} label={value} />
              )}
              {selected.length > 1 && (
                <Typography variant="h7" sx={{ ml: 2, mt: 0, color: "neutral.700" }}>
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
        {roles?.map((role) => (
          <MenuItem sx={{ fontSize: "14px" }} key={role.label} value={role.label || ""}>
            {role.label}
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
};

export default ProjectMultipleSelectRole;

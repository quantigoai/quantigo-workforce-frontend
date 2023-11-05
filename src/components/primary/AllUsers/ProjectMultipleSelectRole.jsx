import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Chip, MenuItem, Select, styled, Typography } from "@mui/material";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
}));
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      fontFamily: "Inter",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};

const ProjectMultipleSelectRole = ({ name, addRoles, handleChangeRoles, label, roles, count, handleClickAway }) => {
  return (
    <MyFormControl fullWidth sx={{ px: 0, minWidth: { lg: "20%", xl: "25%", xxl: "25%" } }}>
      <MySelect
        sx={{
          backgroundColor: "neutral.N000",
          height: {
            lg: "30px",
            xl: "36px",
            xxl: "36px",
          },
          fontSize: { lg: "12px", xl: "14px", xxl: "14px" },
          fontFamily: "Inter",
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
              key={selected.value}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                alignItems: "center",
                gap: 0.5,
                fontFamily: "Inter",
              }}
            >
              {selected.map(
                (item, i) =>
                  [0].includes(i) && (
                    <Chip
                      sx={{
                        height: {
                          lg: "20px",
                          xl: "24px",
                          xxl: "28px",
                        },
                        borderRadius: "32px",
                        border: "1px solid #E6ECF5",
                        color: "neutral.700",
                        fontSize: { xl: "14px", xxl: "14px", lg: "12px" },
                        fontFamily: "Inter",
                      }}
                      key={item.value}
                      label={item.label}
                    />
                  )
              )}
              {selected.length > 1 && (
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    pl: "4px",
                    mt: 0,
                    color: "neutral.700",
                    fontSize: { xl: "14px", xxl: "14px", lg: "12px" },
                  }}
                >
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
          <MenuItem
            sx={{ fontFamily: "Inter", fontSize: { xl: "14px", xxl: "16px", lg: "12px" } }}
            key={role.label}
            value={role || ""}
          >
            {role.label}
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
};

export default ProjectMultipleSelectRole;

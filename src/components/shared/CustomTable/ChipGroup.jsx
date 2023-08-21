/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTable/ChipGroup.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Wednesday, August 9th 2023, 12:13:47 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { AvatarGroup } from "@mui/material";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import * as React from "react";
import ProjectDrawerStatusChip from "../FilterField/ProjectDrawerStatusChip";
import "./index.css";
const ChipGroup = ({ value }) => {
  const params = { value: value };
  const mouseOverEffect = (event) => {
    params.value.length === 3 && setSkillsAnchorEl(null);
    params.value.length > 3 && setSkillsAnchorEl(event.currentTarget);
  };

  const mouseOutEffect = () => {
    setSkillsAnchorEl(null);
  };

  const [skillsAnchorEl, setSkillsAnchorEl] = React.useState(null);

  const open = Boolean(skillsAnchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Box aria-describedby={id}>
        <AvatarGroup
          onMouseOver={(e) => mouseOverEffect(e)}
          onMouseOut={(e) => mouseOutEffect(e)}
          max={3}
        >
          {params.value.map((p) => (
            <ProjectDrawerStatusChip key={p._id} value={p.name} />
          ))}
        </AvatarGroup>
      </Box>
      <Popper
        sx={{ position: "absolute", zIndex: 4 }}
        id={id}
        open={open}
        anchorEl={skillsAnchorEl}
      >
        {/* TODO change the design */}
        <Box
          sx={{
            textAlign: "center",
            border: "2px solid #C4F5DF",
            borderRadius: "15px",
            p: 2,
            bgcolor: "background.paper",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "15px",
          }}
        >
          {params.value.map(
            (p, i) =>
              ![0, 1].includes(i) && (
                <ProjectDrawerStatusChip
                  key={p._id}
                  value={p.name}
                  isPopper={true}
                />
              )
          )}
        </Box>
      </Popper>
    </div>
  );
};

export default ChipGroup;

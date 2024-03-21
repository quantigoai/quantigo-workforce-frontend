/*
 * File           : CourseContentSkills.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:32:16
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CourseContentSkills = ({ course }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box>
      <Box>
        <Typography variant="wpf_h5_Bold" color={"neutral.995"}>
          Skills you&apos;ll gain
        </Typography>
        <Box
          sx={{
            mt: "16px",
            display: "grid",
            gridTemplateColumns: { xxl: "repeat(5,1fr)", xl: "repeat(5,1fr)", lg: "repeat(3,1fr)" },
            gridGap: "8px",
          }}
        >
          {course?.skills?.map((skill) => (
            <Chip
              sx={{
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "500",
                color: isLightTheme ? "#344054" : "#fff",
                backgroundColor: isLightTheme ? "#F1F5F9" : "#000C1F",
              }}
              key={skill.id}
              label={skill.name}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseContentSkills;

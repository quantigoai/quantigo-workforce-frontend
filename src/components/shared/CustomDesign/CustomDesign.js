/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomDesign/CustomDesign.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, February 14th 2023, 11:15:50 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const customDesign = () => {
  const selectFieldStyle = {
    height: "58px",
    background: "#F8F8F8",
    border: "1px solid #DADCDF",
    borderRadius: "4px",
    flex: "none",
    order: "0",
    alignSelf: "stretch",
    flexGrow: "0",
  };

  const CustomDownArrow = styled(KeyboardArrowDownIcon)({
    color: "rgba(45, 88, 255, 1)",
    marginRight: "10px",
  });

  return { selectFieldStyle, CustomDownArrow };
};

export default customDesign;

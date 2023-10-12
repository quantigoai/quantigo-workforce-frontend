/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/LinkCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 6th 2023, 2:28:39 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Link, Typography} from "@mui/material";
import React from "react";

const LinkCell = ({ data }) => {
  return (
    <>
      {data?.length > 0 ? (
        <Typography sx={{ color: "#253E5C" }} variant="wf_p4_regular">
          <Link
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
            href={data?.[0].documentUrl}
          >
            click here
            <i className="ri-arrow-right-up-line"></i>
          </Link>
        </Typography>
      ) : (
        ""
      )}
    </>
  );
};

export default LinkCell;

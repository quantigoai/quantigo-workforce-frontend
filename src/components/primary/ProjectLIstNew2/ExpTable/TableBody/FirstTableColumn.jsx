/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/FirstTableCoumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:51:55 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Badge, Box, styled, TableCell, Typography } from '@mui/material';
import React from 'react';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -8,
    top: 10,
    padding: '0 2px',
  },
}));
const FirstTableColumn = ({ row, column, handleDetailsPage, currentlyCheckedInProject, isObjectField }) => {
  return (
    <>
      <TableCell
        sx={{
          minWidth: column.minWidth,
        }}
        className="tableColumn1st"
        key={column.id}
        onClick={() => handleDetailsPage(row)}
      >
        {currentlyCheckedInProject === row._id ? (
          <StyledBadge variant="dot" color="success">
            <Typography variant="wpf_p4_medium" color="neutral.700">
              {column.format && typeof value === 'number' ? column.format(row[column?.field]) : row[column?.field]}
            </Typography>
          </StyledBadge>
        ) : (
          <>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Typography variant="wpf_p4_medium" color="neutral.700">
                {column.format && typeof value === 'number'
                  ? column.format(row[column?.field])
                  : isObjectField
                  ? row[column?.field].name
                  : row[column?.field]}
              </Typography>
              {row.isBlocked && (
                <LockPersonIcon
                  sx={{
                    color: 'red',
                    px: '0px',
                    height: {
                      lg: '10px',
                      xl: '12px',
                      xxl: '14px',
                    },
                    width: {
                      lg: '10px',
                      xl: '12px',
                      xxl: '14px',
                    },
                  }}
                />
              )}
            </Box>
          </>
        )}
      </TableCell>
    </>
  );
};

export default FirstTableColumn;

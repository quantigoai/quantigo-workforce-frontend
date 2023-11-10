/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectHeader.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, October 12th 2023, 11:38:29 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import CommonHeader from '../../shared/CustomComponenet/CommonHeader/CommonHeader';
const ProjectHeader = ({
  isFilter,
  handleIsFilter,
  handleProjectCreateOpen,
  handleSearch,
  search,
  searchRef,
  clearSearch,
  role,
}) => {
  return (
    <>
      <Box
        className="contentHeader"
        sx={{
          backgroundColor: 'neutral.N000',
        }}
      >
        <Box sx={{ width: '30%', padding: '12px 16px' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* TODO Need to remove the unnecessary custom button */}
            <CommonHeader title="Projects" customButton="Create User" />
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 20px',
          }}
        >
          <Paper
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { lg: '160px', xl: '240px', xxl: '240px' },
              height: {
                lg: '30px',
                xl: '40px',
                xxl: '40px',
              },
              backgroundColor: 'primary.B008',
              border: '1px solid #EFF3FE',
              borderRadius: '8px',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <IconButton
              disabled
              type="button"
              sx={{ p: '5px' }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              inputRef={searchRef}
              sx={{
                ml: 0,
                flex: 1,
                fontFamily: 'Inter',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              }}
              placeholder="Search"
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  handleSearch(ev);
                  ev.preventDefault();
                }
              }}
            />
            {search && (
              <Button
                sx={{
                  height: '30px',
                  minWidth: '40px',
                }}
              >
                <ClearIcon
                  sx={{
                    height: {
                      lg: '20px',
                      xl: '40px',
                      xxl: '40px',
                    },
                    color: 'neutral.N300',
                    '&:hover': {
                      color: '#F04438',
                    },
                  }}
                  onClick={clearSearch}
                />
              </Button>
            )}
          </Paper>
          <IconButton
            onClick={handleIsFilter}
            sx={{
              px: '0px 0px',
              backgroundColor: 'primary.B008',
              // mx: 2,
              ml: 2,
              mr:
                role === 'admin' ||
                role === 'project_manager' ||
                role === 'project_delivery_lead'
                  ? 2
                  : 0,
              borderRadius: '8px',
              height: {
                lg: '30px',
                xl: '40px',
                xxl: '40px',
              },
            }}
            aria-label="menu"
          >
            {isFilter ? (
              <FilterListOffIcon sx={{ color: 'primary.main' }} />
            ) : (
              <FilterListIcon sx={{ color: 'primary.main' }} />
            )}
          </IconButton>
          {role === 'admin' ||
          role === 'project_manager' ||
          role === 'project_delivery_lead' ? (
            <Button
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: '#2E58FF',
                height: {
                  lg: '30px',
                  xl: '40px',
                  xxl: '40px',
                },
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
                lineHeight: '20px',
                width: {
                  lg: '128px',
                  xl: '128px',
                  xxl: '140px',
                },
                color: 'white',
                '&:hover': {
                  background: '#244EF5',
                },
                padding: '16px 10px',
              }}
              onClick={handleProjectCreateOpen}
            >
              Create Project
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProjectHeader;

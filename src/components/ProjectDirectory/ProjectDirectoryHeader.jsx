import { Box, Button, Grid, IconButton, InputBase, Paper, Popover } from '@mui/material';
import React from 'react';
import CommonHeader from '../shared/CustomComponenet/CommonHeader/CommonHeader.jsx';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MiniModalProjectDirectoryNew from './ProjectDirectoryFilter/MiniModalProjectDirectoryNew';
import { ClearIcon } from '@mui/x-date-pickers';
import SyncIcon from '@mui/icons-material/Sync';
import { LoadingButton } from '@mui/lab';

const ProjectDirectoryHeader = ({
  setProjectDirectoryRemove,
  handleGetSync,
  isSyncLoading,
  search,
  searchRef,
  clearSearch,
  handleSearch,
  handleClickFilter,
  anchorE2,
  handleCloseFilter,
  handleFilterProjectDirectory,
  handleResetProjectDirectory,
  handleMenuItemClick,
  role,
  handleCreateModal,
  setAnchorEl,
  anchorEl,
  menuFilter,
  handleValue,
}) => {
  const open = Boolean(anchorE2);
  const id = open ? 'simple-popover' : undefined;
  return (
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
          <CommonHeader title="Project Directory" customButton="Create User" />
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
          <IconButton disabled type="button" sx={{ p: '5px' }} aria-label="search">
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
          onClick={handleClickFilter}
          sx={{
            px: '0px 0px',
            backgroundColor: 'primary.B008',
            // mx: 2,
            ml: 2,
            mr: role === 'admin' || role === 'project_manager' || role === 'project_delivery_lead' ? 2 : 0,
            borderRadius: '8px',
            height: {
              lg: '30px',
              xl: '40px',
              xxl: '40px',
            },
          }}
          aria-label="menu"
        >
          <FilterListIcon sx={{ color: 'primary.main' }} />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorE2}
          onClose={handleCloseFilter}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MiniModalProjectDirectoryNew
            setProjectDirectoryRemove={setProjectDirectoryRemove}
            handleCloseFilter={handleCloseFilter}
            handleFilterProjectDirectory={handleFilterProjectDirectory}
            handleResetProjectDirectory={handleResetProjectDirectory}
            handleMenuItemClick={handleMenuItemClick}
            setAnchorEl={setAnchorEl}
            anchorEl={anchorEl}
            menuFilter={menuFilter}
            handleValue={handleValue}
          />
        </Popover>
        <LoadingButton
          disabled={isSyncLoading}
          loading={isSyncLoading}
          sx={{
            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: '#FFAB00',
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
              background: '#F2A200',
            },
            padding: '16px 10px',
          }}
          onClick={handleGetSync}
        >
          <SyncIcon sx={{ fontSize: '20px' }} /> Sync
        </LoadingButton>
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
            marginLeft: '13px',
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
          onClick={handleCreateModal}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDirectoryHeader;

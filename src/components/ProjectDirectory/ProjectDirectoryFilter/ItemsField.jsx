/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/ProjectDirectory/ProjectDirectoryFilter/ItemsField.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, January 26th 2024, 12:06:29 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getType } from '../../../features/slice/ProjectDirectorySlice';

export const MySelect = styled(Select)(() => ({
  height: '40px',
  borderRadius: '8px',
  border: '1px solid #E6ECF5 !important',
  fontsize: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '10px',
    // fontSize: "12px",
    color: 'neutral.N300',
    padding: '0px 5px',
    '&:disabled': {
      padding: '0px 5px',
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `1px solid #2E58FF !important`,
  },
  '& .MuiInputBase-input.Mui-focused': {
    color: 'blue',
  },
  '@media(max-width:1024px)': {
    // height: "30px",
    fontSize: '10px',
  },
  '@media(min-width:1025px) and (max-width:1440px)': {
    // height: "30px",
    fontSize: '12px',
  },
  '@media(min-width:1441px) and (max-width: 1920px)': {
    fontSize: '14px',
  },
}));
const ItemsField = ({
  setPlatformFieldFilter,
  platformFieldFilter,
  isLightTheme,
  title,
  type,
}) => {
  const [menu, setMenu] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getType(type)).then((action) => {
      if (action.payload.status === 200) {
        setMenu(action.payload.data.types);
      }
    });
  }, []);
  
  return (
    <>
      <Grid container sx={{ paddingX: '15px' }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              color: 'neutral.N300',

              mb: 1,
            }}
            variant="wpf_p4_medium"
          >
            {title}
          </Typography>
          <Box>
            {/* <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: 'neutral.N300',
              }}
            >
              {label} 
            </Typography> */}

            {/* <i
            //   onClick={() => handleRemove(index)}
            style={{
              color: "red",
              cursor: "pointer",
              position: "absolute",
              left: 275,
              top: 35,
              height: "20px",
              width: "20px",
            }}
            className="ri-delete-bin-line"
          ></i> */}
          </Box>
          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            variant="outlined"
            placeholder="Select"
            onChange={(e) => setPlatformFieldFilter(e.target.value)}
            value={platformFieldFilter || ''}
            sx={{
              height: '40px',
              backgroundColor: 'neutral.N400',
              // fontSize: "14px",
            }}
            // disabled={disableItem ? true : !editAble}
            // value={defaultValue}
            // onChange={(e) => handleChange(e)}
          >
            {menu.map((m) => (
              <MenuItem
                key={m}
                value={m}
                sx={{
                  fontSize: '14px',
                  '& .MuiInputBase-root': {
                    height: '42px',
                    fontSize: '12px',
                    fontFamily: 'Inter',
                    '@media(max-width:1439px)': {
                      height: '30px',
                      fontSize: '10px',
                    },
                    '@media(min-width: 1920px)': {
                      fontSize: '14px',
                    },
                  },
                }}
              >
                {m}
              </MenuItem>
            ))}
          </MySelect>
        </FormControl>
      </Grid>
    </>
  );
};

export default ItemsField;

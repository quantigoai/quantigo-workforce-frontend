/*
 * Filename: /home/tanzim/workstation/Office/worforce-frontend-new/src/config/theme/light.mui.theme.js
 * Path: /home/tanzim/workstation/Office/worforce-frontend-new
 * Created Date: Tuesday, September 19th 2023, 4:39:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { createTheme } from '@mui/material';
import { lightColors } from './lightColor';
import typography from './typography';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightColors,
  },
  typography: {
    ...typography,
    ...(typography.wpf_h1_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h2_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h3_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h4_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h5_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h6_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_h7_semiBold.color = '#3C4D6B'),

    ...(typography.wpf_h1_medium.color = '#3C4D6B'),
    ...(typography.wpf_h2_medium.color = '#3C4D6B'),
    ...(typography.wpf_h3_medium.color = '#3C4D6B'),
    ...(typography.wpf_h4_medium.color = '#3C4D6B'),
    ...(typography.wpf_h5_medium.color = '#3C4D6B'),
    ...(typography.wpf_h6_medium.color = '#3C4D6B'),
    ...(typography.wpf_h7_medium.color = '#3C4D6B'),

    ...(typography.wpf_p1_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_p2_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_p3_semiBold.color = '#3C4D6B'),
    ...(typography.wpf_p4_semiBold.color = '#3C4D6B'),

    ...(typography.wpf_p1_medium.color = '#3C4D6B'),
    ...(typography.wpf_p2_medium.color = '#3C4D6B'),
    ...(typography.wpf_p3_medium.color = '#3C4D6B'),
    ...(typography.wpf_p4_medium.color = '#3C4D6B'),

    ...(typography.wpf_p1_regular.color = '#3C4D6B'),
    ...(typography.wpf_p2_regular.color = '#3C4D6B'),
    ...(typography.wpf_p3_regular.color = '#3C4D6B'),
    ...(typography.wpf_p4_regular.color = '#3C4D6B'),
    ...(typography.wpf_p5_regular.color = '#3C4D6B'),
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          borderRadius: '4px',
          flex: 'none',
          order: 0,
          border: '1px solid #DADCDF',
          alignSelf: 'stretch',
          flexGrow: 0,
          '& .MuiSvgIcon-root': {
            color: '#667085',
            marginRight: '5px',
            cursor: 'pointer',
          },
          '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #f2f6fc',
          backgroundColor: '#fff',
          color: '#3C4D6B',
          height: '44px',
          margin: '0',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #f2f6fc',
          backgroundColor: '#fff',
          color: '#3C4D6B',
          padding: '0px 10px',
          margin: '0',
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: '0',
          paddingTop: '0px',
          fontFamily: 'Inter',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '11px',
          fontStyle: 'italic',
          marginLeft: '0',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#7D89A3',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          pt: 0,
          '& .MuiGrid-item': {
            margin: 0,
            pt: 0,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: '0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          padding: '0px 0px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
          marginLeft: '0px !important',
        },
        docked: {
          marginLeft: '0px !important',
        },
      },
    },
    MuiStack: {
      styleOverrides: {},
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(171, 191, 228)',
          height: '20px',
          width: '20px',
          fontSize: '10px',
          color: 'rgb(4, 4, 86)',
          zIndex: 0.5,
        },
      },
    },
   
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1920,
    },
  },
});

[lightTheme.breakpoints.between('lg', 'xl')].forEach((key) => {
  lightTheme.typography.wpf_h1_Bold[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h2_Bold[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h3_Bold[key] = {
    fontSize: '30px',
  };
  lightTheme.typography.wpf_h4_Bold[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h5_Bold[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h6_Bold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h7_Bold[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_h1_semiBold[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h2_semiBold[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h3_semiBold[key] = {
    fontSize: '30px',
  };
  lightTheme.typography.wpf_h4_semiBold[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h5_semiBold[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h6_semiBold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h7_semiBold[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_h1_medium[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h2_medium[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h3_medium[key] = {
    fontSize: '30px',
  };
  lightTheme.typography.wpf_h4_medium[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h5_medium[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h6_medium[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h7_medium[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_h1_regular[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h2_regular[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h3_regular[key] = {
    fontSize: '30px',
  };
  lightTheme.typography.wpf_h4_regular[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h5_regular[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h6_regular[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h7_regular[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_h8_regular[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_p1_semiBold[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p2_semiBold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_p4_semiBold_2[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_p1_medium[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p2_medium[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p3_medium[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p3_medium_2[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p3_medium_3[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p4_medium[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_p5_medium[key] = {
    fontSize: '8px',
  };
  lightTheme.typography.wpf_p1_regular[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p2_regular[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p3_regular[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p4_regular[key] = {
    fontSize: '10px',
  };
  lightTheme.typography.wpf_p5_regular[key] = {
    fontSize: '8px',
  };
});

[lightTheme.breakpoints.up('xxl')].forEach((key) => {
  lightTheme.typography.wpf_h1_Bold[key] = {
    fontSize: '42px',
  };
  lightTheme.typography.wpf_h2_Bold[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h3_Bold[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h4_Bold[key] = {
    fontSize: '26px',
  };
  lightTheme.typography.wpf_h5_Bold[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h6_Bold[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h7_Bold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h1_semiBold[key] = {
    fontSize: '42px',
  };
  lightTheme.typography.wpf_h2_semiBold[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h3_semiBold[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h4_semiBold[key] = {
    fontSize: '26px',
  };
  lightTheme.typography.wpf_h5_semiBold[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h6_semiBold[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h7_semiBold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h1_medium[key] = {
    fontSize: '42px',
  };
  lightTheme.typography.wpf_h2_medium[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h3_medium[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h4_medium[key] = {
    fontSize: '26px',
  };
  lightTheme.typography.wpf_h5_medium[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h6_medium[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h7_medium[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h1_regular[key] = {
    fontSize: '42px',
  };
  lightTheme.typography.wpf_h2_regular[key] = {
    fontSize: '38px',
  };
  lightTheme.typography.wpf_h3_regular[key] = {
    fontSize: '34px',
  };
  lightTheme.typography.wpf_h4_regular[key] = {
    fontSize: '26px',
  };
  lightTheme.typography.wpf_h5_regular[key] = {
    fontSize: '22px',
  };
  lightTheme.typography.wpf_h6_regular[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_h7_regular[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_h8_regular[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p1_semiBold[key] = {
    fontSize: '20px',
  };
  lightTheme.typography.wpf_p2_semiBold[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p4_semiBold_2[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p1_medium[key] = {
    fontSize: '20px',
  };
  lightTheme.typography.wpf_p2_medium[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_p3_medium[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p3_medium_2[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p3_medium_3[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p4_medium[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p5_medium[key] = {
    fontSize: '12px',
  };
  lightTheme.typography.wpf_p1_regular[key] = {
    fontSize: '20px',
  };
  lightTheme.typography.wpf_p2_regular[key] = {
    fontSize: '18px',
  };
  lightTheme.typography.wpf_p3_regular[key] = {
    fontSize: '16px',
  };
  lightTheme.typography.wpf_p4_regular[key] = {
    fontSize: '14px',
  };
  lightTheme.typography.wpf_p5_regular[key] = {
    fontSize: '12px',
  };
  // --- component
  lightTheme.components.MuiTableRow.styleOverrides.root[key] = {
    height: '56px',
  };
});

export default lightTheme;

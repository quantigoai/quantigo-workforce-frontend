/*
 * File           : fieldBuilder.js
 * Project        : wmpfrontv2
 * Created Date   : Sa 05 Aug 2023 12:23:42
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sat Aug 05 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import 'remixicon/fonts/remixicon.css';
import ProjectDrawerStatusChip from '../FilterField/ProjectDrawerStatusChip.jsx';
import ChipGroup from './ChipGroup.jsx';
import CustomButton from './CustomButton.jsx';
import customHeader from './formatHeader.js';

const fieldBuilder = (fields, handleClick, handleDelete) => {
  console.log('🚀 ~ fieldBuilder ~ fields:', fields);
  const newFields = fields.map((field, index) => {
    let customItems;
    if (field.renderCell === 'button') {
      customItems = {
        id: index,
        ...field,
        headerName: customHeader(field.field),
        renderCell: (params) => (
          <CustomButton
            pathname={pathname}
            params={params}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ),
        editable: field.editable || false,
        cellClassName: field.cellClassName || '',
      };
    } else if (field.renderCell === 'chip') {
      customItems = {
        id: index,
        ...field,
        headerName: customHeader(field.field),
        renderCell: (params) => {
          return <ProjectDrawerStatusChip value={params.value} />;
        },
        editable: field.editable || false,
        cellClassName: field.cellClassName || '',
      };
    } else if (field.renderCell === 'skills-chip') {
      customItems = {
        ...field,
        id: index,
        headerName: customHeader(field.field),
        renderCell: (params) => {
          return <ChipGroup params={params} />;
        },
        editable: field.editable || false,
        cellClassName: field.cellClassName || '',
      };
    } else {
      customItems = {
        ...field,
        id: index,
        headerName: customHeader(field.field),
        editable: field.editable || false,
        cellClassName: field.cellClassName || '',
      };
    }
    return customItems;
  });

  return newFields;
};
export default fieldBuilder;

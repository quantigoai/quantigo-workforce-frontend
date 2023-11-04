/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/CustomField/PDReleventField copy.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, October 24th 2023, 12:50:31 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, FormControl, Stack, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function PDReleventField2({ name, defaultValueItems }) {
  const MyTextField = styled(TextField)(() => ({
    backgroundColor: isLightTheme && "#FFF",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #E6ECF5 !important",
      borderRadius: "8px",
    },
    "& .MuiInputBase-root": {
      height: "38px",
      fontSize: {
        lg: "12px",
        xl: "14px",
        xxl: "14px",
      },
    },
  }));

  const { watch, control, setValue, getValues } = useFormContext();

  const { isLightTheme } = useSelector((state) => state.theme);
  const [hasChanged, setHasChanged] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  React.useEffect(() => {
    if (defaultValueItems && defaultValueItems.length > 0 && fields.length === 0) {
      setValue(name, defaultValueItems);
      setHasChanged(true);
    } else if (fields.length === 0) {
      append({ documentName: "", documentUrl: "" });
    }
  }, [defaultValueItems]);

  const handleFieldChange = (index, fieldName, value) => {
    const fieldNameKey = `relevantDocuments[${index}].${fieldName}`;
    setValue(fieldNameKey, value);
    const { documentName, documentUrl } = getValues().relevantDocuments[index];
    if (documentName && documentUrl) {
      setHasChanged(true);
    }
  };

  const handleAddOtherDocument = () => {
    append({ documentName: "", documentUrl: "" });
  };

  const handleRemove = (index) => {
    remove(index);
  };

  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Stack direction="row" gap={2} xs={12}>
            <FormControl fullWidth>
              <Typography variant="wpf_h7_medium" sx={{ fontSize: "12px", fontWeight: "500", mb: 1 }}>
                Document Name
              </Typography>
              <Controller
                name={`relevantDocuments[${index}].documentName`}
                control={control}
                render={({ field }) => (
                  <MyTextField
                    type="text"
                    {...field}
                    onChange={(e) => {
                      handleFieldChange(index, "documentName", e.target.value);
                    }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="wpf_h7_medium" sx={{ fontSize: "12px", fontWeight: "500", mb: 1 }}>
                Link
              </Typography>
              <Controller
                name={`relevantDocuments[${index}].documentUrl`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MyTextField
                    type="text"
                    {...field}
                    onChange={(e) => {
                      handleFieldChange(index, "documentUrl", e.target.value);
                    }}
                  />
                )}
              />

              {fields.length !== 1 && (
                <i
                  onClick={() => handleRemove(index)}
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
                ></i>
              )}
            </FormControl>
          </Stack>
        </Box>
      ))}
      <Typography
        sx={{
          fontWeight: "600",
          mt: "15px",
          fontSize: "14px",
          mb: "0px",
          color: hasChanged ? "#2E58FF" : "#7D89A3",
          cursor: "pointer",
          pointerEvents: hasChanged ? "auto" : "none",
        }}
        variant="p"
        type="button"
        onClick={handleAddOtherDocument}
      >
        <i className="ri-add-line"></i> Add another document
      </Typography>
    </>
  );
}

export default PDReleventField2;

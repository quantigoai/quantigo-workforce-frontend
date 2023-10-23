import { Box, Button, FormControl, Stack, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function PDReleventField({ name, defaultValueItems }) {
  const { control, setValue } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  const [hasChanged, setHasChanged] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name,
    // name: "relevantDocuments",
  });
 
  // if (defaultValueItems && defaultValueItems.length > 0 && fields.length === 0) {
  //   setValue(name, defaultValueItems);
  //   setHasChanged(true);
  // } else if (fields.length === 0) {
   
    
  //   append({ documentName: "", documentUrl: "" });
  // }
 
  React.useEffect(() => {
    console.log(fields)
    if (defaultValueItems && defaultValueItems.length > 0 && fields.length === 0) {
      setValue(name, defaultValueItems);
      setHasChanged(true);
    }
   
    else if (fields.length === 0) {
      console.log("🚀 ~ file: PDReleventField.jsx:31 ~ React.useEffect ~ fields:", fields)
      
      append({ documentName: "", documentUrl: "" });
    }
  }, [defaultValueItems]);

  const handleFieldChange = (index, fieldName, value) => {
    const fieldNameKey = `relevantDocuments[${index}].${fieldName}`;
    setValue(fieldNameKey, value);
    setHasChanged(true);
    console.log("🚀 ~ file: PDReleventField.jsx:31 ~ handleFieldChange ~ fieldNameKey:", fieldNameKey);
    console.log(`Field at index ${index} with name ${fieldName} changed to: ${value}`);
    console.log(fields);
  };

  const MyTextField = styled(TextField)(() => ({
    backgroundColor: isLightTheme && "#FFF",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #E6ECF5 !important",
      borderRadius: "8px",
    },
    "& .MuiInputBase-root": { height: "45px", fontSize: "14px" },
  }));

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
                defaultValue=""
                render={({ field }) => (
                  <MyTextField
                    type="text"
                    {...field}
                    onChange={(e) => {
                      // Handle the field change here
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
                      // Handle the field change here
                      handleFieldChange(index, "documentUrl", e.target.value);
                    }}
                  />
                )}
              />

              {fields.length != 1 && (
                <Button
                  type="button"
                  sx={{
                    mt: "25px",
                    position: "absolute",
                    left: 245,
                    fontSize: "20px",
                  }}
                  onClick={() => remove(index)}>
                  <i style={{ color: "red", cursor: "pointer" }} className="ri-delete-bin-line"></i>
                </Button>
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
          color: "#2E58FF",
          cursor: "pointer",
          pointerEvents: hasChanged ? "auto" : "none",
        }}
        variant="p"
        type="button"
        // disabled={hasChanged}
        onClick={() => append({ documentName: "", documentUrl: "" })}>
        <i className="ri-add-line"></i> Add another document
      </Typography>
    </>
  );
}

export default PDReleventField;

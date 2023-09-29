import { Box, Button, FormControl, Stack, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function PDReleventField({ name, defaultValueItems }) {
  console.log("🚀 ~ file: PDReleventField.jsx:7 ~ PDReleventField ~ defaultValueItems:", defaultValueItems);
  console.log("🚀 ~ file: PDReleventField.jsx:7 ~ PDReleventField ~ name:", name);
  const { control, setValue } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);

  const { fields, append, remove } = useFieldArray({
    control,
    name,
    // name: "relevantDocuments",
  });

  React.useEffect(() => {
    if (defaultValueItems && defaultValueItems.length > 0) {
      setValue(name, defaultValueItems);
    } else if (fields.length === 0) {
      append({ documentName: "", documentUrl: "" });
    }
  }, [defaultValueItems, setValue, name]);

  const MyTextField = styled(TextField)(() => ({
    backgroundColor: isLightTheme && "#FFF",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #E6ECF5 !important",
      borderRadius: "8px",
    },
    "& .MuiInputBase-root": { height: "78%", fontSize: "14px" },
  }));

  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Stack direction="row" gap={2} xs={12}>
            <FormControl fullWidth>
              <Typography sx={{ fontSize: "12px", fontWeight: "500", mb: 1 }}>Document Name</Typography>
              <Controller
                name={`relevantDocuments[${index}].documentName`}
                control={control}
                defaultValue=""
                render={({ field }) => <MyTextField type="text" {...field} />}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography sx={{ fontSize: "12px", fontWeight: "500", mb: 1 }}>Link</Typography>
              <Controller
                name={`relevantDocuments[${index}].documentUrl`}
                control={control}
                defaultValue=""
                render={({ field }) => <MyTextField type="text" {...field} />}
              />
              <Button
                type="button"
                sx={{
                  mt: "25px",
                  position: "absolute",
                  left: 245,
                  fontSize: "20px",
                }}
                onClick={() => remove(index)}
              >
                <i style={{ color: "red", cursor: "pointer" }} className="ri-delete-bin-line"></i>
              </Button>
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
        }}
        variant="p"
        type="button"
        onClick={() => append({ documentName: "", documentUrl: "" })}
      >
        <i className="ri-add-line"></i> Add another document
      </Typography>
    </>
  );
}

export default PDReleventField;

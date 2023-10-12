import {DateRangePicker} from "@mui/x-date-pickers-pro/DateRangePicker";
import {SingleInputDateRangeField} from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import * as React from "react";
import {useState} from "react";
import calenderIcon from "../../../../assets/images/dashboardIcon/calendar-line.svg";

export default function DateRangeField({ setStartDate, setEndDate }) {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]); // Step 1

  const handleDateRangeChange = (newValue) => {
    setSelectedDateRange(newValue);
    setStartDate(selectedDateRange[0]);
    setEndDate(selectedDateRange[1]);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["SingleInputDateRangeField"]}>
          <DateRangePicker
            slots={{ field: SingleInputDateRangeField }}
            slotProps={{
              textField: {
                InputProps: {
                  endAdornment: <img src={calenderIcon} />,
                  style: {
                    borderRadius: "10px",
                    border: "2px solid #E6ECF5",
                    height: "70%",
                    width: "100%",
                  }, // Example styles
                },
              },
            }}
            value={selectedDateRange} // Pass the value prop
            onChange={handleDateRangeChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}

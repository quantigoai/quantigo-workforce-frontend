import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";

const lastSunday = dayjs().startOf("week").subtract(1, "day");
const nextSunday = dayjs().endOf("week").startOf("day");

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function DateRangeField() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        defaultValue={[lastSunday, nextSunday]}
        shouldDisableDate={(date, position) => {
          if (position === "end") {
            return false;
          }

          return isWeekend(date);
        }}
      />
    </LocalizationProvider>
  );
}

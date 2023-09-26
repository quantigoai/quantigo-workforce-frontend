import { Box, IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { addDays, format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { DateRange } from "react-date-range";
import BackspaceIcon from "@mui/icons-material/Backspace";
import calenderIcon from "../../../../assets/images/dashboardIcon/calendar-line.svg";
const MyInputField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    // border: "1px solid #E6ECF5 !important",
    border: "1px solid #E6ECF5  !important",
    borderRadius: "10px",
  },
  "& .MuiInputBase-root": {
    width: "100%",
    height: "45PX",
    fontSize: "13px",
    color: "#3C4D6B",
    backgroundColor: "#FFFFFF",
  },
}));

const DateRangeComponentForDashboard = ({ setRange, range }) => {
  const [open, setOpen] = useState(false);
  const [dummyRange, setDummyRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refTwo.current && refTwo.current.contains(e.target)) {
      return;
    } else if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const calendarOpen = () => {
    setOpen((open) => !open);
  };

  const clearRange = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 0),
        key: "selection",
      },
    ]);
    setDummyRange([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 0),
        key: "selection",
      },
    ]);
    setOpen(false);
  };
  const [isRangeSelect, setIsRangeSelect] = useState(false);

  useEffect(() => {
    if (range[0].startDate.getTime() !== range[0].endDate.getTime()) {
      setIsRangeSelect(true);
    } else {
      setIsRangeSelect(false);
    }
  }, [range]);
  const handleChange = (item) => {
    console.log(item)
    if (item.selection.startDate.getTime() !== item.selection.endDate.getTime()) {
      setRange([item.selection]);
      setDummyRange([item.selection]);
    } else {
      setDummyRange([item.selection]);
    }
  };

  return (
    <Box sx={{ display: "inline-block", position: "relative" }}>
      <MyInputField
        type={"text"}
        value={
          isRangeSelect
            ? `${format(range[0].startDate, "dd/MM/yyyy")} - ${format(range[0].endDate, "dd/MM/yyyy")}`
            : "DD/MM/YYYY - DD/MM/YYYY "
        }
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                {!open ? (
                  <img src={calenderIcon} onClick={calendarOpen} />
                ) : (
                  // <CalendarMonthIcon onClick={calendarOpen} />
                  <BackspaceIcon name="clearButton" onClick={clearRange} ref={refTwo} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => handleChange(item)}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={dummyRange}
            months={1}
            direction="horizontal"
            className="calendarElement"
            color="#1976D2"
          />
        )}
      </div>
    </Box>
  );
};

export default DateRangeComponentForDashboard;
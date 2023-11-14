import BackspaceIcon from "@mui/icons-material/Backspace";
import {Box, IconButton, InputAdornment, styled, TextField} from "@mui/material";
import {addDays, format} from "date-fns";
import React, {useEffect, useRef, useState} from "react";
import {DateRange} from "react-date-range";
import calenderIcon from "../../../../assets/images/dashboardIcon/calendar-line.svg";

const MyInputField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    // border: "1px solid #E6ECF5 !important",
    border: "1px solid #E6ECF5  !important",
    borderRadius: "10px",
  },
  "& .MuiInputBase-root": {
    width: "100%",
    height: "40PX",
    fontSize: "13px",
    color: "neutral.N300",
    // color:"red",
    backgroundColor: "neutral.N000",
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
          //disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              {!open ? (
                <IconButton edge="end" onClick={calendarOpen}>
                  <img src={calenderIcon} />
                </IconButton>
              ) : (
                <BackspaceIcon name="clearButton" onClick={clearRange} ref={refTwo} />
              )}
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

/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectDetailsFull/DateRangePicker/DateRangeComponenet.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, September 18th 2023, 11:50:15 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { addDays, format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "./index.css";

import BackspaceIcon from "@mui/icons-material/Backspace";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";

const MyInputField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "6px",
  },
  "& .MuiInputBase-root": {
    height: "38px",
    fontSize: "12px",
    backgroundColor: "#F2F6FC",
  },
}));

const DateRangeComponent = ({ range, setRange }) => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);

  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };
  const dispatch = useDispatch();
  const [isRangeSelect, setIsRangeSelect] = useState(false);

  useEffect(() => {
    if (range[0].startDate.getTime() !== range[0].endDate.getTime()) {
      setIsRangeSelect(true);
    } else {
      setIsRangeSelect(false);
    }
  }, [range]);

  return (
    <div className="calendarWrap">
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
                  <CalendarMonthIcon onClick={calendarOpen} />
                ) : (
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
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            color="#1976D2"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;

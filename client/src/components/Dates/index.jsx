import { useState } from "react";
import { Grid } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

const Dates = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [dateRange, setDateRange] = useState({
    startDate: searchParams.get("startDate"),
    endDate: searchParams.get("endDate"),
  });

  const handleStartDateOnChange = (value) => {
    const startDate = format(value, "yyyy-MM-dd");
    setDateRange((prev) => ({
      ...prev,
      startDate,
    }));

    setSearchParams((prev) => {
      prev.set("startDate", startDate);
      return prev;
    });
  };

  const handleEndDateOnChange = (value) => {
    const endDate = format(value, "yyyy-MM-dd");
    setDateRange((prev) => ({
      ...prev,
      endDate,
    }));

    setSearchParams((prev) => {
      prev.set("endDate", endDate);
      return prev;
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        {/* start date */}
        <Grid item xs={6} justifyContent={"flex-start"}>
          <DatePicker
            label="Start Date"
            value={dateRange.startDate ? new Date(dateRange.startDate) : null}
            onChange={handleStartDateOnChange}
          />
        </Grid>
        {/* end date */}
        <Grid item xs={6}>
          <DatePicker
            label="End Date"
            value={dateRange.endDate ? new Date(dateRange.endDate) : null}
            disablePast
            onChange={handleEndDateOnChange}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default Dates;

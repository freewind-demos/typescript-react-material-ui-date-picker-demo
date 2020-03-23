import React, {useState} from 'react'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateUtils from "@date-io/date-fns";

export default function DataFnsPicker() {
  const [selectedDate, handleDateChange] = useState<Date | null>(null);

  function onChange(date: Date | null) {
    if (date) {
      handleDateChange(date);
    } else {
      handleDateChange(null);
    }
  }

  return <div>
    <h1>Date-Fns Picker: {(selectedDate || '').toString()}</h1>
    <MuiPickersUtilsProvider utils={DateUtils}>
      <KeyboardDatePicker
        disableFuture
        variant="inline"
        inputVariant="outlined"
        openTo="year"
        format="MM/dd/yyyy"
        label="Date of birth"
        views={["date"]}
        value={selectedDate}
        onChange={onChange}
        autoOk={true}
      />
    </MuiPickersUtilsProvider>
  </div>
}

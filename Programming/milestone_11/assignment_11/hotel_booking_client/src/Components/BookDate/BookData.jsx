import { addMonths } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookData = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [submit, setSubmit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      checkInDate: startDate,
      checkOutDate: endDate,
    };
    setSubmit(details);
    console.log(details);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Dates</span>
          </label>
          <div className="">
            <DatePicker
              className="input input-bordered w-full"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              withPortal
              minDate={new Date()}
              maxDate={addMonths(new Date(), 5)}
              showDisabledMonthNavigation
              selectsEnd
              // Ensure end date cannot be same as start date
              //   minDate={startDate ? addDays(startDate, 1) : new Date()}
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BookData;

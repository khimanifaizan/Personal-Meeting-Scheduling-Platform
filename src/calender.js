import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);
<h1>Meeting</h1>
const events = [
  {
    title: 'Meeting 1',
    start: new Date(2023, 9, 10, 10, 0), // Year, Month (0-11), Day, Hour, Minute
    end: new Date(2023, 9, 10, 11, 0),
  },
  {
    title: 'Meeting 2',
    start: new Date(2023, 9, 11, 14, 0),
    end: new Date(2023, 9, 11, 15, 0),
  },
  // Add more events here
];

function Calendar() {
  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

      <h1>
        Add New
      </h1>
      <div className='datestyle'><input type='date' className='datestyle'></input></div>
      <button type='submit'>Submit</button>
      <button type='submit'>Reset</button>
      <button type='submit'>Remove</button>
      </div>
  );
}

export default Calendar;

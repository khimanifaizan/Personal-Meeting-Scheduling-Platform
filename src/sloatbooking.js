// // src/components/MeetingScheduler.js
// import React, { useState } from 'react';
// // import DatePicker from 'react-datepicker';
// import DatePicker from 'react-date-picker';
// import Datetime from 'react-date-picker';
// import './react-datepicker.css';
// function MeetingScheduler() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const handleScheduleMeeting = () => {
//     // Implement meeting scheduling logic (e.g., send data to the server)
//     if (selectedDate && selectedTime) {
//       const formattedDate = selectedDate.toLocaleDateString();
//       const formattedTime = selectedTime.format('hh:mm A');
//       alert(`Meeting scheduled for ${formattedDate} at ${formattedTime}`);
//     } else {
//       alert('Please select a date and time for the meeting.');
//     }
//   };

//   return (
//     <div>
//       <h2>Schedule a Meeting</h2>
//       <div>
//         <label>Date:</label>
//         <DatePicker selected={selectedDate} onChange={handleDateChange} />
//       </div>
//       <div>
//         <label>Time:</label>
//         <Datetime
//           input={false}
//           value={selectedTime}
//           onChange={handleTimeChange}
//         />
//       </div>
//       <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
//     </div>
//   );
// }

// export default MeetingScheduler;

import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function ScheduleMeetings() {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      doctorName: 'Dr. John Doe',
      date: '2023-09-25',
      time: '10:00 AM',
      platform: 'Zoom',
      meetinglink: 'https://zoom.us/j/1234567890?pwd=QWERTYUIOPASDFGHJKLZXCVBNM',
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Smith',
      date: '2023-09-27',
      time: '11:30 AM',
      platform: 'Google Meet',
      meetinglink: 'https://meet.google.com/abc-defg-hij',
    },
    // Add more meetings as needed
  ]);

  return (
    <div className="flex  bg-richblack-90">
      <Dashboard />
      <div className="flex-1 p-8 ml-8 text-white">
        <h1 className="text-3xl mb-6">Scheduled Meetings</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <ul>
              {meetings.map(meeting => (
                <li key={meeting.id} className="bg-white p-4 mb-4 rounded shadow-md text-richblack-900 w-[400px]">
                  <h3 className="text-xl font-semibold mb-2">{meeting.doctorName}</h3>
                  <p>Date: {meeting.date}</p>
                  <p>Time: {meeting.time}</p>
                  <p>Platform: {meeting.platform}</p>
                  <div className=''>
                  <p className='font-bol'>Meeting Link: <p className='text-blue-600 cursor-pointer'>{meeting.meetinglink}</p></p>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleMeetings;

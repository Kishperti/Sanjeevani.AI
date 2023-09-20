import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

const DoctorRecommendedByAi = () => {
  // Assuming you have some sample AI analysis data
  const aiAnalysis = [
    {
    id: 1,
    doctorName: 'Dr. John Doe',
    recommendation: 'Cardiologist',
    details: 'Specializes in heart-related issues.',
    aiTalk: 'Based on the symptoms provided, AI recommends consulting a Cardiologist.'
    },
    {
    id: 2,
    doctorName: 'Dr. Jane Smith',
    recommendation: 'Dermatologist',
    details: 'Specializes in skin-related issues.',
    aiTalk: 'AI suggests consulting a Dermatologist for further examination.'
    },
    // Add more AI analysis data as needed
];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="flex h-screen bg-richblack-900 text-white">
      <Dashboard />
      <div className="flex-1 flex-col justify-between p-8 ml-8">
        <div>
          <h1 className="text-3xl mb-6">Recommended by AI</h1>
          <div className="grid grid-cols-2 gap-6">
            {aiAnalysis.map((analysis) => (
              <div key={analysis.id} className="bg-white p-4 rounded shadow-md text-black">
                <h2 className="text-xl font-semibold mb-2">{analysis.doctorName}</h2>
                <p>Recommendation: {analysis.recommendation}</p>
                <p>{analysis.details}</p>
                <hr className="my-2" />
                <p>AI Talk: {analysis.aiTalk}</p>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
                  onClick={() => handleViewDetails(analysis)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedDoctor && (
        <DoctorDetails
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

const DoctorDetails = ({ doctor, onClose }) => {
  const handleScheduleMeeting = () => {
    // Logic to send meeting request goes here
    // You can implement a form to collect meeting details and send a request to the doctor
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-black w-[400px]">
        <h2 className="text-xl font-semibold mb-2">{doctor.doctorName}</h2>
        <p>Recommendation: {doctor.recommendation}</p>
        <p>{doctor.details}</p>
        <hr className="my-2" />
        <p>AI Talk: {doctor.aiTalk}</p>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleScheduleMeeting}
        >
          Schedule Meeting
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DoctorRecommendedByAi;

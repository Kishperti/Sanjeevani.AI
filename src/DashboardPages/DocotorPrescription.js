import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function SearchDoctors() {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', prescriptions: [
      { medicine: 'Medicine 1', details: 'Details 1' },
      { medicine: 'Medicine 2', details: 'Details 2' },
    ] },
    { id: 2, name: 'Dr. Jane Doe', specialization: 'Dermatologist', prescriptions: [
      { medicine: 'Medicine 1', details: 'Details 1' },
      { medicine: 'Medicine 2', details: 'Details 2' },
    ] },
    // ... Add other doctors with their details and prescriptions as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [prescriptionDetails, setPrescriptionDetails] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setPrescriptionDetails(null);
  };

  const handleViewPrescription = (prescription, details) => {
    setPrescriptionDetails({ prescription, details });
  };

  const handleClosePrescription = () => {
    setPrescriptionDetails(null);
  };

  return (
    <div className="flex bg-richblack-900 text-richblack-900">
      <Dashboard />
      <div className="flex-1 p-8 ml-8">
        <div>
          <h1 className="text-3xl mb-6">Search Doctors</h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded border border-indigo-500 w-[400px] text-black"
              placeholder="Search by specialization..."
            />
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => {}}
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 mb-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p>{doctor.specialization}</p>
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => handleDoctorClick(doctor)}
              >
                View Prescription
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedDoctor && (
        <div className="bg-[#0066ff1a] mr-[250px] p-4 rounded text-white w-[400px]">
          <h2 className="text-xl font-semibold mb-2">Prescription History</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">{selectedDoctor.name}</h3>
            <ul>
              {selectedDoctor.prescriptions.map((prescription, index) => (
                <li key={index}>
                  {prescription.medicine}{' '}
                  <button
                    className="text-blue-500"
                    onClick={() => handleViewPrescription(prescription.medicine, prescription.details)}
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleClosePrescription}
          >
            Close View
          </button>
        </div>
      )}
      {prescriptionDetails && (
        <div className="bg-[#0066ff1a] mr-[250px] p-4 rounded mt-8 text-white">
          <h2 className="text-xl font-semibold mb-2">Prescription Details</h2>
          <p>Medicine: {prescriptionDetails.prescription}</p>
          <p>Details: {prescriptionDetails.details}</p>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleClosePrescription}
          >
            Close Prescription
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchDoctors;

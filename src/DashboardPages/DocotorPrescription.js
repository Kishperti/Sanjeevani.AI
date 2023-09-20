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
  const [prescription, setPrescription] = useState('');
  const [prescriptionDetails, setPrescriptionDetails] = useState(null);
  var count = 1;

  

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setPrescriptionDetails(null);

    if(count%2==0){
      setSelectedDoctor(false);
      setPrescriptionDetails(doctor);
      count++;
    }

  };

 

  const handleViewPrescription = (prescription, details) => {
    setPrescriptionDetails({ prescription, details });
  };

  const handleClosePrescription = () => {
    setPrescriptionDetails(null);
  };

  return (
    <div className="flex  bg-richblack-900 text-richblack-900">
      <Dashboard />
      <div className="flex-1 flex-col justify-between p-8 ml-8">
        {/* ... (previous code) */}
        <div className="flex-1 overflow-y-auto max-h-[420px] bg-[#0066ff1a] mr-[250px]">
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
        <div className="bg-[#0066ff1a] mr-[250px] p-4 rounded h-[300px] text-white w-[400px]">
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
              <button
            className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleClosePrescription}
          >
            Close View
          </button>
            </ul>
          </div>
          
        </div>
      )}
      {prescriptionDetails && (
        <div className="bg-[#0066ff1a] mr-[250px] p-4 rounded">
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

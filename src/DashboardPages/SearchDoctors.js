import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function SearchDoctors() {
  // Assuming you have doctor data in JSON format
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
    { id: 3, name: 'Dr. Michael Johnson', specialization: 'Orthopedic Surgeon' },
    { id: 4, name: 'Dr. Sarah Davis', specialization: 'Pediatrician' },
    { id: 5, name: 'Dr. Robert Brown', specialization: 'Neurologist' },
    { id: 6, name: 'Dr. Emily Wilson', specialization: 'Psychiatrist' },
    { id: 7, name: 'Dr. David Lee', specialization: 'Ophthalmologist' },
    { id: 8, name: 'Dr. Susan Rodriguez', specialization: 'Gynecologist' },
    { id: 9, name: 'Dr. Richard Taylor', specialization: 'Urologist' },
    { id: 10, name: 'Dr. Laura Martinez', specialization: 'Endocrinologist' }
];


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter doctors based on search term
    const filteredDoctors = doctors.filter(
      doctor => doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Handle filtered doctors (e.g., display them)
    console.log(filteredDoctors);
  };

  return (
    <div className="flex  bg-richblack-900 text-richblack-900">
      <Dashboard />
      <div className="flex-1 flex-col justify-between p-8 ml-8">
        <div>
          <h1 className="text-3xl mb-6">Search Doctors</h1>
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded border border-indigo-500 w-[400px] text-black"
              placeholder="Search by specialization..."
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded ml-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex-1 overflow-y-auto max-h-[420px] bg-[#0066ff1a] mr-[250px]">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 mb-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p>{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchDoctors;

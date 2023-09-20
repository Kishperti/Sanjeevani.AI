import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function SearchDoctors() {
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
    { id: 10, name: 'Dr. Laura Martinez', specialization: 'Endocrinologist' },
    { id: 11, name: 'Dr. William Johnson', specialization: 'Dentist' },
    { id: 12, name: 'Dr. Mary Smith', specialization: 'Oncologist' },
    // Add more doctors as needed...
  ];
  

  const [searchTerm, setSearchTerm] = useState('');
  const [contactOption, setContactOption] = useState('instant');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredDoctors = doctors.filter(
      doctor => doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filteredDoctors);
  };

  const handleContactOptionChange = (e) => {
    setContactOption(e.target.value);
  };

  return (
    <div className="flex bg-white text-black">
      <Dashboard />
      <div className="flex-1 p-8 ml-8">
        <div>
          <h1 className="text-3xl mb-6">Search Doctors</h1>
          <form onSubmit={handleSearch} className="flex items-center mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded border border-indigo-500 w-[400px] mr-2"
              placeholder="Search by specialization..."
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </form>

          <div className="mb-4">
            <label className="block font-bold mb-2">Contact Option:</label>
            <select
              value={contactOption}
              onChange={handleContactOptionChange}
              className="p-2 rounded border border-indigo-500 w-[400px]"
            >
              <option value="instant">Contact Instantly</option>
              <option value="wait">Wait for Doctor's Response</option>
            </select>
          </div>

          <div className="overflow-y-auto max-h-[420px] bg-[#0066ff1a]">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white p-4 mb-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                <p>{doctor.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDoctors;

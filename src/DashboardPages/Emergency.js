import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendar, faClock, faUserMd } from '@fortawesome/free-solid-svg-icons';

const Emergency = () => {
    const emergencyResources = [
        { name: 'Ambulance Services', contactNumber: '123-456-7890' },
        { name: 'Police Department', contactNumber: '911' },
        { name: 'Fire Department', contactNumber: '987-654-3210' },
        // Add more emergency resources as needed
    ];

    const ashaWorkers = [
        { name: 'Asha Worker 1', contactNumber: '111-222-3333', location: 'Delhi, India' },
        { name: 'Asha Worker 2', contactNumber: '444-555-6666', location: 'Mumbai, India' },
        // Add more Asha workers as needed
    ];

    const [meetingDetails, setMeetingDetails] = useState({
        doctorName: '',
        date: '',
        time: '',
        platform: ''
    });

    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: '', contactNumber: '' }
    ]);

    const [medicalHistory, setMedicalHistory] = useState({
        allergies: '',
        preExistingConditions: '',
        currentMedications: ''
    });

    const [insuranceInfo, setInsuranceInfo] = useState({
        policyNumber: '',
        provider: '',
        contactNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMeetingDetails({
            ...meetingDetails,
            [name]: value
        });
    };

    const handleScheduleMeeting = (e) => {
        e.preventDefault();
        // Handle scheduling meeting logic here
        console.log('Scheduled Meeting:', meetingDetails);
    };

    const handleEmergencyContactChange = (e, index) => {
        const { name, value } = e.target;
        const updatedContacts = [...emergencyContacts];
        updatedContacts[index] = { ...updatedContacts[index], [name]: value };
        setEmergencyContacts(updatedContacts);
    };

    const handleMedicalHistoryChange = (e) => {
        const { name, value } = e.target;
        setMedicalHistory({
            ...medicalHistory,
            [name]: value
        });
    };

    const handleInsuranceInfoChange = (e) => {
        const { name, value } = e.target;
        setInsuranceInfo({
            ...insuranceInfo,
            [name]: value
        });
    };

    return (
        <div className="flex bg-richblack-900 text-white">
            <Dashboard />
                <div className="flex-1 p-8 ml-[50px]  h-[550px] bg-[#00112C] border-raduis-30">
                <h2 className="text-xl font-semibold mb-2 m flex items-center">
                        Live-Location-Emergency-Details
                        </h2>
                    <div className="mb-8 ">
                        <h2 className="text-xl font-semibold mb-2 m flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" /> Emergency Resources
                        </h2>
                        <ul>
                            {emergencyResources.map((resource, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-semibold text-white">{resource.name}</p>
                                    <p>Contact: {resource.contactNumber}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2 flex items-center">
                            <FontAwesomeIcon icon={faUserMd} className="mr-2" /> Ashawadi Workers
                        </h2>
                        <ul>
                            {ashaWorkers.map((worker, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-semibold text-white">{worker.name}</p>
                                    <p>Contact: {worker.contactNumber}</p>
                                    <p>Location: {worker.location}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            <div className="flex-1 p-8">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Schedule Emergency Meeting
                </h2>
                <form onSubmit={handleScheduleMeeting}>
                    {/* ... (previous form inputs) */}
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
                        Schedule Meeting
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Emergency;

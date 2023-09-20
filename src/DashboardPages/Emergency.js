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
            <div className="flex-1 p-8">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
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
            <div className="flex-1 p-8">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" /> Emergency Contacts
                </h2>
                {emergencyContacts.map((contact, index) => (
                    <div key={index} className="mb-4 text-black">
                        <input
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={(e) => handleEmergencyContactChange(e, index)}
                            className="p-2 w-full border border-indigo-500 rounded"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="contactNumber"
                            value={contact.contactNumber}
                            onChange={(e) => handleEmergencyContactChange(e, index)}
                            className="p-2 w-full border border-indigo-500 rounded mt-2"
                            placeholder="Contact Number"
                        />
                    </div>
                ))}
            </div>
            <div className="flex-1 p-8">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Medical History
                </h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="allergies"
                        value={medicalHistory.allergies}
                        onChange={handleMedicalHistoryChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Allergies"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="preExistingConditions"
                        value={medicalHistory.preExistingConditions}
                        onChange={handleMedicalHistoryChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Pre-existing Conditions"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="currentMedications"
                        value={medicalHistory.currentMedications}
                        onChange={handleMedicalHistoryChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Current Medications"
                    />
                </div>
            </div>
            <div className="flex-1 p-8">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faUserMd} className="mr-2" /> Insurance Information
                </h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="policyNumber"
                        value={insuranceInfo.policyNumber}
                        onChange={handleInsuranceInfoChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Policy Number"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="provider"
                        value={insuranceInfo.provider}
                        onChange={handleInsuranceInfoChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Provider"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="contactNumber"
                        value={insuranceInfo.contactNumber}
                        onChange={handleInsuranceInfoChange}
                        className="p-2 w-full border border-indigo-500 rounded"
                        placeholder="Contact Number"
                    />
                </div>
            </div>
        </div>
    );
}

export default Emergency;

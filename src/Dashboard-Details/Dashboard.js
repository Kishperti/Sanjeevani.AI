import React from 'react';
import { Link } from "react-router-dom";
import { FiUser, FiClipboard, FiBriefcase, FiPhone } from 'react-icons/fi';

const SidebarSection = ({ title, links }) => {
  return (
    <div className="bg-[#27a33a49] p-4 rounded-lg mb-4">
      <h1 className="text-xl font-bold mb-4 text-white">{title}</h1>
      {links.map(link => (
        <Link to={link.path} key={link.path} className="flex items-center mb-3 text-white hover:text-[#27a339]">
          {link.icon}
          <p className='ml-4'>{link.label}</p>
        </Link>
      ))}
    </div>
  );
}

const Dashboard = () => {
  const sections = [
    {
      title: "AI Applications",
      links: [
        { path: '/AiExpert', label: 'Talk to AI Expert', icon: <FiUser /> }
      ]
    },
    {
      title: "Doctor Details",
      links: [
        { path: '/DoctorMeeting', label: 'Meeting', icon: <FiBriefcase /> },
        { path: '/DoctorPrescription', label: 'Prescription', icon: <FiBriefcase /> },
        { path: '/SearchDoctors', label: 'Search Doctors', icon: <FiBriefcase /> }
      ]
    },
    {
      title: "Patients Details",
      links: [
        { path: '/CheckUpHistory', label: 'CheckUp History', icon: <FiClipboard /> },
        // { path: '/ScheduledCheckup', label: 'Checkup', icon: <FiClipboard /> }
      ]
    }
  ];

  return (
    <div className='flex h-screen bg-richblack-900'>
      <div className='flex flex-col w-48'>
        {sections.map(section => (
          <SidebarSection key={section.title} title={section.title} links={section.links} />
        ))}
        <Link to="/Emergency" className="flex items-center bg-[#ff1c1c34] p-4 rounded-lg mb-4 text-white hover:bg-[#ff1c1cda]">
          <FiPhone />
          <h1 className='ml-4 text-xl font-bold'>Emergency 24X7</h1>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

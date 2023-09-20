import React, { useState } from 'react';
import { FaFingerprint } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        phoneNumber: "",
        otp: "",
        biometricData: "", // Placeholder for biometric verification
    });

    // const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function sendOtp() {
        // Implement OTP sending logic here
        // Use a service like Twilio, Firebase Authentication, etc.
        // Send OTP to formData.phoneNumber
        // Handle response (success or error)
    }

    // function verifyOtp() {
    //     // Implement OTP verification logic here
    //     // Use the OTP entered in formData.otp
    //     // Handle response (success or error)
    // }

    // function handleBiometricVerification() {
    //     // Implement biometric verification logic here
    //     // You will need to use a library or API for this
    //     // Handle response (success or error)
    // }

    function submitHandler(event) {
        event.preventDefault();
        // Assuming OTP verification and biometric verification are successful, continue with login
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            {/* Mobile Number for login verification */}
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Mobile Number<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={changeHandler}
                    placeholder="Enter mobile number"
                    name="phoneNumber"
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-2 border-richblack-800 border-b-indigo-500'
                />
            </label>

            {/* OTP for verification */}
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    OTP<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="text"
                    value={formData.otp}
                    onChange={changeHandler}
                    placeholder="Enter OTP"
                    name="otp"
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-2 border-richblack-800 border-b-indigo-500'
                />
            </label>
            <button
                onClick={sendOtp}
                className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-2'>
                Send OTP
            </button>

            <div className='text-white justify-center items-center mt-4 mb-4'>
                <p className='ml-[210px] font-bold text-xl'>OR</p>
            </div>


            <div className="flex items-center justify-center h-full">
            <div className="bg-gray-300 rounded-full p-4 text-center">
                {/* Add your fingerprint icon here */}
                <Link to="/dashboard">
                    <FaFingerprint size={48} color="#000" className='ml-[102px]' onClick={submitHandler}/>
                </Link>
                {/* Add details about biometric scanning */}
                <p className="text-sm text-richblack-500 font-bold mb-1">Place your finger on the scanner to verify</p>
                <p className="text-xs text-gray-500">(Powered by XYZ Biometrics)</p>
            </div>
            </div>


        </form>
    );
}

export default LoginForm;

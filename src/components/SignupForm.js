import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });


  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function sendOtp() {
    // Implement OTP sending logic here
    // Use a service like Twilio, Firebase Authentication, etc.
    // Send OTP to formData.phoneNumber
    // Handle response (success or error)
  }

  function verifyOtp() {
    // Implement OTP verification logic here
    // Use the OTP entered in formData.otp
    // Handle response (success or error)
  }

//   function submitHandler(event) {
//     event.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     // Assuming OTP verification is successful, continue with registration
//     setIsLoggedIn(true);
//     toast.success("Account Created");
//     const accountData = {
//       ...formData,
//     };

//     console.log("printing Final account data ");
//     console.log(accountData);

//     navigate("/dashboard");
//   }

  return (
    <div>
      {/* ... (existing code) */}
      <div className="mt-[20px]">
        <label className="w-full mt-[20px]">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Phone Number<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="tel"
            name="phoneNumber"
            onChange={changeHandler}
            placeholder="Enter Phone Number"
            value={formData.phoneNumber}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        <button
          onClick={sendOtp}
          className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          Send OTP
        </button>
      </div>
      <div className="mt-[20px]">
        <label className="w-full mt-[20px]">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            OTP<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="otp"
            onChange={changeHandler}
            placeholder="Enter OTP"
            value={formData.otp}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        <button
          onClick={verifyOtp}
          className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          Verify OTP
        </button>
      </div>
      {/* ... (existing code) */}
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

// Initialize the agent on application start.
const fpPromise = FingerprintJS.load({
  apiKey: "yM3IqP6XgGg7Zouih74O",
  region: "ap"
})

// Get the visitorId when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => console.log(result.visitorId))
// import { toast } from 'react-hot-toast';

const BiometricData = ({ onVerify }) => {
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerification = () => {
    // Simulate biometric verification (in a real scenario, this would be more complex)
    setVerificationStatus('Verifying...');
    setTimeout(() => {
      setVerificationStatus('Verification successful');
      onVerify();
    }, 2000); // Simulating a 2-second verification process
  };

  return (
    <div>
      <FingerprintJS
        onEnd={() => handleVerification()}
        onReady={(elements) => {
          // Simulate fingerprint animation (in a real scenario, this would use the actual hardware)
          elements.forEach((element) => {
            element.style.animation = 'fingerprint-animation 1s linear infinite';
          });
        }}
      >
        <span style={{ fontSize: '24px', marginBottom: '10px' }}>👆</span>
        <p>{verificationStatus}</p>
      </FingerprintJS>
      <style>{`
        @keyframes fingerprint-animation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BiometricData;

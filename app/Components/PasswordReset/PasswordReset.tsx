

'use client';
import React, { useState } from 'react';

const ResetPasswordPage = () => {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSendOtp = async () => {
    // Simulate sending OTP
    console.log(`Sending OTP to ${email}`);
    setStep('otp');
  };

  const handleVerifyOtp = async () => {
    // Simulate OTP verification
    console.log(`Verifying OTP: ${otp}`);
    setStep('reset');
  };

  const handleResetPassword = async () => {
    // Simulate password reset
    console.log(`Resetting password for ${email} to: ${password}`);
    alert('Password reset successful!');
  };

  return (
    <div className="flex h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/reset-password.jpg')` }}>
        {/* Optional: Add overlay or branding here */}
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-black">Reset Your Password</h2>

          {step === 'email' && (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full bg-blue-600 text-white p-3 rounded" onClick={handleSendOtp}>
                Send OTP
              </button>
            </>
          )}

                {step === 'otp' && (
        <div>
            <div className="flex justify-between gap-3">
            {[0, 1, 2, 3].map((index) => (
                <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={otp[index] || ''}
                onChange={(e) => {
                    const newOtp = otp.split('');
                    newOtp[index] = e.target.value;
                    setOtp(newOtp.join(''));
                    // Auto-focus next input
                    const next = document.getElementById(`otp-${index + 1}`);
                    if (e.target.value && next) {
                    (next as HTMLInputElement).focus();
                    }
                }}
                id={`otp-${index}`}
                />
            ))}
            </div>

            <button
            className="w-full bg-green-600 text-white p-3 rounded mt-6"
            onClick={handleVerifyOtp}
            disabled={otp.length !== 4}
            >
            Verify OTP
            </button>
        </div>
        )}


          {step === 'reset' && (
            <>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-3 border rounded"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="w-full bg-purple-600 text-white p-3 rounded" onClick={handleResetPassword}>
                Reset Password
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
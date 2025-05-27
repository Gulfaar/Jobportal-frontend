'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'otp' | 'reset' | 'success'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSendOtp = async () => {
    console.log(`Sending OTP to ${email}`);
    setStep('otp');
  };

  const handleVerifyOtp = async () => {
    console.log(`Verifying OTP: ${otp}`);
    setStep('reset');
  };

  const handleResetPassword = async () => {
    console.log(`Resetting password for ${email} to: ${password}`);
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }
    // Simulate success
    setStep('success');
  };

  return (
    <div className="flex h-screen">
      {/* Left Image Side */}
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/forgotpassword.jpg')` }} />

      {/* Right Form Side */}
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
              <button className="w-full bg-[#2e6b66] text-white p-3 rounded" onClick={handleSendOtp}>
                Send OTP
              </button>
            </>
          )}

          {step === 'otp' && (
            <div>
              <div className="flex justify-between gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-[#2e6b66]"
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = otp.split('');
                      newOtp[index] = e.target.value;
                      setOtp(newOtp.join(''));
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
                className="w-full bg-[#2e6b66] text-white p-3 rounded mt-6"
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
                className="w-full p-3 border rounded text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-3 border rounded text-black"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="w-full bg-[#2e6b66] text-white p-3 rounded" onClick={handleResetPassword}>
                Reset Password
              </button>
            </>
          )}

          {step === 'success' && (
            <div className="text-center space-y-4">
              <p className="text-lg text-green-700 font-semibold">🎉 Your password has been reset successfully!</p>
              <button
                className="bg-[#2e6b66] text-white px-4 py-2 rounded"
                onClick={() => router.push('/jobseeker/login')}
              >
                Return to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

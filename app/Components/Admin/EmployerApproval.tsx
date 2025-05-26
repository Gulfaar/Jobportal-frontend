'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { UserCircle } from 'lucide-react';

const EmployerApproval = () => {
  const { uuid } = useParams();
  const router = useRouter();
  const [employer, setEmployer] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const mockData = {
        username: 'johndoe',
        company: 'Tech Innovators',
        email: 'example@gmail.com',
        phone: '+1 123 456 7890',
        industry: 'IT',
        address: 'New York, NY, Suite 401',
        logo: '', // future logo URL if available
      };
      setEmployer(mockData);
    };
    fetchData();
  }, [uuid]);

  const handleApprove = () => {
    console.log('Approved employer:', uuid);
    router.push('/admin/dashboard');
  };

  const handleReject = () => {
    console.log('Rejected:', uuid, rejectionReason);
    setModalOpen(false);
    router.push('/admin/dashboard');
  };

  if (!employer) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading employer details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Logo / Avatar */}
        <div className="flex flex-col items-center mb-6">
          {employer.logo ? (
            <img
              src={employer.logo}
              alt="Employer Logo"
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
          ) : (
            <UserCircle className="w-24 h-24 text-gray-300 mb-2" />
          )}
          <h2 className="text-xl font-semibold text-gray-800">{employer.company}</h2>
        </div>

        {/* Employer Info */}
        <div className="grid gap-4 text-gray-700 text-sm">
          <InfoRow label="Username" value={employer.username} />
          <InfoRow label="Email" value={employer.email} />
          <InfoRow label="Phone No" value={employer.phone} />
          <InfoRow label="Industry" value={employer.industry} />
          <InfoRow label="Address" value={employer.address} />
        </div>

        {/* Actions */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={handleApprove}
            className="bg-[#2e6b66] hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Approve
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Reject
          </button>
        </div>
      </div>

      {/* Reject Modal */}
    <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

    <div className="fixed inset-0 flex items-center justify-center px-4">
        <div
        role="dialog"
        aria-modal="true"
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl"
        >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Reason for Rejection
        </h3>
        <textarea
            className="w-full border border-gray-300 p-3 rounded-lg text-sm resize-none text-gray-800"
            rows={4}
            placeholder="Enter reason..."
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
        />
        <div className="mt-6 flex justify-end gap-3">
            <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
            >
            Cancel
            </button>
            <button
            onClick={handleReject}
            disabled={!rejectionReason.trim()}
            className={`px-4 py-2 text-sm text-white rounded-md ${
                rejectionReason.trim()
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-red-300 cursor-not-allowed'
            }`}
            >
            Submit Rejection
            </button>
        </div>
        </div>
    </div>
    </Dialog>

    </div>
  );
};

// Subcomponent for displaying rows
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="font-medium text-gray-600">{label}</span>
    <span>{value}</span>
  </div>
);

export default EmployerApproval;

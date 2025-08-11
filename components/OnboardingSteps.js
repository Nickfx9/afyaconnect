'use client';
import { useState, useEffect } from 'react';

export default function OnboardingSteps({ onComplete }) {
  const [step, setStep] = useState(1);
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = () => {
    if (step === 3) {
      // Final submission
      const userData = { dob, gender, location };
      localStorage.setItem('onboardingComplete', 'true');
      localStorage.setItem('userDetails', JSON.stringify(userData));
      onComplete(); // Tell parent we're done
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Step {step} of 3</h2>

      {step === 1 && (
        <div>
          <label className="block mb-2 font-medium">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2 font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      <button
        onClick={handleNext}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={
          (step === 1 && !dob) || (step === 2 && !gender) || (step === 3 && !location)
        }
      >
        {step === 3 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

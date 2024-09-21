'use client'
import React, { useState } from 'react';
import { verifyMedicalRecord } from '@/app/utils/verifyMedicalRecord';

const VerifyRecordForm: React.FC = () => {
  const [pA, setPA] = useState<[number, number]>([0, 0]);
  const [pB, setPB] = useState<[[number, number], [number, number]]>([[0, 0], [0, 0]]);
  const [pC, setPC] = useState<[number, number]>([0, 0]);
  
  // Initialize pubSignals as a tuple with one element
  const [pubSignals, setPubSignals] = useState<[number]>([0]); // Ensure this is a tuple

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create proof object ensuring pubSignals is a tuple with one element
    const proof = {
      pA,
      pB,
      pC,
      pubSignals: pubSignals // This now matches the expected type
    };

    try {
      const isVerified = await verifyMedicalRecord(proof);
      alert(`Verification result: ${isVerified}`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Verification failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for pA */}
      <label>
        pA:
        <input type="number" value={pA[0]} onChange={(e) => setPA([Number(e.target.value), pA[1]])} />
        <input type="number" value={pA[1]} onChange={(e) => setPA([pA[0], Number(e.target.value)])} />
      </label>

      {/* Input fields for pB */}
      <label>
        pB:
        <input type="number" value={pB[0][0]} onChange={(e) => setPB([[Number(e.target.value), pB[0][1]], pB[1]])} />
        <input type="number" value={pB[0][1]} onChange={(e) => setPB([[pB[0][0], Number(e.target.value)], pB[1]])} />
        <input type="number" value={pB[1][0]} onChange={(e) => setPB([pB[0], [Number(e.target.value), pB[1][1]]])} />
        <input type="number" value={pB[1][1]} onChange={(e) => setPB([pB[0], [pB[1][0], Number(e.target.value)]])} />
      </label>

      {/* Input fields for pC */}
      <label>
        pC:
        <input type="number" value={pC[0]} onChange={(e) => setPC([Number(e.target.value), pC[1]])} />
        <input type="number" value={pC[1]} onChange={(e) => setPC([pC[0], Number(e.target.value)])} />
      </label>

      {/* Input field for pubSignals */}
      <label>
        pubSignals:
        {/* Ensure this input updates the first element of the tuple */}
        <input type="number" value={pubSignals[0]} onChange={(e) => setPubSignals([Number(e.target.value)])} />
      </label>

      <button type="submit">Verify Medical Record</button>
    </form>
  );
};

export default VerifyRecordForm;
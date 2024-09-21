import { ethers } from 'ethers';
import VerifierArtifact from "@/artifacts/contracts/healthRecordVerificationVerifier.sol/Groth16Verifier.json";

// Replace with your contract address
const contractAddress = '0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C';

// Define types for proof parameters
interface Proof {
  pA: [number, number];
  pB: [[number, number], [number, number]];
  pC: [number, number];
  pubSignals: [number]; // Adjust this if you have more than one public signal
}

export async function verifyMedicalRecord(proof: Proof): Promise<boolean> {
  // Connect to Ethereum provider (MetaMask)
  if (!window.ethereum) {
    throw new Error("Ethereum provider not found. Please install MetaMask.");
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  
  // Create a new instance of the contract
  const contract = new ethers.Contract(contractAddress, VerifierArtifact.abi, provider);

  const { pA, pB, pC, pubSignals } = proof;

  try {
    // Call the verifyProof function of the contract
    const result = await contract.verifyProof(pA, pB, pC, pubSignals);
    return result; // This will be true or false based on verification
  } catch (error) {
    console.error("Error verifying proof:", error);
    throw new Error("Verification failed. Please check your input and try again.");
  }
}
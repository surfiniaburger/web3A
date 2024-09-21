import { useEffect, useState } from "react";
import { ethers } from "ethers";
import VerifierArtifact from "@/artifacts/contracts/healthRecordVerificationVerifier.sol/Groth16Verifier.json";

const contractAddress = "0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C";

export const useVerifier = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider("https://arb-sepolia.g.alchemy.com/v2/BU55IFPwm8eddCh9di1L58nCBaP536sf");
    const signer = provider.getSigner();
    const verifierContract = new ethers.Contract(contractAddress, VerifierArtifact.abi, signer);
    setContract(verifierContract);
  }, []);

  return { contract };
};

# MED ZK
Poor health information system has been identified as a major challenge in the health-care system in many sub-Saharan African countries including Nigeria. Although, EMR is an important tool to improve access to patient information with attendant improved quality of care, EMR has not been widely implemented/adopted in sub-Saharan Africa especially Nigeria.

So it's a B2B Setup where a private hospital and public hospital can colaborate and share health records and risk assessment without compromising user data.


Adoption of electronic medical records in developing countries—A multi-state study of the Nigerian healthcare system - Akwaowo CD, Sabi HM, Ekpenyong N, Isiguzo CM, Andem NF, Maduka O, Dan E, Umoh E, Ekpin V, Uzoka FM. Adoption of electronic medical records in developing countries-A multi-state study of the Nigerian healthcare system. Front Digit Health. 2022 Nov 21;4:1017231. doi: 10.3389/fdgth.2022.1017231. PMID: 36479191; PMCID: PMC9720323.



```bash
npx hardhat run scripts/deploy.js --network arbitrum_sepolia
Verifier contract deployed to: 0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C
```

```bash
npx hardhat verify --network arbitrum_sepolia 0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C
Nothing to compile
Successfully submitted source code for contract
contracts/healthRecordVerificationVerifier.sol:Groth16Verifier at 0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Groth16Verifier on Etherscan.
https://sepolia.arbiscan.io/address/0x57dA2ac7132e03A790A61fbACBb4A42ddf84141C#code
```
>>>>>>> 717c751 (web3Africa)

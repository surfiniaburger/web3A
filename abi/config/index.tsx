// config/index.tsx

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import { mainnet, sepolia, optimism, arbitrum, base, zkSync, celo, arbitrumGoerli, celoAlfajores, arbitrumSepolia } from "wagmi/chains"; // Import Sepolia/testnet variants
import { coinbaseWallet, walletConnect, metaMask } from "wagmi/connectors";

// Your WalletConnect Cloud project ID
export const projectId = "8283a687dc64c79ec2996ba017e7cb5e";

// Create a metadata object
const metadata = {
  name: "seree",
  description: "International Wallet",
  url: "https://test.seree.xyz", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia, optimism, arbitrum, base, zkSync, celo, arbitrumGoerli, celoAlfajores] as const; // Add testnet variants

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  connectors: [
    coinbaseWallet(),
    metaMask(),
    walletConnect({ projectId }),
  ],
  ssr: true,
  transports: {
    // Mainnets
    [mainnet.id]: http(
      `https://${chains[0].id == 1 && "eth-mainnet"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [sepolia.id]: http(
      `https://${chains[1].id == 11155111 && "eth-sepolia"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [optimism.id]: http(
      `https://${chains[2].id == 10 && "opt-mainnet"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [arbitrum.id]: http(
      `https://${chains[3].id == 42161 && "arb-sepolia"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [base.id]: http(
      `https://${chains[4].id == 8453 && "base-mainnet"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [zkSync.id]: http(
      `https://${chains[5].id == 324 && "zksync-mainnet"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    ),
    [celo.id]: http(
      `https://${chains[6].id == 42220 && "celo-mainnet"}.g.alchemy.com/v2/${
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      }`
    )
  },
  storage: createStorage({
    storage: cookieStorage,
  }),

  // Optional - Override createConfig parameters
});


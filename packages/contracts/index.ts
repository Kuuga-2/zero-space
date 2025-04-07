import uploadAbi from './abis/0g'

export type NetworkType = 'standard' | 'turbo';

export interface NetworkConfig {
    name: string;
    flowAddress: string;
    storageRpc: string;
    explorerUrl: string;
    l1Rpc: string;
}

/**
 * Gets network configuration based on network type
 * @param networkType The network type ('standard' or 'turbo')
 * @returns The network configuration
 */
export function getNetworkConfig(networkType: NetworkType): NetworkConfig {
    const NETWORKS: Record<NetworkType, NetworkConfig> = {
        standard: {
            name: 'Standard',
            flowAddress: process.env.NEXT_PUBLIC_STANDARD_FLOW_ADDRESS || '0x0460aA47b41a66694c0a73f667a1b795A5ED3556',
            storageRpc: process.env.NEXT_PUBLIC_STANDARD_STORAGE_RPC || 'https://indexer-storage-testnet-standard.0g.ai',
            explorerUrl: process.env.NEXT_PUBLIC_STANDARD_EXPLORER_URL || 'https://chainscan-newton.0g.ai/tx/',
            l1Rpc: process.env.NEXT_PUBLIC_STANDARD_L1_RPC || process.env.NEXT_PUBLIC_L1_RPC || 'https://evmrpc-testnet.0g.ai'
        },
        turbo: {
            name: 'Turbo',
            flowAddress: process.env.NEXT_PUBLIC_TURBO_FLOW_ADDRESS || '0xbD2C3F0E65eDF5582141C35969d66e34629cC768',
            storageRpc: process.env.NEXT_PUBLIC_TURBO_STORAGE_RPC || 'https://indexer-storage-testnet-turbo.0g.ai',
            explorerUrl: process.env.NEXT_PUBLIC_TURBO_EXPLORER_URL || 'https://chainscan-newton.0g.ai/tx/',
            l1Rpc: process.env.NEXT_PUBLIC_TURBO_L1_RPC || process.env.NEXT_PUBLIC_L1_RPC || 'https://evmrpc-testnet.0g.ai'
        }
    };

    return NETWORKS[networkType];
}

export { uploadAbi }

export * from './contracts/upload'
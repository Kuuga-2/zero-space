import { defineConfig } from '@wagmi/cli'
import type { Config } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { zeroG } from 'viem/chains'
import uploadAbi from './abis/0g'
import { getNetworkConfig } from './index'

export default defineConfig({
  out: 'contracts/upload.ts',
  contracts: [
    {
      abi: uploadAbi,
      name: 'standardStorage',
      address: {
        [zeroG.id]: getNetworkConfig('standard').flowAddress as `0x${string}`,
      }
    }, {
      abi: uploadAbi,
      name: 'turboStorage',
      address: {
        [zeroG.id]: getNetworkConfig('turbo').flowAddress as `0x${string}`,
      }
    },
  ],
  plugins: [react()],
}) as Config

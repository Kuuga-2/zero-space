
import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { zeroG } from '@reown/appkit/networks'
export const projectId = 'bce9cf86c5fa9002985b1af40c3a2065'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = []
export const defaultNetwork = zeroG

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks: [defaultNetwork, ...networks],
  transports: {
    [zeroG.id]: http(),
  },
})

export const config = wagmiAdapter.wagmiConfig
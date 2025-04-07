'use client'

import { wagmiAdapter, projectId, networks, defaultNetwork } from '@/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { createAppKit, useAppKitTheme } from '@reown/appkit/react'
import React, { useEffect, type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { appQueryClient } from '.'
import { useTheme } from 'next-themes'


// Set up metadata
const metadata = {
  name: 'zero-space',
  description: '0G Cloud Drive + AI Assistant',
  url: 'https://zero-space.vercel.app', // origin must match your domain & subdomain
  icons: ['https://zero-space.vercel.app/logo.png']
}

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [defaultNetwork, ...networks],
  defaultNetwork: defaultNetwork,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false,
    emailShowWallets: false,
    socials: false,
    swaps: false,
    onramp: false,
  },
  themeMode: 'dark',
  themeVariables:{
    '--w3m-accent': '#ff3ab3',
  },
})

function WalletContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  const { theme } = useTheme(); 
  const { setThemeMode } = useAppKitTheme();

  useEffect(() => {
    if(theme === 'light'){
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  }, [theme, setThemeMode]);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={appQueryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletContextProvider

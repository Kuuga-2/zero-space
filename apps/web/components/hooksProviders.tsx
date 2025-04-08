"use client"

import { useAppKitAccount } from "@reown/appkit/react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"


export function HookProviders({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { isConnected } = useAppKitAccount()

  useEffect(() => {
    if(isConnected && pathname === '/'){
      router.push('/dashboard')
    }
  }, [isConnected, pathname, router])
  
  return children
}

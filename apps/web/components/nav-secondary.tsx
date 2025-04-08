import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { useBalance } from "wagmi"
import { useAppKitAccount } from "@reown/appkit/react"
import { formatEther } from "viem"
import { Skeleton } from "@workspace/ui/components/skeleton"

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { address } = useAppKitAccount()
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: address as `0x${string}`,
  })

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col space-y-1 px-2">
          <SidebarMenuItem className="w-full">
            <SidebarMenuButton size="sm" className="w-full justify-between">
              <span className="font-medium">A0GI</span>
              {isBalanceLoading ? (
                <Skeleton className="h-4 w-16" />
              ) : (
                <span>{Number(formatEther(balance?.value ?? 0n)).toLocaleString()}</span>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* <SidebarMenuItem className="w-full">
            <SidebarMenuButton size="sm" className="w-full justify-between">
              <span className="flex items-center">
                ✨AI
              </span>
              {isLoading ? (
                <Skeleton className="h-4 w-8" />
              ) : (
                <span>{2}</span>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem> */}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

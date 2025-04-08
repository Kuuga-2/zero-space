'use client'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Separator } from "@workspace/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { usePathname } from "next/navigation"
import React from "react"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Button } from "@workspace/ui/components/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const { isConnected } = useAppKitAccount()
  const { open } = useAppKit()

  const handleConnect = React.useCallback(() => {
    open({ view: "Connect" })
  }, [open])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {segments.slice(1).map((segment, index) => (
                  <React.Fragment key={segment}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem key={segment}>
                      {index === segments.length - 2 ? (
                        <BreadcrumbPage className="capitalize">
                          {segment.replace(/-/g, " ")}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={`/dashboard/${segments
                            .slice(1, index + 2)
                            .join("/")}`}
                          className="capitalize"
                        >
                          {segment.replace(/-/g, " ")}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {isConnected ? (
            children
          ) : (
            <div className="flex h-[calc(100vh-6rem)] items-center justify-center">
              <Button size="lg" onClick={handleConnect}>
                Connect Wallet to Continue
              </Button>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 
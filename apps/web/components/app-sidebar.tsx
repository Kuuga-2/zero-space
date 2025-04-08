"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
  File,
  Upload,
  Sun,
  Moon,
  Bot,
} from "lucide-react"
import Image from "next/image"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

const data = {
  navMain: [
    {
      title: "Files",
      url: "/dashboard/files",
      icon: File,
      isActive: true,
      items: [
        {
          title: "Media",
          url: "/dashboard/files",
        },
        {
          title: "Documents",
          url: "/dashboard/files",
        },
      ],
    },
    {
      title: "Upload",
      url: "/dashboard/upload",
      icon: Upload,
    },
    {
      title: "Agent",
      url: "/dashboard/agent",
      icon: Bot,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  {/* <Command className="size-4" /> */}
                  <Image src="/logo-mini.png" alt="Zero Space Logo" width={40} height={40} className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Zero Space</span>
                  <span className="truncate text-xs">Pro</span>
                </div>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-2 rounded-md p-1.5 hover:bg-accent"
                >
                  <Sun className="h-4 w-4 dark:hidden" />
                  <Moon className="hidden h-4 w-4 dark:block" />
                </button>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}

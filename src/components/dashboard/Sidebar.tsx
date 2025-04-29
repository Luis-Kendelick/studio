
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    title: "Students",
    href: "/students",
    icon: "users",
  },
  {
    title: "Schedule",
    href: "/schedule",
    icon: "calendar",
  },
  {
    title: "Plans",
    href: "/plans",
    icon: "file",
  },
  {
    title: "Payments",
    href: "/payments",
    icon: "creditCard",
  },
];
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen antialiased text-foreground">
        <Sidebar>
          <SidebarHeader>
            <div className="m-2 flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                FitTrack Lite
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {navigation.map((item) => {
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        className="justify-start"
                        tooltip={item.title}
                      >
                        <Link href={item.href} className="w-full">
                          <Icons.student className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarTrigger className="mx-auto w-full">
              <Icons.arrowLeft className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
            </SidebarTrigger>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}

function MainNavigation() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex w-full border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center space-x-4 py-2">
        <Link href="#" className="hidden font-bold sm:inline-block">
          Acme Inc
        </Link>
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          Menu
        </button>
        <nav
          className={`flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between ${
            showMobileMenu ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <Link href="/" className="font-medium">
              Dashboard
            </Link>
            <Link href="/account" className="font-medium">
              Account
            </Link>
            <Link href="/stores" className="font-medium">
              Stores
            </Link>
            <Link href="/products" className="font-medium">
              Products
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

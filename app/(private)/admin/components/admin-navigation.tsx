'use client';

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link';
import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from 'lucide-react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const AdminNavigation = () => {
  const pathname = usePathname();

  const links = [
    {
      href: '/admin',
      icon: <Home className="h-5 w-5" />,
      label: 'Dashboard',
      isActive: pathname === '/admin',
    },
    {
      href: '/admin/orders',
      icon: <ShoppingCart className="h-5 w-5" />,
      label: 'Orders',
      isActive: pathname === '/admin/orders',
    },
    {
      href: '/admin/inventory',
      icon: <Package className="h-5 w-5" />,
      label: 'Inventory',
      isActive: pathname === '/admin/inventory',
    },
    {
      href: '/admin/customers',
      icon: <Users2 className="h-5 w-5" />,
      label: 'Customers',
      isActive: pathname === '/admin/customers',
    },
    {
      href: '/admin/analytics',
      icon: <LineChart className="h-5 w-5" />,
      label: 'Analytics',
      isActive: pathname === '/admin/analytics',
    },
  ]
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/admin"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">SoulePsycle</span>
          </Link>
          {links.map((link) => {
            
            return (
              <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  link.isActive && 'bg-accent text-primary'
                )}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.label}</TooltipContent>
          </Tooltip>
            )
          })}
          {/* <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip> */}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default AdminNavigation;

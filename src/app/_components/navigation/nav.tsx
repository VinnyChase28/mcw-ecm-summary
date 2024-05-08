/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GWZPnFyDTW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { HomeIcon } from "@radix-ui/react-icons";
import {
  MountainIcon,
  MenuIcon,
  ChevronRightIcon,
  Package,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

export default function Nav() {
  return (
    <div className="flex h-screen w-full">
      <Collapsible className="group flex flex-col gap-4 bg-gray-100 p-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="font-semibold">MCW</span>
          </Link>
          <CollapsibleTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <nav className="grid gap-2">
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
              <HomeIcon className="h-5 w-5" />
              Home
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-8 text-sm">
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Analytics
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
              <Package className="h-5 w-5" />
              Products
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-8 text-sm">
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                All Products
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Categories
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Inventory
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
              <UsersIcon className="h-5 w-5" />
              Customers
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-8 text-sm">
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                All Customers
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Groups
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Subscriptions
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
              <SettingsIcon className="h-5 w-5" />
              Settings
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-8 text-sm">
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                General
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Integrations
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                href="#"
              >
                Billing
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            href="#"
          >
            <LogOutIcon className="h-5 w-5" />
            Logout
          </Link>
        </nav>
      </Collapsible>
      <div className="flex-1" />
    </div>
  );
}


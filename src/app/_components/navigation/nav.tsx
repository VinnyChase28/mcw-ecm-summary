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
              <PackageIcon className="h-5 w-5" />
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

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogOutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

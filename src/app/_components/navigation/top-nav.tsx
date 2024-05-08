/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P0EN9RQYhx3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  MenuIcon,
  PlayCircle,
  Grid,
  WifiOff,
  MapPin,
  User,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-950 dark:text-gray-50 sm:px-6 lg:px-8">
      <Link className="text-2xl font-bold" href="#">
        MCW
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Products
              </h2>
              <div className="space-y-1">
                <Button variant="secondary" className="w-full justify-start">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Category 1
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Grid className="mr-2 h-4 w-4" />
                  Category 2
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <WifiOff className="mr-2 h-4 w-4" />
                  Category 3
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Projects
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  British Columbia
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Alberta
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ontario
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Quebec
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

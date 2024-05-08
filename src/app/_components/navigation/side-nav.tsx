import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { PlayCircle, Grid, WifiOff, MapPin, User } from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("hidden pb-12 md:block", className)}>
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
    </div>
  );
}

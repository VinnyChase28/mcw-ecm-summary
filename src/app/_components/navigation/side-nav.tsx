import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  Text,
  Snowflake,
  MapPin,
  Terminal,
  User,
  FanIcon,
  GlassWater,
  Flame,
} from "lucide-react";

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
              <Flame className="mr-2 h-4 w-4" />
              Building Heating
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Snowflake className="mr-2 h-4 w-4" />
              Building Cooling
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FanIcon className="mr-2 h-4 w-4" />
              Building Ventilation
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Terminal className="mr-2 h-4 w-4" />
              Terminal Units
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <GlassWater className="mr-2 h-4 w-4" />
              Pump
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Regions
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
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Bylaws
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Text className="mr-2 h-4 w-4" />
              British Columbia
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Text className="mr-2 h-4 w-4" />
              Alberta
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Text className="mr-2 h-4 w-4" />
              Ontario
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

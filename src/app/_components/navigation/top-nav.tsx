import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50 sm:px-6 lg:px-8">
      <div className="flex h-full items-center">
        <Image
          src="/mcw-logo.png"
          alt="Left Logo"
          width={100}
          height={50}
          className="h-full object-contain"
        />
      </div>
      <div className="flex h-full flex-grow items-center justify-center">
        <span className="text-xl font-bold">
          Engineering Excellence, Simplified.
        </span>
      </div>
      <div className="flex h-full items-center">
        <Link className="ml-2 text-2xl font-bold" href="#">
          <Image
            src="/cumulus-logo.png"
            alt="Right Logo"
            width={100}
            height={50}
            className="h-full object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
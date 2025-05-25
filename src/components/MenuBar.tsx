"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <nav className='fixed left-1/2 bottom-[8%] transform -translate-x-1/2 w-fit bg-white p-1.5 rounded-xl text-sm flex items-center justify-center text-neutral-600 drop-shadow-xl'>
      <Link
        className={`py-2 px-4 rounded-lg ${
          pathname === "/" ? "bg-primary-300 text-black" : ""
        }`}
        href={"/"}>
        Home
      </Link>

      <Link
        className={`py-2 px-4 rounded-lg ${
          pathname === "/projects" ? "bg-primary-300 text-black" : ""
        }`}
        href={"/projects"}>
        Projects
      </Link>

      <Link
        className={`py-2 px-4 rounded-lg ${
          pathname === "/notes" ? "bg-primary-300 text-black" : ""
        }`}
        href={"/notes"}>
        Notes
      </Link>

      <Link
        className={`text-lg py-1 px-5 rounded-lg ${
          pathname === "/" ? "bg-primary-300 text-black" : ""
        }`}
        href='/'>
        🎯
        <span className='sr-only'>X</span>
      </Link>
    </nav>
  );
}

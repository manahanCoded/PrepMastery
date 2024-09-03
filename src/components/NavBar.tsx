"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  function hello(){
    const change = !navbarActive
    setNavbarActive(change)
  }

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-xl transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Prep<span className="text-blue-600">Mastery</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <Link href="/login">Login</Link>
            <Link href="/Signup">Sign Up</Link>
            <button className="md:hidden" onClick={hello }>
              <FontAwesomeIcon icon={faBars} style={{ width: "1.5rem" }} />
            </button>
          </div>
          <div className={navbarActive? "block": "hidden"}>
            asdasdasdasdasdasd
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
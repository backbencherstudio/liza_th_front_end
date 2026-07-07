"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Bell } from "lucide-react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["About Us", "Features", "Pricing", "Contact Us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useAuthModalStore();

  return (
    <div className="[background:#F9FAFF] backdrop-blur-[20px] sticky top-0 z-[100] relative">
      <nav className="flex mx-auto w-full max-w-[1600px] h-[80px] lg:h-[120px] justify-between items-center px-5 sm:px-10 lg:px-[140px]">

        {/* Logo */}
        <div className="">
           
        <Link href="/" className="shrink-0">
          <Image
            src="/images/spike-logo.png"
            alt="Spike logo"
            width={100}
            height={100}
            className="w-[72px] lg:w-[100px] h-auto"
          />
        </Link>
       
        </div>

        <div className="hidden md:block border ml-24">

        </div>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden lg:flex gap-12">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#3D3D3C] font-[Archivo] text-lg font-medium leading-6 hover:text-[#0A206D] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop auth buttons — hidden on mobile */}
        <div className="hidden lg:flex gap-5 items-center">
          {/* Bell */}
          <button className="flex w-10 h-10 justify-center items-center [background:#F3F3F4] rounded-full cursor-pointer hover:bg-[#e8e8ea] transition-colors">
            <Bell size={18} className="text-[#3D3D3C]" />
          </button>

          {/* Log In */}
          <button
            onClick={() => open("sign-in")}
            className="relative flex h-14 items-center justify-center gap-1.5 rounded-xl border border-[#0A206D] px-8 py-3 cursor-pointer overflow-hidden bg-white hover:bg-[#f0f4ff] transition-colors"
          >
            <span className="bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-lg font-semibold text-transparent z-10">
              Log In
            </span>
            <div
              className="absolute inset-[3px] rounded-xl border border-[#0A206D] pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 40%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 40%)",
              }}
            />
          </button>

          {/* Sign Up */}
          <button
            onClick={() => open("sign-up")}
            className="flex h-14 justify-center items-center [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-6 py-3 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="text-white font-[Archivo] text-lg font-semibold">
              Sign Up for free
            </span>
          </button>
        </div>

        {/* Mobile right side — bell + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button className="flex w-9 h-9 justify-center items-center [background:#F3F3F4] rounded-full cursor-pointer">
            <Bell size={17} className="text-[#3D3D3C]" />
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex w-9 h-9 justify-center items-center [background:#F3F3F4] rounded-full cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} className="text-[#0A206D]" />
            ) : (
              <Menu size={20} className="text-[#3D3D3C]" />
            )}
          </button>
        </div>
      </nav>

     {/* Mobile dropdown menu — absolute so it floats over page content */}

     {/* Updated Mobile dropdown menu overlay */}
     <div
        className={cn(
          "absolute left-0 right-0 top-full lg:hidden overflow-hidden transition-all duration-300 ease-in-out [background:#F9FAFF] border-t border-[#eaeaea]",
          menuOpen ? "h-[calc(100vh-80px)] opacity-100" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-between px-6 pb-10 pt-4">
          
          {/* Top: Navigation Links */}
          <div className="flex flex-col w-full divide-y divide-[#eaeaea]/60">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#1A1A1A] font-[Archivo] text-lg font-medium py-4 transition-colors hover:text-[#0A206D]"
              >
                {item === "About" ? "About Us" : item === "Contact" ? "Contact Us" : item}
              </Link>
            ))}
            {/* Bottom line for the last link item */}
            <div className="h-px bg-[#eaeaea]/60" />
          </div>

          {/* Bottom: Auth Buttons */}
          <div className="flex flex-col gap-3 w-full mt-auto">
            {/* Log In Button */}
            <button
              onClick={() => {
                open("sign-in");
                setMenuOpen(false);
              }}
              className="relative w-full flex justify-center items-center h-14 rounded-xl border border-[#0A206D] bg-white cursor-pointer transition-colors hover:bg-[#f0f4ff]"
            >
              <span className="bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-lg font-semibold text-transparent z-10">
                Log In
              </span>
              <div
                className="absolute inset-[3px] rounded-xl border border-[#0A206D] pointer-events-none"
                style={{
                  maskImage:
                    "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 40%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 40%)",
                }}
              />
            </button>

            {/* Sign Up Button */}
            <button
              onClick={() => {
                open("sign-up");
                setMenuOpen(false);
              }}
              className="w-full flex justify-center items-center h-14 rounded-xl [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white font-[Archivo] text-lg font-semibold cursor-pointer transition-opacity hover:opacity-95"
            >
              Sign Up for free
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
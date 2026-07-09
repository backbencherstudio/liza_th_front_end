"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen ">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar onClose={() => setOpen(false)} />
            </div>

            {/* Mobile Sidebar */}
            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            <div
                className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-white transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <Sidebar onClose={() => setOpen(false)} />
            </div>
            {/* Main */}
            <div className="flex-1">
                {/* Mobile Top Bar */}
                <div className="flex items-center justify-between border-b px-4 py-3 lg:hidden">
                    <button onClick={() => setOpen(true)}>
                        <Menu size={28} />
                    </button>

                    <Header />
                </div>
                <div className="hidden lg:block">
                    <Header />
                </div>


                <main className="p-5 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
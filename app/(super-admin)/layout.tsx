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
        <div className="flex min-h-screen">
            {/* Desktop Sidebar */}
            <Sidebar onClose={() => setOpen(false)} />

            {/* Mobile Sidebar */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            <div
                className={`fixed left-0 top-0 z-50 h-screen w-[280px] bg-white transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
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
            <div className="flex-1 lg:ml-[260px]">
                {/* Desktop Header */}
                <div className="hidden lg:block fixed top-0 right-0 left-[260px] z-30 bg-white border-b">
                    <Header />
                </div>

                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b px-4 py-3 lg:hidden">
                    <button onClick={() => setOpen(true)}>
                        <Menu size={28} />
                    </button>

                    <Header />
                </div>

                {/* Page Content */}
                <main className="p-5 lg:mt-[72px] lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { AuthModal } from "@/components/auth/auth-modal";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen">

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            {/* Mobile Sidebar */}
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
            <div className="flex min-w-0 flex-1 flex-col lg:ml-[260px]">
                {/* Desktop Header */}
                <div className="fixed top-0 right-0 left-[260px] z-30 hidden border-b bg-white lg:block">
                    <Header />
                </div>

                {/* Mobile Header */}
                <div className="sticky top-0 z-30 border-b bg-white lg:hidden">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <button onClick={() => setOpen(true)}>
                            <Menu size={28} />
                        </button>

                        <div className="min-w-0 flex-1">
                            <Header />
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <main className="min-w-0 p-5 lg:mt-[72px] lg:p-8">
                    {children}
                </main>
            </div>
            
            <AuthModal />
        </div>
    );
}
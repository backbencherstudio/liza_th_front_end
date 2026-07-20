'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const notifications = [
        {
            id: 1,
            title: "Your insight is ready!",
            message: "Your executive insights are now available in your dashboard.",
            time: "01:55 pm",
            type: "info"
        },
        {
            id: 2,
            title: "Payment successful!",
            message: "Your Pro Plan subscription has been renewed. Thank you for staying with Spike Technology.",
            time: "06:42 am",
            type: "success",
            action: "View Details"
        },
        {
            id: 3,
            title: "Payment failed - action needed",
            message: "We couldn't process your payment for Pro Plan. Please update your payment method.",
            time: "03:48 am",
            type: "error",
            actions: ["Try again", "Cancel"]
        },
        {
            id: 4,
            title: "Updated insight available",
            message: "Refreshed the AI insight based on your latest data.",
            time: "12:23 pm",
            type: "info"
        },
        {
            id: 5,
            title: "Password updated",
            message: "Your account password was changed successfully on 07.02.2026",
            time: "05:51 am",
            type: "info"
        }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <div
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F3F3F4] hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bell className="h-5 w-5 text-gray-700" />
                <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white font-medium">
                    5
                </span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-96 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-5 py-4">
                        <h3 className="text-lg font-semibold">Notification</h3>
                        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                            5 New
                        </span>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-[420px] overflow-y-auto">
                        {notifications.map((notif) => (
                            <div key={notif.id} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                                <div className="p-4">
                                    <div className="flex gap-3">
                                        <div className="mt-1">
                                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                <Bell className="h-4 w-4 text-gray-600" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <p className="font-medium text-sm">{notif.title}</p>
                                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                                    {notif.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1 leading-snug">
                                                {notif.message}
                                            </p>

                                            {/* Actions */}
                                            {notif.action && (
                                                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-lg font-medium transition">
                                                    {notif.action}
                                                </button>
                                            )}

                                            {notif.actions && (
                                                <div className="flex gap-2 mt-3">
                                                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-lg font-medium transition">
                                                        Try again
                                                    </button>
                                                    <button className="border border-gray-300 hover:bg-gray-100 text-sm px-4 py-1.5 rounded-lg font-medium transition">
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t bg-gray-50 text-center">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View all notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
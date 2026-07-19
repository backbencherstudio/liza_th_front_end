"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, X } from "lucide-react";

export default function CategorySection({ title, data, setData }: any) {
    const [newExt, setNewExt] = useState("");

    const addExtension = () => {
        if (!newExt.trim()) return;

        const ext = newExt.startsWith(".")
            ? newExt.trim()
            : "." + newExt.trim();

        if (data.extensions.includes(ext)) return;

        setData((prev: any) => ({
            ...prev,
            extensions: [...prev.extensions, ext],
        }));

        setNewExt("");
    };

    const removeExtension = (ext: string) => {
        setData((prev: any) => ({
            ...prev,
            extensions: prev.extensions.filter((e: string) => e !== ext),
        }));
    };

    return (
        <div className="rounded-2xl border border-[#ECEFF3] bg-white p-3 md:p-4 lg:p-6">
            <h3 className="text-[16px] sm:text-[17px] xl:text-lg text-[#151513] font-medium sm:leading-[22px] xl:leading-6 mb-6">
                {title}
            </h3>

            <div className="flex flex-col gap-4 xl:flex-row">
                {/* Extensions */}
                <div className="flex min-h-[48px] flex-1 flex-wrap items-center gap-2 rounded-xl border border-[#D0D5DD] px-2 py-2 md:py-2 xl:py-1 ">
                    {data.extensions.map((ext: string) => (
                        <div
                            key={ext}
                            className="flex items-center gap-2 rounded-full bg-[#F9FAFB] px-4 py-2 text-sm text-[#4A5565]"
                        >
                            <span>{ext}</span>

                            <button
                                type="button"
                                onClick={() => removeExtension(ext)}
                                className="text-[#98A2B3] hover:text-red-500"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}

                    <input
                        type="text"
                        value={newExt}
                        // placeholder="Add extension"
                        onChange={(e) => setNewExt(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addExtension()}
                        className="flex-1 min-w-[120px] lg:min-w-[100px] xl:min-w-[180px] max-w-[255px] rounded-lg border border-[#D0D5DD] px-4 py-2 text-sm outline-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* File Size */}
                <div className="flex h-12 w-full lg:w-[180px] xl:w-[190px] shrink-0 items-center justify-between rounded-xl border border-[#D0D5DD] px-4">
                    <span className="text-sm text-[#151513]">
                        File Size
                    </span>

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={data.size}
                            onChange={(e) =>
                                setData((prev: any) => ({
                                    ...prev,
                                    size: Number(e.target.value.replace(/\D/g, "")),
                                }))
                            }
                            className="w-10 bg-transparent text-right text-lg outline-none focus:outline-none focus:border-blue-500"
                        />

                        <span className="text-base text-[#344054]">MB</span>

                        <div className="flex flex-col">
                            <ChevronUp
                                size={14}
                                className="cursor-pointer text-[#667085]"
                                onClick={() =>
                                    setData((prev: any) => ({
                                        ...prev,
                                        size: prev.size + 1,
                                    }))
                                }
                            />
                            <ChevronDown
                                size={14}
                                className="cursor-pointer text-[#667085]"
                                onClick={() =>
                                    setData((prev: any) => ({
                                        ...prev,
                                        size: Math.max(1, prev.size - 1),
                                    }))
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
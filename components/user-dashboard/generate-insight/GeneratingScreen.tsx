"use client";

import React, { useEffect, useState } from "react";

import Ai2Icon from "@/components/icons/Ai2Icon";

interface GeneratingScreenProps {
    onComplete?: () => void;
}

export default function GeneratingScreen({ onComplete }: GeneratingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    onComplete?.();
                    return 100;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="flex items-center justify-center min-h-[400px] w-full p-4">
                {/* CARD CONTAINER */}
                <div className="flex flex-col items-center self-stretch w-full max-w-xl bg-white [background:rgba(255,255,255,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.07)] p-10 rounded-3xl border border-solid border-[rgba(255,255,255,0.10)] gap-6 select-none">

                    {/* LOGO ICON DIV */}
                    <div className="relative flex items-center justify-center mb-2">
                        {/* Animated Outer Orbit Ring */}
                        <div className="absolute w-[146px] h-[146px] rounded-full border-3  border-dashed border-[#4F6AF5]/30 animate-spin [animation-duration:10s]" />

                        {/* Core Logo Wrapper */}
                        <div className="w-[122px] h-[122px]  rounded-[36550328px]  opacity-[0.9929] [background:var(--gradient-1,linear-gradient(144deg,#0A206D_0%,#3B69D0_100%))] shadow-[0_0_29.957px_0_rgba(129,140,248,0.50),0_0_59.915px_0_rgba(192,132,252,0.20)] rounded-[33506686px] flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
                            <Ai2Icon />
                        </div>
                    </div>

                    {/* TYPOGRAPHY MATRIX */}
                    <div className="space-y-2 w-full text-center">
                        <h2 className="self-stretch text-[color:var(--Text-primary,#151513)] text-center [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-Subtittle_2,24px)] font-medium leading-[var(--Line-Height-Subtittle_2,32px)]  md:px-8 px-4">
                            I am working on generating your insights.
                        </h2>
                        <p className="text-[color:var(--Text-tertiary,#858585)] text-center [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body_3,16px)] font-normal leading-[var(--Line-Height-body_3,22px)]">
                            Our AI is crunching your data - this takes just a moment.....
                        </p>
                    </div>

                    {/* PROGRESS METRIC TRACK */}
                    <div className="w-full max-w-md flex flex-col gap-2 mt-2">
                        <div className="flex justify-between font-[Archivo] text-[13px] font-medium text-[#374151]">
                            <span>Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-[#E9EBF8] h-[6px] rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-150 ease-out"
                                style={{
                                    width: `${progress}%`,
                                    background: "linear-gradient(90deg, #4F6AF5, #2E3FAD)",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
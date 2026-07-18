"use client"

import React from "react";
import { motion } from "framer-motion";
import ThreeStarIcon from "../icons/ThreeStarIcon";
import TickIcon from "../icons/TickIcon";
import CustomButton from "../reusable/CustomButton";
import { useAuthModalStore } from "@/store/auth-modal.store";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {

    const { open } = useAuthModalStore();

    return (
        <section className="flex flex-col items-center justify-center px-4 md:pt-[86px] md:pb-20 py-6 text-center overflow-hidden ">
            <motion.div
                className="max-w-[800px] mx-auto flex flex-col items-center"
                initial="hidden"
                animate="visible"
                transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
            >

                {/* Top Pill Tag */}
                <motion.div
                    className="flex items-center gap-2 border border-white/40 bg-[#F4F8FF] px-4 py-1.5 rounded-full mb-4"
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease }}
                >
                    <ThreeStarIcon />
                    <span className="text-center text-[#151513] font-['Archivo'] text-sm leading-[22px] font-normal sm:text-italic sm:text-lg sm:leading-6 sm:font-medium">
                        Embracing AI at Work with actionable insights
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="self-stretch mx-auto w-full max-w-[335px] md:max-w-[677px] text-center text-[#151513] font-['Archivo'] text-3xl leading-[50px] font-semibold sm:text-[72px] sm:leading-[80px] mb-6"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease }}
                >
                    Your AI CFO for Financial Reporting.
                </motion.h1>

                {/* Subtext description */}
                <motion.p
                    className="w-full self-stretch max-w-[335px] md:max-w-[757px]  mx-auto text-center text-[#3D3D3C] font-['Archivo'] text-base leading-6 font-normal sm:text-xl sm:leading-[30px] sm:mb-[42px] mb-6"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease }}
                >
                    Upload Excel, PDF, or CSV reports and instantly receive executive
                    dashboards, anomaly detection, and actionable business insights
                </motion.p>

                {/* Call to Actions with background dashed connector */}
                <motion.div
                    className="relative w-full flex items-center justify-center mb-6 md:mb-[42px]"
                    variants={fadeUp}
                    transition={{ duration: 0.65, ease }}
                >
                    {/* Button Wrapper */}
                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* Primary Solid Button */}
                        {/* <button className="flex h-14 items-center justify-center px-8 rounded-xl [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white font-semibold text-lg shadow-[0_4px_14px_rgba(10,32,109,0.25)] hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap">
              Explore Our Platform
            </button> */}

                        <CustomButton onClick={() => open("sign-up")}>
                            Sign Up for free
                        </CustomButton>

                        {/* Secondary Outline Button with Fading Inner Accent Line */}
                        <CustomButton onClick={() => open("sign-in")} variant="outline">
                            Get Started
                        </CustomButton>

                    </div>
                </motion.div>

                {/* Value Proposition Checks */}
                <motion.div
                    className="flex flex-col sm:flex-row flex-wrap justify-center items-start md:items-center gap-y-10 md:gap-y-3 gap-x-8 md:gap-x-10"
                    variants={fadeUp}
                    transition={{ duration: 0.65, ease }}
                >

                    <motion.div
                        className="flex items-center gap-2.5"
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                        <div>
                            <TickIcon />
                        </div>
                        <span className="text-[#3D3D3C] font-['Archivo'] text-italic text-lg leading-6 font-medium sm:text-xl sm:leading-[26px]">
                            Explainable AI Insights
                        </span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-2.5"
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                        <div>
                            <TickIcon />
                        </div>
                        <span className="text-[#3D3D3C] font-['Archivo'] text-italic text-lg leading-6 font-medium sm:text-xl sm:leading-[26px]">
                            No Data Used to Train Models
                        </span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-2.5"
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                        <div>
                            <TickIcon />
                        </div>
                        <span className="text-[#3D3D3C] font-['Archivo'] text-italic text-lg leading-6 font-medium sm:text-xl sm:leading-[26px]">
                            Secure & Private
                        </span>
                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    );
}
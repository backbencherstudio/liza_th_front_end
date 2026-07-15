"use client";

import { motion } from "framer-motion";
import StarIcon from "../icons/StarIcon";
import LongArrowIcon from "../icons/LongArrowIcon";
import UploadIcon from "../icons/UploadIcon";
import AiIcon from "../icons/AiIcon";
import FindTrands from "../icons/FindTrandsIcon";
import TirIcon from "../icons/TirIcon";
import DatabaseIcon from "../icons/DatabaseIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
};

const steps = [
    {
        id: 1,
        icon: UploadIcon,
        bg: "#F3F2FB",
        title: "Upload Your Reports",
        description:
            "Upload your financial reports in PDF, Excel, CSV, or other supported formats.",
    },
    {
        id: 2,
        icon: DatabaseIcon,
        bg: "#EAF7F2",
        title: "AI Processes Your Data",
        description:
            "Our AI extracts, cleans, and organizes your financial data automatically.",
    },
    {
        id: 3,
        icon: AiIcon,
        bg: "#FFF7E6",
        title: "Review & Customize",
        description:
            "Review the generated dashboards and customize them to fit your needs.",
    },
    {
        id: 4,
        icon: FindTrands,
        bg: "#FDF2F8",
        title: "Generate Insights",
        description:
            "Receive AI-powered insights, trends, and recommendations instantly.",
    },
    {
        id: 5,
        icon: TirIcon,
        bg: "#F3F2FB",
        title: "Export & Share",
        description:
            "Export reports or share dashboards with your team in one click.",
    },
];

export default function HowItWork() {
    return (
        <section className="pb-8 md:py-15 lg:py-20">
            <div className="w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px]   justify-center mx-auto">
                {/* Header */}
                <motion.div
                    className="flex flex-col items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
                >
                    <motion.div
                        className="flex items-center gap-2.5"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease }}
                    >
                        <StarIcon />
                        <span className="text-lg font-medium text-[#151513]">
                            How It Works
                        </span>
                    </motion.div>

                    <motion.h2
                        className="py-4 text-[32px] text-center md:text-start md:text-4xl  font-semibold text-[#151513] lg:text-[48px]"
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease }}
                    >
                        From raw data to executive insights in minutes
                    </motion.h2>

                    <motion.p
                        className="text-base text-center md:text-start md:text-[20px] font-normal text-[#3D3D3C]"
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease }}
                    >
                        No setup headaches, no manual number-crunching - just five simple
                        steps.
                    </motion.p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    className="mt-14 space-y-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
                >
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                variants={fadeUp}
                                transition={{ duration: 0.6, ease }}
                                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                                className="items-start gap-6 rounded-2xl "
                            >
                                {/* Left Icon */}
                                <div className="flex items-center justify-between gap-3">
                                    <div
                                        style={{ backgroundColor: step.bg }}
                                        className="flex h-12 w-12 items-center justify-center rounded-md"
                                    >
                                        <Icon />
                                    </div>
                                    <LongArrowIcon className="hidden md:block" />
                                </div>

                                {/* Content */}
                                <div className="mt-5">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#151513]">
                                        {step.id}. {step.title}
                                    </h3>

                                    <p className="mt-3 text-[#3D3D3C] text-base ">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="flex justify-center items-center  md:hidden origin-center mt-9">
                                    <LongArrowIcon className="block rotate-90" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
import React from "react";
import StarIcon from "../icons/StarIcon";
import LongArrowIcon from "../icons/LongArrowIcon";
import UploadIcon from "../icons/UploadIcon";
import AiIcon from "../icons/AiIcon";
import FindTrands from "../icons/FindTrandsIcon";
import { Icon } from "lucide-react";
import TirIcon from "../icons/TirIcon";
import DatabaseIcon from "../icons/DatabaseIcon";

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
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2.5">
                        <StarIcon />
                        <span className="text-lg font-medium text-[#151513]">
                            How It Works
                        </span>
                    </div>

                    <h2 className="py-4 text-[32px] text-center md:text-start md:text-4xl  font-semibold text-[#151513] lg:text-[48px]">
                        From raw data to executive insights in minutes
                    </h2>

                    <p className="text-base text-center md:text-start md:text-[20px] font-normal text-[#3D3D3C]">
                        No setup headaches, no manual number-crunching — just five simple
                        steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-14 space-y-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.id}
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
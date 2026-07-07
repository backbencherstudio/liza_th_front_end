import React from "react";

const steps = [
    {
        id: 1,
        title: "Upload Your Reports",
        description:
            "Upload your financial reports in PDF, Excel, CSV, or other supported formats.",
    },
    {
        id: 2,
        title: "AI Processes Your Data",
        description:
            "Our AI extracts, cleans, and organizes your financial data automatically.",
    },
    {
        id: 3,
        title: "Review & Customize",
        description:
            "Review the generated dashboards and customize them to fit your needs.",
    },
    {
        id: 4,
        title: "Generate Insights",
        description:
            "Receive AI-powered insights, trends, and recommendations instantly.",
    },
    {
        id: 5,
        title: "Export & Share",
        description:
            "Export reports or share dashboards with your team in one click.",
    },
];

export default function HowItWork() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-2.5">
                        <img
                            src="/assets/about/about-icon.svg"
                            alt="How It Works"
                            className="h-12 w-12"
                        />
                        <span className="text-lg font-normal text-[#151513]">
                            How It Works
                        </span>
                    </div>

                    <h2 className="py-4 text-[32px] font-semibold text-[#151513] md:text-[48px]">
                        From raw data to executive insights in minutes
                    </h2>

                    <p className="text-[20px] font-normal text-[#3D3D3C]">
                        No setup headaches, no manual number-crunching — just five simple
                        steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-16 space-y-6 flex gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className=" items-start gap-6 rounded-2xl border border-[#E5E7EB] p-6"
                        >
                            {/* Left Icon */}
                            <div className="flex justify-between items-center gap-3">
                                <img
                                    src="/assets/how-it-work/icon.svg"
                                    alt=""
                                    className="h-10 w-10"
                                />

                                <img
                                    src="/assets/how-it-work/arrow-right.svg"
                                    alt=""
                                    className="h-5 w-5"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#151513]">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-[#3D3D3C]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
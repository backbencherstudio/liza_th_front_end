import React from 'react'
const features = [
    {
        icon: "/assets/about/icon-1.svg",
        title: "Save Time",
        description:
            "Reduce manual reporting effort by up to 80%",
        bg: "#EAF7F2"
    },
    {
        icon: "/assets/about/icon-2.svg",
        title: "Improve Visibility",
        description:
            "See revenue, profitability, cash flow, and KPIs in one place.",
        bg: "#F3F2FB"
    },
    {
        icon: "/assets/about/icon-3.svg",
        title: "Reduce Risk",
        description:
            "Detect unusual spending performance issues, and emerging concerns early.",
        bg: "#FDF2F8"
    },
    {
        icon: "/assets/about/icon-4.svg",
        title: "Make Better Decisions",
        description:
            "Receive Al-powered insights and recommendations instantly.",
        bg: "#FFF7E6"
    },
];

const aboutTags = [
    "Built for finance, not generic data",
    "AI insight you can verify",
    "Security-first by design",
    "Set up in minutes, not months.",
];
export default function AboutUs() {
    return (
        <div>

            <section className="py-25">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                        {features.map((item, index) => (
                            <div key={index} className="rounded-2xl bg-[#FFFFFF] p-4 shadow-sm">
                                <div style={{ backgroundColor: item.bg }} className="w-15 h-15 mb-5 rounded-lg border-none">
                                    <div
                                        // alt={item.title}
                                        style={{ backgroundImage: `url(${item.icon})` }}
                                        className={`w-14 h-14 mb-5 bg-cover bg-center bg-no-repeat`}
                                    />
                                </div>

                                <h3 className="text-[#151513]  font-medium text-[20px] mb-3">{item.title}</h3>

                                <p className="mt-3 text-[#3D3D3C] font-normal text-[16px]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="flex-1">
                        <div className='flex gap-2.5'>
                            <img
                                src="/assets/about/about-icon.svg"
                                alt="About Us"
                                className="w-12 h-12"
                            />

                            <span className="text-[#151513] font-normal text-lg">
                                About Us
                            </span>

                        </div>
                        <h2 className="text-[#151513] font-semibold text-[32px] md:text-[48px] py-4">
                            Spike delivers executive-level financial guidance
                        </h2>

                        <p className=" text-[#3D3D3C] font-normal text-[20px]">
                            We believe that financial intelligence should be accurate, understandable, and accessible to every business. Every business deserves access to CFO-level intelligence.
                        </p>

                        <div className="mt-10.5 space-y-4">
                            {aboutTags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img
                                        src="/assets/about/check.svg"
                                        alt="check"
                                        className="w-5 h-5"
                                    />
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

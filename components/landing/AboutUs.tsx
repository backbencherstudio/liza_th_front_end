import React from 'react'
import AlermIcon from '../icons/AlermIcon';
import ImporveIcon from '../icons/ImporveIcon';
import ReduceIcon from '../icons/ReduceIcon';
import BetterIcon from '../icons/BetterIcon';
import StarIcon from '../icons/StarIcon';
import CurrectIcon from '../icons/CurrectIcon';
const features = [
    {
        icon: AlermIcon,
        title: "Save Time",
        description:
            "Reduce manual reporting effort by up to 80%",
        bg: "#EAF7F2"
    },
    {
        icon: ImporveIcon,
        title: "Improve Visibility",
        description:
            "See revenue, profitability, cash flow, and KPIs in one place.",
        bg: "#F3F2FB"
    },
    {
        icon: ReduceIcon,
        title: "Reduce Risk",
        description:
            "Detect unusual spending performance issues, and emerging concerns early.",
        bg: "#FDF2F8"
    },
    {
        icon: BetterIcon,
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

            <section className="pb-8 md:py-25">
                <div className="  w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto justify-center flex flex-col lg:flex-row items-start gap-8 md:gap-16">
                    {/* Left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 order-2 md:order-1">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl p-4 shadow-sm bg-white  "
                                >
                                    <div
                                        style={{ backgroundColor: item.bg }}
                                        className="mb-5 flex h-15 w-15 items-center justify-center rounded-lg"
                                    >
                                        <Icon />
                                    </div>

                                    <h3 className="mb-3 text-[20px] font-medium text-[#151513]">
                                        {item.title}
                                    </h3>

                                    <p className="text-[16px] font-normal text-[#3D3D3C]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right */}
                    <div className="flex-1 order-1 md:order-2">
                        <div className='flex gap-2.5 pt-0 '>
                            <StarIcon />

                            <span className="text-[#151513] font-medium text-lg">
                                About Us
                            </span>

                        </div>
                        <h2 className="text-[#151513] font-semibold text-[32px] md:text-4xl lg:text-4xl xl:text-[48px] py-3 md:py-4">
                            Spike delivers executive-level financial guidance
                        </h2>

                        <p className=" text-[#3D3D3C] font-normal text-base md:text-lg lg:text-[20px]">
                            We believe that financial intelligence should be accurate, understandable, and accessible to every business. Every business deserves access to CFO-level intelligence.
                        </p>

                        <div className="mt-5 md:mt-10.5 space-y-4">
                            {aboutTags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CurrectIcon />
                                    <span className="text-[#151513] font-medium text-[20px]">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function WorksWithTools() {
    return (
        <div
            className=""
            style={{
                background:
                    "linear-gradient(180deg, rgba(37,99,235,0.05) 0%, rgba(37,99,235,0) 100%)",
            }}
        >
            <div className="pt-12 px-4 max-w-[1600px] mx-auto">
                <h3 className="text-[#151513] font-semibold text-center text-[26px] md:text-3xl lg:text-[36px]">
                    Works with the tools you already use
                </h3>

                <p className="text-[#3D3D3C] font-normal text-center text-[16px] md:text-[20px] pt-4">
                    No integrations required. Simply export and upload.
                </p>
            </div>

            {/* Marquee with fade effects */}
            <div className="relative mt-8">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 h-full w-20 md:w-32 lg:w-58 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, white 0%, transparent 100%)",
                    }}
                />

                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 h-full w-20 md:w-32 lg:w-58 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to left, white 0%, transparent 100%)",
                    }}
                />

                <Marquee speed={50} autoFill>
                    <div className="flex items-center gap-[66px] mx-4">
                        <Image src="/assets/worksWithTools/quickbook.png" alt="QuickBook" width={200} height={54} className="object-contain" />
                        <Image src="/assets/worksWithTools/sage.png" alt="Sage" width={100} height={44} className="object-contain" />
                        <Image src="/assets/worksWithTools/zero.png" alt="Zero" width={100} height={44} className="object-contain" />

                        <div className="flex items-center gap-[11px]">
                            <Image src="/assets/worksWithTools/excell.png" alt="Excel" width={45} height={45} className="object-contain" />
                            <Image src="/assets/worksWithTools/Excel.png" alt="Excel" width={77} height={44} className="object-contain" />
                        </div>

                        <div className="flex items-center gap-[11px]">
                            <Image src="/assets/worksWithTools/csvdoc.png" alt="CSV" width={51} height={42} className="object-contain" />
                            <Image src="/assets/worksWithTools/CSV.png" alt="CSV" width={63} height={44} className="object-contain" />
                        </div>

                        <div className="flex items-center gap-[11px]">
                            <Image src="/assets/worksWithTools/pdfdoc.png" alt="PDF" width={43} height={46} className="object-contain" />
                            <Image src="/assets/worksWithTools/PDF.png" alt="PDF" width={57} height={43} className="object-contain" />
                        </div>

                        <Image src="/assets/worksWithTools/netsute.png" alt="NetSuite" width={100} height={93} className="h-10 w-auto object-contain" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
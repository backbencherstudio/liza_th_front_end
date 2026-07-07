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
            <div className="py-12">
                <h3 className="text-[#151513] font-semibold text-center text-[40px]">
                    Works with the tools you already use
                </h3>

                <p className="text-[#3D3D3C] font-normal text-center text-[20px] pt-4">
                    No integrations required. Simply export and upload.
                </p>
            </div>

            <Marquee speed={50}>
                <div className="flex items-center gap-[66px]">
                    <Image src="/assets/worksWithTools/quickbook.png" alt="" width={100} height={100} />
                    <Image src="/assets/worksWithTools/sage.png" alt="" width={100} height={100} />
                    <Image src="/assets/worksWithTools/zero.png" alt="" width={100} height={100} />

                    <div className="flex items-center gap-[11px]">
                        <Image src="/assets/worksWithTools/excell.png" alt="" width={100} height={100} />
                        <Image src="/assets/worksWithTools/Excel.png" alt="" width={100} height={100} />
                    </div>

                    <div className="flex items-center gap-[11px]">
                        <Image src="/assets/worksWithTools/csvdoc.png" alt="" width={100} height={100} />
                        <Image src="/assets/worksWithTools/CSV.png" alt="" width={100} height={100} />
                    </div>

                    <div className="flex items-center gap-[11px]">
                        <Image src="/assets/worksWithTools/pdfdoc.png" alt="" width={100} height={100} />
                        <Image src="/assets/worksWithTools/PDF.png" alt="" width={100} height={100} />
                    </div>

                    <Image src="/assets/worksWithTools/netsute.png" alt="" width={100} height={100} />
                </div>
            </Marquee>
        </div>
    );
}
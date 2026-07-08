import React from 'react'
import CustomButton from '../reusable/CustomButton'

export default function ReadYourData() {
    return (
        <div className='max-w-[1320px] px-4 mx-auto'>
            <div className='py-8 md:py-20' style={{
                background: "url(/assets/worksWithTools/readyBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "24px"
            }}>

                <div className='max-w-[934px] mx-auto text-center px-4'>
                    <h2 className="text-[#151513] font-semibold text-[26px] md:text-4xl lg:text-[48px]">
                        Ready to Let Your Data Do the Talking?
                    </h2>
                    <p className="text-[#3D3D3C] font-normal text-base md:text-lg lg:text-[20px] pt-4 max-w-[794px] mx-auto">
                        Join the businesses already turning raw financial data into clear, confident decisions. Get started in minutes, not months.
                    </p>
                </div>
                <div className='flex justify-center gap-4 mt-10 px-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <CustomButton
                            variant="primary"
                            className="border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-md"
                        >Explore Our Platform</CustomButton>
                        <CustomButton
                            variant="outline"
                            className=" px-6 py-3 rounded-md text-[#2B50AF]"
                        >Get Started</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

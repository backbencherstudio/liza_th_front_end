"use client"
import React from 'react'
import CustomButton from '../reusable/CustomButton';


export default function ReadYourData() {
    return (
        <div className='max-w-[1320px] mx-auto px-5 md:px-0'>
            <div className=' py-8 lg:py-20 ' style={{
                background: "url(/assets/worksWithTools/readyBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "24px"
            }}>

                <div className='max-w-[934px] mx-auto text-center'>
                    <h2 className="self-stretch text-center font-['Archivo'] text-5xl font-semibold leading-[56px] text-[#151513]">
                        Ready to Let Your Data Do the Talking?
                    </h2>

                    <p className="mx-auto max-w-[794px] text-center font-['Archivo'] text-xl font-normal leading-7 text-[#151513] mt-4">
                        Join the businesses already turning raw financial data into clear, confident decisions. Get started in minutes, not months.
                    </p>
                </div>
                <div className='flex justify-center gap-4 mt-10'>
                    <CustomButton variant="primary">Explore Our Platform</CustomButton>
                    <CustomButton onClick={() => open("sign-in")} variant="outline">Get Started</CustomButton>
                </div>
            </div>
        </div>
    )
}

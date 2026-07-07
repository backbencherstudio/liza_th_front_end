import React from 'react'

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

                <div className='max-w-[800px] mx-auto text-center'>
                    <h2 className="text-[#151513] font-semibold text-[40px] text-3xl md:text-4xl">
                        Ready to Let Your Data Do the Talking?
                    </h2>
                    <p className="text-[#3D3D3C] font-normal text-[20px] pt-4">
                        Join the businesses already turning raw financial data into clear, confident decisions. Get started in minutes, not months.
                    </p>
                </div>
                <div className='flex justify-center gap-4 mt-10'>
                    <button className='border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-md'>Explore Our Platform</button>
                    <button className="bg-[#2563EB] text-white px-6 py-3 rounded-md">Get Started</button>
                </div>
            </div>
        </div>
    )
}

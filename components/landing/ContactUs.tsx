import React from 'react'
import StarIcon from '../icons/StarIcon'
import CustomButton from '../reusable/CustomButton'
import { MailIcon } from 'lucide-react'
import MailIcons from '../icons/MailIcon'
import LocationIcon from '../icons/LocationIcon'

export default function ContactUs() {
    return (
        <div className='py-8 md:py-15 lg:py-20 max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto'>
            <div className='w-full  justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-13.5 px-0 md:px-0  lg:px-12 '>
                <div    >
                    <div className='flex items-center gap-2'>
                        <StarIcon />
                        <span className="text-[#151513]  text-[18px] font-medium leading-6">
                            Contact Us
                        </span>
                    </div>
                    <h2 className="text-[#151513] font-semibold text-[32px] md:text-4xl lg:text-[48px] py-3 md:py-4">
                        Get in Touch with Us
                    </h2>
                    <p className="text-[#3D3D3C] font-normal text-base md:text-lg lg:text-[20px] pb-8">
                        Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!
                    </p>

                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2 border border-[#E6E9EE]  p-3 rounded-md'>
                            <div className='bg-[#F6F7F9] border p-3 rounded-md'><MailIcons /></div>
                            <div>
                                <h3 className='text-[#858585] font-normal text-base pb-2'>You can email us here</h3>
                                <p className='text-[#151513] font-medium text-[18px]'>info@spiketechnology.ai</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 border p-3 border-[#E6E9EE] rounded-md  '>
                            <div className='bg-[#F6F7F9] border p-3 rounded-md'><LocationIcon /></div>
                            <div>
                                <h3 className='text-[#858585] font-medium text-[16px] pb-2'>Locations</h3>
                                <p className='text-[#151513] font-medium text-[18px]'>New Jersey, USA</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full border rounded-xl  border-[#E6E9EE] p-3 md:p-7 lg:p-10'>
                    <form action="">

                        <p className='text-[#151513] font-medium text-2xl pb-4  leading-[26px]'>Send Us a Message</p>
                        <p className='text-[#3D3D3C] font-normal text-base md:text-lg lg:text-[20px] pb-7'>Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.</p>

                        <div className='flex flex-col md:flex-row justify-between gap-4'>
                            <input className='border border-[#E6E9EE] h-12 p-[15px] bg-[#F6F7F9]  rounded-md w-full' placeholder='Name' />
                            <input className='border border-[#E6E9EE] h-12 p-[15px]  bg-[#F6F7F9] rounded-md w-full' placeholder='Email' />
                        </div>
                        <div className=' pt-4'>
                            <textarea name="" id="" placeholder='Message' className='border border-[#E6E9EE] bg-[#F6F7F9] p-[15px] rounded-md w-full h-[130px]'></textarea>
                        </div>

                        <CustomButton
                            variant="primary"
                            className='w-full mt-8'
                        >
                            Submit
                        </CustomButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

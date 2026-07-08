import React from 'react'
import StarIcon from '../icons/StarIcon'
import CustomButton from '../reusable/CustomButton'
import { MailIcon } from 'lucide-react'
import MailIcons from '../icons/MailIcon'
import LocationIcon from '../icons/LocationIcon'

export default function ContactUs() {
    return (
        <div className='py-8 md:py-15 lg:py-20'>
            <div className='w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto justify-center grid grid-cols-1 md:grid-cols-2 gap-13.5'>
                <div>
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
                        <div className='flex items-center gap-2 border border-[#E6E9EE]  p-3.5 rounded-md'>
                            <div className='bg-[#F6F7F9] border p-3 rounded-md'><MailIcons /></div>
                            <div>
                                <h3 className='text-[#858585] font-normal text-base pb-2'>You can email us here</h3>
                                <p className='text-[#151513] font-medium text-[18px]'>info@spiketechnology.ai</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 border p-3.5 border-[#E6E9EE] rounded-md  '>
                            <div className='bg-[#F6F7F9] border p-3 rounded-md'><LocationIcon /></div>
                            <div>
                                <h3 className='text-[#858585] font-medium text-[16px] pb-2'>Locations</h3>
                                <p className='text-[#151513] font-medium text-[18px]'>New Jersey, USA</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <form action="">

                        <CustomButton
                            variant="primary"
                        >
                            Send Message
                        </CustomButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

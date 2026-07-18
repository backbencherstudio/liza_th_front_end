"use client"

import { motion } from "framer-motion"
import CustomButton from '../reusable/CustomButton'

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export default function ReadYourData() {
    return (
        <div className='max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto'>
            <motion.div
                className='py-8 md:py-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
                style={{
                    background: "url(/assets/worksWithTools/readyBg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "24px"
                }}
            >

                <div className='max-w-[934px] mx-auto text-center px-4'>
                    <motion.h2
                        className="text-[#151513] font-semibold text-[26px] md:text-4xl lg:text-[48px]"
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease }}
                    >
                        Ready to Let Your Data Do the Talking?
                    </motion.h2>
                    <motion.p
                        className="text-[#3D3D3C] font-normal text-base md:text-lg lg:text-[20px] pt-4 max-w-[794px] mx-auto"
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease }}
                    >
                        Join the businesses already turning raw financial data into clear, confident decisions. Get started in minutes, not months.
                    </motion.p>
                </div>
                <motion.div
                    className='flex justify-center gap-4 mt-10 px-4'
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease }}
                >
                    <div className='flex flex-col md:flex-row gap-4'>
                        <CustomButton
                            variant="primary"
                            className="border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-md"
                        >Explore Our Platform</CustomButton>
                        <CustomButton
                            variant="outline"
                            className=" px-6 py-3 rounded-md  text-[#2B50AF] "
                        >Get Started</CustomButton>
                    </div>
                </motion.div>
            </motion.div>


        </div>
    )
}

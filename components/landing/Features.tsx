"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StarIcon from "../icons/StarIcon";
import SettinCorectIcon from "../icons/SettingCorectIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -44 },
    visible: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden: { opacity: 0, x: 44 },
    visible: { opacity: 1, x: 0 },
};

export default function Features() {
    return (
        <div className=" bg-[linear-gradient(180deg,rgba(14,105,249,0.05)_0%,rgba(0,147,255,0)_100%)]" id="features">
            <section className="py-8 md:py-15 lg:py-25">
                <div className="w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto justify-center ">
                    {/* Top */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease }}
                    >
                        <StarIcon />
                        <span className="text-[#151513]  text-[18px] font-medium leading-6">
                            Features
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        className="mt-4 flex flex-col gap-6 pb-8 md:pb-14 lg:flex-row lg:items-center lg:justify-between "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ delayChildren: 0.15, staggerChildren: 0.12 }}
                    >
                        <motion.h2
                            variants={fadeLeft}
                            transition={{ duration: 0.7, ease }}
                            className="max-w-[650px] text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-semibold leading-tight text-[#151513] md:text-5xl"
                        >
                            Everything You Need, Built Into One Workflow
                        </motion.h2>

                        <motion.p
                            variants={fadeRight}
                            transition={{ duration: 0.7, ease }}
                            className="max-w-[500px] text-xl leading-8 text-[#3D3D3C]"
                        >
                            Spike transforms complex financial reports into clear dashboards and
                            AI-powered insights your team can act on.
                        </motion.p>
                    </motion.div>

                    {/* Card */}


                    <motion.div
                        className="py-5 md:py-0 px-0 md:px-6 flex flex-col-reverse items-center gap-8 md:gap-16 rounded-[32px]   lg:flex-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delayChildren: 0.2, staggerChildren: 0.14 }}
                    >

                        <motion.div
                            className=" flex-1 order-2 md:order-1"
                            variants={fadeLeft}
                            transition={{ duration: 0.7, ease }}
                        >
                            <h3 className=" text-2xl md:text-[32px] font-semibold leading-[44px] text-[#151513]">
                                AI-Powered Operational Dashboards
                                <span className="text-[#2563EB]">
                                    {" "} <br />
                                    Built for Your Business.
                                </span>
                            </h3>

                            <p className="mt-4 md:mt-6 text-lg leading-8 text-[#3D3D3C]">
                                Stop wasting time on manual reporting. Our AI analyzes your data
                                and creates custom dashboards tailored to your business needs - no
                                coding or data expertise required.
                            </p>

                            <motion.div
                                className="mt-8  md:space-x-5 space-y-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.45 }}
                                transition={{ delayChildren: 0.25, staggerChildren: 0.08 }}
                            >
                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>Choose from pre-built Executive, Financial, or Operational dashboards.</p>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>Each template maps your uploaded data to charts and metrics.</p>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>
                                        Customize any template by adding, removing, or reordering
                                        sections.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex flex-1 justify-center w-full order-1 md:order-2"
                            variants={fadeRight}
                            transition={{ duration: 0.75, ease }}
                        >
                            <Image
                                src="/assets/worksWithTools/Frame 2147226707.png"
                                alt="Dashboard"
                                width={650}
                                height={500}
                                className="h-auto w-full max-w-[650px] "
                            />
                        </motion.div>


                    </motion.div>



                    <motion.div
                        className="pt-6  flex flex-col-reverse items-center gap-8 md:gap-16 rounded-[32px] lg:flex-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delayChildren: 0.2, staggerChildren: 0.14 }}
                    >
                        {/* Left */}

                        <motion.div
                            className="flex-1 w-full"
                            variants={fadeLeft}
                            transition={{ duration: 0.75, ease }}
                        >
                            <Image
                                src="/assets/worksWithTools/Frame 2147226709.png"
                                alt=""
                                width={1200}
                                height={800}
                                className="w-full h-auto "
                            />
                        </motion.div>

                        <motion.div
                            className=" flex-1 w-full"
                            variants={fadeRight}
                            transition={{ duration: 0.7, ease }}
                        >
                            <h3 className=" text-2xl md:text-[32px] font-semibold leading-[44px] text-[#151513]">
                                More than charts.
                                <span className="text-[#2563EB]" > <br className="block md:hidden" />
                                    {" "}
                                    Understand why performance changed.
                                </span>
                            </h3>

                            <p className="mt-3 md:mt-6 text-lg leading-8 text-[#3D3D3C]">
                                Get actionable insights, not overwhelming charts. Our platform identifies trends, highlights risks, and suggests next steps - so you can make confident decisions faster.
                            </p>

                            <motion.div
                                className="mt-8 space-y-3  md:space-y-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.45 }}
                                transition={{ delayChildren: 0.25, staggerChildren: 0.08 }}
                            >
                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>Every dashboard comes with an AI-written executive summary.</p>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>Insights and raw data are always shown separately,exactly what's calculated and what's AI-interpreted.</p>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-3"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    <SettinCorectIcon className="shrink-0" />
                                    <p>
                                        Regenerate or refine any insight in one click when new data comes in.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ComponentType, useEffect, useState } from 'react';
import LocationIcon from '../icons/LocationIcon';
import MailIcon from '../icons/MailIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkDinIcon from '../icons/LinkDinIcon';
import { usePathname, useRouter } from 'next/navigation';

interface SocialLink {
    icon: ComponentType<any>;
    url: string;
}

interface FooterData {
    logoUrl: string;
    quickLinks: { name: string; url: string }[];
    companyLinks: { name: string; url: string }[];
    location: string;
    email: string;
    socialMedia: SocialLink[];
}

export default function Footer() {


    const router = useRouter();
    const pathname = usePathname();

    const handleLogoClick = () => {
        if (pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            router.push("/");
        }
    };
    const [footerData, setFooterData] = useState<FooterData>({
        logoUrl: "/images/spike-logo.png",
        quickLinks: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/#about" },
            { name: "Features", url: "/#features" },
            { name: "Pricing", url: "/pricing" },
        ],
        companyLinks: [
            { name: "Terms of Service", url: "/tearms-condition" },
            { name: "Privacy Policy", url: "/privecy-policy" },
        ],
        location: "New Jersey, USA",
        email: "info@spiketechnology.ai",
        socialMedia: [
            { icon: InstagramIcon, url: "#" },
            { icon: LinkDinIcon, url: "#" },

        ],
    });


    return (
        <footer className="bg-[#F9FAFF] text-gray-300 mt-10 md:mt-20 ">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-[140px]  py-8 md:pt-20 md:pb-12.5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 w-full">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <div
                            onClick={handleLogoClick}
                            className="flex items-center gap-3 mb-4 cursor-pointer"
                        >
                            <Image
                                src={footerData.logoUrl}
                                alt="Spike Technology"
                                width={180}
                                height={50}
                                className="h-[87px] w-[87px]"
                            />
                        </div>

                        <p className="mt-3 text-[#151513] leading-relaxed text-xl max-w-[372px]  min-w-[335px] lg:min-w-[0px]">
                            Turn raw data into actionable insights.<br />
                            AI-powered financial reporting for businesses that run on numbers.
                        </p>

                        <div className="pt-5">
                            <div className="flex gap-4">
                                {footerData.socialMedia.map((social, index) => {
                                    const Icon = social.icon;

                                    return (
                                        <Link
                                            key={index}
                                            href={social.url}
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] border border-white"
                                        >
                                            <Icon className="h-5 w-5 text-white" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-4 md:mb-7">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerData.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-[#4A4C56]  text-xl  ">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-4 md:mb-7">Company</h3>
                        <ul className="space-y-3">
                            {footerData.companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-[#4A4C56]  text-xl  ">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-4 md:mb-7">Contact Us</h3>
                        <div className="space-y-4 text-gray-400">
                            <p className="flex items-center gap-2">
                                <span className="text-xl text-[#4A4C56]  "><LocationIcon className="h-4.5 w-4.5" /></span> <span className="text-[#4A4C56]  text-xl  ">{footerData.location}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-xl text-[#4A4C56]  "><MailIcon className="h-4.5 w-4.5" /></span>
                                <Link href={`mailto:${footerData.email}`} className="text-[#4A4C56]  text-xl  ">
                                    {footerData.email}
                                </Link>
                            </p>
                        </div>

                        {/* Social Media */}

                    </div>
                </div>

                {/* Bottom Bar */}

            </div>
            <div className="bg-[#041D53]  w-full border-gray-800 py-1.5 text-center text-sm text-[#E9E9EA]">
                <p className='flex justify-center items-center my-auto font-normal text-base'>
                    © 2026 Spike Technology. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
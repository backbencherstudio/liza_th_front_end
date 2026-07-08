'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LocationIcon from '../icons/LocationIcon';
import MailIcon from '../icons/MailIcon';

interface SocialLink {
    icon: string;
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
    const [footerData, setFooterData] = useState<FooterData>({
        logoUrl: "/images/spike-logo.png",
        quickLinks: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
            { name: "Features", url: "/features" },
            { name: "Pricing", url: "/pricing" },
        ],
        companyLinks: [
            { name: "Terms of Service", url: "/terms" },
            { name: "Privacy Policy", url: "/privacy" },
        ],
        location: "New Jersey, USA",
        email: "info@spiketechnology.ai",
        socialMedia: [
            { icon: "facebook", url: "#" },
            { icon: "twitter", url: "#" },
            { icon: "linkedin", url: "#" },
            { icon: "instagram", url: "#" },
        ],
    });


    return (
        <footer className="bg-[#F9FAFF] text-gray-300">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-[140px] py-16">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                id="footer-logo"
                                src={footerData.logoUrl}
                                alt="Spike Technology"
                                width={180}
                                height={50}
                                className="h-11 w-auto"
                            />
                        </div>

                        <p className="mt-3 text-[#151513] leading-relaxed text-xl">
                            Turn raw data into actionable insights.<br />
                            AI-powered financial reporting for businesses that run on numbers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-7">Quick Links</h3>
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
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-7">Company</h3>
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
                    <div className="lg:col-span-4">
                        <h3 className="text-[#0F172A] font-medium  text-2xl mb-7">Contact Us</h3>
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
                        <div className="mt-8">
                            <h4 className="text-white font-medium mb-3">Follow Us</h4>
                            <div className="flex gap-5 text-2xl">
                                {footerData.socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {social.icon === 'facebook' && <i className="fab fa-facebook-f"></i>}
                                        {social.icon === 'twitter' && <i className="fab fa-twitter"></i>}
                                        {social.icon === 'linkedin' && <i className="fab fa-linkedin-in"></i>}
                                        {social.icon === 'instagram' && <i className="fab fa-instagram"></i>}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
                    © 2026 Spike Technology. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const WEBSITE_CONTENT_BASE = "/super-admin/content-management/website-content";
const HOMEPAGE_HERO_PATH = `${WEBSITE_CONTENT_BASE}/homepage/hero`;
const LEGAL_PATH = `${WEBSITE_CONTENT_BASE}/legal-and-online`;
const PRIVACY_PATH = `${WEBSITE_CONTENT_BASE}/privacy-policy`;

const menuCardClass =
  "overflow-hidden rounded-[10px] border border-solid border-[#EDEFE4]";

const homepageSections = [
  { label: "Hero Section", path: HOMEPAGE_HERO_PATH },
  { label: "Brand Section", path: `${WEBSITE_CONTENT_BASE}/homepage/brand` },
  { label: "About Us Section", path: `${WEBSITE_CONTENT_BASE}/homepage/about` },
  { label: "Features Section", path: `${WEBSITE_CONTENT_BASE}/homepage/features` },
  { label: "How It Works Section", path: `${WEBSITE_CONTENT_BASE}/homepage/how-it-works` },
  { label: "Contact Us Section", path: `${WEBSITE_CONTENT_BASE}/homepage/contact` },
  { label: "CTA Section", path: `${WEBSITE_CONTENT_BASE}/homepage/cta` },
  { label: "Footer Section", path: `${WEBSITE_CONTENT_BASE}/homepage/footer` },
];

export default function WebsiteContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const isOnHomepage = pathname.includes("/website-content/homepage");
  const isOnLegal = pathname.startsWith(LEGAL_PATH);
  const isOnPrivacy = pathname.startsWith(PRIVACY_PATH);

  const [isHomepageOpen, setIsHomepageOpen] = useState(isOnHomepage);

  useEffect(() => {
    setIsHomepageOpen(isOnHomepage);
  }, [isOnHomepage]);

  const handleHomepageToggle = () => {
    if (isHomepageOpen) {
      setIsHomepageOpen(false);
      return;
    }

    setIsHomepageOpen(true);
    if (!isOnHomepage) {
      router.push(HOMEPAGE_HERO_PATH);
    }
  };

  const isSectionActive = (path: string) => pathname === path;

  const topLinkClass = (active: boolean) =>
    `flex w-full items-center justify-between px-4 py-3 font-[Archivo] text-sm font-medium transition-colors ${active ? "bg-[#EBF3FF] text-[#2563EB]" : "bg-white text-[#070707]"
    }`;

  return (
    <div className="mt-6 w-full  space-y-6">
      <div className="flex w-full flex-col gap-6 rounded-3xl border border-[#EDEDED] bg-white p-4 shadow-sm md:p-6">
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
          <aside className="flex w-full shrink-0 flex-col gap-3 lg:w-64">

            {/* Homepage Accordion Container */}
            <div className={menuCardClass}>
              <button
                type="button"
                onClick={handleHomepageToggle}
                className={topLinkClass(isOnHomepage)}
              >
                <span>Homepage</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isHomepageOpen ? "rotate-180" : ""
                    } ${isOnHomepage ? "text-[#2563EB]" : "text-[#777980]"}`}
                />
              </button>

              {isHomepageOpen && (
                <div className="relative border-t border-[#EDEFE4] bg-white py-3 pl-6 pr-2 flex flex-col gap-1">

                  {/* LEFT VERTICAL ACCENT CONNECTOR LINE */}
                  <div className="absolute left-[22px] top-3 bottom-3 w-px bg-[#BBCFF9]" />

                  {homepageSections.map((section) => {
                    const active = isSectionActive(section.path);

                    return (
                      <Link
                        key={section.path}
                        href={section.path}
                        className={`w-full rounded-lg px-4 py-1.5 text-sm transition-colors font-[Archivo] ${active
                          ? "bg-transparent font-medium text-[#070707]"
                          : "text-[#8A8D99] hover:text-[#070707]"
                          }`}
                      >
                        {section.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Legal page Accordion Row */}
            <div className={menuCardClass}>
              <Link href={LEGAL_PATH} className={topLinkClass(isOnLegal)}>
                <span className="text-left leading-tight">
                  Legal and Online Safety Page
                </span>

              </Link>
            </div>

            {/* Privacy Policy Accordion Row */}
            <div className={menuCardClass}>
              <Link href={PRIVACY_PATH} className={topLinkClass(isOnPrivacy)}>
                <span>Privacy Policy</span>

              </Link>
            </div>
          </aside>

          <main className="w-full flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
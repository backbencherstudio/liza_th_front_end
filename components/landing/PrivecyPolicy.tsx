// app/page.tsx
export default function PrivecyPolicy() {
    return (
        <div className="pt-10 md:pt-20 w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto justify-center">
            <main className="min-h-screen flex justify-center border rounded-lg">
                <div className=" rounded-[32px] p-3 md:p-8 md:p-12">

                    {/* Main Title */}
                    <h1 className="text-[#151513] font-archivo text-[32px] md:text-4xl lg:text-[48px] font-semibold leading-[56px] tracking-[-0.01em] mb-3">
                        Privacy Policy – Spike Technology, LLC
                    </h1>

                    {/* Last Update */}
                    <div className="text-[#3D3D3C] font-archivo text-[18px] font-normal leading-6 mb-5">
                        Last Updated: February 11, 2020
                    </div>

                    {/* Description */}
                    <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                        At Spike Technology, we value the trust that our customers place in us to use and protect personal information. This Privacy Policy explains how Spike Technology, LLC (“Spike”, “Spike Dashboard”, “our”, “us”, or “we”) collects, uses, and protects your information. When you use Spike Technology or provide personal information, you accept the privacy practices described in this Privacy Notice. Please read this Privacy Notice in full to understand our privacy practices before you use Spike Technology.
                    </p>

                    {/* 1. Information We Collect */}
                    <Section title="1. Information We Collect">
                        <h3 className="text-[#151513] font-archivo text-[22px] font-medium leading-[34px] mt-1 mb-3">
                            Information You Provide
                        </h3>

                        <BulletList items={[
                            "Name, email, company name, telephone number",
                            "Facility Type",
                            "Business Type",
                            "IP Address",
                            "Device and browser information",
                            "Usage data and interaction logs",
                            "Sensitive personal information such as credit card (Used for processing payment, not stored)",
                            "Marketing preference such as text message or email notification and frequency",
                            "Information you provide directly to us:"
                        ]} />

                        <div className="pl-5 mt-1 mb-3">
                            <div className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#3D3D3C]">
                                When you use the site,
                            </div>
                            <div className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#3D3D3C]">
                                When you use offline features related to the site, such as communicating with us by phone, e-mail, or in person.
                            </div>
                            <div className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#3D3D3C]">
                                When you interact with us in the ordinary course of business.
                            </div>
                        </div>

                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            We may receive information about you from a data bank or aggregator, business partners, or other businesses and combine it with information we already have about you. Personal information may be combined with information that does not identify you. If we combine information that does not identify you with your personal information, it will be treated as personal information.
                        </p>
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            You can limit the information we have by choosing not to provide it within the form or by failing to provide information through our application.
                        </p>
                    </Section>

                    {/* 2. Tracking Technologies We Use */}
                    <Section title="2. Tracking Technologies We Use">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We use various technologies to collect personal information including:
                        </p>

                        <h4 className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-4 mb-2">
                            Web server logs
                        </h4>
                        <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] pl-5 mb-3">
                            As is true of most websites and applications, we gather certain information automatically and store it in log files. This information may include IP addresses, browser type, internet service provider, referring/exit pages, operating system, date/time stamp and/or clickstream data.
                        </p>

                        <h4 className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-4 mb-2">
                            Cookies
                        </h4>
                        <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] pl-5 mb-3">
                            We and our subsidiaries, business partners, marketing partners, affiliates, or other vendors may use cookies. Cookies uniquely identify the device or user account you use for this site. You can control the use of cookies by adjusting your browser preferences at any time. If you reject cookies, you may still use our site; however, rejecting cookies may limit your ability to use some features.
                        </p>

                        <h4 className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-4 mb-2">
                            Geo-location Services
                        </h4>
                        <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] pl-5 mb-3">
                            When you allow us to track your location, we may collect information about your location related to our site. We use various technologies to determine location, such as sensor data from your device that may provide information from nearby Wi-Fi access points and cell towers.
                        </p>

                        <h4 className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-4 mb-2">
                            Other Tracking Technologies
                        </h4>
                        <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] pl-5">
                            We and our subsidiaries, business partners, marketing partners, affiliates, or other service providers may also use local storage (such as HTML5) to collect and store your information and preferences.
                        </p>
                    </Section>

                    {/* 3. How We Use Information */}
                    <Section title="3. How We Use Information">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We use information to:
                        </p>
                        <BulletList items={[
                            "Provide and operate the Services",
                            "Generate dashboards and analytics",
                            "Improve performance, security, and usability",
                            "Communicate with users about updates and support",
                            "Advertising services",
                            "Customer and troubleshooting support",
                            "Error detection and debugging",
                            "Authenticating you for access to your account",
                            "Processing your subscription",
                            "Fraud detection and monitoring services",
                            "Marketing notices, newsletter, or communications via email.",
                            "Part of a Corporate Transaction, such as in connection with the sale of part or all our assets or business, the acquisition of part or all of another business or another corporate transaction, including bankruptcy."
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3 font-semibold">
                            We do not sell personal data.
                        </p>
                    </Section>

                    {/* 4. AI & Data Processing */}
                    <Section title="4. AI & Data Processing">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            Uploaded data may be processed by automated systems to generate insights and analytics.
                        </p>
                        <BulletList items={[
                            "Data is used only for its intended analytical purpose",
                            "AI models do not make autonomous decisions on your behalf",
                            "Insights depend on data quality and completeness"
                        ]} />
                    </Section>

                    {/* 5. Data Sharing */}
                    <Section title="5. Data Sharing">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We may need to share information with other companies, organizations or individuals if we have a good faith belief that access, use, preservation, or disclosure of that information is reasonably necessary to:
                        </p>
                        <BulletList items={[
                            "Trusted service providers (hosting, analytics, security)",
                            "Enforce applicable Terms of Service, including investigation of potential violations",
                            "Detect, prevent, or otherwise address fraud, security or technical issues",
                            "Protect against harm to the rights, property or safety of our users",
                            "Engage in a merger, acquisition, reorganization, or sale of all or a portion of Spike Technology assets"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            All vendors are required to maintain appropriate data protection standards.
                        </p>
                    </Section>

                    {/* 6. Data Security */}
                    <Section title="6. Data Security">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We implement administrative, technical, and organizational safeguards designed to protect your information from unauthorized access, loss, or misuse. We protect the information we collect with proper physical, electronic and administrative safeguards. We only allow our employees, contractors, and agents to access personal information if they need access to perform services on our behalf. They are also subject to confidentiality obligations.
                        </p>
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            Any sensitive personal information is transmitted in an encrypted form using SSL encryption. Even though we have security safeguards, it is impossible to guarantee 100% security. If you have any questions about security or believe that your interactions with us are no longer secure (for example, you feel that your account with us has been compromised), you must notify us immediately by email at liza@spiketechnology.ai.
                        </p>
                    </Section>

                    {/* 7. Data Retention */}
                    <Section title="7. Data Retention">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We retain data only as long as necessary to:
                        </p>
                        <BulletList items={[
                            "Provide the Services",
                            "Meet legal and contractual obligations",
                            "Users may request deletion of their data, subject to applicable requirements."
                        ]} />
                    </Section>

                    {/* 8. Your Rights */}
                    <Section title="8. Your Rights">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            Depending on your location, you may have the right to:
                        </p>
                        <BulletList items={[
                            "Access your personal data",
                            "Correct inaccurate information",
                            "Request deletion",
                            "Object to certain processing activities"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            Request can be sent to liza@spiketechnology.ai
                        </p>
                    </Section>

                    {/* 9. Children's Privacy */}
                    <Section title="9. Children's Privacy">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
                            Our Services are not intended for individuals under 13 (or 16 where applicable). We do not knowingly collect data from children.
                        </p>
                    </Section>

                    {/* 10. Changes to This Policy */}
                    <Section title="10. Changes to This Policy">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
                            We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date.
                        </p>
                    </Section>

                    {/* 11. Contact Us */}
                    <Section title="11. Contact Us">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
                            Questions or concerns about privacy? Email liza@spiketechnology.ai
                        </p>
                    </Section>

                    {/* 12. GDPR Compliance */}
                    <Section title="12. GDPR Compliance (European Economic Area & UK)">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the General Data Protection Regulation (GDPR) applies to our processing of your personal data.
                        </p>

                        <h3 className="text-[#151513] font-archivo text-[22px] font-medium leading-[34px] mt-4 mb-3">
                            Legal Bases for Processing
                        </h3>
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We process personal data under one or more of the following lawful bases:
                        </p>
                        <BulletList items={[
                            "Performance of a contract",
                            "Legitimate business interests (such as improving our services)",
                            "Compliance with legal obligations",
                            "Your consent, where required"
                        ]} />

                        <h3 className="text-[#151513] font-archivo text-[20px] font-medium leading-[34px] mt-6 mb-3">
                            Your GDPR Rights
                        </h3>
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            You have the right to:
                        </p>
                        <BulletList items={[
                            "Access your personal data",
                            "Correct inaccurate information",
                            "Request deletion",
                            "Object to certain processing activities"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            Request can be sent to liza@spiketechnology.ai
                        </p>
                    </Section>

                    {/* 13. CCPA (California Consumer Rights) */}
                    <Section title="13. CCPA (California Consumer Rights)">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            If you are located in the United States, you have the right to:
                        </p>
                        <BulletList items={[
                            "Access your personal data",
                            "Correct inaccurate information",
                            "Request deletion",
                            "Object to certain processing activities"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            Request can be sent to liza@spiketechnology.ai
                        </p>
                    </Section>

                    <Section title="14. Data Processing Addendum (DPA)">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            For customers subject to GDPR or similar regulations, we offer a Data Processing Addendum (DPA) governing our role as a data processor. The DPA outlines:
                        </p>
                        <BulletList items={[
                            "Processing instructions",
                            "Confidentiality obligations",
                            "Sub-processor commitments",
                            "Security controls",
                            "Data subject rights assistance"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            To request a DPA, contact <a href="mailto:liza@spiketechnology.ai" className="text-[#151513] underline">liza@spiketechnology.ai</a>. We may need to verify your identity before fulfilling your request.
                        </p>
                    </Section>

                    {/* 15. SOC 2 & Security Controls */}
                    <Section title="15. SOC 2 & Security Controls">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            Spike Technology maintains administrative, technical, and organizational safeguards aligned with SOC 2 Trust Services Criteria, including:
                        </p>
                        <BulletList items={[
                            "Security",
                            "Availability",
                            "Confidentiality",
                            "Processing integrity"
                        ]} />

                        <h3 className="text-[#151513] font-archivo text-[20px] font-medium leading-[34px] mt-6 mb-3">
                            Our controls include:
                        </h3>
                        <BulletList items={[
                            "Access controls and authentication",
                            "Data encryption in transit and at rest (where applicable)",
                            "Continuous monitoring and logging",
                            "Vendor risk management",
                            "Incident response procedures"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            SOC 2 reports or security documentation may be made available to customers under NDA upon request.
                        </p>
                    </Section>

                    {/* 16. Automated Processing & Profiling Disclosure */}
                    <Section title="16. Automated Processing & Profiling Disclosure">
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
                            We use automated systems, including Artificial Intelligence, to analyze data and generate insights.
                        </p>
                        <BulletList items={[
                            "Automated processing is used solely for analytics and reporting",
                            "No automated decisions produce legal or similarly significant effects",
                            "Human review and oversight remain integral to the platform"
                        ]} />
                        <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
                            We will automatically generate the initial insights using a prompt. Users retain control over how insights are interpreted and applied.
                        </p>
                    </Section>


                </div>
            </main>
        </div>
    );
}

// ========== Reusable Components ==========

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border-t border-[#eaeaeb] pt-8 mt-8 first:border-t-0 first:pt-0 first:mt-0">
            <h2 className="text-[#151513] font-archivo text-[26px] font-medium leading-[34px] mb-3">
                {title}
            </h2>
            {children}
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="list-none pl-5">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] relative pl-5 mb-1 before:content-['•'] before:absolute before:left-0 before:text-[#3D3D3C]"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
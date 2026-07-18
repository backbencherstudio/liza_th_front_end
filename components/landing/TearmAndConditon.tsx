// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="pt-10 md:pt-20 w-full max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto justify-center ">
        <div className="border p-4 md:p-8 lg:p-12 rounded-lg">

          {/* Main Title */}
          <h1 className="text-[#151513] font-archivo text-[32px] md:text-4xl lg:text-[48px] font-semibold leading-[56px] tracking-[-0.01em] mb-3">
            Terms and Conditions – Spike Technology, LLC
          </h1>

          {/* Last Update */}
          <div className="text-[#3D3D3C] font-archivo text-[18px] font-normal leading-6 mb-5">
            Last Updated: April 8, 2026
          </div>

          {/* Description */}
          <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px] mb-3">
            Welcome to Spike Technology (“Spike”, “Spike Dashboard”, “Company”, “we”, “us”, or “our”). These Terms and Conditions (“Terms”) govern your access to and use of our website, platform, software, analytics platform and related services (collectively, the “Services”) provided by Spike Technology (“Company,” “we,” “us,” or “our”).
          </p>
          <p className="text-[#3D3D3C] font-archivo text-[20px] font-normal leading-[30px]">
            By accessing, downloading, registering for or using our Services, you agree to be legally bound by these Terms. If you do not agree, you may not use the Services.
          </p>

          {/* 1. Use of Services */}
          <Section title="1. Use of Services">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              You may use the Services only in compliance with these Terms and all applicable laws and regulations. You agree not to:
            </p>
            <BulletList items={[
              "Use the Services for unlawful purposes",
              "Interfere with or disrupt system performance or security",
              "Attempt to reverse engineer or misuse the platform",
              "Upload infringing, harmful, or illegal content",
              "Decompile, or attempt to extract source code or AI models",
              "Attempt to scrape, replicate, or benchmark the Services for competitive purposes",
              "Use automated systems to access the Services without authorization",
              "Circumvent security or rate limits"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              We reserve the right to suspend or terminate access for violations of these Terms.
            </p>
          </Section>

          {/* 2. AI-Generated Insights Disclaimer */}
          <Section title="2. AI-Generated Insights Disclaimer">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              Our Services use automated systems and third-party AI-assisted tools to generate analytics, dashboards, forecasts and insights (“AI Outputs”). You acknowledge and agree that:
            </p>
            <BulletList items={[
              "Outputs are informational and advisory only",
              "They do not constitute legal, financial, tax, investment or business advice",
              "Final decisions and actions remain the responsibility of the user",
              "Outputs may not be unique and may be similar to outputs provided to other users",
              "You are solely responsible for reviewing and validating any AI Output before relying on it"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              You acknowledge that AI-generated insights may contain errors, omissions, limitations, biases or inaccuracies depending on data quality and context. The Company makes no representation or warranty regarding the accuracy, completeness, or reliability of AI Outputs.
            </p>
          </Section>

          {/* 3. User Accounts Registration and Eligibility */}
          <Section title="3. User Accounts Registration and Eligibility">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              (Include if applicable) The Services are intended solely for individuals who are at least 18 years of age. By using the Services, you represent and warrant that you are 18 years of age or older.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              If you create an account, you are responsible for:
            </p>
            <BulletList items={[
              "Maintaining the confidentiality of login credentials. Do not share your login credentials.",
              "All activity that occurs under your account",
              "Providing accurate and current information",
              "You must notify us immediately of unauthorized use"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </Section>

          {/* 4. Intellectual Property */}
          <Section title="4. Intellectual Property">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              All content, software, AI models, algorithms, designs, trademarks, and materials provided by Spike Technology are owned by the company or its licensors and protected by intellectual property laws.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Services for internal business or personal use.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              You may not copy, distribute, modify, or create derivative works, sell or sublicense the Services without prior written permission.
            </p>
          </Section>

          {/* 5. Customer Data */}
          <Section title="5. Customer Data">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              You retain ownership of the data you upload (“Customer Data”) to the platform.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              By using our Services, you grant us a limited, worldwide, non-exclusive license to:
            </p>
            <BulletList items={[
              "Process Customer Data",
              "Host and transmit Customer Data",
              "Use Customer Data to provide, maintain, and improve the Services"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              We will process personal data in accordance with our Privacy Policy and applicable data protection laws.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              Unless explicitly stated in our Privacy Policy, we do not use Customer Data to train generalized AI models without consent.
            </p>
          </Section>

          {/* 6. Third-Party Services */}
          <Section title="6. Third-Party Services">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              The Services rely on third-party service providers, including artificial intelligence model providers, hosting providers, and payment processors. We are not responsible for:
            </p>
            <BulletList items={[
              "Interruptions caused by third-party services",
              "Accuracy limitations of third-party AI system",
              "Changes to third-party policies"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              You use of third-party integrations may be subject to separate terms.
            </p>
          </Section>

          {/* 7. Limitation of Liability & Warranty Disclaimer */}
          <Section title="7. Limitation of Liability & Warranty Disclaimer">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              To the maximum extent permitted by law:
            </p>
            <BulletList items={[
              "We are not liable for indirect, incidental, special, punitive or consequential damages",
              "Our total liability will not exceed the amount paid by you to us in the prior 12 months"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              The Services are provided “as is” without warranties of any kind.
            </p>
            <BulletList items={[
              "Merchantability",
              "Fitness for a particular purpose",
              "Non-infringement",
              "Accuracy of AI Outputs",
              "Uninterrupted or error-free operation"
            ]} />
          </Section>

          {/* 8. Indemnification */}
          <Section title="8. Indemnification">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              You agree to indemnify and hold harmless Spike Technology from claims arising out of:
            </p>
            <BulletList items={[
              "Your misuse of the Services",
              "Your violation of these terms",
              "Your violation of applicable laws",
              "Content you upload"
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              We reserve the right to control defense and settlement.
            </p>
          </Section>

          {/* 9. Modifications */}
          <Section title="9. Modifications">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              We may update these Terms from time to time. Material changes will be communicated via email or in-app notice. Continued use of the Services after the acceptance date constitutes acceptance of the revised Terms.
            </p>
          </Section>

          {/* 10. Governing Law */}
          <Section title="10. Governing Law">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              These Terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles.
            </p>
          </Section>

          {/* 11. Assignment */}
          <Section title="11. Assignment">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              You may not assign these Terms without our consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
            </p>
          </Section>

          {/* 12. Entire Agreement and Severability */}
          <Section title="12. Entire Agreement and Severability">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              These Terms constitute the entire agreement between you and Spike Technology and supersede prior agreements.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              If any provision is unenforceable, the remaining provisions remain in effect.
            </p>
          </Section>

          {/* 13. Force Majeure */}
          <Section title="13. Force Majeure">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              We are not liable for failure or delay due to causes beyond our reasonable control, including outages, cyberattacks, infrastructure failures, or third-party service disruptions.
            </p>
          </Section>

          {/* 14. Arbitration and Dispute Resolution (New Jersey) */}
          <Section title="14. Arbitration and Dispute Resolution (New Jersey)">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] font-semibold mb-3">
              PLEASE READ THIS SECTION CAREFULLY
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              Any dispute arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules.
            </p>
            <BulletList items={[
              "Arbitration shall take place in New Jersey.",
              "The arbitration shall be conducted by a single arbitrator.",
              "Each party waives the right to a jury trial.",
              "You agree to bring claims only in your individual capacity and not as part of a class action."
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              Nothing prevents either party from seeking relief in small claims court.
            </p>
          </Section>

          {/* 15. Data Protection (GDPR & CCPA Compliance) */}
          <Section title="15. Data Protection (GDPR & CCPA Compliance)">
            <h3 className="text-[#151513] font-archivo text-[22px] font-medium leading-[34px] mt-1 mb-3">
              A. GDPR (EU/UK Users)
            </h3>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              If you are located in the European Economic Area or United Kingdom:
            </p>
            <BulletList items={[
              "We act as a data controller for account and usage data.",
              "We process data under lawful bases including contract performance and legitimate interests.",
              "You have rights to access, rectify, erase, restrict processing, object, and data portability.",
              "You may withdraw consent at any time where processing is based on consent.",
              "International transfers are conducted using appropriate safeguards such as Standard Contractual Clauses."
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              You may exercise rights by contacting: liza@spiketechnology.ai
            </p>

            <h3 className="text-[#151513] font-archivo text-[22px] font-medium leading-[34px] mt-6 mb-3">
              B. CCPA/CPRA (California Residents)
            </h3>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              If you are a California resident:
            </p>
            <BulletList items={[
              "You have the right to know what personal information we collect.",
              "You have the right to request deletion.",
              "You have the right to opt-out of the sale or sharing of personal information (if applicable).",
              "We do not sell personal information for monetary compensation."
            ]} />
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mt-3">
              Requests may be submitted via email at liza@spiketechnology.ai.
            </p>
          </Section>
          <Section title="16. Termination">

            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              You may terminate your account at any time.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              We may suspend or terminate your access:
            </p>
            <BulletList items={[
              "For violations of these Terms",
              "If required by law",
              "For security risks",
              "For non-payment",

            ]} />



            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] py-5">
              Upon termination:
            </p>
            <BulletList items={[
              "Access to Services ceases",
              "We may delete or retain data in accordance with our Privacy Policy.",
              "Sections relating to liability, arbitration, indemnification, and intellectual property survive."
            ]} />

          </Section>

          <Section title="17. Subscription, Billing, and Auto-Renewal">

            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              Certain features of the Services require a paid subscription.
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] mb-3">
              By purchasing a subscription:
            </p>
            <BulletList items={[
              "You authorize us (or our third-party payment processor) to charge your selected payment method",
              "Subscriptions automatically renew at the end of each billing cycle unless canceled before renewal",
              "You may cancel at any time through your account settings",
              "Fees are non-refundable except as required by law",
              "We may change pricing with advance notice",


            ]} />

            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px] py-5">
              For users subscribing through the Apple App Store or Google Play, billing is managed by the
              applicable platform and subject to their terms.
            </p>


          </Section>

          {/* 16. Consent */}
          <Section title="16. Consent">
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              Questions about these Terms?
            </p>
            <p className="text-[#151513] font-archivo text-[20px] font-normal leading-[30px]">
              Contact us at liza@spiketechnology.ai
            </p>
          </Section>

        </div>
      </div>
    </main>
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
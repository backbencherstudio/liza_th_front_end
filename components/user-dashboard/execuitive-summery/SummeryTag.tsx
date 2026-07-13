"use client";

export default function SummeryTag() {
    return (
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-5 md:p-5 text-sm leading-relaxed">
            <h2 className="bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-transparent">Executive Summary</h2>

            <div className="space-y-6 text-gray-700">
                {/* Summary */}
                <div>
                    <h4 className="font-archivo text-[18px] font-semibold leading-[20px] text-[#3D3D3C] mb-2.5">Summary :   </h4>
                    <p className="font-archivo text-[14px] font-normal leading-[20px] text-[#424750]">
                        The proposed development of the Spike Technology SaaS platform carries a total capital expenditure of $9,500.
                        The cost structure is front-loaded, with 42% of the budget allocated to Phase 1 (UI/UX Design). This aligns with
                        General industry standards for production-ready SaaS products where user experience is a primary differentiator.
                    </p>
                </div>

                {/* Opportunity */}
                <div>
                    <h4 className="font-archivo text-[18px] font-semibold leading-[20px] text-[#3D3D3C] mb-2.5">Opportunity :</h4>
                    <p className="font-archivo text-[14px] font-normal leading-[20px] text-[#424750]">
                        There is a significant cost concentration in Phase 1 ($4,000). While critical for enterprise styling, any delays
                        in design approval could create a bottleneck for the $3,000 Front-end phase. The project demonstrates a lean backend
                        integration cost ($2,500), suggesting high efficiency in the FastAPI implementation.
                    </p>
                </div>

                {/* Recommendation */}
                <div>
                    <h4 className="font-archivo text-[18px] font-semibold leading-[20px] text-[#3D3D3C] mb-2.5">Recommendation :</h4>
                    <p className="font-archivo text-[14px] font-normal leading-[20px] text-[#424750]"   >
                        This automated summary is intended to assist with internal reviews and data synthesis. It is not an official financial audit or a substitute for professional accounting review. Always cross reference the generated insights with source financial models before reporting.
                    </p>
                </div>

                <div>
                    <h4 className="font-archivo text-[18px] font-semibold leading-[20px] text-[#3D3D3C] mb-2.5">Disclaimer:</h4>
                    <p className="font-archivo text-[14px] font-normal leading-[20px] text-[#424750]"   >
                        To ensure cost control, the Professional oversight should focus on strict adherence to the 30-day "Client Review
                        and Approval" window in Phase 1. Implement d 10% contingency buffer ($950) for potential API integration
                        complexities in Phase 3. Regularly audit the "Stripe Integration" and "AI Insights" milestones as these represent
                        the core value-drivers for revenue generation.
                    </p>
                </div>



            </div>
        </div>
    );
}
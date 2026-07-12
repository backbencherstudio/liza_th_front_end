import SaveInlightIcon from '@/components/icons/SaveInlightIcon';
import React from 'react'

export default function ProPlan() {

    const usePlan = [
        {
            title: "AI dashboards",
            tag: "Unlimited",
        },
        {
            title: "AI chat credits Used",
            tag: "1700 / 2000",
        },
        {
            title: "Days Until Renewal",
            tag: "16",
        },
    ];

    const getProgress = (tag: string) => {
        // Format: 1700 / 2000
        const ratioMatch = tag.match(/(\d+)\s*\/\s*(\d+)/);

        if (ratioMatch) {
            const used = Number(ratioMatch[1]);
            const total = Number(ratioMatch[2]);

            return Math.min((used / total) * 100, 100);
        }

        // Format: 16 -> 16%
        const numberMatch = tag.match(/^\d+$/);

        if (numberMatch) {
            return Math.min(Number(tag), 100);
        }

        return null;
    };
    return (
        <div className='border border-[#9BB7F6] p-5 rounded-xl bg-[#E9EFFD]'>
            <div className='flex justify-between'>
                <div className="flex  items-start gap-4">
                    <div className='bg-[#C9D3EC] p-3 rounded-lg'>
                        <SaveInlightIcon.CurrentPlanIcon />
                    </div>
                    <div>
                        <div className='rounded-full border  border-[#2563EB] bg-white max-w-25'>
                            <p className="bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-transparent px-2 py-1">Current Plan</p>
                        </div>
                        <p className="font-archivo text-[20px] leading-[28px] font-medium sm:text-[22px] sm:leading-[30px] md:text-[24px] md:leading-[32px] lg:text-[26px] lg:leading-[34px] text-[#0A206D] mt-2">Pro Plan</p>
                        <p className="text-[#3D3D3C] font-archivo text-sm leading-5 font-normal md:text-base md:leading-[22px] mt-1">$99.99 per month • Renews on April 15, 2026</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4 '>
                        <button className="text-center text-[#2563EB] border border-[#2563EB] py-3.5 px-6 rounded-xl font-archivo text-sm font-semibold leading-4 md:text-base">Cancel Plan</button>
                        <button className="text-center text-white font-archivo py-3.5 px-6 rounded-xl text-sm font-semibold leading-4 md:text-base bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)]">Upgrade Plan</button>
                    </div>
                </div>

            </div>

            <hr className="my-6 p-1 border-[#9BB7F6]" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {usePlan.map((item, index) => {
                    const progress = getProgress(item.tag);

                    return (
                        <div
                            key={index}
                            className="rounded-xl "
                        >
                            <p className="text-[#151513] font-archivo text-xs leading-5 font-normal md:text-sm md:leading-[22px]">{item.title}</p>

                            <p className="text-[#0F172A] font-archivo text-[20px] leading-[28px] font-medium md:text-[24px] md:leading-[32px]">{item.tag}</p>

                            {progress !== null && (
                                <div className="mt-4">
                                    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-blue-600 transition-all"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>

                                    <p className="mt-2 text-sm text-gray-500">
                                        {progress.toFixed(0)}% Used
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

"use client"
import React, { useState } from 'react'
import Ai2Icon from '@/components/icons/Ai2Icon'
import EditIcon from '@/components/icons/EditIcon'

export default function Page() {
    const [prompt, setPrompt] = useState('You are a professional content writer. Generate engaging, SEO-optimized content based on the user\'s input. Keep the tone professional yet conversational. Target audience: Not set. Topic: Not set. Length: 0 words.');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="mt-6 w-full p-6 space-y-4 bg-white border border-[#E9EFFD] rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-start gap-2.5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A206D] to-[#3B69D0] shrink-0">
                        <Ai2Icon />
                    </div>
                    <div>
                        <h3 className="text-[#101828] font-archivo text-xl font-medium leading-[26px]">
                            Content Generation
                        </h3>
                        <p className="text-[#6A7282] font-archivo text-base font-normal leading-[22px]">
                            Content · Last tested: 2024-06-28 14:30
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 text-xs font-medium leading-4 text-[#008236] bg-[#DCFCE7] rounded-[10px]">
                        Active
                    </span>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 rounded-[10px] hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label="Edit prompt"
                    >
                        <EditIcon />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-[rgba(233,239,253,0.40)] rounded-lg">
                {isEditing ? (
                    <div className="space-y-3">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full min-h-[150px] p-3 text-[#4A5565] font-archivo text-base font-normal leading-[22px] bg-white border border-[#E9EFFD] rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-[#3B69D0] focus:border-transparent"
                            placeholder="Edit your prompt here..."
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 text-sm font-medium text-white bg-[#3B69D0] rounded-lg hover:bg-[#2A4F9E] transition-colors"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 text-sm font-medium text-[#4A5565] border border-[#E9EFFD] rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-[#4A5565] font-archivo text-base font-normal leading-[22px]">
                        {prompt}
                    </p>
                )}
            </div>
        </div>
    )
}
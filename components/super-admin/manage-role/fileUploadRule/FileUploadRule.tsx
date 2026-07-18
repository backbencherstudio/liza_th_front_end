'use client';

import { useState } from 'react';
import StorageProvider from './StoregeProvider';
import CategorySection from './CategorySection';

export default function FileUploadSettings() {
    const [selectedProvider, setSelectedProvider] = useState('aws');
    const [globalLimit, setGlobalLimit] = useState(200);
    const [virusScan, setVirusScan] = useState(true);
    const [cdnDelivery, setCdnDelivery] = useState(true);
    const [publicAccess, setPublicAccess] = useState(false);

    const [images, setImages] = useState({ extensions: ['.jpg', '.jpeg', '.png', '.webp', '.gif'], size: 5 });
    const [documents, setDocuments] = useState({ extensions: ['.pdf', '.doc', '.docx', '.txt'], size: 5 });
    const [archives, setArchives] = useState({ extensions: ['.mp4', '.mov', '.avi', '.webm'], size: 5 });

    const handleSave = async () => {
        const payload = { selectedProvider, globalLimit, virusScan, cdnDelivery, publicAccess, images, documents, archives };

        await fetch('/api/upload-settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        alert(' Settings Saved!');
    };

    return (
        <div className="min-h-screen  ">
            <div className="mx-auto ">
                <h1 className="text-[#151513] text-[24px] sm:text-[28px] xl:text-[32px] font-semibold sm:leading-[40px] xl:leading-[46px] mb-1">File Upload Rules</h1>
                <p className="text-[#3D3D3C] text-[14px] sm:text-[15px] xl:text-base font-normal sm:leading-[20px] xl:leading-[22px] mb-8">Configure allowed file types, size limits, and storage settings</p>

                {/* Storage Provider */}
                <StorageProvider selected={selectedProvider} setSelected={setSelectedProvider} />

                {/* Global Settings */}
                <div className="mt-6 md:mt-8">
                    <h2 className="text-[20px] sm:text-[22px] xl:text-2xl text-[#101828] font-medium sm:leading-7 xl:leading-8 mb-4">Global Settings</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl border">
                            <div>
                                <p className="text-[14px] sm:text-[15px] xl:text-base text-[#151513] font-normal sm:leading-5 xl:leading-[22px]">Global Storage Limit per User</p>
                                <p className="text-[12px] sm:text-xs xl:text-xs text-[#4A5565] font-normal sm:leading-[14px] xl:leading-4 mt-3">Maximum total storage per account</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={globalLimit}
                                    onChange={(e) => setGlobalLimit(Number(e.target.value))}
                                    className="w-20 text-center border rounded-lg py-2 focus:outline-none focus:border-blue-500"
                                />
                                <span className="text-gray-500">MB</span>
                            </div>
                        </div>

                        <Toggle label="Virus / Malware Scanning" checked={virusScan} onChange={setVirusScan} />
                        <Toggle label="CDN Delivery" checked={cdnDelivery} onChange={setCdnDelivery} />
                        <Toggle label="Public Access by Default" checked={publicAccess} onChange={setPublicAccess} />
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-10 space-y-6">
                    <CategorySection title="Images" data={images} setData={setImages} />
                    <CategorySection title="Documents" data={documents} setData={setDocuments} />
                    <CategorySection title="Archives" data={archives} setData={setArchives} />
                </div>

                <div className="flex justify-end mt-10">
                    <button
                        onClick={handleSave}
                        className="rounded-[8px] bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] py-3.5 px-6 text-white cursor-pointer font-semibold text-[14px] sm:text-[15px] xl:text-base hover:bg-accent"
                    >
                        Save Upload Settings
                    </button>
                </div>
            </div>
        </div>
    );
}


function Toggle({ label, checked, onChange }: any) {
    return (
        <div className="flex justify-between items-center p-5 rounded-xl border">
            <div>
                <p className="text-[14px] sm:text-[15px] xl:text-base text-[#151513] font-normal sm:leading-5 xl:leading-[22px]">{label}</p>
                <p className="text-[11px] sm:text-xs xl:text-xs text-[#4A5565] font-normal sm:leading-[14px] xl:leading-4 mt-3">
                    {label === 'Virus / Malware Scanning' && 'Scan uploaded files for threats'}
                    {label === 'CDN Delivery' && 'Serve files via global CDN'}
                    {label === 'Public Access by Default' && 'Uploaded files are publicly accessible'}
                </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
        </div>
    );
}
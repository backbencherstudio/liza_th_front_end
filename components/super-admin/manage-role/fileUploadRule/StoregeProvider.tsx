export default function StorageProvider({ selected, setSelected }: any) {
    const providers = [
        { id: 'aws', name: 'AWS S3', desc: 'Amazon Simple Storage' },
        { id: 'gcp', name: 'Google Cloud', desc: 'Cloud Storage' },
        { id: 'cloudflare', name: 'Cloudflare R2', desc: 'Zero egress fees' },
    ];

    return (
        <div>
            <h2 className="text-[#364153] text-[14px] sm:text-[15px] xl:text-base font-normal sm:leading-[20px] xl:leading-[22px] mb-4">Storage Provider</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {providers.map((p) => (
                    <div
                        key={p.id}
                        onClick={() => setSelected(p.id)}
                        className={`p-4 border rounded-xl cursor-pointer transition-all ${selected === p.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <p className="text-[14px] sm:text-[15px] xl:text-base text-[#151513] font-normal sm:leading-[20px] xl:leading-[22px]">{p.name}</p>
                        <p className="text-[11px] sm:text-xs xl:text-[12px] text-[#4A5565] font-normal sm:leading-[14px] xl:leading-4 mt-3">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
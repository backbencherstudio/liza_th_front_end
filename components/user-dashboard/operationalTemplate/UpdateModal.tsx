import React, { useState } from 'react';
import { StatusItem } from './CustomStatusUpdateData';
import { FormField } from '@/components/reusable/FormInput';
import { Plus, X } from 'lucide-react';

interface UpdateModalProps {
    editingItem: StatusItem | null;
    onChange: (field: keyof StatusItem, value: any) => void;
    onSave: () => void;
}

export default function UpdateModal({ editingItem, onChange, onSave }: UpdateModalProps) {
    const [newTag, setNewTag] = useState("");
    const [tags, setTags] = useState<string[]>([]); // You can later sync with editingItem if needed

    if (!editingItem) return null;

    const addTag = () => {
        if (!newTag.trim()) return;
        const trimmed = newTag.trim();
        if (!tags.includes(trimmed)) {
            setTags(prev => [...prev, trimmed]);
        }
        setNewTag("");
    };

    const removeTag = (index: number) => {
        setTags(prev => prev.filter((_, i) => i !== index));
    };

    // Optional: Handle Enter key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div className="space-y-6 w-full">
            {/* Workstream Name */}
            <div>
                <FormField
                    label="Workstream Name"
                    value={editingItem.category}
                    onChange={(e) => onChange("category", e.target.value)}
                    placeholder="Enter workstream name"
                />
            </div>

            {/* Status Update - Dynamic Tags */}
            <div>


                {/* Input Field */}
                <div className="relative flex gap-3">
                    <FormField
                        label="Status Update"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Input features name / status"

                    />
                    <button
                        type="button"
                        onClick={addTag}
                        className="text-blue-600 absolute right-2 top-12"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/* Display Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                            >
                                {tag}

                                <button
                                    onClick={() => removeTag(index)}
                                    className="hover:text-blue-900 transition"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* % Complete */}
            <div>
                <FormField
                    label="% Complete (optional)"
                    value={editingItem.percentage || ""}
                    onChange={(e) => onChange("percentage", e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="%"
                    type="number"
                />
            </div>

            {/* Save Button */}
            <button
                onClick={onSave}
                className="w-full  text-lg font-medium bg-gradient-to-br from-[#0A206D] to-[#3B69D0] text-white py-3.5 rounded-xl transition"
            >
                Save
            </button>
        </div>
    );
}
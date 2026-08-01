import { StatusItem } from './CustomStatusUpdateData';
import { FormField } from '@/components/reusable/FormInput';
import { FormSelect } from '@/components/reusable/FormSelect';

interface UpdateModalProps {
    editingItem: StatusItem | null;
    onChange: (field: keyof StatusItem, value: any) => void;
    onSave: () => void;
}

const STATUS_OPTIONS: Array<{ label: StatusItem["status"]; value: StatusItem["status"] }> = [
    { label: "On Track", value: "On Track" },
    { label: "Watch", value: "Watch" },
    { label: "Complete", value: "Complete" },
    { label: "Not Started", value: "Not Started" },
    { label: "On Hold", value: "On Hold" },
];

export default function UpdateModal({ editingItem, onChange, onSave }: UpdateModalProps) {
    if (!editingItem) return null;

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

            {/* Status Description */}
            <div>
                <FormField
                    label="Status Description"
                    value={editingItem.description}
                    onChange={(e) => onChange("description", e.target.value)}
                    placeholder="Enter status description"
                />
            </div>

            {/* Status Update */}
            <div>
                <FormSelect
                    label="Status Update"
                    placeholder="Select status"
                    options={STATUS_OPTIONS}
                    value={editingItem.status}
                    onValueChange={(value) =>
                        onChange("status", value as StatusItem["status"])
                    }
                />
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
                className="w-full rounded-xl bg-linear-to-br from-[#0A206D] to-[#3B69D0] py-3.5 text-lg font-medium text-white transition"
            >
                Save
            </button>
        </div>
    );
}
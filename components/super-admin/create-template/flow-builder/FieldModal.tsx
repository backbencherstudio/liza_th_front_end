'use client';

import { useState } from 'react';
import { Field, FieldType } from '@/types/formBuilder';
import { X, Plus } from 'lucide-react';

interface FieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (fieldData: Omit<Field, 'id'>) => void;
  /** Lock field type (e.g. Single Select for dashboard, Multi Select for goals) */
  forcedType?: FieldType;
  title?: string;
}

const FIELD_TYPES: FieldType[] = [
  'Text Label', 'Text Input', 'Single Select',
  'Multi Select', 'Select/Dropdown', 'Number Input', 'Hybrid', 'Upload file'
];

export default function FieldModal({
  isOpen,
  onClose,
  onSave,
  forcedType,
  title = 'Add Field',
}: FieldModalProps) {
  const [label, setLabel] = useState('');
  const [fieldType, setFieldType] = useState<FieldType>(forcedType ?? 'Text Input');
  const [options, setOptions] = useState<string[]>([]);
  const [currentOption, setCurrentOption] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  if (!isOpen) return null;

  const effectiveType = forcedType ?? fieldType;

  const handleAddOption = () => {
    if (currentOption.trim() && !options.includes(currentOption.trim())) {
      setOptions([...options, currentOption.trim()]);
      setCurrentOption('');
    }
  };

  const handleRemoveOption = (indexToRemove: number) => {
    setOptions(options.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSave = () => {
    if (!label.trim()) return alert('Label is required');
    onSave({
      label,
      type: effectiveType,
      isRequired,
      options: ['Single Select', 'Multi Select', 'Select/Dropdown'].includes(effectiveType)
        ? options
        : undefined,
    });
    setLabel('');
    setOptions([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Label</label>
            <input
              type="text" value={label} onChange={(e) => setLabel(e.target.value)}
              placeholder="Enter field label" className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Field Type</label>
            {forcedType ? (
              <input
                type="text"
                value={forcedType}
                readOnly
                className="w-full border border-slate-200 rounded-lg p-2 text-sm bg-slate-50 text-slate-600"
              />
            ) : (
              <select
                value={fieldType} onChange={(e) => setFieldType(e.target.value as FieldType)}
                className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-blue-500"
              >
                {FIELD_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            )}
          </div>

          {['Single Select', 'Multi Select', 'Select/Dropdown'].includes(effectiveType) && (
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Add Dropdown Options</label>
              <div className="flex gap-2 mb-2">
                <input 
                  type="text" value={currentOption} onChange={(e) => setCurrentOption(e.target.value)}
                  placeholder="Enter option tag" className="flex-1 border border-slate-200 rounded-lg p-2 text-sm"
                />
                <button onClick={handleAddOption} className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-slate-200"><Plus size={18} /></button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {options.map((opt, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                    {opt}
                    <X size={12} className="cursor-pointer" onClick={() => handleRemoveOption(idx)} />
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-slate-600">Required field</span>
            <input 
              type="checkbox" checked={isRequired} onChange={(e) => setIsRequired(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
            <button onClick={onClose} className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
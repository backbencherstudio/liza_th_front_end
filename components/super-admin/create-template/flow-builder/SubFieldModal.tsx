'use client';

import { useState, useEffect } from 'react';
import { FieldType } from '@/types/formBuilder';
import { X, Plus } from 'lucide-react';

interface SubFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (subFieldData: { label: string; type: FieldType; options?: string[]; isRequired: boolean }) => void;
}

const SUBFIELD_TYPES: FieldType[] = [
  'Text Label',
  'Text Input',
  'Single Select',
  'Multi Select',
  'Select/Dropdown', // Maps to 'Dropdown' in select menu
  'Number Input',
  'Hybrid',
  'Upload file'
];

export default function SubFieldModal({ isOpen, onClose, onSave }: SubFieldModalProps) {
  const [label, setLabel] = useState('');
  const [fieldType, setFieldType] = useState<FieldType>('Select/Dropdown');
  const [options, setOptions] = useState<string[]>(['React', 'TypeScript', 'Datadog']); // Match layout mock defaults
  const [currentOption, setCurrentOption] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  // Reset inputs on close/open cycles
  useEffect(() => {
    if (isOpen) {
      setLabel('');
      setFieldType('Select/Dropdown');
      setOptions(['React', 'TypeScript', 'Datadog']);
      setCurrentOption('');
      setIsRequired(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    if (!label.trim()) return alert('Subfield label name is required');
    
    onSave({
      label: label.trim(),
      type: fieldType,
      isRequired,
      options: ['Single Select', 'Multi Select', 'Select/Dropdown'].includes(fieldType) ? options : undefined
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[440px] p-6 border border-slate-100 flex flex-col relative transition-all">
        
        {/* Modal Close Anchor */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Title Block */}
        <h3 className="text-base font-bold text-slate-800 mb-5">Add Subfield</h3>

        <div className="space-y-4 flex-1">
          {/* Subfield Label Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">Label</label>
            <input 
              type="text" 
              value={label} 
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Enter" 
              className="w-full border border-slate-200/80 rounded-xl px-3 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors bg-white shadow-sm"
            />
          </div>

          {/* Subfield Field Type Dropdown Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">Field Type</label>
            <select 
              value={fieldType} 
              onChange={(e) => setFieldType(e.target.value as FieldType)}
              className="w-full border border-slate-200/80 rounded-xl px-3 py-2.5 text-xs text-slate-700 bg-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 12px center', backgroundSize: '12px', backgroundRepeat: 'no-repeat' }}
            >
              {SUBFIELD_TYPES.map(t => (
                <option key={t} value={t}>
                  {t === 'Select/Dropdown' ? 'Dropdown' : t}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional Options Block Container */}
          {['Single Select', 'Multi Select', 'Select/Dropdown'].includes(fieldType) && (
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Add Dropdown Options</label>
              <div className="flex gap-2 mb-2 bg-slate-50 border border-slate-200/60 rounded-xl p-1 shadow-sm focus-within:border-blue-500 focus-within:bg-white transition-all">
                <input 
                  type="text" 
                  value={currentOption} 
                  onChange={(e) => setCurrentOption(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddOption())}
                  placeholder="Enter dropdown option" 
                  className="flex-1 bg-transparent px-2 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none"
                />
                <button 
                  onClick={handleAddOption} 
                  className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Removable Tag Badges List Grid Layout */}
              <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pt-1">
                {options.map((opt, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-50 text-blue-600 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium border border-blue-100/50"
                  >
                    {opt}
                    <X 
                      size={12} 
                      className="cursor-pointer text-blue-400 hover:text-blue-600 transition-colors" 
                      onClick={() => handleRemoveOption(idx)} 
                    />
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Required Status Row Toggle Switch */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-slate-600">Required</span>
            <button
              onClick={() => setIsRequired(!isRequired)}
              className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${
                isRequired ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-sm transform duration-200 ease-in-out ${
                  isRequired ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Dialog Control Buttons Footer Block Layout */}
        <div className="flex gap-3 pt-6 mt-6 border-t border-slate-100">
          <button 
            onClick={onClose} 
            className="flex-1 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/10"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
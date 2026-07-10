'use client';

import { useState } from 'react';
import { Field, FieldType } from '@/types/formBuilder';
import { GripVertical, Edit3, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import SubFieldModal from './SubFieldModal';

interface FieldRowProps {
  field: Field;
  onToggleExpand: () => void;
  onAddSubField: (subFieldData: { label: string; type: FieldType; options?: string[]; isRequired: boolean }) => void;
  onUpdateGroupTitle: (title: string) => void;
  onDeleteField: () => void;
  onDeleteSubField: (subFieldId: string) => void;
}

export default function FieldRow({
  field,
  onToggleExpand,
  onAddSubField,
  onUpdateGroupTitle,
  onDeleteField,
  onDeleteSubField
}: FieldRowProps) {
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const supportsSubfields = ['Single Select', 'Multi Select', 'Select/Dropdown'].includes(field.type);

  return (
    <div className="border border-slate-100 rounded-lg bg-slate-50/40 overflow-hidden mb-2">
      {/* Primary Field Row Bar Section */}
      <div className="flex justify-between items-center bg-white p-3 border border-slate-100 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <GripVertical className="text-slate-300 cursor-grab hover:text-slate-400" size={15} />
          <div>
            <p className="text-xs font-semibold text-slate-700">{field.label}</p>
            <p className="text-[10px] text-slate-400 font-medium">{field.type}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
          {supportsSubfields && (
            <button 
              onClick={() => setIsSubModalOpen(true)}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-0.5 text-[11px] font-semibold"
            >
              + Subfield
            </button>
          )}
          <button className="hover:text-slate-600"><Edit3 size={14} /></button>
          <button onClick={onDeleteField} className="hover:text-red-500"><Trash2 size={14} /></button>
          
          {supportsSubfields && (
            <button onClick={onToggleExpand} className="text-slate-400 hover:text-slate-600 pl-1">
              {field.isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* Expanded Container Area display blocks */}
      {supportsSubfields && field.isExpanded && (
        <div className="p-4 bg-white border-x border-b border-slate-100/80 space-y-4 rounded-b-lg">
          <div>
            <label className="block text-[11px] font-medium text-slate-500 mb-1">Title</label>
            <input
              type="text"
              value={field.subFieldGroupTitle || ''}
              onChange={(e) => onUpdateGroupTitle(e.target.value)}
              placeholder="Executive Summary Map Header"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none bg-slate-50/50 text-slate-700 font-medium"
            />
          </div>

          {/* Subfield Traversal Loops */}
          {field.subfields.length > 0 && (
            <div className="space-y-1.5 pl-2 border-l border-slate-100">
              {field.subfields.map((sub) => (
                <div 
                  key={sub.id} 
                  className="flex justify-between items-center bg-white border border-slate-100 rounded-lg p-2.5 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <GripVertical className="text-slate-300" size={14} />
                    <div>
                      <p className="text-xs font-medium text-slate-700">{sub.label}</p>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {sub.type === 'Select/Dropdown' ? 'Select/Dropdown' : sub.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <button className="hover:text-slate-600"><Edit3 size={13} /></button>
                    <button onClick={() => onDeleteSubField(sub.id)} className="hover:text-red-500"><Trash2 size={13} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Embedded SubField Modal Context Element */}
      <SubFieldModal 
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        onSave={onAddSubField}
      />
    </div>
  );
}
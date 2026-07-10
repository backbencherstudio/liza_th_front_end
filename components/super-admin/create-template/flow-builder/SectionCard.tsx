'use client';

import { useState } from 'react';
import { Section, Field } from '@/types/formBuilder';
import { Trash2, Plus } from 'lucide-react';
import FieldRow from './FieldRow';
import FieldModal from './FieldModal';

interface SectionCardProps {
  sectionNum: number;
  section: Section;
  onUpdateSectionTitle: (sectionId: string, title: string) => void;
  onAddField: (sectionId: string, field: Omit<Field, 'id' | 'subfields'>) => void;
  onToggleFieldExpand: (sectionId: string, fieldId: string) => void;
  onAddSubField: (sectionId: string, fieldId: string) => void;
  onUpdateGroupTitle: (sectionId: string, fieldId: string, title: string) => void;
  onDeleteSection: (sectionId: string) => void;
  onDeleteField: (sectionId: string, fieldId: string) => void;
  onDeleteSubField: (sectionId: string, fieldId: string, subFieldId: string) => void;
}

export default function SectionCard({
  sectionNum,
  section,
  onUpdateSectionTitle,
  onAddField,
  onToggleFieldExpand,
  onAddSubField,
  onUpdateGroupTitle,
  onDeleteSection,
  onDeleteField,
  onDeleteSubField
}: SectionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-slate-100/80 rounded-xl p-5 mb-5 bg-white/60">
      
      {/* Top Section Actions Strip */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xs font-bold text-slate-700">{`Section ${sectionNum}`}</h4>
        <button 
          onClick={() => onDeleteSection(section.id)} 
          className="text-slate-400 hover:text-red-500 flex items-center gap-1 text-xs"
        >
          <Trash2 size={13} /> Remove Section
        </button>
      </div>

      {/* Editable Title Parameter */}
      <div className="mb-4 bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
        <label className="block text-[11px] font-medium text-slate-400 mb-1">Title</label>
        <input 
          type="text" 
          value={section.title} 
          onChange={(e) => onUpdateSectionTitle(section.id, e.target.value)}
          placeholder="e.g., Upload Your File"
          className="w-full border-b border-slate-100 py-1 text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-400 transition-all bg-transparent"
        />
      </div>

      {/* Field Type Block Context */}
      <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            {`Field Type (${section.fields.length})`}
          </span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 font-semibold text-xs hover:text-blue-700 flex items-center gap-0.5"
          >
            <Plus size={13} /> Add Field
          </button>
        </div>

        {/* Node Child Elements Traversal */}
        <div className="space-y-1">
          {section.fields.map((field) => (
            <FieldRow
              key={field.id}
              field={field}
              onToggleExpand={() => onToggleFieldExpand(section.id, field.id)}
              onAddSubField={() => onAddSubField(section.id, field.id)}
              onUpdateGroupTitle={(title) => onUpdateGroupTitle(section.id, field.id, title)}
              onDeleteField={() => onDeleteField(section.id, field.id)}
              onDeleteSubField={(subFieldId) => onDeleteSubField(section.id, field.id, subFieldId)}
            />
          ))}
          {section.fields.length === 0 && (
            <p className="text-[11px] text-slate-400 italic text-center py-2">No fields configured yet. Click Add Field above.</p>
          )}
        </div>
      </div>

      <FieldModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={(data) => onAddField(section.id, data)} 
      />
    </div>
  );
}
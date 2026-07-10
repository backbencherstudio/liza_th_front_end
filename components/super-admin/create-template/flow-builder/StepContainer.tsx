'use client';

import { Step, Field } from '@/types/formBuilder';
import { Trash2, Plus, ChevronDown, Edit3, GripVertical } from 'lucide-react';
import SectionCard from './SectionCard';

interface StepContainerProps {
  step: Step;
  onAddSection: (stepId: string) => void;
  onUpdateSectionTitle: (stepId: string, sectionId: string, title: string) => void;
  onDeleteStep: (stepId: string) => void;
  onAddField: (stepId: string, sectionId: string, field: Omit<Field, 'id' | 'subfields'>) => void;
  onToggleFieldExpand: (stepId: string, sectionId: string, fieldId: string) => void;
  onAddSubField: (stepId: string, sectionId: string, fieldId: string) => void;
  onUpdateGroupTitle: (stepId: string, sectionId: string, fieldId: string, title: string) => void;
  onDeleteSection: (stepId: string, sectionId: string) => void;
  onDeleteField: (stepId: string, sectionId: string, fieldId: string) => void;
  onDeleteSubField: (stepId: string, sectionId: string, fieldId: string, subFieldId: string) => void;
}

export default function StepContainer({
  step,
  onAddSection,
  onUpdateSectionTitle,
  onDeleteStep,
  onAddField,
  onToggleFieldExpand,
  onAddSubField,
  onUpdateGroupTitle,
  onDeleteSection,
  onDeleteField,
  onDeleteSubField
}: StepContainerProps) {
  return (
    <div className=" border bg-white rounded-xl   shadow-sm">
      
      {/* Step Header Block layout mirroring screenshot */}
      <div className="flex justify-between items-center  bg-[#F0F4F9] p-3 rounded-lg border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <GripVertical className="text-slate-300" size={15} />
          <span className="text-xs font-bold text-slate-700">{step.name}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <button 
            onClick={() => onAddSection(step.id)}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-0.5 text-xs font-semibold"
          >
            <Plus size={13} /> Add New Section
          </button>
          <button className="hover:text-slate-600"><Edit3 size={14} /></button>
          <button onClick={() => onDeleteStep(step.id)} className="hover:text-red-500"><Trash2 size={14} /></button>
          <ChevronDown size={16} className="text-slate-400 pl-1" />
        </div>
      </div>

      {/* Render Nested Sections list sequentially */}
      <div>
        {step.sections.map((section, index) => (
          <SectionCard 
            key={section.id} 
            sectionNum={index + 1}
            section={section}
            onUpdateSectionTitle={(secId, title) => onUpdateSectionTitle(step.id, secId, title)}
            onAddField={(secId, field) => onAddField(step.id, secId, field)}
            onToggleFieldExpand={(secId, fId) => onToggleFieldExpand(step.id, secId, fId)}
            onAddSubField={(secId, fId) => onAddSubField(step.id, secId, fId)}
            onUpdateGroupTitle={(secId, fId, t) => onUpdateGroupTitle(step.id, secId, fId, t)}
            onDeleteSection={(secId) => onDeleteSection(step.id, secId)}
            onDeleteField={(secId, fId) => onDeleteField(step.id, secId, fId)}
            onDeleteSubField={(secId, fId, sfId) => onDeleteSubField(step.id, secId, fId, sfId)}
          />
        ))}
      </div>
    </div>
  );
}
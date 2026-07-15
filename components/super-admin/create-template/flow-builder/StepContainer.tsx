'use client';

import { Step, Field } from '@/types/formBuilder';
import { Trash2, Plus, ChevronDown, Edit3, GripVertical } from 'lucide-react';
import SectionCard from './SectionCard';
import { useState } from 'react';

interface StepContainerProps {
  step: Step;
  onAddSection: (stepId: string) => void;
  onUpdateSectionTitle: (stepId: string, sectionId: string, title: string) => void;
  onDeleteStep: (stepId: string) => void;
  onAddField: (stepId: string, sectionId: string, field: Omit<Field, 'id'>) => void;
  onDeleteSection: (stepId: string, sectionId: string) => void;
  onDeleteField: (stepId: string, sectionId: string, fieldId: string) => void;
  onRenameField?: (stepId: string, sectionId: string, fieldId: string, label: string) => void;
}

export default function StepContainer({
  step,
  onAddSection,
  onUpdateSectionTitle,
  onDeleteStep,
  onAddField,
  onDeleteSection,
  onDeleteField,
  onRenameField,
}: StepContainerProps) {
  const [collapsed, setCollapsed] = useState(false);

  const canAddSection = !step.locked && step.kind !== 'mapping';
  const showAddSectionHint =
    step.kind === 'mapping'
      ? 'Sections sync from Step 1 dashboard types'
      : step.kind === 'goals'
        ? 'Use + Add Goal to add new goals'
        : step.kind === 'upload'
          ? 'Upload + Dashboard type are fixed'
          : null;

  return (
    <div className="border bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex justify-between items-center bg-[#F0F4F9] p-3 rounded-t-xl border-b border-slate-100">
        <div className="flex items-center gap-3">
          <GripVertical className="text-slate-300" size={15} />
          <span className="text-xs font-bold text-slate-700">{step.name}</span>
          {step.locked && (
            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">
              Fixed
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          {canAddSection && (
            <button
              onClick={() => onAddSection(step.id)}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-0.5 text-xs font-semibold"
            >
              <Plus size={13} /> Add New Section
            </button>
          )}
          <button type="button" className="hover:text-slate-600">
            <Edit3 size={14} />
          </button>
          {!step.locked && (
            <button
              type="button"
              onClick={() => onDeleteStep(step.id)}
              className="hover:text-red-500"
            >
              <Trash2 size={14} />
            </button>
          )}
          <button type="button" onClick={() => setCollapsed((c) => !c)} className="pl-1">
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform ${collapsed ? '' : 'rotate-180'}`}
            />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="p-4">
          {showAddSectionHint && (
            <p className="mb-4 text-[11px] text-slate-400 italic">{showAddSectionHint}</p>
          )}

          {step.sections.map((section, index) => (
            <SectionCard
              key={section.id}
              sectionNum={index + 1}
              section={section}
              stepKind={step.kind}
              onUpdateSectionTitle={(secId, title) =>
                onUpdateSectionTitle(step.id, secId, title)
              }
              onAddField={(secId, field) => onAddField(step.id, secId, field)}
              onDeleteSection={(secId) => onDeleteSection(step.id, secId)}
              onDeleteField={(secId, fId) => onDeleteField(step.id, secId, fId)}
              onRenameField={
                onRenameField
                  ? (secId, fId, label) => onRenameField(step.id, secId, fId, label)
                  : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

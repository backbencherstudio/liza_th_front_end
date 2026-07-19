'use client';

import { useState } from 'react';
import { Section, Field, Step } from '@/types/formBuilder';
import { Trash2, Plus } from 'lucide-react';
import FieldRow from './FieldRow';
import FieldModal from './FieldModal';

interface SectionCardProps {
  sectionNum: number;
  section: Section;
  stepKind?: Step['kind'];
  onUpdateSectionTitle: (sectionId: string, title: string) => void;
  onAddField: (sectionId: string, field: Omit<Field, 'id'>) => void;
  onDeleteSection: (sectionId: string) => void;
  onDeleteField: (sectionId: string, fieldId: string) => void;
  onRenameField?: (sectionId: string, fieldId: string, label: string) => void;
}

export default function SectionCard({
  sectionNum,
  section,
  stepKind,
  onUpdateSectionTitle,
  onAddField,
  onDeleteSection,
  onDeleteField,
}: SectionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isUploadSection = section.id === 'sec-upload';
  const isDashboardSection = section.id === 'sec-dashboard-type';
  const isGoalsSection = stepKind === 'goals';

  const canAddField = !isUploadSection;
  const canRemoveSection = !section.locked;

  const addFieldLabel = isDashboardSection
    ? 'Add Dashboard Type'
    : isGoalsSection
      ? 'Add Goal'
      : 'Add Field';

  return (
    <div className="border border-slate-100/80 rounded-xl p-5 mb-5 bg-[#F8FAFC]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h4 className="text-xs font-bold text-slate-700">{`Section ${sectionNum}`}</h4>
          {section.linkedDashboardFieldId && (
            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              Linked to dashboard type
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {canRemoveSection ? (
            <button
              onClick={() => onDeleteSection(section.id)}
              className="text-slate-400 hover:text-red-500 flex items-center gap-1 text-xs"
            >
              <Trash2 size={13} /> Remove Section
            </button>
          ) : (
            <span className="text-[10px] font-semibold text-slate-400">Fixed section</span>
          )}
        </div>
      </div>

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

      <div className="">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            {`Field Type (${section.fields.length})`}
          </span>
          {canAddField && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 font-semibold text-xs hover:text-blue-700 flex items-center gap-0.5"
            >
              <Plus size={13} /> {addFieldLabel}
            </button>
          )}
        </div>

        <div className="space-y-1">
          {section.fields.map((field) => (
            <FieldRow
              key={field.id}
              field={field}
              onDeleteField={() => {
                if (field.locked) return;
                onDeleteField(section.id, field.id);
              }}
            />
          ))}
          {section.fields.length === 0 && (
            <p className="text-[11px] text-slate-400 italic text-center py-2">
              No fields configured yet. Click {addFieldLabel} above.
            </p>
          )}
        </div>
      </div>

      <FieldModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(data) => onAddField(section.id, data)}
        forcedType={
          isDashboardSection
            ? 'Single Select'
            : isGoalsSection
              ? 'Multi Select'
              : undefined
        }
        title={
          isDashboardSection
            ? 'Add Dashboard Type'
            : isGoalsSection
              ? 'Add Business Goal'
              : 'Add Field'
        }
      />


    </div>
  );
}

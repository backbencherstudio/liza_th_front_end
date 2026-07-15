'use client';

import { Field } from '@/types/formBuilder';
import { GripVertical, Edit3, Trash2 } from 'lucide-react';

interface FieldRowProps {
  field: Field;
  onDeleteField: () => void;
}

export default function FieldRow({ field, onDeleteField }: FieldRowProps) {
  return (
    <div className="flex justify-between items-center bg-white p-3 border border-slate-100 rounded-lg shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <GripVertical className="text-slate-300 cursor-grab hover:text-slate-400" size={15} />
        <div>
          <p className="text-xs font-semibold text-slate-700">{field.label}</p>
          <p className="text-[10px] text-slate-400 font-medium">{field.type}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
        <button type="button" className="hover:text-slate-600">
          <Edit3 size={14} />
        </button>
        {!field.locked && (
          <button type="button" onClick={onDeleteField} className="hover:text-red-500">
            <Trash2 size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

'use client';

import { useImmer } from 'use-immer';
import { Flow, Field } from '@/types/formBuilder';
import StepContainer from './StepContainer';
import { Plus } from 'lucide-react';
import CustomButton from '@/components/reusable/CustomButton';

export default function FlowBuilderPage() {
    const [flow, updateFlow] = useImmer<Flow>({
        id: 'flow-root',
        name: 'B',
        steps: []
    });

    const addStep = () => {
        updateFlow(draft => {
            const stepNumber = draft.steps.length + 1;
            draft.steps.push({
                id: `step-${crypto.randomUUID()}`,
                name: `Step ${stepNumber}`,
                sections: []
            });
        });
    };

    const addSection = (stepId: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            if (step) {
                step.sections.push({
                    id: `sec-${crypto.randomUUID()}`,
                    title: '', // Starts blank so user can type section heading directly
                    fields: []
                });
            }
        });
    };

    const updateSectionTitle = (stepId: string, sectionId: string, title: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            if (section) section.title = title;
        });
    };

    const addField = (stepId: string, sectionId: string, fieldData: Omit<Field, 'id' | 'subfields'>) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            if (section) {
                section.fields.push({
                    ...fieldData,
                    id: `field-${crypto.randomUUID()}`,
                    isExpanded: true,
                    subfields: []
                });
            }
        });
    };

    const toggleFieldExpand = (stepId: string, sectionId: string, fieldId: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            const field = section?.fields.find(f => f.id === fieldId);
            if (field) field.isExpanded = !field.isExpanded;
        });
    };

    const addSubField = (stepId: string, sectionId: string, fieldId: string) => {
        const label = prompt("Enter subfield display label name:");
        if (!label) return;

        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            const field = section?.fields.find(f => f.id === fieldId);
            if (field) {
                field.subfields.push({
                    id: `sub-${crypto.randomUUID()}`,
                    label,
                    type: 'Select/Dropdown'
                });
            }
        });
    };

    const updateGroupTitle = (stepId: string, sectionId: string, fieldId: string, title: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            const field = section?.fields.find(f => f.id === fieldId);
            if (field) field.subFieldGroupTitle = title;
        });
    };

    const deleteStep = (stepId: string) => {
        updateFlow(draft => { draft.steps = draft.steps.filter(s => s.id !== stepId); });
    };

    const deleteSection = (stepId: string, sectionId: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            if (step) step.sections = step.sections.filter(sec => sec.id !== sectionId);
        });
    };

    const deleteField = (stepId: string, sectionId: string, fieldId: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            if (section) section.fields = section.fields.filter(f => f.id !== fieldId);
        });
    };

    const deleteSubField = (stepId: string, sectionId: string, fieldId: string, subFieldId: string) => {
        updateFlow(draft => {
            const step = draft.steps.find(s => s.id === stepId);
            const section = step?.sections.find(sec => sec.id === sectionId);
            const field = section?.fields.find(f => f.id === fieldId);
            if (field) field.subfields = field.subfields.filter(sf => sf.id !== subFieldId);
        });
    };

    return (
        <div className="mx-auto min-h-screen max-w-[1192px] bg-white p-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-[32px] font-semibold leading-[46px] text-[#151513]">
                    Create Template Step
                </h2>
                <div className="flex items-center gap-2">
                    <CustomButton variant="outline">
                        Live Preview
                    </CustomButton>
                    <CustomButton variant="primary">
                        Publish
                    </CustomButton>
                </div>
            </div>

            <div className="rounded-2xl border border-[#E6EBEF] bg-white p-6 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
                <div className="mb-6">
                    <label className="mb-2 block text-lg font-medium leading-6 text-[#070707]">
                        Flow name
                    </label>
                    <input
                        type="text"
                        value={flow.name}
                        onChange={(e) => updateFlow(d => { d.name = e.target.value; })}
                        className="w-full rounded border border-[rgba(8,14,30,0.05)] bg-[rgba(8,14,30,0.02)] p-4 backdrop-blur-[2px]"
                    />
                </div>

                <button
                    onClick={addStep}
                    className="mb-6 flex h-12 w-full items-center justify-center gap-2 rounded border border-[#2563EB] px-6 py-4"
                >
                    <span className="flex items-center gap-2 text-base font-semibold text-[#2563EB]">
                        <Plus size={20} />
                        Add Step
                    </span>
                </button>

                <div className="space-y-6">
                    {flow.steps.map(step => (
                        <StepContainer
                            key={step.id}
                            step={step}
                            onAddSection={addSection}
                            onUpdateSectionTitle={updateSectionTitle}
                            onDeleteStep={deleteStep}
                            onAddField={addField}
                            onToggleFieldExpand={toggleFieldExpand}
                            onAddSubField={addSubField}
                            onUpdateGroupTitle={updateGroupTitle}
                            onDeleteSection={deleteSection}
                            onDeleteField={deleteField}
                            onDeleteSubField={deleteSubField}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
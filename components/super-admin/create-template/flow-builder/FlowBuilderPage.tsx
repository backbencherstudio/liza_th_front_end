'use client';

import { useImmer } from 'use-immer';
import { Field } from '@/types/formBuilder';
import StepContainer from './StepContainer';
import CustomButton from '@/components/reusable/CustomButton';
import {
    createInitialFlow,
    syncMappingSectionsFromDashboardTypes,
} from './initialFlow';

const STEP1_ID = 'step-1';
const STEP2_ID = 'step-2';
const STEP3_ID = 'step-3';
const DASHBOARD_SECTION_ID = 'sec-dashboard-type';

export default function FlowBuilderPage() {
    const [flow, updateFlow] = useImmer(createInitialFlow);

    const addSection = (stepId: string) => {
        if (stepId === STEP1_ID || stepId === STEP3_ID) return;

        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            if (!step || step.kind === 'mapping') return;
            step.sections.push({
                id: `sec-${crypto.randomUUID()}`,
                title: '',
                fields: [],
            });
        });
    };

    const updateSectionTitle = (stepId: string, sectionId: string, title: string) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            const section = step?.sections.find((sec) => sec.id === sectionId);
            if (section) section.title = title;
        });
    };

    const addField = (stepId: string, sectionId: string, fieldData: Omit<Field, 'id'>) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            const section = step?.sections.find((sec) => sec.id === sectionId);
            if (!section) return;
            if (sectionId === 'sec-upload') return;

            const isDashboardSection = sectionId === DASHBOARD_SECTION_ID;
            const isGoalsSection = stepId === STEP3_ID;

            section.fields.push({
                ...fieldData,
                type: isDashboardSection
                    ? 'Single Select'
                    : isGoalsSection
                        ? 'Multi Select'
                        : fieldData.type,
                id: `field-${crypto.randomUUID()}`,
            });

            if (isDashboardSection) {
                const step2 = draft.steps.find((s) => s.id === STEP2_ID);
                if (step2) {
                    step2.sections = syncMappingSectionsFromDashboardTypes(
                        section.fields,
                        step2.sections
                    );
                }
            }
        });
    };

    const deleteStep = (stepId: string) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            if (step?.locked) return;
            draft.steps = draft.steps.filter((s) => s.id !== stepId);
        });
    };

    const deleteSection = (stepId: string, sectionId: string) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            const section = step?.sections.find((sec) => sec.id === sectionId);
            if (!step || section?.locked) return;

            if (stepId === STEP2_ID && section?.linkedDashboardFieldId) {
                const step1 = draft.steps.find((s) => s.id === STEP1_ID);
                const dashSec = step1?.sections.find((s) => s.id === DASHBOARD_SECTION_ID);
                if (dashSec) {
                    dashSec.fields = dashSec.fields.filter(
                        (f) => f.id !== section.linkedDashboardFieldId
                    );
                }
            }

            step.sections = step.sections.filter((sec) => sec.id !== sectionId);
        });
    };

    const deleteField = (stepId: string, sectionId: string, fieldId: string) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            const section = step?.sections.find((sec) => sec.id === sectionId);
            const field = section?.fields.find((f) => f.id === fieldId);
            if (!section || field?.locked) return;

            section.fields = section.fields.filter((f) => f.id !== fieldId);

            if (stepId === STEP1_ID && sectionId === DASHBOARD_SECTION_ID) {
                const step2 = draft.steps.find((s) => s.id === STEP2_ID);
                if (step2) {
                    step2.sections = syncMappingSectionsFromDashboardTypes(
                        section.fields,
                        step2.sections
                    );
                }
            }
        });
    };

    const renameFieldLabel = (
        stepId: string,
        sectionId: string,
        fieldId: string,
        label: string
    ) => {
        updateFlow((draft) => {
            const step = draft.steps.find((s) => s.id === stepId);
            const section = step?.sections.find((sec) => sec.id === sectionId);
            const field = section?.fields.find((f) => f.id === fieldId);
            if (field) field.label = label;

            if (stepId === STEP1_ID && sectionId === DASHBOARD_SECTION_ID && section) {
                const step2 = draft.steps.find((s) => s.id === STEP2_ID);
                if (step2) {
                    step2.sections = syncMappingSectionsFromDashboardTypes(
                        section.fields,
                        step2.sections
                    );
                }
            }
        });
    };

    return (
        <div className="mx-auto min-h-screen max-w-[1192px] bg-white p-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-[32px] font-semibold leading-[46px] text-[#151513]">
                    Create Template Step
                </h2>
                <div className="flex items-center gap-2">
                    {/* <CustomButton variant="outline">Live Preview</CustomButton> */}
                    <CustomButton variant="primary">Publish</CustomButton>
                </div>
            </div>

            <div className="rounded-2xl border border-[#E6EBEF] bg-white p-6 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
               
                <div className="space-y-6">
                    {flow.steps.map((step) => (
                        <StepContainer
                            key={step.id}
                            step={step}
                            onAddSection={addSection}
                            onUpdateSectionTitle={updateSectionTitle}
                            onDeleteStep={deleteStep}
                            onAddField={addField}
                            onDeleteSection={deleteSection}
                            onDeleteField={deleteField}
                            onRenameField={renameFieldLabel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

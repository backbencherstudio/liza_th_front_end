import { Field, Flow, Section } from '@/types/formBuilder';
import { DashboardType } from '@/types/dashboard';

/** Maps the user-facing DashboardType code to the full dashboard name used in DEFAULT_MAPPING_FIELDS */
export const DASHBOARD_TYPE_TO_NAME: Record<DashboardType, string> = {
  EXEC: 'Executive Summary Dashboard',
  FIN:  'Financial Performance Dashboard',
  OPS:  'Operational KPI Dashboard',
};

/** Heading shown in Step 2 for each dashboard type */
export const MAPPING_STEP_TITLE: Record<DashboardType, string> = {
  EXEC: 'Map Headers for Executive Summary',
  FIN:  'Financial Performance Map Header',
  OPS:  'Operational KPI Map Header',
};

/** Returns the ordered field definitions for a given dashboard type */
export function getMappingFieldsForType(
  type: DashboardType
): Omit<Field, 'id'>[] {
  return DEFAULT_MAPPING_FIELDS[DASHBOARD_TYPE_TO_NAME[type]] ?? [
    { label: 'Period', type: 'Select/Dropdown', isRequired: true },
  ];
}

let _n = 0;
const uid = (prefix: string) => {
  // Stable during a single createInitialFlow() call; unique across calls via Date
  _n += 1;
  return `${prefix}-init-${_n}`;
};

const field = (
  label: string,
  type: Field['type'],
  extra: Partial<Field> = {}
): Field => ({
  id: uid('field'),
  label,
  type,
  isRequired: false,
  ...extra,
});

/** Default mapping fields shown for each dashboard type in Step 2 */
export const DEFAULT_MAPPING_FIELDS: Record<string, Omit<Field, 'id'>[]> = {
  'Executive Summary Dashboard': [
    { label: 'Period', type: 'Select/Dropdown', isRequired: true },
    { label: 'Expenses', type: 'Select/Dropdown', isRequired: true },
    { label: 'Revenue', type: 'Select/Dropdown', isRequired: true },
    { label: 'Cash Balance', type: 'Select/Dropdown', isRequired: false },
    { label: 'Location', type: 'Select/Dropdown', isRequired: false },
    { label: 'Category', type: 'Select/Dropdown', isRequired: false },
    { label: 'Gross margin', type: 'Select/Dropdown', isRequired: false },
    { label: 'Add Budget', type: 'Hybrid', isRequired: false },
  ],
  'Financial Performance Dashboard': [
    { label: 'Period', type: 'Select/Dropdown', isRequired: true },
    { label: 'Revenue', type: 'Select/Dropdown', isRequired: true },
    { label: 'Spend', type: 'Select/Dropdown', isRequired: true },
    { label: 'Cash Balance', type: 'Select/Dropdown', isRequired: false },
    { label: 'Budgeted Spend', type: 'Select/Dropdown', isRequired: false },
    { label: 'Location', type: 'Select/Dropdown', isRequired: false },
    { label: 'Category', type: 'Select/Dropdown', isRequired: false },
  ],
  'Operational KPI Dashboard': [
    { label: 'Period', type: 'Select/Dropdown', isRequired: true },
    { label: 'Department', type: 'Select/Dropdown', isRequired: true },
    { label: 'Vendor', type: 'Select/Dropdown', isRequired: false },
    { label: 'Expenses', type: 'Select/Dropdown', isRequired: true },
    { label: 'Location', type: 'Select/Dropdown', isRequired: false },
  ],
};

const mappingTitleFor = (dashboardLabel: string) => {
  if (dashboardLabel.includes('Executive')) return 'Map Headers for Executive Summary';
  if (dashboardLabel.includes('Financial')) return 'Financial Performance Map Header';
  if (dashboardLabel.includes('Operational')) return 'Operational KPI Map Header';
  return `${dashboardLabel} Map Header`;
};

const mappingFieldsFor = (dashboardLabel: string): Field[] => {
  const presets = DEFAULT_MAPPING_FIELDS[dashboardLabel];
  const list = presets ?? [
    { label: 'Period', type: 'Select/Dropdown' as const, isRequired: true },
  ];
  return list.map((f) => field(f.label, f.type, { isRequired: f.isRequired }));
};

export function createInitialFlow(): Flow {
  _n = 0; // reset so repeated calls stay consistent within session

  const execId = 'field-dashboard-exec';
  const finId = 'field-dashboard-fin';
  const opsId = 'field-dashboard-ops';

  return {
    id: 'flow-root',
    name: '',
    steps: [
      {
        id: 'step-1',
        name: 'Step 1',
        locked: true,
        kind: 'upload',
        sections: [
          {
            id: 'sec-upload',
            title: 'Upload Your File',
            locked: true,
            fields: [
              field('Upload file', 'Upload file', {
                id: 'field-upload',
                locked: true,
                isRequired: true,
              }),
            ],
          },
          {
            id: 'sec-dashboard-type',
            title: 'Select Dashboard Type',
            locked: true,
            fields: [
              {
                id: execId,
                label: 'Executive Summary Dashboard',
                type: 'Single Select',
                isRequired: true,
              },
              {
                id: finId,
                label: 'Financial Performance Dashboard',
                type: 'Single Select',
                isRequired: true,
              },
              {
                id: opsId,
                label: 'Operational KPI Dashboard',
                type: 'Single Select',
                isRequired: true,
              },
            ],
          },
        ],
      },
      {
        id: 'step-2',
        name: 'Step 2',
        locked: true,
        kind: 'mapping',
        sections: [
          {
            id: 'sec-map-exec',
            title: mappingTitleFor('Executive Summary Dashboard'),
            linkedDashboardFieldId: execId,
            fields: mappingFieldsFor('Executive Summary Dashboard'),
          },
          {
            id: 'sec-map-fin',
            title: mappingTitleFor('Financial Performance Dashboard'),
            linkedDashboardFieldId: finId,
            fields: mappingFieldsFor('Financial Performance Dashboard'),
          },
          {
            id: 'sec-map-ops',
            title: mappingTitleFor('Operational KPI Dashboard'),
            linkedDashboardFieldId: opsId,
            fields: mappingFieldsFor('Operational KPI Dashboard'),
          },
        ],
      },
      {
        id: 'step-3',
        name: 'Step 3',
        locked: true,
        kind: 'goals',
        sections: [
          {
            id: 'sec-goals',
            title: 'Your Business Goals',
            locked: true,
            fields: [
              field('Improve cash flow', 'Multi Select'),
              field('Increase profitability', 'Multi Select'),
              field('Reduce expenses', 'Multi Select'),
              field('Grow revenue', 'Multi Select'),
              field('Improve collections (AR)', 'Multi Select'),
              field('Manage payables (AP)', 'Multi Select'),
              field('Stay on budget', 'Multi Select'),
              field('Improve forecasting', 'Multi Select'),
              field('Prepare for funding/investors', 'Multi Select'),
              field('Prepare for acquisition', 'Multi Select'),
              field('Benchmark against peers', 'Multi Select'),
              field('Improve operational efficiency', 'Multi Select'),
            ],
          },
        ],
      },
    ],
  };
}

/** Rebuild Step 2 sections from Step 1 dashboard-type fields (keeps existing field configs when possible). */
export function syncMappingSectionsFromDashboardTypes(
  dashboardFields: Field[],
  existingMappingSections: Section[]
): Section[] {
  return dashboardFields.map((dashField) => {
    const existing = existingMappingSections.find(
      (s) => s.linkedDashboardFieldId === dashField.id
    );

    if (existing) {
      return {
        ...existing,
        title: mappingTitleFor(dashField.label),
        linkedDashboardFieldId: dashField.id,
      };
    }

    return {
      id: `sec-${crypto.randomUUID()}`,
      title: mappingTitleFor(dashField.label),
      linkedDashboardFieldId: dashField.id,
      fields: mappingFieldsFor(dashField.label),
    };
  });
}

export type FieldType =
  | 'Text Label'
  | 'Text Input'
  | 'Single Select'
  | 'Multi Select'
  | 'Select/Dropdown'
  | 'Number Input'
  | 'Hybrid'
  | 'Upload file';

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  labelDescription?: string;
  options?: string[];
  isRequired: boolean;
  /** Prevent delete for fixed system fields (e.g. Upload file) */
  locked?: boolean;
}

export interface Section {
  id: string;
  title: string;
  fields: Field[];
  /** Prevent remove section / structural changes */
  locked?: boolean;
  /**
   * Links a Step 2 mapping section to a dashboard-type field id from Step 1 Section 2.
   * When that dashboard type is added/removed/renamed, this section syncs.
   */
  linkedDashboardFieldId?: string;
}

export interface Step {
  id: string;
  name: string;
  sections: Section[];
  /** Fixed wizard steps cannot be deleted; Add New Section may be restricted */
  locked?: boolean;
  /** Restrict which sections can be freely added */
  kind?: 'upload' | 'mapping' | 'goals';
}

export interface Flow {
  id: string;
  name: string;
  steps: Step[];
}

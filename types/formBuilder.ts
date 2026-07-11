export type FieldType = 
  | 'Text Label' 
  | 'Text Input' 
  | 'Single Select' 
  | 'Multi Select' 
  | 'Select/Dropdown' 
  | 'Number Input' 
  | 'Hybrid' 
  | 'Upload file';

export interface SubField {
  id: string;
  label: string;
  type: FieldType;
}

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  labelDescription?: string;
  options?: string[];
  isRequired: boolean;
  isExpanded?: boolean;
  subFieldGroupTitle?: string;
  subfields: SubField[];
}

export interface Section {
  id: string;
  title: string; // This will now be bound to the input field
  fields: Field[];
}

export interface Step {
  id: string;
  name: string;
  sections: Section[];
}

export interface Flow {
  id: string;
  name: string;
  steps: Step[];
}
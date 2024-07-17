export interface BaseInputProps {
    id: string;
    name?: string;
    label: string;
    errors?: Array<string>;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    value?: string;
}

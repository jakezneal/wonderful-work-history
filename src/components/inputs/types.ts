export interface WrapperProps {
    id: string;
    label: string;
    errors?: Array<string>;
    required?: boolean;
}

export interface BaseInputProps extends WrapperProps {
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
}

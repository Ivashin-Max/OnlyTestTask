import { FormState, Path, UseFormRegister } from "react-hook-form";

export type FormData = {
  login: string,
  password: string,
  savePassword: string
}

export interface IFormValues {
  login: string;
  password: string;
  savePassword: string;
}

export type InputProps = {
  isValid?: string;
  name: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  type?: string;
  formState?: FormState<IFormValues>;
};

export type LabelProps = {
  checked: boolean;
}

export type InputStyleProps = {
  isValid: boolean;
};

export type FormValues = {
  label: string;
  name: string;
}

export type LabeledInputProps = {
  label: string;
  name: string;
  type?: string
}




export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
} & (
    | { primary: boolean, secondary?: never }
    | { primary?: never, secondary: boolean }
  )
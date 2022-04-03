import { FieldError, FormState, Path, UseFormRegister } from "react-hook-form";

export type FormData = {
  login: string,
  password: string,
  savePassword: number
}

export interface IFormValues {
  "login": string;
  "password": string;
  "savePassword": string;
}

export type InputProps = {
  valid: string;
  name: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  type?: string;
  formState?: FormState<IFormValues>;
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
  name: string;
}
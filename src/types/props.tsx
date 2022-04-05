import { UseFormRegister, FormState, Path } from "react-hook-form";
import { IFormValues } from "./form";

export type TitleProps = {
  textTransform?: string;
  children?: React.ReactNode
}

export type ReactChildrenProp = {
  children: React.ReactNode
}

export type FlexWraperProps = {
  direction?: string,
  justify?: string,
  align?: string,
  fullheight?: boolean;
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
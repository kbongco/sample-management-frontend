import { ChangeEvent } from "react";

export interface Pagination {
  totalNumber: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  lastPage: number;
}

export interface Button {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export interface InputProp {
  type?: 'text' | 'password' | 'email'
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
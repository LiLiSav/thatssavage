import { ReactNode } from "react";

export interface CardOptionsProps {
  label: string;
  front: string;
  bulletpoints?: string[];
  children?: ReactNode;
}

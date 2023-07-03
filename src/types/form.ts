export interface FormValueTypes {
  name: string;
  phone: string;
  email: string;
  message: string;
  check: boolean;
  subject: string;
  from_name: string;
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type FormSubmission = PartialBy<FormValueTypes, "phone">;

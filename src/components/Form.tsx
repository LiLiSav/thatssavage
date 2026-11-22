import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@tanstack/react-router";
import { CheckIcon } from "components/Icons";
import { ReactNode, useEffect } from "react";
import { Resolver, useForm, useWatch } from "react-hook-form";
import { FormValueTypes } from "types/form";
import * as yup from "yup";

const fieldControl =
  "block w-full border-2 border-ink bg-paper px-3 py-2 text-ink placeholder:text-ink/60 aria-invalid:border-tomato aria-invalid:shadow-hard-tomato";

interface FieldProps {
  id: keyof FormValueTypes;
  label: string;
  required?: boolean;
  invalid: boolean;
  children: ReactNode;
}

const Field = ({ id, label, required, invalid, children }: FieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-2 font-masthead text-sm uppercase"
    >
      {label}
      {required && <span aria-hidden="true">*</span>}
      {invalid && (
        <span
          aria-hidden="true"
          className="grid size-5 place-items-center rounded-full bg-tomato text-sm font-bold text-paper"
        >
          !
        </span>
      )}
    </label>
    {children}
  </div>
);

const defaultValues: FormValueTypes = {
  name: "",
  email: "",
  message: "",
  check: false,
  subject: "",
  from_name: "That's Savage",
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup.object().shape(
  {
    name: yup.string().min(2).max(100).required(),
    phone: yup
      .string()
      .notRequired()
      .when("phone", {
        is: (value: string | undefined) => value?.length,
        then: (rule) => rule.matches(phoneRegExp, "Phone number is not valid"),
      }),
    email: yup.string().min(3).max(50).email().required(),
    message: yup.string().min(3).max(200).required(),
    check: yup.boolean().oneOf([true]).defined(),
    subject: yup.string().required(),
    from_name: yup.string().required(),
  },
  [["phone", "phone"]],
);

interface FormProps {
  submitForm: (data: FormValueTypes) => void;
  loading: boolean;
  formIsSent: boolean;
}

export const Form = (props: FormProps) => {
  const { loading, submitForm, formIsSent } = props;
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitted, isValid },
  } = useForm<FormValueTypes>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema) as Resolver<FormValueTypes>,
  });

  const watchName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `New Form Submission from ${watchName}`);
  }, [watchName, setValue]);

  const submitButton = () => {
    if (loading)
      return (
        <div
          className="inline-block size-6 animate-spin rounded-full border-4 border-current border-r-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    if (formIsSent) return <CheckIcon />;
    else return "Submit";
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="grid gap-6">
      <input type="hidden" {...register("from_name")}></input>
      <input type="hidden" {...register("subject")} />
      <Field id="name" label="Name" required invalid={!!errors.name}>
        <input
          id="name"
          type="text"
          className={fieldControl}
          placeholder="John Doe"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
      </Field>

      <Field id="phone" label="Phone Number" invalid={!!errors.phone}>
        <input
          id="phone"
          type="tel"
          className={fieldControl}
          placeholder="+353 86 123 4567"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
      </Field>

      <Field id="email" label="Email Address" required invalid={!!errors.email}>
        <input
          id="email"
          type="email"
          className={fieldControl}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>

      <Field id="message" label="Message" required invalid={!!errors.message}>
        <textarea
          id="message"
          className={fieldControl}
          rows={3}
          placeholder="Please enter your message"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <div>
        <label
          htmlFor="check"
          className="flex min-h-11 items-center gap-3"
        >
          <input
            id="check"
            className="size-5 shrink-0 accent-ink"
            type="checkbox"
            {...register("check")}
          />
          <span>
            I have read and agree to the{" "}
            <Link to="/terms-and-conditions">Terms and Conditions</Link>{" "}
            <span aria-hidden="true">*</span>
          </span>
        </label>
        <p className="mb-0 text-sm">* Required</p>
      </div>

      <div>
        <button
          className={`press-button disabled:pointer-events-none disabled:opacity-60 ${
            isSubmitted ? "bg-ink text-paper" : ""
          }`}
          type="submit"
          disabled={!isValid || isSubmitted}
        >
          {submitButton()}
        </button>
      </div>
    </form>
  );
};

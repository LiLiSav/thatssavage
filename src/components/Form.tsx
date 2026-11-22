import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@tanstack/react-router";
import { CheckIcon } from "components/Icons";
import { useEffect } from "react";
import { Resolver, useForm, useWatch } from "react-hook-form";
import { FormValueTypes } from "types/form";
import * as yup from "yup";

const controlBase =
  "block w-full rounded-md border bg-white px-3 py-1.5 text-ink outline-none transition-shadow";
const controlIdle =
  "border-[#ced4da] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgb(13_110_253/0.25)]";
const controlBad = "border-[red] focus:shadow-[0_0_10px_red]";
const controlGood = "border-[green] focus:shadow-[0_0_10px_green]";
const label = "mb-2 inline-block font-bold";
const required = "text-required";

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
    formState: { dirtyFields, errors, isSubmitted, isValid },
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

  const inputClass = (field: keyof FormValueTypes) => {
    if (errors[field]) return `${controlBase} ${controlBad}`;
    if (dirtyFields[field]) return `${controlBase} ${controlGood}`;
    return `${controlBase} ${controlIdle}`;
  };

  const submitButton = () => {
    if (loading)
      return (
        <div
          className="inline-block size-8 animate-spin rounded-full border-4 border-current border-r-transparent [animation-duration:0.75s]"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    if (formIsSent) return <CheckIcon />;
    else return "Submit";
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="grid gap-4">
      <input type="hidden" {...register("from_name")}></input>
      <input type="hidden" {...register("subject")} />
      {/* NAME */}
      <div>
        <label htmlFor="name" className={label}>
          Name <span className={required}>*</span>
        </label>
        <input
          id="name"
          type="text"
          className={inputClass("name")}
          placeholder="John Doe"
          {...register("name")}
        />
      </div>

      {/* PHONE NUMBER */}
      <div>
        <label htmlFor="phone" className={label}>
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={inputClass("phone")}
          placeholder="+353 86 123 4567"
          {...register("phone")}
        />
      </div>

      {/* EMAIL ADDRESS */}
      <div>
        <label htmlFor="email" className={label}>
          Email Address <span className={required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          className={inputClass("email")}
          placeholder="you@company.com"
          {...register("email")}
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label htmlFor="message" className={label}>
          Message <span className={required}>*</span>
        </label>
        <textarea
          id="message"
          className={inputClass("message")}
          rows={3}
          placeholder="Please enter your message"
          {...register("message")}
        />
      </div>

      {/* CHECK */}
      <div>
        <div className="flex items-start gap-2">
          <label htmlFor="check">
            I have read and agree to the{" "}
            <Link className="text-link" to="/terms-and-conditions">
              Terms and Conditions
            </Link>{" "}
            <span className={required}>*</span>
          </label>
          <input
            id="check"
            className="order-first mt-1.5 size-4"
            type="checkbox"
            {...register("check")}
          />
        </div>
        <p className={required}>* Required</p>
      </div>
      {/* SUBMIT */}
      <div>
        <button
          className={`mb-1 rounded-md border px-3 py-1.5 text-center disabled:pointer-events-none disabled:opacity-65 ${
            isSubmitted
              ? "border-[green] bg-[green] text-white"
              : "border-warning bg-warning text-black hover:border-warning-hover hover:bg-warning-hover"
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

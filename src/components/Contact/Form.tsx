import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormValueTypes } from "types/form";
import { CheckIcon } from "components/Icons";
import styles from "./Form.module.scss";

const defaultValues: FormValueTypes = {
  name: "",
  phone: "",
  email: "",
  message: "",
  check: false,
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup.object().shape(
  {
    name: yup.string().min(2).max(100).required(),
    phone: yup
      .string()
      .nullable()
      .notRequired()
      .when("phone", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(phoneRegExp, "Phone number is not valid"),
      }),
    email: yup.string().min(3).max(50).email().required(),
    message: yup.string().min(3).max(200).required(),
    check: yup.boolean().oneOf([true]).required(),
  },
  [["phone", "phone"]]
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
    formState: { dirtyFields, errors, isSubmitted, isValid },
  } = useForm<FormValueTypes>({ defaultValues, mode: "onChange", resolver: yupResolver(schema) });

  const inputColor = (field: keyof FormValueTypes) => {
    if (errors[field]) return styles.formBad;
    if (dirtyFields[field] && !errors[field]) return styles.formGood;
    return "";
  };

  const submitButton = () => {
    if (loading)
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    if (formIsSent) return <CheckIcon />;
    else return "Submit";
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="row g-3">
      {/* NAME */}
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name <span className={styles.isRequired}>*</span>
        </label>
        <div className={inputColor("name")}>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="John Doe"
            {...register("name")}
          />
        </div>
      </div>

      {/* PHONE NUMBER */}
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <div className={inputColor("phone")}>
          <input
            id="phone"
            type="tel"
            className="form-control"
            placeholder="+353 86 123 4567"
            {...register("phone")}
          />
        </div>
      </div>

      {/* EMAIL ADDRESS */}
      <div className="col-12">
        <label htmlFor="email" className="form-label">
          Email Address <span className={styles.isRequired}>*</span>
        </label>
        <div className={inputColor("email")}>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="you@company.com"
            {...register("email")}
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="col-12">
        <label htmlFor="message" className="form-label">
          Message <span className={styles.isRequired}>*</span>
        </label>
        <div className={inputColor("message")}>
          <textarea
            id="message"
            className="form-control"
            rows={3}
            placeholder="Please enter your message"
            {...register("message")}
          />
        </div>
      </div>

      {/* CHECK */}
      <div className="col-12">
        <div className="form-check">
          <label className="form-check-label" htmlFor="check">
            I have read and agree to the{" "}
            <Link className="yellowLink" to="/terms-and-conditions">
              Terms and Conditions
            </Link>{" "}
            <span className={styles.isRequired}>*</span>
          </label>
          <input id="check" className="form-check-input" type="checkbox" {...register("check")} />
        </div>
      </div>
      {/* SUBMIT */}
      <div>
        <p className={styles.isRequiredText}>* Required</p>
        <button
          className={`btn mt-0 mb-1 ${isSubmitted ? styles.submitButton : "btn-warning"}`}
          type="submit"
          disabled={!isValid || isSubmitted}
        >
          {submitButton()}
        </button>
      </div>
    </form>
  );
};

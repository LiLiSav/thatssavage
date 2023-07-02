import { useState } from "react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import styles from "components/Contact/Form.module.scss";
import { Form } from "components/Contact";
import { FormValueTypes } from "types/form";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);

  const submitForm: SubmitHandler<FormValueTypes> = async (data: FormValueTypes) => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { check, ...formData } = data;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_FORM_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Thanks for your message!");
        setFormIsSent(true);
      } else {
        toast.error(result.body.message);
      }
    } catch (err) {
      toast.error("Something went wrong! Refresh the page or give us a call.");
    }
    setLoading(false);
  };

  return (
    <div className={`${styles.cardContainer} container card shadow px-5 my-4`}>
      <h2 className="title text-warning pt-3">Contact Us</h2>
      <h4>
        Got a question? Want a quote? Got some feedback? Don&apos;t hesitate to get in contact and
        we will be happy to help.
      </h4>
      <p className={styles.isRequiredText}>* Required</p>
      <hr />
      <div className="fw-bold">
        <Form loading={loading} submitForm={submitForm} formIsSent={formIsSent} />
      </div>
    </div>
  );
}

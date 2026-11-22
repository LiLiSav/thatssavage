import { createFileRoute } from "@tanstack/react-router";
import { Form } from "components/Form";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { FormSubmission, FormValueTypes } from "types/form";

export const Route = createFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const [loading, setLoading] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);

  const submitForm: SubmitHandler<FormValueTypes> = async (
    data: FormValueTypes,
  ) => {
    setLoading(true);
    const { check, ...formData }: FormSubmission = data;
    if (!formData.phone) delete formData.phone;
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
    <section className="bg-silver shadow-[0_0.5rem_1rem_rgb(0_0_0/0.15)] md:py-4">
      <div className="container card p-12">
        <h1 className="font-bold text-yellow-dark">Contact Us</h1>
        <hr />
        <p className="pb-4 font-bold">
          Got a question? Want a quote? Got some feedback? Don&apos;t hesitate
          to get in contact and we will be happy to help.
        </p>
        <div>
          <Form
            loading={loading}
            submitForm={submitForm}
            formIsSent={formIsSent}
          />
        </div>
      </div>
    </section>
  );
}

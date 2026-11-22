import { createFileRoute } from "@tanstack/react-router";
import { Form } from "components/Form";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { FormSubmission, FormValueTypes } from "types/form";

const title = "Contact | That's Savage";
const description =
  "Ask for a quote or send a question. That's Savage in Monaghan will get back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const [loading, setLoading] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);

  const submitForm: SubmitHandler<FormValueTypes> = async (
    data: FormValueTypes,
  ) => {
    setLoading(true);
    const { check: _check, ...formData }: FormSubmission = data;
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
    } catch {
      toast.error("Something went wrong! Refresh the page or give us a call.");
    }
    setLoading(false);
  };

  return (
    <main className="mx-auto grid w-full max-w-sheet gap-8 px-gutter py-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1 className="headline misregister ink-bubblegum mb-6 text-royal">
          Contact Us
        </h1>
        <p className="max-w-prose text-xl italic">
          Got a question? Want a quote? Got some feedback? Don&apos;t hesitate
          to get in contact and we will be happy to help.
        </p>
        <div aria-hidden="true" className="relative mt-8 hidden h-48 lg:block">
          <div className="rough-edges absolute top-0 left-0 size-40 rounded-full bg-tangerine" />
          <div className="motif-lines rough-edges ink-overlap absolute top-8 left-20 h-40 w-32 text-royal" />
        </div>
      </div>

      <div className="ink-noise relative border-2 border-dashed border-ink bg-aqua p-6 sm:p-8 lg:col-span-7">
        <span
          aria-hidden="true"
          className="absolute -top-4 left-6 bg-paper px-2 text-2xl leading-none"
        >
          ✂
        </span>
        <Form
          loading={loading}
          submitForm={submitForm}
          formIsSent={formIsSent}
        />
      </div>
    </main>
  );
}

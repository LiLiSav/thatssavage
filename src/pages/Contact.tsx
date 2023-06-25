import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FormProps } from "types/form";

const defaultFormData = {
  name: "",
  surname: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormProps>(defaultFormData);
  const [loading, setLoading] = useState(false);

  const updateInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://thatssavage-backend.herokuapp.com/", formData);
      if (res.data === "success") {
        toast.success("Thanks for your message!");
        setFormData(defaultFormData);
      } else {
        toast.error("Something went wrong! Refresh the page or give us a call.");
      }
    } catch (err) {
      toast.error("Something went wrong! Refresh the page or give us a call.");
    }
    setLoading(false);
  };

  return (
    <div className="container bg-secondary card shadow p-3 mb-2 mt-2">
      <h2 className="title text-warning">Contact Us</h2>
      <p className="text-dark" style={{ fontWeight: "bold" }}>
        Got a question? Want a quote? Got some feedback? Don&apos;t hesitate to get in contact and
        we will be happy to help. Thank you!
      </p>
      <hr />
      <div className="contactUs text-warning font-weight-bold">
        <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
          <div className="col-md-6">
            <label htmlFor="formFirstName" className="form-label">
              First Name
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="formFirstName"
                placeholder="Enter first name"
                onChange={updateInput}
                name="name"
                value={formData.name}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter your first name.</div>
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="formSurname" className="form-label">
              Surname
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                placeholder="Enter surname"
                id="formSurname"
                onChange={updateInput}
                name="surname"
                value={formData.surname}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter your surname.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="formEmail" className="form-label">
              Email Address
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                id="formEmail"
                type="email"
                placeholder="Enter email"
                onChange={updateInput}
                name="email"
                value={formData.email}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>
          </div>

          <div className="col-md-12">
            <label htmlFor="formComment" className="form-label">
              Comment
            </label>
            <div className="input-group has-validation">
              <textarea
                className="form-control"
                id="formComment"
                onChange={updateInput}
                rows={3}
                placeholder="Please enter your comment"
                name="message"
                value={formData.message}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please add your comment.</div>
            </div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                <Link className="text-warning" to="Terms-and-conditions">
                  I have read and agree to the Terms and Conditions
                </Link>
              </label>
              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>
          <div>
            <button className="btn btn-warning my-2 my-md-2" type="submit">
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

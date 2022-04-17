import emailjs from "@emailjs/browser";

import { useRef } from "react";

import { ContactHeader, ContactForm } from "../../molecules";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ContactWrapper() {
  const form = useRef();

  const notifySuccess = () => toast.success("Votre message a été envoyé.");
  const notifyError = () =>
    toast.error("Votre message n'a pas pu être envoyé.");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3uc8td",
        "template_02ea6h8",
        form.current,
        "0DShamxYbMkNvpBnq"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-y-9 bg-white pt-8 px-6 shadow rounded-xl sm:px-10">
      <ContactHeader />
      <ContactForm form={form} sendEmail={sendEmail} />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

import { ContactHeader, ContactForm } from "../../molecules";

export default function ContactWrapper() {
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-y-9 bg-white py-8 px-6 shadow rounded-xl sm:px-10">
      <ContactHeader />
      <ContactForm sendEmail={sendEmail} />
    </div>
  );
}

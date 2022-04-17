// Imports d'atomes
import { Button, Email, Name, TextArea } from "../../atoms";

export default function ContactForm({ form, sendEmail }) {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={sendEmail}
      ref={form}
      className="w-full flex items-center justify-center flex-col gap-y-4"
    >
      <div className="w-full flex flex-col gap-y-1">
        <Name />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <Email />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <TextArea />
      </div>
      <div className="w-full flex justify-center">
        <Button />
      </div>
    </form>
  );
}

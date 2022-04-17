// Imports d'atomes
import { Button, Email, TextArea } from "../../atoms";

export default function ContactForm({ sendEmail }) {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={sendEmail}
      className="w-full flex items-center justify-center flex-col gap-y-4"
    >
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

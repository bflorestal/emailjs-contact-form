export default function TextArea() {
  return (
    <>
      <label htmlFor="message" className="text-sm text-slate-900 ">
        Votre message
      </label>
      <textarea
        name="message"
        rows="5"
        cols="33"
        className="w-full text-sm rounded-lg shadow-sm resize-none focus:ring-sky-500 transition-all"
        placeholder="Votre message"
        required
      />
    </>
  );
}

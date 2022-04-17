export default function Email() {
  return (
    <>
      <label htmlFor="email" className="text-sm text-slate-900 ">
        Adresse e-mail
      </label>
      <input
        type="email"
        name="email"
        className="h-10 w-full text-sm rounded-lg shadow-sm focus:ring-sky-500 transition-all"
        placeholder="Adresse e-mail"
        required
      />
    </>
  );
}

export default function Name() {
  return (
    <>
      <label htmlFor="name" className="text-sm text-slate-900 ">
        Votre nom
      </label>
      <input
        type="text"
        name="name"
        className="h-10 w-full text-sm rounded-lg shadow-sm focus:ring-sky-500 transition-all"
        placeholder="Votre nom"
        required
      />
    </>
  );
}

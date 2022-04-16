import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Formulaire de contact</title>
        <meta name="description" content="Généré par create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 font-body">
        <section className="flex items-center justify-center min-h-screen px-4 lg:px-0">
          <div className="flex items-center justify-center flex-col gap-y-9 bg-white py-8 px-6 shadow rounded-xl sm:px-10">
            <div className="flex items-center justify-center flex-col gap-y-1.5 lg:gap-y-3">
              <h1 className="text-slate-900 text-4xl font-semibold">
                Me contacter
              </h1>
              <span className="text-slate-900">Pour me dire bonjour</span>
            </div>
            <form
              action="#"
              method="POST"
              onSubmit={sendEmail}
              className="w-full flex items-center justify-center flex-col gap-y-4"
            >
              <div className="w-full flex flex-col gap-y-1">
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
              </div>
              <div className="w-full flex flex-col gap-y-1">
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
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-white w-full lg:w-auto font-semibold h-12 px-6 rounded-lg highlight-white/20 focus:outline-none transition-all"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  );
}

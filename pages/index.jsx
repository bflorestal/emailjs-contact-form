import Head from "next/head";

import { ContactWrapper } from "../components/organisms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Formulaire de contact</title>
        <meta
          name="description"
          content="Un formulaire de contact réalisé avec EmailJS, Next.js et Tailwind. Notifications avec react-toastify."
        />
        <meta
          name="keywords"
          content="Contact, formulaire, form, emailjs, nextjs, reactjs, react, tailwind"
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 font-body">
        <section className="flex items-center justify-center min-h-screen px-4 lg:px-0">
          <ContactWrapper />
        </section>
      </main>
    </div>
  );
}

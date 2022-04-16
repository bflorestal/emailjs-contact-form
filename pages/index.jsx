import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 container">
      <Head>
        <title>Formulaire de contact</title>
        <meta name="description" content="Généré par create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="dark:text-white text-4xl lg:text-6xl">Me contacter</h1>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}

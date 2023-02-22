import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className='bg-slate-500 text-white h-screen'>
      <Head>
        <title>Zach Sykes' Portfolio</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero/>
      </section>
    </div>
  );
}

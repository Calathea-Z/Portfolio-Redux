import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className='bg-slate-500 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80'>
      <Head>
        <title>Zach Sykes' Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
}

import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Sykes' Portfolio</title>
      </Head>

      <header>
        <Header />

      </header>

    </>
  )
}

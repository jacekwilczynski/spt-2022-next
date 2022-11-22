import { Image } from '@/components/Image'
import { TopNav } from '@/components/TopNav/TopNav'
import { TopStripe } from '@/components/TopStripe'
import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Sala Prób Toruń</title>
    </Head>
    <header role="banner">
      <TopStripe/>
      <TopNav/>
      <Image name="header-photo" alt="Zdjęcie Sali 1"/>
    </header>
  </>
}

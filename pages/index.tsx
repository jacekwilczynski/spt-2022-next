import { HeaderImage } from '@/components/HeaderImage'
import { MidNav } from '@/components/MidNav'
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
      <HeaderImage/>
      <MidNav/>
    </header>
  </>
}

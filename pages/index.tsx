import { Main } from '@/components/Main'
import { ResponsiveIFrame } from '@/components/ResponsiveIFrame'
import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Sala Prób Toruń</title>
    </Head>

    <Main>
      <h1>Witamy!</h1>
      <p>
        <strong>Sala Prób Toruń</strong>, to miejsce dla osób szukających
        idealnego brzmienia i warunków, aby hobbystycznie czy też profesjonalnie
        zająć się tworzeniem muzyki.
      </p>
      <p>
        Obiekt ma około 130 m2. Trzy klimatyzowane sale prób, reżyserka, łazienka,
        przestronny hol z sofami, lodówka, kawa, herbata. Możliwość nagrania
        zespołu na setkę, riderowymi mikrofonami. Na próby zapraszamy wszystkich
        muzykow oraz hobbystow.
      </p>
      <ResponsiveIFrame
        src="https://www.youtube.com/embed/ATiZKfEJRZE"
        title="Sala Prób Toruń w Muzycznym Kramie"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        heightToWidthRatio="56.25%"
      />
    </Main>
  </>
}

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Navbar} from '../components/Navbar'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Noted</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
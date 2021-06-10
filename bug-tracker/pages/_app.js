import '../styles/globals.css'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Trackr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Navbar} from '../components/Navbar'
import Head from 'next/head'
import { Auth0Provider } from "@auth0/auth0-react";


function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    return (
      <Auth0Provider
        domain="dev-d349x8p6.jp.auth0.com"
        clientId="OpEG8izRNcxOFcwj43zUZFVTFORj02uX"
        redirectUri={window.location.origin}
      >
        <Head>
          <title>Noted</title>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
      </Auth0Provider>
    )
  } else {
    return <h1>bro what the hell is this error; now i have to this dumb if statement so it doesnt run on server</h1>
  }
}

export default MyApp
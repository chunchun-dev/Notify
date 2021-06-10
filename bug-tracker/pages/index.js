import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'
import SplashPage from '../components/AlternatePages/SplashPage'
import Dashboard from '../components/AlternatePages/Dashboard'

export default function Home() {

  const [session, loading] = useSession()

  return (<>
    {!session && <>
      <SplashPage/>
    </>}
    {session && <>
      <Dashboard/>
    </>}
  </>)
}

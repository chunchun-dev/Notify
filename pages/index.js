import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router'

export default function Home() {


  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isLoading) {
    if (isAuthenticated) {
      router.push('/dashboard')
      return <h1>Dashboard redirect</h1>
    } else {
      return (
        <>
          <h1>Landing page</h1>
        </>
      )
    }
  } else {
    return 'loading'
  }
}

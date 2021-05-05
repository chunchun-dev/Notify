import NotePreviewGrid from '../components/NotePreviewGrid'
import { useRouter } from 'next/router'
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth0();

  
  if (isAuthenticated) {
    return (
      <>
        <NotePreviewGrid/>
      </>
    )
  } else {
    router.push('/')

    return <h1>bruh</h1>
  }
}

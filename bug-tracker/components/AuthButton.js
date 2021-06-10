import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Button from '@material-ui/core/Button'

function AuthButton() {
    const [session, loading] = useSession()

    return <>
        {!session && <>
            <Button onClick={() => signIn()} variant='contained'>Sign in</Button>
        </>}
        {session && <>
            <Button onClick={() => signOut()} variant='contained'>Sign out</Button>
        </>}
    </>
}

export default AuthButton

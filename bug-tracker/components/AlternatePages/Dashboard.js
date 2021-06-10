import React from 'react'
import { useSession } from 'next-auth/client'

function Dashboard() {

    const [session, loading] = useSession()

    return (
        <div class='p-5'>
            <h1>Welcome {session.user.name}!</h1>
        </div>
    )
}

export default Dashboard

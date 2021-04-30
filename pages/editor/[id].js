import {useRouter} from 'next/router'
import React from 'react'
import Editor from '../../components/Editor/Editor'

function editor() {

    const router = useRouter()
    const {id} = router.query

    return (
        <div style={{
            padding: '20px',
            margin: '20px'
        }}>
            <Editor id={id}/>
        </div>
    )
}

export default editor
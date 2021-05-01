import {useRouter} from 'next/router'
import React from 'react'
import MarkdownEditor from '../../components/Editor/MarkdownEditor'

function editor() {

    const router = useRouter()
    const {id} = router.query

    return (
        <div style={{
            padding: '5px',
            margin: '5px'
        }}>
            <MarkdownEditor/>
        </div>
    )
}

export default editor
import React from 'react'
import './index.css'

function NameInput() {

    const [name, setName] = React.useState('')

    return (
        <div class="right-side-header">
            <input class="dark-mode-text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
    )
}

export default NameInput

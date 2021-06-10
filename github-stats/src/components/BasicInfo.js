import React from 'react'
import './index.css'

function BasicInfo({data}) {
    return (
        <div class="basic-info">
            <img src={data.avatar_url} width='150vw' height='150vw' id='avatarPlace' alt='Avatar' />
            <h1 class="name">{data.name}</h1>
            <h2 class="bio">{data.bio}</h2>
        </div>
    )
}

export default BasicInfo

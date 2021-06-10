import React from 'react'
import './index.css'

function FollowerCard({data}) {
    return (
        <div class="stat-card">
            <p class="username">@{data.name}</p>
            <b class="follow-count">{data.followers}</b>
            <p class="caption">Followers</p>
        </div>
    )
}

export default FollowerCard

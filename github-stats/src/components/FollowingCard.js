import React from 'react'
import './index.css'

function FollowingCard({ data }) {
    return (
        <div class="stat-card">
            <p class="username">@{data.name}</p>
            <b class="follow-count">{data.following}</b>
            <p class="caption">Following</p>
        </div>
    )
}

export default FollowingCard
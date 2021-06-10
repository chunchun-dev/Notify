import React from 'react'
import './index.css'

function RepoCard({ data }) {
    return (
        <div class="stat-card">
            <p class="username">@{data.name}</p>
            <b class="follow-count">{data.public_repos}</b>
            <p class="caption">Repositories</p>
        </div>
    )
}

export default RepoCard

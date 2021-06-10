import React from 'react'
import './index.css'
import FollowerCard from './FollowerCard'
import FollowingCard from './FollowingCard'
import RepoCard from './RepoCard'
import HireCard from './HireCard'

function StatCardContainer({data}) {
    return (
        <div class="stat-card-container">
            <FollowerCard data={data}/>
            <FollowingCard data={data}/>
            <RepoCard data={data}/>
            <HireCard data={data}/>
        </div>
    )
}

export default StatCardContainer

import React from 'react'
import './index.css'

function StatCard({ data }) {
    if (data.hireable) {
        return (
            <div class="stat-card">
                <b class="follow-count">Up for hire!</b>
            </div>
        )
    } else {
        return (
            <div class="stat-card">
                <b class="follow-count">Not up for hire.</b>
            </div>
        )
    }
}

export default StatCard

import React from 'react'

export default function SortBy(props) {



    return (
        <>
            <select className="form-select" onChange={(e) => props.handleSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="activity">Activity</option>
                <option value="type">Type</option>
                <option value="participants">Participants</option>
            </select>
        </>
    )
}

import React from 'react'

export default function KekambasTable(props) {
  return (
    <div>
        <table className="table table-secondary table-striped">
            <thead>
                <tr>
                    <th scope='col'>Activity</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Participants</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

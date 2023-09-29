import React from 'react'
import KekambasRow from './KekambasRow'

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
            <tbody>
                <KekambasRow kekambas={props.kekambas} />
            </tbody>
        </table>
    </div>
  )
}

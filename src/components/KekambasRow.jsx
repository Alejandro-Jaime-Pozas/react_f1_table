import React from 'react'

export default function KekambasRow(props) {
// export default function KekambasRow({kekambas}) { // THIS DIRECTLY GRABS kekambas FROM props, SKIPPING ONE STEP EFFECTIVELY
    return (
        <>
            <tr>
                <td>{props.kekambas.activity}</td>
                <td>{props.kekambas.type}</td>
                <td>{props.kekambas.participants}</td>
            </tr>
        </>
    )
}

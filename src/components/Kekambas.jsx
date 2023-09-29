import React, { useEffect, useState } from 'react'
import KekambasTable from './KekambasTable'

export default function Kekambas() {

    const [kekambas, setKekambas] = useState({})

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity')
            // activity: Fix something that's broken in your house
            // type: diy
            // participants: 1
            // price: 0.1
            // link:
            // key: 6925988
            // accessibility: 0.3
            .then(res => res.json())
            .then(data => {
                setKekambas(data)
            }
            )
    }, []) // square brackets checking for changes in that variable
    

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn btn-primary my-4" >Random activity</button>
            </div>
            <KekambasTable kekambas={kekambas} />
        </>
    )
}

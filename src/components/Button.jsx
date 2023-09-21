import React, { useEffect, useState } from 'react'

export default function Button(props) {

    const [count, setCount] = useState(0)

    function handleRacerClick(step){
        console.log('Clicked');
        setCount(count + step)
    }

    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} w-100`} onClick={() => handleRacerClick(props.step)} >+{props.step} - {count}</button>
        )
}

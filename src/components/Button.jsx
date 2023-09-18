import React, { useState } from 'react'

export default function Button(props) {

    const [count, setCount] = useState(0)

    function handleClick(e){ // the 'e' refers to the event/Sythetic event, so in this case 'onClick'
        setCount(count + props.step )
        // console.log(e)
        // console.log('i have been clicked')
    }

    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} w-100`} onClick={handleClick}>{props.step} - {count}</button>
        )
}

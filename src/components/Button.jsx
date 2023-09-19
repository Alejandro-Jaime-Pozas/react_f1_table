import React, { useState } from 'react'

export default function Button(props) {

    // The useState function takes one argument, which is the initial value of the state variable. It returns an array with two elements: the current state value and a function to update it
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

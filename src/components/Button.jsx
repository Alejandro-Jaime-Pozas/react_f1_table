import React, { useEffect, useState } from 'react'

export default function Button(props) {

    // The useState function takes one argument, which is the initial value of the state variable. It returns an array with two elements: the current state value and a function to update it
    const [count, setCount] = useState(0)

    // create an effect -> fn to execute after every render
    useEffect(() => {
        console.log("useEffect effect callback executed")
        fetch('https://ergast.com/api/f1/2022/1/driverStandings.json')
            .then(res => res.json())
            .then(data => console.log(data))
    })

    function handleClick(e){ // the 'e' refers to the event/Sythetic event, so in this case 'onClick'
        setCount(count + props.step )
        console.log('button clicked')
    }

    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} w-100`} onClick={handleClick}>{props.step} - {count}</button>
        )
}

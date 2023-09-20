import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

export default function App(props) {

    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    const [count, setCount] = useState(0)
    const [racers, setRacers] = useState([])

    // create an effect -> fn to execute after every render
    useEffect(() => {
        console.log("useEffect effect callback executed");
    })

    function handleRacerClick(step){
        console.log('Clicked');
        setCount(count + step)
    }

    function handleRacerSubmit(e) {
        e.preventDefault()
        const racer = e.target.firstName.value
        let newRacer = [...racers, racer]
        setRacers(newRacer)
    }

    return (
        <>
            <Navbar  a={1} name='Brian' city='Chicago' />
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total: {count}</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} />)}
                <form on onSubmit={handleRacerClick}>
                    <input type='text' className='form-control' name='season'></input>
                    <input type='submit' value='Submit' ></input>
                </form>
                {racers.map((r, i) => <p key={i}>{r}</p>)}
            </div>
        </>
    )
}
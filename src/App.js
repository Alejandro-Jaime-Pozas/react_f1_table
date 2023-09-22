import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Racers from './components/Racers'

export default function App() {

    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // The useState function takes one argument, which is the initial value of the state variable. It returns an array with two elements: the current state value and a function to update it    
    const [racers, setRacers] = useState([])

    // create an effect -> fn to execute after the State is changed. dependency array is a second parameter that you use to indicate when the useEffect should run. empty array means only render once. if you include arrays with states that are used, useEffect will run when those states are changed. 
    useEffect(() => {
        console.log("useEffect effect callback executed")
        fetch('https://ergast.com/api/f1/2023/1/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                console.log(racerStandings)
                setRacers(racerStandings)
            })
    }, [])

    function handleRacerSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <>
            <Navbar  a={1} name='Brian' city='Chicago' />
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} />)}
                <Racers handleRacerSubmit={handleRacerSubmit} racers={racers} ></Racers>
            </div>
        </>
    )
}
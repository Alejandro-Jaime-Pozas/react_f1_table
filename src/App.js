import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Racers from './components/Racers'
import RacersClass from './components/RacersClass'

export default function App() {

    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // // RACERS AS FUNCTION COMPONENT
    // // The useState function takes one argument, which is the initial value of the state variable. It returns an array with two elements: the current state value and a function to update it    
    // const [racers, setRacers] = useState([])

    // const [season, setSeason] = useState(1950)
    // const [round, setRound] = useState(0)

    // // create an effect -> fn to execute after the State is changed. dependency array is a second parameter that you use to indicate when the useEffect should run. empty array means only render once. if you include arrays with states that are used, useEffect will run when those states are changed. 
    // useEffect(() => {
    //     console.log("useEffect effect callback executed")
    //     fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    //             console.log(racerStandings)
    //             setRacers(racerStandings)
    //         })
    // }, [season, round])

    // function handleRacerSubmit(e) {
    //     e.preventDefault()
    //     console.log(e)
    //     let newSeason = e.target.season.value
    //     let newRound = e.target.round.value
    //     setSeason(newSeason)
    //     setRound(newRound)
    // }

    return (
        <>
            <Navbar  a={1} name='Brian' city='Chicago' />
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} />)}
                {/* <Racers/> */}
                <RacersClass test={123} />
                {/* RACERS AS FUNCTION COMPONENT */}
                {/* <Racers handleRacerSubmit={handleRacerSubmit} racers={racers} ></Racers> */}
            </div>
        </>
    )
}
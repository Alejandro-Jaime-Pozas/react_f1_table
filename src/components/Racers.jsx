import { useState, useEffect } from "react"
import React from 'react'

export default function Racers(props) {

    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor' ]

    
    // The useState function takes one argument, which is the initial value of the state variable. It returns an array with two elements: the current state value and a function to update it    
    const [racers, setRacers] = useState([])

    const [season, setSeason] = useState(1950)
    const [round, setRound] = useState(0)

    // create an effect -> fn to execute after the State is changed. dependency array is a second parameter that you use to indicate when the useEffect should run. empty array means only render once. if you include arrays with states that are used, useEffect will run when those states are changed. 
    useEffect(() => {
        console.log("useEffect effect callback executed")
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                console.log(racerStandings)
                setRacers(racerStandings)
            })
    }, [season, round])

    function handleRacerSubmit(e) {
        e.preventDefault()
        console.log(e)
        let newSeason = e.target.season.value
        let newRound = e.target.round.value
        setSeason(newSeason)
        setRound(newRound)
    }


    return (
        <div className='row py-5'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 my-2">
                        <input className='form-control' type="text" name="season" placeholder="Enter Season" />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <input className='form-control' type="text" name="round" placeholder="Enter Round" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value="Submit" className="btn btn-primary w-100 my-1" />
                    </div>
                </div>
            </form>
            <table className='table table-primary table-striped my-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i} >{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map((racer, i) => {
                        return (
                            <tr key={i}>
                                <th>{racer.position}</th>
                                <td>{racer.Driver.givenName}</td>
                                <td>{racer.Driver.familyName}</td>
                                <td>{racer.points}</td>
                                <td>{racer.wins}</td>
                                <td>{racer.Driver.nationality}</td>
                                <td>{racer.Constructors[0].name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

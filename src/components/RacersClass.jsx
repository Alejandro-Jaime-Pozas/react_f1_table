import React, { Component } from 'react'

export default class RacersClass extends Component {

    // 1. component is constructed first
    constructor(props){
        super(props)
        console.log('racer class constructed');
        // SET THE DIFFERENT STATES FOR EACH VARIABLE NEEDED
        this.state = {
            racers: [],
            season: 1950,
            round: 1
        }
    }

    // 3. component is mounted after first render of component
    componentDidMount() {
        console.log('component mounted')
        fetch(`https://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            // console.log(racerStandings)
            this.setState({racers:racerStandings})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, this.props);
        console.log(prevState, this.state);
        if (prevState.round != this.state.round || prevState.season != this.state.season) {
            fetch(`https://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                // console.log(racerStandings)
                this.setState({racers:racerStandings})
        })
        }
    }

    handleRacerSubmit = e => {
        e.preventDefault()
        console.log(e)
        let newSeason = e.target.season.value
        let newRound = e.target.round.value
        this.setState({
            season: newSeason,
            round: newRound
        })
    }

    // CLASS COMPONENTS USE RENDER() TO RENDER HTML
    // 2. render method is executed after class construction
    // 4. render method is executed 2nd time after component is mounted
    render() {
        // console.log(this)
        console.log('render method executed')
        let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor' ]


        return (
            <div className='row py-5'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={this.handleRacerSubmit}>
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
            { this.state.racers.length ? (

                <table className='table table-primary table-striped my-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i} >{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.racers.map((racer, i) => {
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
                    ) : null }
        </div>
        )
    }
}
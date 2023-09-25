import React, { Component } from 'react'

export default class RacersClass extends Component {

    constructor(props){
        super(props)
        // SET THE DIFFERENT STATES FOR EACH VARIABLE NEEDED
        this.state = {
            racers: [],
            season: 1950,
            round: 1
        }
    }

    // CLASS COMPONENTS USE RENDER() TO RENDER HTML
    render() {
        console.log(this)
        console.log(this.props.test)
        console.log('render method executed')
        let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor' ]


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

import React from 'react'

export default function Racers(props) {

    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor' ]

    return (
        <div className='row py-5'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={props.handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 my-2">
                        <input className='form-control' type="text" name="season" placeholder="Enter Season" />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <input className='form-control' type="text" name="season" placeholder="Enter Round" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value="" className="btn btn-primary w-100 my-1" />
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
                    {props.racers.map((racer, i) => {
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

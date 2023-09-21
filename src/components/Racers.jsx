import React from 'react'

export default function Racers(props) {
    return (
        <div className='row py-5'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={props.handleRacerSubmit}>
                <input type='text' className='form-control' name='season'></input>
                <input type='submit' value='Submit' ></input>
            </form>
            {props.racers.map((r, i) => <p key={i}>{Number(r.points)}</p>)}
        </div>
    )
}

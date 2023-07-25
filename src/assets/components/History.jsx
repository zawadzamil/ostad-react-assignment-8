import React, { Fragment } from 'react';

export default function History({ history }) {

    return (
        <Fragment>
            <div className="history">
                <h5>History</h5>
                {history.map((entry, index) => {

                    return <p className='text-dark' key={index} > {entry}</p>
                })}
            </div>


        </Fragment >
    )
}

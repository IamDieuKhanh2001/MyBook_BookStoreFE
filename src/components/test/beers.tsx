'use client'
import React from 'react'
import { Beer } from '../../../types/test/beers';

interface BeersProps {
    beers: Beer[] | null;
}
const Beers = (props: BeersProps) => {
    const { beers } = props
    return (
        <>
            {beers ? (
                beers.map((beer) => (
                    <div className='col-3' key={beer.id}>
                        <div className="card" style={{ width: '12rem' }}>
                            <img src={beer.image_url} width={100} height={200} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{beer.id}-{beer.name}</h5>
                                <p className="card-text">
                                    {beer.tagline}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-xl font-bold">No beers available !! </div>
            )}
        </>
    )
}

export default Beers

import React from 'react'
import Doctores from '../../images/doctores.svg';

export const Test = () => {
    return (
        <div className='my-4'>
            <div className='container'>
                <div className='row banner--container'>
                    <div className='col-xs-12 col-md-4 banner--img'>
                        <img
                            src={Doctores} alt='Doctores__image'
                            width='450px' />
                    </div>
                </div>
            </div>
        </div >
    )
};


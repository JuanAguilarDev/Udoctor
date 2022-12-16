import React from 'react'

import './About.css';

import Prof from '../../images/prof.svg';

export const About = () => {
    return (
        <div className='my-4'>
            <div className='container'>
                <div className='row banner--container'>
                    <h2 className='col-xs-12 col-md-5 banner--img'>
                        <span>¿Qué es UDoctor?</span>
                        <img width='500px' src={Prof} alt='Prof'></img>
                    </h2>
                    <img />
                    <div className='col-xs-12 col-md-5 banner--text'>
                        <p className='banner__text'>
                            UDoctor ofrece ayuda a las personas ofreciendo un pre-diagnóstico
                            médico, los usuarios podrán reconocer sus síntomas, determinar 
                            el origen del problema que presenta y conocer el especialista al 
                            que pueden asistir
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

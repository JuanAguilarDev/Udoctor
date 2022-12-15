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
                    <div className='col-xs-12 col-md-5 banner--text'>
                        <p className='banner__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida blandit sapien
                            et porta. Nam sollicitudin turpis facilisis accumsan faucibus. Maecenas non hendrerit magna,
                            eu consequat magna. Pellentesque dignissim malesuada nisi, ac congue lectus mollis sed.
                            Nullam a sem ante. Quisque sit amet dui ac leo viverra tincidunt in eu lacus.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

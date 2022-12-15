import React from 'react'
import { Link } from 'react-router-dom';

import DoctorImg from '../../images/doctor.svg';
import Doctores from '../../images/doctores.svg';
import './Banner.css';

export const Banner = () => {
    return (
        <div className='my-4'>
            <div className='container'>
                <div className='row banner--container'>
                    <div className='col-xs-10 col-md-6 banner--text'>
                        <p className='banner__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida blandit sapien
                            et porta. Nam sollicitudin turpis facilisis accumsan faucibus. Maecenas non hendrerit magna,
                            eu consequat magna. Pellentesque dignissim malesuada nisi, ac congue lectus mollis sed.
                            Nullam a sem ante. Quisque sit amet dui ac leo viverra tincidunt in eu lacus.
                        </p>
                    </div>
                    <div className='col-xs-12 col-md-4 banner--img'>
                        <img
                            src={DoctorImg} alt='Doctor__image'
                            width='400px' />
                    </div>
                </div>
                <div className='row my-4 banner--container'>
                    <div className='col-xs-12 col-md-4 banner--img'>
                        <img
                            src={Doctores} alt='Doctores__image'
                            width='300px' />
                    </div>
                    <div className='col-xs-10 col-md-6 banner--text'>
                        <p className='banner__text my-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida blandit sapien
                            et porta.
                        </p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <Link type="button" class="btn btn-primary" to={'/test'}>Iniciar test</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

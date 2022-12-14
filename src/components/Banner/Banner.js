import React from 'react'
import DoctorImg from '../../images/doctor.svg';
import './Banner.css';

export const Banner = () => { 
  return (
    <div className='my-4'>
        <div className='container'>
            <div className='row banner--container'>
                <div className='col-5 banner--img'>
                    <img 
                        src={ DoctorImg } alt='Doctor__image'
                        width='500px'/>
                </div>
                <div className='col-5 banner--text'>
                    <p className='banner__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida blandit sapien
                         et porta. Nam sollicitudin turpis facilisis accumsan faucibus. Maecenas non hendrerit magna, 
                         eu consequat magna. Pellentesque dignissim malesuada nisi, ac congue lectus mollis sed. 
                         Nullam a sem ante. Quisque sit amet dui ac leo viverra tincidunt in eu lacus. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

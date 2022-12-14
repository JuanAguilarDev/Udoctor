import React from 'react'
import DoctorImg from '../../images/doctor.svg';
import './Banner.css';
import Button from 'react-bootstrap/Button';

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
        <div>
            <div className='row'>
                <div className='col-5'>
                    <Button variant="outline-primary">Piel enrojecida</Button>{' '}
                    <Button variant="outline-secondary">Estornudos</Button>{' '}
                    <Button variant="outline-success">Dolor al orinar</Button>{' '}
                    <Button variant="outline-warning">Dolor de cabeza</Button>{' '}
                </div>
            <div className='row'>
                <div className='col-5'>
                    <Button variant="outline-primary">Dolor palpitante cabeza</Button>{' '}
                    <Button variant="outline-secondary">Orinar con frecuencia</Button>{' '}
                    <Button variant="outline-success">Comezón en la piel</Button>{' '}
                    <Button variant="outline-warning">Moqueo</Button>{' '}
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <Button variant="outline-primary">Tos frecuente</Button>{' '}
                    <Button variant="outline-secondary">Piel sensible</Button>{' '}
                    <Button variant="outline-success">Sangre en orina</Button>{' '}
                    <Button variant="outline-warning">Sensibilidad a luz</Button>{' '}
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <Button variant="outline-primary">Nauseas </Button>{' '}
                    <Button variant="outline-secondary">Presión en el abdomen</Button>{' '}
                    <Button variant="outline-success">Piel inflamada</Button>{' '}
                    <Button variant="outline-warning">Lagrimeo</Button>{' '}
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
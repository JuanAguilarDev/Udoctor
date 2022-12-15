import React from 'react'
import DoctorImg from '../../images/doctor.svg';
import './Banner.css';
import Form from 'react-bootstrap/Form';

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
        <div className='col-5'>
            <Form>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Piel enrojecida" name="1" type={type} id={`inline-${type}-1`}/>
                <Form.Check inline label="Estornudos" name="2" type={type} id={`inline-${type}-2`}/>
                <Form.Check inline label="Dolor al orinar" name="3" type={type} id={`inline-${type}-3`}/>
                <Form.Check inline label="Dolor de cabeza" name="4" type={type} id={`inline-${type}-4`}/>
                </div>
            ))}
            </Form>
        </div>
        <div className='col-5'>
            <Form>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Dolor palpitante cabeza" name="1" type={type} id={`inline-${type}-1`}/>
                <Form.Check inline label="Orinar con frecuencia" name="2" type={type} id={`inline-${type}-2`}/>
                <Form.Check inline label="Comezón en la piel" name="3" type={type} id={`inline-${type}-3`}/>
                <Form.Check inline label="Moqueo" name="4" type={type} id={`inline-${type}-4`}/>
                </div>
            ))}
            </Form>
        </div>
        <div className='col-5'>
            <Form>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Tos frecuente" name="1" type={type} id={`inline-${type}-1`}/>
                <Form.Check inline label="Piel sensible" name="2" type={type} id={`inline-${type}-2`}/>
                <Form.Check inline label="Sangre en orina" name="3" type={type} id={`inline-${type}-3`}/>
                <Form.Check inline label="Sensibilidad a luz" name="4" type={type} id={`inline-${type}-4`}/>
                </div>
            ))}
            </Form>
        </div>
        <div className='col-5'>
            <Form>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Nauseas" name="1" type={type} id={`inline-${type}-1`}/>
                <Form.Check inline label="Presión en el abdomen" name="2" type={type} id={`inline-${type}-2`}/>
                <Form.Check inline label="Piel inflamada" name="3" type={type} id={`inline-${type}-3`}/>
                <Form.Check inline label="Lagrimeo" name="4" type={type} id={`inline-${type}-4`}/>
                </div>
            ))}
            </Form>
        </div>
    </div>
  );
}

import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Doctores from '../../images/doctores.svg';
import { Form } from 'react-bootstrap'

import './About.css';
export const Test = () => {

    return (
        <div className='my-4'>
            <div className='container'>
                <div className='row banner--container'>
                    <div className='col-5 check'>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`}>
                                    <Form.Check inline label="Piel enrojecida" name="1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Estornudos" name="2" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Dolor al orinar" name="3" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline label="Dolor de cabeza" name="4" type={type} id={`inline-${type}-4`} />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div className='col-5 check'>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Dolor palpitante cabeza" name="1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Orinar con frecuencia" name="2" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Comezón en la piel" name="3" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline label="Moqueo" name="4" type={type} id={`inline-${type}-4`} />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div className='row banner--container cont'>


                    <div className='col-5 check'>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} >
                                    <Form.Check inline label="Tos frecuente" name="1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Piel sensible" name="2" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Sangre en orina" name="3" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline label="Sensibilidad a luz" name="4" type={type} id={`inline-${type}-4`} />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div className='col-5 check'>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`}>
                                    <Form.Check inline label="Nauseas" name="1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Presión en el abdomen" name="2" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Piel inflamada" name="3" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline label="Lagrimeo" name="4" type={type} id={`inline-${type}-4`} />
                                </div>
                            ))}
                        </Form>
                    </div>
                </div>
                    </div>
                <div className='row'>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="button" class="btn btn-primary" to={'/test'}>Iniciar test</button>
                        </div>
                </div>
            </div>
        </div>
    )
};


import React, { useState, useRef } from 'react';

import { useForm } from '../../hooks';

// Styles
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

import './Sign.css';

// Media
import signImage from '../../images/sign.svg';

export const Sign = () => {

    const [loginRegisterActive, setLoginRegisterActive] = useState('login');
    const [isChecked, setIsChecked] = useState(true);

    const loginInitialState = {
        email: '',
        password: ''
    }

    const registerInitialState = {
        username: '',
        email: '',
        password: '',
        passwordRepeat: ''
    }

    const { formState, onInputChange, reset, password, email, username, passwordRepeat  } = useForm(loginRegisterActive === 'login' ? loginInitialState : registerInitialState);

    const onIsChecked = ({target: {checked}}) => {
        setIsChecked(checked);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        console.log(isChecked);
        reset();
    }

    const handleLoginRegisterClick = (view) => {
        setLoginRegisterActive(view);
    }

    return (
        <div>
            <div className='row sign--container'>
                <div className='col-6 img--container'>
                    <img width="500px" src={signImage}></img>
                </div>
                <div className='col-6 form--container'>
                    <div>
                        <MDBTabs pills justify className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleLoginRegisterClick('login')}
                                    active={loginRegisterActive === 'login'}
                                >
                                    Login
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleLoginRegisterClick('register')}
                                    active={loginRegisterActive === 'register'}
                                >
                                    Register
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={loginRegisterActive === 'login'}>
                                <form onSubmit={ onSubmit }>
                                    <div className='text-center mb-3'>
                                        <p>Sign up with:</p>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='facebook-f' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='google' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='twitter' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='github' />
                                        </MDBBtn>
                                    </div>

                                    <p className='text-center'>or:</p>

                                    <MDBInput 
                                        className='mb-4' 
                                        type='email' 
                                        name='email' 
                                        label='Email address'
                                        onChange={onInputChange}
                                        value={ email }
                                        required />
                                    
                                    <MDBInput 
                                        className='mb-4' 
                                        type='password' 
                                        name='password' 
                                        label='Password'
                                        onChange={onInputChange}
                                        value={ password }
                                        required />
                                    

                                    <MDBRow className='mb-4'>
                                        <MDBCol className='d-flex justify-content-center'>
                                            <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
                                        </MDBCol>
                                        <MDBCol>
                                            <a href='#!'>Forgot password?</a>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBBtn type='submit' className='mb-4 form-control' block>
                                        Sign in
                                    </MDBBtn>

                                    <div className='text-center'>
                                        <p>
                                            Not a member? <a 
                                                onClick={() => handleLoginRegisterClick('register')}
                                                active={loginRegisterActive === 'register'} 
                                                href='#'>Register</a>
                                        </p>
                                    </div>
                                </form>
                            </MDBTabsPane>
                            <MDBTabsPane show={loginRegisterActive === 'register'}>
                                <form onSubmit={ onSubmit }>
                                    <div className='text-center mb-3'>
                                        <p>Sign up with:</p>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='facebook-f' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='google' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='twitter' />
                                        </MDBBtn>

                                        <MDBBtn floating color="secondary" className='mx-1'>
                                            <MDBIcon fab icon='github' />
                                        </MDBBtn>
                                    </div>

                                    <p className='text-center'>or:</p>

                                    <MDBInput 
                                        className='mb-4' 
                                        name='username' 
                                        label='Username'
                                        onChange={onInputChange}
                                        value={username} 
                                        required/>

                                    <MDBInput 
                                        className='mb-4' 
                                        type='email' 
                                        name='email' 
                                        label='Email address' 
                                        onChange={onInputChange}
                                        value={email}
                                        required/>

                                    <MDBInput 
                                        className='mb-4' 
                                        type='password' 
                                        name='password' 
                                        label='Password'
                                        onChange={onInputChange}
                                        value={password}
                                        required />

                                    <MDBInput 
                                        className='mb-4' 
                                        type='password' 
                                        name='passwordRepeat' 
                                        label='Repeat password'
                                        onChange={onInputChange}
                                        value={passwordRepeat}
                                        required />

                                    <MDBCheckbox
                                        wrapperClass='d-flex justify-content-center mb-4'
                                        name='check'
                                        label='Acepto todos los terminos y condiciones'
                                        defaultChecked
                                        onChange={onIsChecked}
                                    />

                                    <MDBBtn type='submit' className='mb-4' block>
                                        Sign in
                                    </MDBBtn>
                                </form>
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </div>
                </div>
            </div>
        </div>
    );
}
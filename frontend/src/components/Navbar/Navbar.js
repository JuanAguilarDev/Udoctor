import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

// Styles
import './Navbar.css';
import { useSign } from '../../hooks/useSign';

export const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const { logOut } = useSign();
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand tag={Link} to={'/'}>UDoctor</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' tag={Link} to={'/home'}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to={'/about'}>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to={'/test'}>Test</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    {/* BTNLOGOUT */}
                    <div className="d-flex">
                        <MDBBtn className='btn btn-danger logout--btn' onClick={logOut}>
                            <MDBIcon fas icon="sign-out-alt" /> <span>LogOut</span>
                        </MDBBtn>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

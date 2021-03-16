import React from 'react';
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <Container className='' fluid style={{backgroundColor:'rgba(59,49,54,0.45)', color:'white'}}>
    <p className='text-center pt-4'>My Footer Bootstrap</p>
<Container className='d-flex justify-content-center'>
    <div className='mb-4 '>
        <Link className='text-decoration-none' to="/">Home</Link>
        <Link className='mx-5 text-decoration-none' to="/users">User</Link>
        <Link className='text-decoration-none' to="/about">About</Link>
    </div>
</Container>
        </Container>
    );
}

export default Footer;
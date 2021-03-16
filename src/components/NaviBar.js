import React, {useState} from 'react';
import {
    Navbar, Nav, NavDropdown, Form, FormControl,
    Modal, Button, Container
} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const CustomDiv = styled.div`
a, .navbar-brand, .navbar-nav .nav-link{
color:#34ce57;
&:hover{
color:white}}
a{
    text-decoration: none;

}
`

function NaviBar(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <div>
            <CustomDiv>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand>React BS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/users">User</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                            </Nav>
                            <div className='d-flex'>
                                <Button className="mr-2" variant='primary'  onClick={handleShow}>Log In</Button>
                                <Button className="" variant='primary' onClick={handleShow}>Sign out</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </CustomDiv>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal Panel Log in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder='Enter email' required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Password min 5 symbols' required pattern="^.{5,}$"/>
                        </Form.Group>

                        <Form.Group controlId='formBasicCheckbox'>
<Form.Check type='checkbox' label='Check me out'/>
                        </Form.Group>

                    <Button variant='secondary' type='submit'>
                        Submit
                    </Button>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NaviBar;
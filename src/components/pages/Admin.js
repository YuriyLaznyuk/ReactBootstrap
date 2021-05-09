import React from 'react';
import {Container, Button} from "react-bootstrap";
import Slider from "./componentPage/Slider";

function Admin(props) {
    return (
        <div>
            <h1 className='text-center'>
                Admin panel control
                <Slider/>
                <Container className='justify-content-between d-flex'>
                    <Button className='d-block' variant='danger'>Shoot</Button>
                    <Button className='d-block' variant='warning'>Alarm</Button>
                    <Button className='d-block' variant='info'>Info</Button>
                    <Button className='d-block' variant='success'>Show</Button>
                </Container>
            </h1>

        </div>
    );
}

export default Admin;
import React from 'react';
import {Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from 'styled-components'
import photo1 from '../components/pages/photo/pex1.jpg'

const CustomStyleJum=styled.div`
.jumbo{
color: #4fdb7c;
    background:url(${photo1});
    height: 400px;
    position: relative;
    z-index: -2;
}

.overlay{
background-color: red;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

}
`
export const Jumbotron = () => {
    return (

        <CustomStyleJum>
        <Jumbo className='mt-4 jumbo' >
<div className="overlay"></div>
    <Container>
     <h1>My Jumbo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur corporis cumque ducimus expedita fugiat libero
            numquam quaerat quisquam saepe sed? Lorem ipsum dolor sit amet,
            consectetur adipisicing
            elit. Esse expedita harum illo incidunt ipsa maiores perspiciatis
            rem suscipit, ut veritatis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur corporis cumque ducimus expedita fugiat libero
            numquam quaerat quisquam saepe sed? Lorem ipsum dolor sit amet,
            consectetur adipisicing
            elit. Esse expedita harum illo incidunt ipsa maiores perspiciatis
            rem suscipit, ut veritatis?</p>
    </Container>

            
        </Jumbo>
        </CustomStyleJum>
    );
};


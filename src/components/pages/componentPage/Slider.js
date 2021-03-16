import React from 'react';
import {Carousel} from "react-bootstrap";
import pex1 from "../photo/pex1.jpg"
import pex2 from "../photo/pex2.jpg"
import pex3 from "../photo/pex3.jpg"

function Slider(props) {
    return (

            <Carousel style={{width:400, margin:"20px auto"}}>
                <Carousel.Item >
                    <img className="d-block" src={pex1} alt="pex1"/>
                    <Carousel.Caption>
                        <h4>First photo</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={pex2} alt="pex2"/>
                    <Carousel.Caption>
                        <h4>Second photo</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="d-block" src={pex3} alt="pex3"/>
                    <Carousel.Caption>
                        <h4>Third photo</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

    );
}

export default Slider;
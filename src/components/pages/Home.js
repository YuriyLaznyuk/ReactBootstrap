import React from 'react';
import Slider from "./componentPage/Slider";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import pex1 from "../pages/photo/pex1.jpg"
import pex2 from "../pages/photo/pex2.jpg"
import pex3 from "../pages/photo/pex3.jpg"
import {Jumbotron} from "../Jumbotron";

function Home(props) {
    return (
        <div>
            <h1 className='text-center'>Home</h1>
            <Slider/>
            <Container className='mt-4'>
                <Row className="text-center justify-content-between">
                    <Col>
                        <Card>
                            <Card.Img variant='top' src={pex1}/>
                            <Card.Body>
                                <Card.Title>
                                    My Card
                                </Card.Title>
                                <Card.Text>Lorem ipsum
                                    dolor sit amet, consectetur
                                    adipisicing elit. Deserunt, illum?
                                </Card.Text>
                                <Button variant='primary'>learn more</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src={pex2}/>
                            <Card.Body>
                                <Card.Title>
                                    My Card
                                </Card.Title>
                                <Card.Text>Lorem ipsum
                                    dolor sit amet, consectetur
                                    adipisicing elit. Deserunt, illum?
                                </Card.Text>
                                <Button variant='primary'>learn more</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src={pex3}/>
                            <Card.Body>
                                <Card.Title>
                                    My Card
                                </Card.Title>
                                <Card.Text>Lorem ipsum
                                    dolor sit amet, consectetur
                                    adipisicing elit. Deserunt, illum?
                                </Card.Text>
                                <Button variant='primary'>learn more</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron/>
            <Container>
                <Row>
                    <Col md={7}>
                        <img src={pex3} height={300} alt="pex3"/>
                    </Col>
                    <Col md={5}>
                        <h2>My Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A dolorum et iusto minus natus, quasi quisquam veniam veritatis.
                            Atque,ommodi esse facere maxime nesciunt nisi
                            praesentium quas quasi reiciendis soluta?</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Home;
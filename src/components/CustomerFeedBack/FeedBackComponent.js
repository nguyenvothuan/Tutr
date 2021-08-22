import React from 'react'
import ath1 from '../../images/author/3b.jpg';
import ath2 from '../../images/author/5b.jpg';
import { Col, Row, Carousel, CarouselItem, } from 'react-bootstrap'
import Icofont from 'react-icofont';
export const Heading = () => {
    return (
        <Row className="justify-content-center">
            <Col lg={8} className="text-center">
                <div class="mb-5">
                    <h3 class="mb-2">Trusted by hundred over years</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dignissimos?</p>
                </div>
            </Col>
        </Row>
    )
}
export const Testimonial = () => {

    return (
        <Row>
            <Col lg={8} sm={12} md={12} className="m-auto">
                <Carousel variant="dark">
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={12} sm={12}>
                                <div class="testimonial-content style-2">
                                    <div class="author-info ">
                                        <div class="author-img">
                                            <img src={ath1} alt="" class="img-fluid" />
                                        </div>
                                    </div>

                                    <p><Icofont icon="icofont-quote-left" class="icofont icofont-quote-left"></Icofont>They is a great platform to anyone like who want to start buisiness but not get right decision. It’s really great placefor new to start the buisness in righ way! <i class="icofont icofont-quote-right"></i></p>
                                    <div class="author-text">
                                        <h5>Marine Joshi</h5>
                                        <p>Senior designer</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={12} sm={12}>
                                <div class="testimonial-content style-2">
                                    <div class="author-info ">
                                        <div class="author-img">
                                            <img src={ath2} alt="" class="img-fluid" />
                                        </div>
                                    </div>

                                    <p><Icofont icon="icofont-quote-left" class="icofont icofont-quote-left"></Icofont>They is a great platform to anyone like who want to start buisiness but not get right decision. It’s really great placefor new to start the buisness in righ way! <i class="icofont icofont-quote-right"></i></p>
                                    <div class="author-text">
                                        <h5>Marine Joshi</h5>
                                        <p>Senior designer</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={12} sm={12}>
                                <div class="testimonial-content style-2">
                                    <div class="author-info ">
                                        <div class="author-img">
                                            <img src={ath1} alt="" class="img-fluid" />
                                        </div>
                                    </div>

                                    <p><Icofont icon="icofont-quote-left"></Icofont>They is a great platform to anyone like who want to start buisiness but not get right decision. It’s really great placefor new to start the buisness in righ way! <i class="icofont icofont-quote-right"></i></p>
                                    <div class="author-text">
                                        <h5>Marine Joshi</h5>
                                        <p>Senior designer</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}

const TestimonialItem = () => {
    return (
        <Carousel.Item >
            <Row>
                <Col lg={12} sm={12}>
                    <div class="testimonial-content style-2">
                        <div class="author-info ">
                            <div class="author-img">
                                <img src={ath1} alt="" class="img-fluid" />
                            </div>
                        </div>

                        <p><Icofont icon="icofont-quote-left" class="icofont icofont-quote-left"></Icofont>They is a great platform to anyone like who want to start buisiness but not get right decision. It’s really great placefor new to start the buisness in righ way! <i class="icofont icofont-quote-right"></i></p>
                        <div class="author-text">
                            <h5>Marine Joshi</h5>
                            <p>Senior designer</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Carousel.Item>
    )
}


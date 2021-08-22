import React from 'react';
import man from '../../images/banner/why-choose.png';
import { Row, Container, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';


export const AboutReactStrap = () => {
    return (
        <section id="intro" className="section-padding">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="section-heading">
                            <p className="lead">We are creative digital marketing agency with expertise to grow any business that need proper guidance and a committed service.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} sm={12} className="d-none d-lg-block">
                        <div className="intro-img">
                            <img src={man} alt="intro-img" class="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12}>
                        <Row>
                            <Col lg={6} sm={6} md={6}>
                                <div className="intro-box">
                                    <span>01.</span>
                                    <h4>Management</h4>
                                    <p>we founded September with the goal of creating meaningful digital experiences that connect with people.</p>
                                </div>
                            </Col>
                            <Col lg={6} sm={6} md={6}>
                                <div className="intro-box">
                                    <span>02.</span>
                                    <h4>Strategy</h4>
                                    <p>We’re full service which means we’ve got you covered on design & content right through to digital. </p>
                                </div>
                            </Col>
                            <Col lg={6} sm={6} md={6}>
                                <div className="intro-box">
                                    <span>03.</span>
                                    <h4>Experience</h4>
                                    <p>You’ll form a lasting relationship with us, collaboration is central to we do.Digital experiences connect people.</p>
                                </div>
                            </Col>
                            <Col lg={6} sm={6} md={6}>
                                <div className="intro-box">
                                    <span>04.</span>
                                    <h4>Build</h4>
                                    <p>Technology and design are the core of success for real estate related businesses. Leverage our years.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="intro-cta">
                                    <p className="lead ">Still have any question on mind ? <a href="#contact" class="smoth-scroll">Contact us</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const AboutUsReactStrap = () => {
    return (
        <section id="about" class="bg-light">
            <div class="about-bg-img d-none d-lg-block d-md-block"></div>
            <Container>
                <Row>
                    <Col lg={7} sm={12} md={8} >
                        <div class="about-content">
                            <h5 class="subtitle">About us</h5>
                            <h3>We are making beautiful <br />design layout for your business</h3>
                            <p>We craft beautiful website layout from scratch.You need not to worry about site design and other technial issue.We provide these attractive service as a bonus.Let's have atalk together for your next project.</p>

                            <ul class="about-list">
                                <li>
                                <Icofont icon="icofont-check-circled"/> Responsive site</li>
                                <li>
                                <Icofont icon="icofont-check-circled"/> Latest bootstrap 4
                                </li>

                                <li>
                                <Icofont icon="icofont-check-circled"/> Modern and clean design
                                </li>
                                <li>
                                <Icofont icon="icofont-check-circled"/> Working contact form
                                </li>
                                <li>
                                <Icofont icon="icofont-check-circled"/> Premium services and support
                                </li>
                                <li>
                                <Icofont icon="icofont-check-circled"/> Cross browser compatiabilty
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const AboutCustom = () => {
    return (
        <section id="intro" class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-md-12">
                        <div class="section-heading">
                            <p class="lead">We are creative digital marketing agency with expertise to grow any business that need proper guidance and a committed service.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5  d-none d-lg-block col-sm-12">
                        <div class="intro-img">
                            <img src={man} alt="intro-img" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12 ">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <div class="intro-box">
                                    <span>01.</span>
                                    <h4>Management</h4>
                                    <p>we founded September with the goal of creating meaningful digital experiences that connect with people.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <div class="intro-box">
                                    <span>02.</span>
                                    <h4>Strategy</h4>
                                    <p>We’re full service which means we’ve got you covered on design & content right through to digital. </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <div class="intro-box">
                                    <span>03.</span>
                                    <h4>Experience</h4>
                                    <p>You’ll form a lasting relationship with us, collaboration is central to we do.Digital experiences connect people.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <div class="intro-box">
                                    <span>04.</span>
                                    <h4>Build</h4>
                                    <p>Technology and design are the core of success for real estate related businesses. Leverage our years.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="intro-cta">
                                    <p class="lead ">Still have any question on mind ? <a href="#contact" class="smoth-scroll">Contact us</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
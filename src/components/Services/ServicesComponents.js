import React from 'react';
import b1 from '../../images/icon/007-digital-marketing-3.png';
import b2 from "../../images/icon/008-digital-marketing-2.png";
import b4 from '../../images/icon/010-digital-marketing.png';
import b3 from '../../images/icon/003-task.png';
import b5 from '../../images/icon/006-analytics.png';
import b6 from '../../images/icon/004-hiring.png';
import { Container, Row, Col } from 'react-bootstrap';
export const ServicePartner = () => {
    return (
        <section id="service-head" class=" bg-feature">
            <Container>
                <Row>
                    <Col lg={12} sm={12} className="m-auto">
                        <div class="section-heading text-white">
                            <h4 class="section-title">Full stack digital marketing solution</h4>
                            <p>We’re full service which means we’ve got you covered on design & content right through to digital. You’ll form a lasting relationship with us.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export const ServiceBoxes = () => {
    return (
        <section id="service">
            <Container>
                <Row>
                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box">
                            <div class="service-img-icon">
                                <img src={b1} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>Video Marketing</h4>
                                <p>Reach a huge area of users and get a publicty of your product and service ,<span>video marketing</span> solution.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box ">
                            <div class="service-img-icon">
                                <img src={b2} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>Email Marketing</h4>
                                <p>Email Marketing is a great solution to reach a <span>high range of customers</span> eagrerly waiting to get a service.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box">
                            <div class="service-img-icon">
                                <img src={b3} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>SEO optimization</h4>
                                <p>we provide wide range of<span> seo service</span> to make your site at top to reach your target customers provided.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box">
                            <div class="service-img-icon">
                                <img src={b4} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>Custom Website</h4>
                                <p>We  provide <span>custom website</span> for any small and large company web based service in large compact package.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box">
                            <div class="service-img-icon">
                                <img src={b5} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>Content Growth</h4>
                                <p>Content is king,Having a blog site and want to <span>build content</span> make a platform of earning too we assist you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} md={6}>
                        <div class="service-box">
                            <div class="service-img-icon">
                                <img src={b6} alt="service-icon" class="img-fluid" />
                            </div>
                            <div class="service-inner">
                                <h4>Link Building </h4>
                                <p>Want to grow your <span>potential visitor</span> your site to make it more effective and succesful business .</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

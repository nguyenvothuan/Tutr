import React from 'react'
import { Col, Container,Row} from 'react-bootstrap'
import CountUp from 'react-countup';
import Icofont from 'react-icofont';
import VisibilitySensor from "react-visibility-sensor";

export const EachStat = ({ label, number }) => {
    return (
        <Col class="col-lg-3 col-sm-6 col-md-6">
            <div class="counter-stat">
                <Icofont class="icofont icofont-heart"></Icofont>
                <span class="counter">{number}</span>
                <h5>{label}</h5>
            </div>
        </Col>
    )
}


export const Statistics = () => {
    


    return (
        <section id="counter" class="section-padding">
            <div class="overlay dark-overlay"></div>
            <Container>
                <Row>
                    <Col lg={3} sm={6} md={6}>
                        <div className="counter-stat">
                            <Icofont icon="heart"></Icofont>
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible })=> isVisible? <CountUp className="counter" duration={1} start={0} end={460}/>: <div className="counter">460</div>}
                            </VisibilitySensor>
                            <h5>Our Happy Clients</h5>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} md={6}>
                        <div className="counter-stat">
                            <Icofont icon="rocket"></Icofont>
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible })=> isVisible? <CountUp className="counter" duration={1} start={0} end={60}/>: <div className="counter">60</div>}
                            </VisibilitySensor>
                            <h5>Projects Done</h5>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} md={6}>
                        <div className="counter-stat">
                            <Icofont icon="hand-power"></Icofont>
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible })=> isVisible? <CountUp className="counter" duration={1} start={0} end={30}/>: <div className="counter">30</div>}
                            </VisibilitySensor>
                            <h5>Experienced stuff</h5>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} md={6}>
                        <div className="counter-stat">
                            <Icofont icon="shield-alt"></Icofont>
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible })=> isVisible? <CountUp className="counter" duration={1} start={0} end={20}/>: <div className="counter">20</div>}
                            </VisibilitySensor>
                            <h5>Ongoing project</h5>
                        </div>
                    </Col>
                    
                </Row>
            </Container>

        </section>
    )
}
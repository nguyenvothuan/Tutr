import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
export const CopyRight = () => {
    return (
        <Row>
            <Col lg={12}  className="text-center">
                <div class="footer-copy">
                    © 2021 DOIT Inc. All Rights Reserved.
                </div>
            </Col>
        </Row>
    )
}


export const AboutLocation = () =>{
    return (
        <Row>
            <Col lg={5} sm={8} md={8}>
                <div class="footer-widget footer-link">
                    <h4>We concern about you<br/> to grow business rapidly.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam hic non sunt recusandae atque unde saepe nihil earum voluptatibus aliquid optio suscipit nobis quia excepturi vel quod, iure quae.</p>
                </div>
            </Col>
            <Col lg={2} sm={4} md={4} >
                <div class="footer-widget footer-link">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </Col>

            <Col lg={2} sm={6} md={6} >
                <div class="footer-widget footer-link">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Report Bug</a></li>
                        <li><a href="#">License</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                    </ul>
                </div>
            </Col>
            <Col lg={3} sm={6} md={6} >
                <div class="footer-widget footer-text">
                    <h4>Our location</h4>
                    <p class="mail"><span>Mail:</span> external@doit.com</p>
                    <p><span>Phone :</span>+84 907501946</p>
                    <p><span>Location:</span> 118 Ba thang hai, District 10, HCMC</p>
                </div>
            </Col>
        </Row>
    )

}

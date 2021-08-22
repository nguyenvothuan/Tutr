import React from 'react'
import {Row,Col, Button} from 'react-bootstrap';
import Icofont from 'react-icofont';
export const Heading = () => {
    return (
        <Row>
            <Col lg={12} sm={12} class="m-auto">
                <div class="section-heading">
                    <h4 class="section-title">Affordable pricing plan for you</h4>
                    <p>We have different type of pricing table to choose with your need. Check which one is most suitble for you and your business purpose. </p>
                </div>
            </Col>
        </Row>
    )
}

export const Option = ({ price }) => {
    return (
        <Col lg={4} sm={6}>
            <div class="pricing-block ">
                <div class="price-header">
                    <Icofont icon='diamond' ></Icofont>
                    <h4 class="price"><small>$</small>{price}</h4>
                    <h5>Monthly pack</h5>
                </div>
                <div className="line"></div>
                <ul>
                    <li>5 GB Bandwidth</li>
                    <li>Highest Speed</li>
                    <li>1 GB Storage</li>
                    <li>Unlimited Website</li>
                    <li>Unlimited Users</li>
                    <li>Data Security and Backups</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li>
                </ul>
                <Button href="#" className='btn btn-hero btn-circled'>select plan</Button>
            </div>
        </Col>
    )
}
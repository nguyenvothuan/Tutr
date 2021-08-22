import React from 'react';
import {Col, Row} from 'react-bootstrap';
export const EachBlog = ({blogImg, link}) => {
    return (
        <Col lg={4} sm={6} md={4}>
            <div class="blog-block ">
                <img src={blogImg} alt="" class="img-fluid" />
                <div class="blog-text">
                    <h6 class="author-name"><span>Tips and tricks</span>john Doe</h6>
                    <a href={link} class="h5 my-2 d-inline-block">
                        Best tips to grow your content quality and standard.
                    </a>
                    <p>If you want to grow your content quality and standard you should foolow these tips properly voluptatibus.</p>
                </div>
            </div>
        </Col>
    )
}
export const Heading = () => {
    return (
        <Row>
            <Col lg={12} sm={12} className="m-auto">
                <div class="section-heading">
                    <h4 class="section-title">Latest Blog news</h4>
                    <div class="line"></div>
                    <p>Our blog journey may come handy to build a community to make more effective success for business. Latest and trend tricks will help a lot </p>
                </div>
            </Col>
        </Row>
    )
}
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Banner = () => {
    console.log('Banner called')
    return (
        <div class="banner-area banner-2">
            <div class="d-table">
                <div class="d-table-cell">
                    <Container>
                        <Row>
                            <Col lg={8} sm={12} md={12} className="m-auto text-center">
                                <div class="banner-content content-padding">
                                    <h5 class="subtitle">A creative agency</h5>
                                    <h1 class="banner-title">We craft seo and digital markting services</h1>
                                    <p>We provide marketing services to startups and small businesses to looking for a partner for their digital media, design-area.We are a a startup company to be commited to work and time management.</p>

                                    <a href="#" className="btn btn-white btn-circled">lets start</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Banner

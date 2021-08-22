import React from 'react'
import { Heading, Testimonial} from './FeedBackComponent'
import {Container} from 'react-bootstrap'
const CustomerFeedBack = () => {
    return (
        <section id="testimonial" class="section-padding ">
            <Container>
                <Heading />
                <Testimonial/>
            </Container>
        </section>
    )
}

export default CustomerFeedBack

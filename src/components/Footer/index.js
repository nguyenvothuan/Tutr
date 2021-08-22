import React from 'react'
import { AboutLocation, CopyRight } from './FooterComponents'
import {Container} from 'react-bootstrap';
const Footer = () => {
    return (
        <section id="footer" class="section-padding">
            <Container>
                <AboutLocation />
                <CopyRight />
            </Container>
        </section>
    )
}

export default Footer

import React from 'react'
import { Heading, Option } from './PricingComponents';
import {Container, Row} from 'react-bootstrap';
const Pricing = () => {
    return (
        <Container>
            <Heading />
            <Row>
                <Option price={46}/>
                <Option price={76}/>
                <Option price={96}/>
            </Row>
        </Container>
    )
}

export default Pricing

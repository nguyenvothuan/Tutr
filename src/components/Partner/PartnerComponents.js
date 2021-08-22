import React from 'react'
import {Col} from 'react-bootstrap';
export const EachPartner = ({partnerLogo}) => {
    return (
        <Col sm={6} md={3} className="text-center">
            <img src={partnerLogo} alt="partner" class="img-fluid" />
        </Col>
    )
}



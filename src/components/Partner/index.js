import React from 'react'
import p1 from "../../images/clients/client01.png";
import p2 from "../../images/clients/client06.png";
import p3 from "../../images/clients/client04.png";
import p4 from "../../images/clients/client05.png";
import {Container, Row} from 'react-bootstrap'
import { EachPartner } from './PartnerComponents';
const index = () => {
    return (
        <section class="section-padding ">
            <Container>
                <Row>
                    <EachPartner partnerLogo={p1} />
                    <EachPartner partnerLogo={p2} />
                    <EachPartner partnerLogo={p3} />
                    <EachPartner partnerLogo={p4} />
                </Row>
            </Container>
        </section>
    )
}
export default index

import React from 'react'
import { EachBlog, Heading } from './BlogComponents';
import { Container, Row } from 'react-bootstrap';
import b1 from "../../images/blog/blog-1.jpg"
import b2 from "../../images/blog/blog-2.jpg";
import b3 from "../../images/blog/blog-3.jpg";
const Blog = () => {
    return (
        <section id="blog" class="section-padding">
            <Container>
                <Heading />
                <Row>
                    <EachBlog blogImg={b1} link={"blog-single.html"} />
                    <EachBlog blogImg={b2} link={"blog-single.html"} />
                    <EachBlog blogImg={b3} link={"blog-single.html"} />
                </Row>
            </Container>
        </section>
    )
}

export default Blog

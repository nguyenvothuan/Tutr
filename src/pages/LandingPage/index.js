import React from 'react'
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Services from '../../components/Services';
import Pricing from '../../components/Pricing';
import CustomerFeedBack from '../../components/CustomerFeedBack';
import Partner from '../../components/Partner';
import Stat from '../../components/Statistic';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';
const LandingPage = () => {
    return (
    <>
        <NavBar />
        <Banner />
        <About />
        <Services/>
        <Pricing />
        <CustomerFeedBack />
        <Partner />
        <Stat/>
        <Blog/>
        <Footer/>
    </>
    )
}

export default LandingPage

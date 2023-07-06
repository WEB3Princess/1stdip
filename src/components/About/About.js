import React from "react";

import Header from '../Header/Header';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import AboutInfo from './About-Info';
import Footer from '../Footer/Footer';
import ModalSearch from '../Modal/ModalSearch';
import ModalMenu from '../Modal/ModalMenu';
import Scrollup from '../Scrollup/Scrollup';

const About = ()=>{

    return(
        <div className="main">
                <Header />
                <Breadcrumb title="About" subpage="About" page="About Us" />
                <AboutInfo/>
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
    )
}

export default About;
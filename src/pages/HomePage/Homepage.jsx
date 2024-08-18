import React from 'react';
import Footer from '../../components/GeneralComponents/Footer';
import Navbar from '../../components/GeneralComponents/Navbar';
import "../HomePage/Homepage.css";

const Homepage = () => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    <marquee>Coming Soon</marquee>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Homepage;

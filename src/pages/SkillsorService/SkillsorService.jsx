import React from 'react';
import Footer from '../../components/GeneralComponents/Footer';
import Navbar from '../../components/GeneralComponents/Navbar';
import "../SkillsorService/SkillsorService.css"

const SkillsorService = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className="skills">
                    <section classNameName="steps-section-container" id="steps-section-container">
                        <div className="new-arrivals-text">
                            <h2>Available Items</h2>
                        </div>

                        <div className="steps-section-container-content">
                            <div className="rows">
                                <img src="../" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Tailoring Services</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Red Hoodie.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Auto Repair</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Male Black Jean with Light Patches.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Electrical services</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Female Sky-Blue Jean.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Plumbing Services</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Female Blue Jean.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Catering Services</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Male Blue Shirt.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Building/Construction</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Blue Canvas with Green Stripes.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Arts</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Unisex Dark-Blue Jean.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Electrical/Electronics</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                            <div className="rows">
                                <img src="Images/Unisex Dark-Blue Jean.jpg" alt="" />
                                <div className="main-rows">
                                    <div className="rows-text">
                                        <h6>Other Categories</h6>
                                    </div>
                                </div>
                                <h3 className="view-button">View</h3>
                            </div>

                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SkillsorService;

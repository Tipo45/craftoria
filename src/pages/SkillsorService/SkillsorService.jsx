import React from 'react';
import Footer from '../../components/GeneralComponents/Footer';
import Navbar from '../../components/GeneralComponents/Navbar';
import "../SkillsorService/SkillsorService.css"

const SkillsorService = () => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    <input type="search" placeholder="Search..." />
                </div>
                <div className="skills">
                    <section classNameName="section-container" id="section-container">

                        <div className="section-container-content">

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk=" alt="Tailoring Services" />
                                
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks=" alt="Auto Repair" />
                               
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU=" alt="Electrical Services" />
                               
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88=" alt="Plumbing Services" />
                            
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY=" alt="Catering Services" />
                                
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8=" alt="Building/Construction" />
                                
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y=" alt="Arts" />
                                
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1587634776/photo/construction-team-tablet-and-inspection-planning-from-engineer-staff-at-job-site.jpg?s=612x612&w=is&k=20&c=WPTHYjqo8_PbjnpxbUn43pzx5ve7rsEBarCXVaGDsho=" alt="Electrical/Electronics" />
                               
                                
                            </div>

                            <div className="column">
                                <img src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk=" alt="Other Categories" />
                                
                                
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

import React from "react";

const Services = () =>{
    return(
       <section className="section skills" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <i className="uli uil services_icon"></i>
                <h3 className="services_title"> </h3>
            </div>

            <span className="service_button">View more <i className="uil uil-arrow-right"></i></span>

            <div className="service_modal">
                <div className="service_modal_content">
                    <i className="uil uil-times service_modal-close"></i>
                    <h3 className="service_modal-title"></h3>
                    
                    <p className="service_modal-description">Service with more than 3 years of experience. porving quality work with clients and company.</p>
                    
                    <ul className="services_modal-services grid">
                        
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services_modal-info">
                                I develop user interface.
                            </p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services_modal-info">
                                I make mobile apps.
                            </p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services_modal-info">
                                Web page development.
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Services;
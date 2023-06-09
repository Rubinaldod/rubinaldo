import React, {useState} from "react";
import './services.css';

const Services = () =>{
    const [toggleState, settoggleState] = useState(0);
    const toggleTab= (index) =>{
        settoggleState(index);
    }


    return(
       <section className="services section" id="services">
        <h2 className="section_title"> Services</h2>
        <span className="section_subtitle">- What I can do for you -</span>

        <div className="services_container container grid">


{/* ============= */}
            {/* <div className="services_content">
                <div>
                    <i className="uil uil-apps services_icon"> </i>
                    <h3 className="services_title">Mobile development</h3>
                </div>

                <span className="services_button" onClick={()=> toggleTab(1)}>View More 
                
                <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Mobile development</h3>
                        <p className="services_modal-description"> Service with more than 3 years of experience, providing quality services for my partners</p>

                        <ul className="services_modal-services-grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop mobile apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop web apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop personal portifolio like this one.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I redesign companies onlie presense.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div> */}


{/* ========================== */}

{/* <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"> </i>
                    <h3 className="services_title"> Web development</h3>
                </div>

                <span className="services_button" onClick={()=> toggleTab(2)}>View More 
                
                <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Web development</h3>
                        <p className="services_modal-description"> Service with more than 3 years of experience, providing quality services for my partners</p>

                        <ul className="services_modal-services-grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop mobile apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop web apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop personal portifolio like this one.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I redesign companies onlie presense.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div> */}

{/* ===================== */}
         
            <div className="services_content">
                <div>
                    <i className="uil uil-desktop services_icon"> </i>
                    <h3 className="services_title">Click to open Services </h3>
                </div>

                <span className="services_button" onClick={()=> toggleTab(3)}>View More 
                
                <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">E-Services</h3>
                        <p className="services_modal-description"> Service with more than 3 years of experience, providing quality services for my partners</p>

                        <ul className="services_modal-services-grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop mobile apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop web apps
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop personal portifolio like this one.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I redesign companies onlie presense.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
        
       </section>
    )
}

export default Services;
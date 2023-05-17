import React from "react";
import './qualifications.css';

const Qualifications = () =>{
    return(
        <section id="qualifications">
            <h2 className="section_title">Qualificatoin</h2>
            <span className="section_subtitle">- My personal journey -</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-graduation-cap quilification_icon"></i> {""}
                        Education
                    </div>

                    <div className="qualification_button button--flex">
                        <i className="uil uil-briefcase-alt quilification_icon"></i> {""}
                        Experience
                    </div>
                </div>

            <div className="qualification_sections">
                <div className="qualification_content qualification_content-active">
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Bachelor of Science Honors in Computer Science</h3>
                            <span className="qualification_subtitle">
                                Africa University, <br/> Zimbabwe
                            </span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>
                        </div>

                        <div>
                        <span className="qualification_rounder">
                        </span>
                        <span className="qualification_line"></span>
                        </div>

                    </div>
{/* ------------------ */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                        <span className="qualification_rounder">
                        </span>
                        <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">IT Manger</h3>
                            <span className="qualification_subtitle">
                                Platinaline, <br/> Angola
                            </span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2010 - Current
                            </div>
                        </div>

                       

                    </div>



                </div>
            </div>
            </div>
        </section>
    )
}

export default Qualifications